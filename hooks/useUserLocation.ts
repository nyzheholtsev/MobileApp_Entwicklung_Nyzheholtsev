import * as Location from "expo-location";
import { useEffect, useState } from "react";

export const useUserLocation = () => {
  // Стан для збереження координат користувача
  const [location, setLocation] =
    useState<Location.LocationObjectCoords | null>(null);

  // Стан для збереження інформації про дозвіл на геолокацію
  const [permission, setPermission] = useState(false);

  useEffect(() => {
    // Асинхронна функція отримання геолокації
    const getLocation = async () => {
      // Запитуємо у системи дозвіл на використання геолокації
      const { status } = await Location.requestForegroundPermissionsAsync();

      // Якщо користувач не надав дозвіл
      if (status !== "granted") {
        // Виводимо повідомлення у консоль
        console.log("Доступ до геолокації заборонено");
        // Припиняємо виконання функції
        return;
      }

      // Якщо дозвіл отримано -- зберігаємо це у стані
      setPermission(true);

      // Отримуємо поточну позицію пристрою
      // Balanced означає компроміс між точністю GPS та енергоспоживанням
      const currentLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });

      // coords містить координати:
      // latitude, longitude, altitude, accuracy
      // Зберігаємо їх у стані
      setLocation(currentLocation.coords);
    };

    // Викликаємо функцію отримання геолокації
    getLocation();
  }, []);

  // Повертаємо координати та статус дозволу
  // щоб інші компоненти могли їх використовувати
  return { location, permission };
};
