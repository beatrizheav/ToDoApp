import { colorsTheme } from "../colorsTheme";
import { StyleSheet } from "react-native";

export const taskDetail = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colorsTheme.blackOpacity,
  },
  modalContainer: {
    width: "80%",
    backgroundColor: colorsTheme.white,
    borderRadius: 15,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  textHeader: {
    width: "85%",
  },
  detailsItem: {
    width: "95%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  priorityCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
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
  iconsMargin: {
    marginRight: 7,
  },
  editIcon: {
    justifyContent: "center",
    alignItems: "flex-end",
    width: "100%",
  },
});
