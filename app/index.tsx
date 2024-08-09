import { StatusBar, Text, TouchableOpacity, View } from "react-native";

import { passwordStrength } from "check-password-strength";
import PasswordOutput from "@/components/PasswordOutput";
import SecurityLevelBar from "@/components/SecurityLevelBar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import PasswordOptionSwitch from "@/components/PasswordOptionSwitch";
import PasswordOptionBar from "@/components/PasswordOptionBar";

export default function Index() {
  const [password, setPassword] = useState("");

  const [passwordLength, setPasswordLength] = useState(10);
  const passwordLenghtHandler = (lenght: number) => setPasswordLength(lenght);

  const [containsLowercase, setContainsLowercase] = useState(false);
  const containsLowercaseHandler = () =>
    setContainsLowercase((previousState) => !previousState);

  const [containsNumbers, setContainsNumbers] = useState(false);
  const containsNumbersHandler = () =>
    setContainsNumbers((previousState) => !previousState);

  const [containsSymbols, setContainsSymbols] = useState(false);
  const containsSymbolsHandler = () =>
    setContainsSymbols((previousState) => !previousState);

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
            <PasswordOptionBar
              onChange={passwordLenghtHandler}
              value={passwordLength}
            >
              Password Lenght
            </PasswordOptionBar>
            <PasswordOptionSwitch
              onChange={containsLowercaseHandler}
              value={containsLowercase}
            >
              Contains Lowercase
            </PasswordOptionSwitch>
            <PasswordOptionSwitch
              onChange={containsNumbersHandler}
              value={containsNumbers}
            >
              Contains Numbers
            </PasswordOptionSwitch>
            <PasswordOptionSwitch
              onChange={containsSymbolsHandler}
              value={containsSymbols}
            >
              Contains Symbols
            </PasswordOptionSwitch>
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
