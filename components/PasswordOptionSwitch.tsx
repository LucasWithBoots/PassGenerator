import { Text, View, Switch } from "react-native";
import { useEffect, useState } from "react";
import TextOption from "./TextOption";

export default function PasswordOptionSwitch(props: any) {
  return (
    <View className="flex-row justify-between ">
      <TextOption>{props.children}</TextOption>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={props.value ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={props.onChange}
        value={props.value}
        className="-my-3 -mx-1"
      />
    </View>
  );
}
