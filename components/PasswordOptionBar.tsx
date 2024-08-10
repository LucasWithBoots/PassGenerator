import Slider from "@react-native-community/slider";
import TextOption from "./TextOption";
import { View, Text } from "react-native";

export default function PasswordOptionBar(props: any) {
  return (
    <View>
      <View className="flex-row justify-between items-center mr-3">
        <TextOption>{props.children}</TextOption>
        <TextOption>{props.value}</TextOption>
      </View>

      <View>
        <Slider
          style={{ height: 40 }}
          minimumValue={0}
          maximumValue={20}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          value={props.value}
          onValueChange={props.onChange}
          step={1}
        />
      </View>
    </View>
  );
}
