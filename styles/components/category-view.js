import { StyleSheet } from "react-native";
import { colorsTheme } from "../colorsTheme";

export const categoryView = StyleSheet.create({
  rightAction: {
    flexDirection: "row",
    width: 100,
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 5,
  },
  swipeable: {
    height: 60,
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: "6%",
    borderBottomWidth: 1,
    borderColor: colorsTheme.white,
    justifyContent: "center",
  },
});
