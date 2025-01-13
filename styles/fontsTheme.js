import { StyleSheet } from "react-native";
import { colorsTheme } from "./colorsTheme";

export const fontsTheme = StyleSheet.create({
  title: {
    color: colorsTheme.darkBlue,
    fontFamily: "OpenSans_600SemiBold",
    textAlign: "left",
  },
  opacity50: {
    opacity: 0.5,
  },
  opacity70: {
    opacity: 0.7,
  },
});
