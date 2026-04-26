import { Gyroscope } from "expo-sensors";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Sensors() {
  // Створюємо стан для збереження даних гіроскопа.
  // Сенсор повертає три координати обертання пристрою: X, Y, Z.
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    // Встановлюємо інтервал оновлення даних сенсора. 300 мс означає, що нові дані будуть приходити приблизно 3 рази на секунду.
    Gyroscope.setUpdateInterval(300);

    // Підписуємось на події сенсора. addListener викликає callback-функцію кожного разу, коли гіроскоп передає нові дані.
    const subscription = Gyroscope.addListener((sensorData) => {
      // Оновлюємо стан компоненту новими даними сенсора
      setData(sensorData);
    });

    // Функція очищення (cleanup). Вона викликається автоматично, коли компонент демонтується.
    // remove() скасовує підписку на сенсор, щоб уникнути витоку пам'яті та зайвого навантаження.
    return () => subscription.remove();
  }, []);

  return (
    <View>
      <Text>Дані гіроскопа</Text>
      {/* Виводимо координати обертання пристрою.
      Метод toFixed(2) обмежує кількість знаків після коми,
      щоб значення не "стрибали" занадто швидко в інтерфейсі. */}
      <Text>X: {data.x.toFixed(2)}</Text>
      <Text>Y: {data.y.toFixed(2)}</Text>
      <Text>Z: {data.z.toFixed(2)}</Text>
    </View>
  );
}
