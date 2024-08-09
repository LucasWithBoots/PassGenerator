import Slider from "@react-native-community/slider";
import TextOption from "./TextOption";
import { View } from "react-native";
import { useState } from "react";

export default function PasswordOptionBar(props: any) {
  return (
    <View>
      <Slider
        style={{ height: 40 }}
        minimumValue={0}
        maximumValue={20}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        value={props.value}
        onValueChange={props.onChange}
      />
      <TextOption>{props.children}</TextOption>
    </View>
  );
}
