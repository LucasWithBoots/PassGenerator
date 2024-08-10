import { View } from "react-native";

export default function SecurityLevelBar(props: any) {
  let widthLevel: string;
  let colorLevel: string;

  if (props.passwordStrenght <= 10) {
    widthLevel = "w-1/6";
    colorLevel = "bg-red-900";
  } else if (props.passwordStrenght > 10 && props.passwordStrenght <= 20) {
    widthLevel = "w-1/4";
    colorLevel = "bg-red-800";
  } else if (props.passwordStrenght > 20 && props.passwordStrenght <= 40) {
    widthLevel = "w-2/4";
    colorLevel = "bg-red-500";
  } else if (props.passwordStrenght > 40 && props.passwordStrenght <= 60) {
    widthLevel = "w-3/4";
    colorLevel = "bg-yellow-500";
  } else if (props.passwordStrenght > 60 && props.passwordStrenght <= 80) {
    widthLevel = "w-max";
    colorLevel = "bg-green-500";
  } else if (props.passwordStrenght > 80) {
    widthLevel = "w-max";
    colorLevel = "bg-green-700";
  } else {
    widthLevel = "w-1/4";
    colorLevel = "bg-gray-400";
  }

  return (
    <View className={`h-2 bg-stone-200 mt-2 z-10 rounded-full`}>
      <View
        className={`h-2 ${widthLevel} ${colorLevel} z-20 rounded-full`}
      ></View>
    </View>
  );
}
