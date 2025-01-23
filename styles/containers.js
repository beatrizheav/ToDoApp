import { StyleSheet } from "react-native";
import { colorsTheme } from "./colorsTheme";

export const containers = StyleSheet.create({
  safeArea: {
    paddingHorizontal: 16,
    paddingTop: 40,
    paddingBottom: 20,
    height: "100%",
    backgroundColor: colorsTheme.white,
  },
});
