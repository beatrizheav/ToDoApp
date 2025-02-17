import React from "react";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colorsTheme } from "../styles/colorsTheme";

const BackIcon = () => {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.back()} testID="backIcon-touchable">
      <Ionicons
        name="arrow-back-outline"
        size={25}
        color={colorsTheme.darkBlue}
      />
    </TouchableOpacity>
  );
};

export default BackIcon;
