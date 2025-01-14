import { StyleSheet } from "react-native";
import { colorsTheme } from "../colorsTheme";

export const customInput = StyleSheet.create({
  container: {
    height: 56,
    width: "100%",
    borderWidth: 1,
    borderColor: colorsTheme.lightestGray,
    padding: 15,
    borderRadius: 10,
    marginTop: 5,
  },
});
