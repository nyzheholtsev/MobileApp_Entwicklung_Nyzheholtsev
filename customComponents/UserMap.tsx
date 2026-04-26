import { Text, View } from "react-native";
// MapView -- основний компонент карти
// Marker -- компонент для відображення точок на карті
import MapView, { Marker } from "react-native-maps";
// Імпортуємо кастомний хук для отримання координат
import { useUserLocation } from "../hooks/useUserLocation";

// Кастомний компонент карти, який відображає місцезнаходження користувача
export default function UserMap() {
  // Викликаємо хук для отримання координат та статусу дозволу
  const { location, permission } = useUserLocation();

  // Якщо користувач не надав дозвіл на геолокацію показуємо повідомлення
  if (!permission) {
    return <Text>Потрібен дозвіл на використання геолокації</Text>;
  }

  // Якщо координати ще не отримані (GPS ще визначає позицію) показуємо повідомлення про завантаження
  if (!location) {
    return <Text>Отримання координат...</Text>;
  }

  return (
    // Контейнер карти
    <View style={{ flex: 1 }}>
      <MapView
        /* Розтягуємо карту на весь контейнер */
        style={{ width: "100%", height: "100%" }}
        /* Початкова область карти */
        /* Центр карти встановлюється на координати користувача */
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          // Параметри масштабування карти
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        /* Вмикає стандартний нативний маркер користувача */
        /* (синя пульсуюча точка) */
        showsUserLocation={true}
      >
        {/* Додаємо власний маркер на координати користувача */}
        <Marker
          coordinate={{
            latitude: location.latitude + 0.0003, // 0.0003 - невелике зміщення по широті, щоб маркер не перекривав маяк пристрою
            longitude: location.longitude,
          }}
          /* Підпис маркера */
          title="Ваше місцезнаходження"
        />
      </MapView>
    </View>
  );
}
