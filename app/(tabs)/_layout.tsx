import { Tabs } from "expo-router";
/**
 * Цей файл автоматично застосовується Expo до всіх файлів у папці (tabs).
 * Він створює нижню панель (Tab Bar).
 */
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true, // Вмикаємо заголовок зверху, щоб кожна сторінка мала свою назву
        tabBarActiveTintColor: "#007AFF", // Можна додати колір для активної вкладки
      }}
    >
      <Tabs.Screen
        name="index" // name має точно збігатися з назвою файлу без розширення
        options={{ title: "Головна" }} // Назва сторінки у заголовку та на вкладці
      />

      <Tabs.Screen name="sandbox" options={{ title: "Пісочниця" }} />

      <Tabs.Screen
        name="list"
        options={{ title: "Рекомендації Нижегольцев" }}
      />

      <Tabs.Screen name="profile" options={{ title: "Профіль" }} />
    </Tabs>
  );
}
