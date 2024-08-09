import { View, Text } from "react-native";

export default function SecurityLevelBar(props: any) {
  let widthLevel;
  let colorLevel;

  switch (props.passwordStrenght) {
    case "Too weak":
      widthLevel = "w-1/4";
      colorLevel = "bg-red-800";
      break;
    case "Weak":
      widthLevel = "w-2/4";
      colorLevel = "bg-red-500";
      break;
    case "Medium":
      widthLevel = "w-3/4";
      colorLevel = "bg-yellow-500";
      break;
    case "Strong":
      widthLevel = "w-max";
      colorLevel = "bg-green-500";
      break;
  }

  return (
    <View className={`h-2 bg-stone-200 mt-2 z-10`}>
      <View className={`h-2 ${widthLevel} ${colorLevel} z-20`}></View>
    </View>
  );
}
