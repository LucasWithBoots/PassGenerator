import {
  StatusBar,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  Switch,
} from "react-native";
import { passwordStrength } from "check-password-strength";
import PasswordOutput from "@/components/PasswordOutput";
import SecurityLevelBar from "@/components/SecurityLevelBar";
import Slider from "@react-native-community/slider";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import PasswordOptionSwitch from "@/components/PasswordOptionSwitch";

export default function Index() {
  const [loaded, error] = useFonts({
    WorkSans: require("../assets/fonts/WorkSans.ttf"),
    RobotoMono: require("../assets/fonts/RobotoMono.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <StatusBar backgroundColor={"#fed7aa"} />
      <View className="flex-1 items-center justify-center bg-orange-200">
        <View className="bg-green-200 w-80 h-80 border-4 rounded-lg z-20 p-4">
          <PasswordOutput>teste</PasswordOutput>

          <SecurityLevelBar />

          <View>
            <PasswordOptionSwitch>Password Lenght</PasswordOptionSwitch>
            {/* <Slider
              style={{ height: 40 }}
              minimumValue={0}
              maximumValue={20}
              minimumTrackTintColor="#FFFFFF"
              maximumTrackTintColor="#000000"
            /> */}
            <PasswordOptionSwitch>Contains Lowercase</PasswordOptionSwitch>

            <PasswordOptionSwitch>Contains Numbers</PasswordOptionSwitch>
            <PasswordOptionSwitch>Contains Symbols</PasswordOptionSwitch>
          </View>

          <TouchableOpacity className="bg-black h-10 rounded-lg items-center justify-center">
            <Text className="text-white">Generate New</Text>
          </TouchableOpacity>
        </View>

        <View className="bg-orange-200 w-80 h-80 border-4 rounded-lg z-10 absolute bottom-60 left-16"></View>
      </View>
    </>
  );
}

// console.log(passwordStrength("5E£?930vt£V<").value);
