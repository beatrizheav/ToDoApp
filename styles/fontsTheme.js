import { StyleSheet } from "react-native";
import { colorsTheme } from "./colorsTheme";

export const fontsTheme = StyleSheet.create({
  title: {
    color: colorsTheme.darkBlue,
    fontFamily: "OpenSans_600SemiBold",
    textAlign: "left",
  },
  buttons: {
    color: colorsTheme.darkBlue,
    fontFamily: "Manrope_700Bold",
    textAlign: "left",
    fontSize: 16,
  },
  opacity50: {
    opacity: 0.5,
  },
  opacity70: {
    opacity: 0.7,
  },
});
