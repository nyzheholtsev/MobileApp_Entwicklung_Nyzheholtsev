import { useIsFocused } from "@react-navigation/native";
import { File, Paths } from "expo-file-system/next";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { globalStyles } from "../../styles/global";

const profileFile = new File(Paths.document, "user_profile.json");

async function loadProfileData() {
  if (!profileFile.exists) return null;
  const content = await profileFile.text();
  try {
    return JSON.parse(content);
  } catch {
    await profileFile.delete();
    return null;
  }
}

async function saveProfileData(name: string, lastname: string) {
  await profileFile.write(JSON.stringify({ name, lastname }));
}

async function deleteProfileData() {
  if (profileFile.exists) {
    await profileFile.delete();
  }
}

const AnimatedFields = () => {
  const isFocused = useIsFocused();
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");

  const inputOpacity_1 = useSharedValue(0);
  const inputTranslateY_1 = useSharedValue(20);
  const inputOpacity_2 = useSharedValue(0);
  const inputTranslateY_2 = useSharedValue(20);

  const animatedFieldsStyle_1 = useAnimatedStyle(() => ({
    opacity: inputOpacity_1.value,
    transform: [{ translateY: inputTranslateY_1.value }],
  }));

  const animatedFieldsStyle_2 = useAnimatedStyle(() => ({
    opacity: inputOpacity_2.value,
    transform: [{ translateY: inputTranslateY_2.value }],
  }));

  useEffect(() => {
    if (!isFocused) return;

    inputOpacity_1.value = 0;
    inputTranslateY_1.value = 20;
    inputOpacity_2.value = 0;
    inputTranslateY_2.value = 20;

    inputOpacity_1.value = withDelay(200, withTiming(1, { duration: 500 }));
    inputTranslateY_1.value = withDelay(200, withTiming(0, { duration: 500 }));
    inputOpacity_2.value = withDelay(400, withTiming(1, { duration: 500 }));
    inputTranslateY_2.value = withDelay(400, withTiming(0, { duration: 500 }));

    const initInputs = async () => {
      const data = await loadProfileData();
      if (data) {
        setName(data.name || "");
        setLastname(data.lastname || "");
      }
    };

    initInputs();
  }, [
    isFocused,
    inputOpacity_1,
    inputTranslateY_1,
    inputOpacity_2,
    inputTranslateY_2,
  ]);

  const handleSave = async () => {
    await saveProfileData(name, lastname);
    Alert.alert("Успіх", "Дані збережено у файлову систему!");
  };

  const handleClear = async () => {
    await deleteProfileData();
    setName("");
    setLastname("");
  };

  return (
    <View style={{ marginTop: 20 }}>
      <Animated.View style={animatedFieldsStyle_1}>
        <TextInput
          style={globalStyles.input}
          placeholder="Введіть ваше ім'я"
          value={name}
          onChangeText={setName}
        />
      </Animated.View>

      <Animated.View style={animatedFieldsStyle_2}>
        <TextInput
          style={globalStyles.input}
          placeholder="Введіть ваше прізвище"
          value={lastname}
          onChangeText={setLastname}
        />
      </Animated.View>

      <View style={{ marginTop: 20 }}>
        <Pressable style={globalStyles.button} onPress={handleSave}>
          <Text style={globalStyles.buttonText}>Зберегти</Text>
        </Pressable>
        <Pressable
          style={[
            globalStyles.button,
            { marginTop: 10, backgroundColor: "#FF3B30" },
          ]}
          onPress={handleClear}
        >
          <Text style={globalStyles.buttonText}>Очистити</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default function Profile() {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View
        style={[globalStyles.container, { backgroundColor: "transparent" }]}
      >
        <Image
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          style={globalStyles.avatar}
        />
        <AnimatedFields />
      </View>
    </ScrollView>
  );
}
