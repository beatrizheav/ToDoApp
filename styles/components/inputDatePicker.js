import { StyleSheet } from "react-native";
import { colorsTheme } from "../colorsTheme";

export const inputDakePicker = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark background with opacity
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%", // You can adjust this to make the modal bigger or smaller
    alignItems: "center",
  },
});
