import { StyleSheet } from "react-native";
import { colorsTheme } from "./colorsTheme";

export const fontsTheme = StyleSheet.create({
  title: {
    color: colorsTheme.darkBlue,
    fontFamily: "OpenSans_600SemiBold",
  },
  buttons: {
    color: colorsTheme.darkBlue,
    fontFamily: "Manrope_700Bold",
    fontSize: 16,
  },
  regular: {
    color: colorsTheme.darkBlue,
    fontFamily: "Inter_400Regular",
    fontSize: 14,
  },
  semiBold: {
    color: colorsTheme.darkBlue,
    fontFamily: "Inter_600SemiBold",
    fontSize: 14,
  },
  opacity50: {
    opacity: 0.5,
  },
  opacity70: {
    opacity: 0.7,
  },
});
