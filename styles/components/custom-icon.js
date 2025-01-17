import { StyleSheet } from "react-native";
import { colorsTheme } from "../colorsTheme";

export const customIcon = StyleSheet.create({
  container: {
    width: 33,
    height: 33,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  blue: {
    backgroundColor: colorsTheme.pastelBlue,
  },
  red: {
    backgroundColor: colorsTheme.vividRed,
  },
});
