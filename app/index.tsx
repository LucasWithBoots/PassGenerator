import {
  StatusBar,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { passwordStrength } from "check-password-strength";

export default function Index() {
  return (
    <>
      <StatusBar backgroundColor={"#fed7aa"} />
      <View className="flex-1 items-center justify-center bg-orange-200">
        <View className="bg-green-200 w-80 h-80 border-4 rounded-lg z-20 p-4">
          <View className="bg-stone-200 h-14 rounded-lg justify-center">
            <Text>asdhasd@$$@</Text>
          </View>

          <View className="h-2 bg-stone-200 mt-2 z-10">
            <View className="h-2 w-1/2 bg-red-500 z-20"></View>
          </View>

          <View>
            <Text>Password Lenght</Text>
            <Text>Contains Uppercase</Text>
            <Text>Contains Lowercase</Text>
            <Text>Contains Numbers</Text>
            <Text>Contains Symbols</Text>
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

console.log(passwordStrength("5E£?930vt£V<").value);
