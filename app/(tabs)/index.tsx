import { View } from "react-native";
import UserMap from "../../customComponents/UserMap";
// import Sensors from "../../customComponents/Sensors";

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      {/* <Sensors /> */}
      <UserMap />
    </View>
  );
}
