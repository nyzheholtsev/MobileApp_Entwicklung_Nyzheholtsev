import React, { useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { UserProfile } from "../../customComponents/UserProfile";
import { globalStyles } from "../../styles/global";

export default function NetworkScreen() {
  const [currentUserId, setCurrentUserId] = useState<number>(1);

  const generateRandomId = () => {
    const randomId = Math.floor(Math.random() * 9) + 1;
    setCurrentUserId(randomId);
  };

  useEffect(() => {
    generateRandomId();
  }, []);

  return (
    <SafeAreaView style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Тестування Network Layer</Text>
      <UserProfile userId={currentUserId} />
    </SafeAreaView>
  );
}
