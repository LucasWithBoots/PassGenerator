import { View, Text } from "react-native";

export default function PasswordOutput({ children }: any) {
  return (
    <View className="bg-stone-200 h-14 rounded-lg justify-center px-3 ">
      <Text className="font-RobotoMono">{children}</Text>
    </View>
  );
}
