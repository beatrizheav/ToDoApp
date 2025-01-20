import { colorsTheme } from "../colorsTheme";
import { StyleSheet } from "react-native";

export const taskView = StyleSheet.create({
  rightAction: {
    flexDirection: "row",
    width: 100,
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 5,
  },
  priorityLine: {
    height: 4,
    width: 30,
    borderRadius: 2,
  },
  highPriorityLine: {
    backgroundColor: colorsTheme.vividRed,
  },
  mediumPriorityLine: {
    backgroundColor: colorsTheme.Yellow,
  },
  lowPriorityLine: {
    backgroundColor: colorsTheme.Green,
  },
  centered: {
    height: "100%",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  swipeable: {
    height: 60,
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: "6%",
    borderWidth: 1,
    borderColor: colorsTheme.lightestGray,
    borderRadius: 10,
    justifyContent: "center",
  },
});
