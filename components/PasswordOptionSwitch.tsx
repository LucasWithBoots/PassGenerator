import { View, Switch } from "react-native";
import TextOption from "./TextOption";

export default function PasswordOptionSwitch(props: any) {
  return (
    <View className="flex-row justify-between items-center">
      <TextOption>{props.children}</TextOption>
      <Switch
        trackColor={{ false: "#767577", true: "#2196F3" }}
        thumbColor={props.value ? "#f4f3f4" : "#f4f3f4"}
        onValueChange={props.onChange}
        value={props.value}
        className="-my-3 -mx-1 "
      />
    </View>
  );
}
