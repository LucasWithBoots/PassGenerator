import Slider from "@react-native-community/slider";
import TextOption from "./TextOption";
import { View } from "react-native";

export default function PasswordOptionBar({ children }: any) {
  return (
    <View>
      <Slider
        style={{ height: 40 }}
        minimumValue={0}
        maximumValue={20}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
      <TextOption>{children}</TextOption>
    </View>
  );
}
