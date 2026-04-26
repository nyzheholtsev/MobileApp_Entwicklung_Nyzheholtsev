import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { UserService } from "../api/services/UserService";
import { globalStyles } from "../styles/global";

export const UserProfile = ({ userId }: { userId: number }) => {
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const formattedName = await UserService.getFormattedUserName(userId);
        setUserName(formattedName);
      } catch {
        setUserName("Помилка завантаження");
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, [userId]);

  if (loading) {
    return (
      <ActivityIndicator size="small" color="#007AFF" style={{ margin: 20 }} />
    );
  }

  return (
    <View style={{ padding: 20, backgroundColor: "#fff", borderRadius: 10 }}>
      <Text style={globalStyles.titleText}>Привіт, {userName}!</Text>
      <Text style={{ textAlign: "center", color: "#666" }}>
        Ваш ID: {userId}
      </Text>
    </View>
  );
};
