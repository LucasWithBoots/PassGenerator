import { Text, View, Switch } from "react-native";
import { useEffect, useState } from "react";
import TextOption from "./TextOption";

export default function PasswordOptionSwitch({ children }: any) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View className="flex-row justify-between ">
      <TextOption>{children}</TextOption>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
        className="-my-3 -mx-1"
      />
    </View>
  );
}
