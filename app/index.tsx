import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import PasswordOutput from "@/components/PasswordOutput";
import SecurityLevelBar from "@/components/SecurityLevelBar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import PasswordOptionSwitch from "@/components/PasswordOptionSwitch";
import PasswordOptionBar from "@/components/PasswordOptionBar";

import { passwordStrength } from "check-password-strength";
import randomstring from "randomstring";

export default function Index() {
  const [password, setPassword] = useState("pHgx3l72h5^b3|w>d@");

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

  const [passwordStrenght, setPasswordStrenght] = useState("");

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  useEffect(() => {
    setPasswordStrenght(passwordStrength(password).value);
  });

  if (!loaded && !error) {
    return null;
  }

  function generateNewPassword(
    lenght: number,
    lowercase: boolean,
    numbers: boolean,
    symbols: boolean
  ) {
    const newPass = randomstring.generate({
      length: lenght,
      charset: [
        numbers ? "alphanumeric" : "alphabetic",
        symbols ? "@!#$%^>|:" : "",
      ],
      capitalization: lowercase ? undefined : "uppercase",
    });

    setPassword(newPass);
    setPasswordStrenght(passwordStrength(newPass).value);
  }

  return (
    <>
      <StatusBar backgroundColor={"#fed7aa"} />
      <View className="flex-1 items-center justify-center bg-orange-200">
        <View className="bg-green-200 w-80 h-96 border-4 rounded-lg z-20 p-4 flex-col justify-between">
          <View>
            <PasswordOutput>{password}</PasswordOutput>
            <SecurityLevelBar passwordStrenght={passwordStrenght} />
          </View>

          <View className="h-48 flex-col justify-between">
            <View>
              <PasswordOptionBar
                onChange={passwordLenghtHandler}
                value={passwordLength}
              >
                Password Lenght
              </PasswordOptionBar>
            </View>

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

          <TouchableOpacity
            onPress={() =>
              generateNewPassword(
                passwordLength,
                containsLowercase,
                containsNumbers,
                containsSymbols
              )
            }
            className="bg-black h-10 rounded-lg items-center justify-center"
          >
            <Text className="text-white">Generate New</Text>
          </TouchableOpacity>
        </View>

        <View className="bg-orange-200 w-80 h-80 border-4 rounded-lg z-10 absolute bottom-60 left-16"></View>
      </View>
    </>
  );
}
