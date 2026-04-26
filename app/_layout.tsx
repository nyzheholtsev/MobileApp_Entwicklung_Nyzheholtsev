import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  console.log("Debug");
  return (
    // SafeAreaProvider має бути в самій горі, щоб обчислювати відступи для всього додатку
    <SafeAreaProvider>
      {/* StatusBar дозволяє керувати кольором годинника та іконок мережі (auto -- підлаштовується під тему) */}
      <StatusBar style="auto" />

      {/* Stack -- наш лінійний навігатор. Тут ми кажемо, що група (tabs) є основним контентом. Тим самим передаючи їй подальше керування навігацією та контентом*/}
      {/* screenOptions={{ headerShown: false }} прибирає подвійні заголовки */}

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </SafeAreaProvider>
  );
}
