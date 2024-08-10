import { Text } from "react-native";

export default function TextOption({ children }: any) {
  return (
    <Text className="font-WorkSans font-bold text-base text-white">
      {children}
    </Text>
  );
}
