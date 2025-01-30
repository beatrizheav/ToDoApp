import { StyleSheet } from "react-native";
import { colorsTheme } from "../colorsTheme";

export const customButton = StyleSheet.create({
  container: {
    backgroundColor: colorsTheme.softYellow,
    height: 54,
    width: 328,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colorsTheme.darkBlue,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    marginVertical: 10,
  },
  big: {
    height: 54,
    width: "100%",
    borderRadius: 17,
  },
  small: {
    height: 28,
    width: 160,
    borderRadius: 10,
  },
  add: {
    height: 28,
    width: 102,
    borderRadius: 10,
  },
});
