import { StyleSheet } from "react-native";
import { colorsTheme } from "../colorsTheme";

export const customAlert = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: 300,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: colorsTheme.softYellow,
  },
  title: {
    flex: 1,
    textAlign: "center",
  },
  closeButton: {
    position: "absolute",
    right: 10,
  },
  body: {
    padding: 20,
    alignItems: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 20,
  },
});
