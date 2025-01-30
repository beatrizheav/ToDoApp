import { StyleSheet } from "react-native";
import { colorsTheme } from "../colorsTheme";

export const categories = StyleSheet.create({
  container: {
    justifyContent: "space-around",
  },
  listContainer: {
    height: "70%",
    backgroundColor: colorsTheme.lightestGray,
    borderRadius: 20,
  },
  add: {
    width: "100%",
    alignItems: "flex-end",
  },
});
