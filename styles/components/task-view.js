import { colorsTheme } from "../colorsTheme";
import { StyleSheet } from "react-native";

export const taskView = StyleSheet.create({
  iconsContainer: {
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
  highPriority: {
    backgroundColor: colorsTheme.vividRed,
  },
  mediumPriority: {
    backgroundColor: colorsTheme.Yellow,
  },
  lowPriority: {
    backgroundColor: colorsTheme.Green,
  },
  errorPriority: {
    backgroundColor: colorsTheme.darkBlue,
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
    marginBottom: 8,
    paddingHorizontal: "6%",
    borderWidth: 1,
    borderColor: colorsTheme.lightestGray,
    backgroundColor: colorsTheme.white,
    borderRadius: 10,
    justifyContent: "center",
  },
});
