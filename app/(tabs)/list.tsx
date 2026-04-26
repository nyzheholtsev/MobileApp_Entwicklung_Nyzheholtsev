import { FlatList, Image, Text, View } from "react-native";
import { globalStyles } from "../../styles/global";
import { listStyles } from "../../styles/lists";

const RECOMMENDATIONS_DATA = [
  {
    id: "1",
    name: "Вівсянка з ягодами",
    calories: "350 ккал",
    portion: "250 г",
    time: "10 хв",
    image: require("E://coding//MobileApp_Entwicklung_Nyzheholtsev//assets//food//Haferflocken_mit_Beeren.jpg"),
  },
  {
    id: "2",
    name: "Куряче філе з броколі",
    calories: "400 ккал",
    portion: "300 г",
    time: "25 хв",
    image: require("E://coding//MobileApp_Entwicklung_Nyzheholtsev//assets//food//Hähnchenfilet_mit_Brokkoli.webp"),
  },
  {
    id: "3",
    name: "Салат з тунцем",
    calories: "320 ккал",
    portion: "200 г",
    time: "15 хв",
    image: require("E://coding//MobileApp_Entwicklung_Nyzheholtsev//assets//food//Thunfischsalat.jpg"),
  },
  {
    id: "4",
    name: "Запечений лосось",
    calories: "450 ккал",
    portion: "250 г",
    time: "30 хв",
    image: require("E://coding//MobileApp_Entwicklung_Nyzheholtsev//assets//food//Gebackener_Lachs.jpg"),
  },
  {
    id: "5",
    name: "Сирники без цукру",
    calories: "280 ккал",
    portion: "150 г",
    time: "20 хв",
    image: require("E://coding//MobileApp_Entwicklung_Nyzheholtsev//assets//food//zuckerfreie_Käsekuchen.jpg"),
  },
  {
    id: "6",
    name: "Гречка з грибами",
    calories: "310 ккал",
    portion: "250 г",
    time: "25 хв",
    image: require("E://coding//MobileApp_Entwicklung_Nyzheholtsev//assets//food//Buchweizen_mit_Pilzen.jpg"),
  },
  {
    id: "7",
    name: "Омлет зі шпинатом",
    calories: "250 ккал",
    portion: "200 г",
    time: "10 хв",
    image: require("E://coding//MobileApp_Entwicklung_Nyzheholtsev//assets//food//Omelett_mit_Spinat.jpg"),
  },
  {
    id: "8",
    name: "Крем-суп з гарбуза",
    calories: "200 ккал",
    portion: "350 г",
    time: "35 хв",
    image: require("E://coding//MobileApp_Entwicklung_Nyzheholtsev//assets//food//Kürbiscremesuppe.jpg"),
  },
  {
    id: "9",
    name: "Тости з авокадо",
    calories: "220 ккал",
    portion: "180 г",
    time: "5 хв",
    image: require("E://coding//MobileApp_Entwicklung_Nyzheholtsev//assets//food//Avocado-Toast.jpg"),
  },
  {
    id: "10",
    name: "Паста з овочами",
    calories: "380 ккал",
    portion: "300 г",
    time: "20 хв",
    image: require("E://coding//MobileApp_Entwicklung_Nyzheholtsev//assets//food//Nudeln_mit_Gemüse.jpg"),
  },
];

interface RecipeItem {
  id: string;
  name: string;
  calories: string;
  portion: string;
  time: string;
  image: any;
}

const renderItem = ({ item }: { item: RecipeItem }) => (
  <View style={[listStyles.card, listStyles.row]}>
    <Image source={item.image} style={listStyles.smallAvatar} />
    <View>
      <Text style={listStyles.cardTitle}>{item.name}</Text>
      <Text style={listStyles.cardSubtitle}>
        {item.calories} / {item.portion} • {item.time}
      </Text>
    </View>
  </View>
);

export default function ListScreen() {
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={RECOMMENDATIONS_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={listStyles.listContainer}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        ListHeaderComponent={
          <Text style={[globalStyles.titleText, { marginBottom: 15 }]}>
            Рекомендоване меню
          </Text>
        }
        ListEmptyComponent={
          <Text
            style={{
              textAlign: "center",
              marginTop: 20,
              fontSize: 16,
              color: "#666",
            }}
          >
            добавьте продукты
          </Text>
        }
      />
    </View>
  );
}
