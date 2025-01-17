import { StyleSheet } from "react-native";
import { colorsTheme } from "./colorsTheme";

export const fontsTheme = StyleSheet.create({
  title: {
    color: colorsTheme.darkBlue,
    fontFamily: "OpenSans_600SemiBold",
  },
  titleBig: {
    fontSize: 30,
  },
  titleSmall: {
    fontSize: 20,
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
  regularSmall: {
    color: colorsTheme.darkBlue,
    fontFamily: "Inter_400Regular",
    fontSize: 10,
  },
  semiBold: {
    color: colorsTheme.darkBlue,
    fontFamily: "Inter_600SemiBold",
    fontSize: 14,
  },
  bold: {
    color: colorsTheme.darkBlue,
    fontFamily: "Inter_700Bold",
    fontSize: 17,
  },
  opacity50: {
    opacity: 0.5,
  },
  opacity70: {
    opacity: 0.7,
  },
});
