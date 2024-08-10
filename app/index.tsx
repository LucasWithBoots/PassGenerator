import {
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import PasswordOutput from "@/components/PasswordOutput";
import SecurityLevelBar from "@/components/SecurityLevelBar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import PasswordOptionSwitch from "@/components/PasswordOptionSwitch";
import PasswordOptionBar from "@/components/PasswordOptionBar";

import randomstring from "randomstring";
import stringEntropy from "fast-password-entropy";

export default function Index() {
  const [password, setPassword] = useState<string>("pHgx3l72h5^b3|w>d@");

  const [passwordLength, setPasswordLength] = useState<number>(15);
  const passwordLenghtHandler = (lenght: number) => setPasswordLength(lenght);

  const [containsLowercase, setContainsLowercase] = useState<boolean>(true);
  const containsLowercaseHandler = () =>
    setContainsLowercase((previousState) => !previousState);

  const [containsNumbers, setContainsNumbers] = useState<boolean>(true);
  const containsNumbersHandler = () =>
    setContainsNumbers((previousState) => !previousState);

  const [containsSymbols, setContainsSymbols] = useState<boolean>(true);
  const containsSymbolsHandler = () =>
    setContainsSymbols((previousState) => !previousState);

  const [loaded, error] = useFonts({
    WorkSans: require("../assets/fonts/WorkSans.ttf"),
    RobotoMono: require("../assets/fonts/RobotoMono.ttf"),
  });

  const [passwordStrenght, setPasswordStrenght] = useState<number>(0);

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  useEffect(() => {
    setPasswordStrenght(stringEntropy(password));
  });

  if (!loaded && !error) {
    return null;
  }

  function generateNewPassword(
    lenght: number,
    lowercase: boolean,
    numbers: boolean,
    symbols: boolean,
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
    setPasswordStrenght(stringEntropy(newPass));
  }

  return (
    <>
      <StatusBar backgroundColor="black" />
      <ImageBackground
        className="flex-1"
        source={require("../assets/images/background-image.jpg")}
        blurRadius={5}
      >
        <View className="flex-1 items-center justify-center">
          <View className="bg-white/20 border border-white/30 rounded-lg shadow-lg w-80 h-96 z-20 p-4 flex-col justify-between">
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
                  containsSymbols,
                )
              }
              className="bg-black h-10 rounded-lg items-center justify-center"
            >
              <Text className="text-white">Generate New</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}
