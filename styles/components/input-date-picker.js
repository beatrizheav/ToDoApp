import { StyleSheet } from "react-native";
import { colorsTheme } from "../colorsTheme";

export const inputDakePicker = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colorsTheme.blackOpacity,
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
});
