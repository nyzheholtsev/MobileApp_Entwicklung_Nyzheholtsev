import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: "#007AFF",
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Головна" }} />
      <Tabs.Screen name="list" options={{ title: "Рекомендації" }} />
      <Tabs.Screen name="profile" options={{ title: "Профіль" }} />
      <Tabs.Screen name="network" options={{ title: "Мережа" }} />
    </Tabs>
  );
}
