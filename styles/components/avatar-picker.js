import { StyleSheet } from "react-native";
import { colorsTheme } from "../colorsTheme";

export const avatarPicker = StyleSheet.create({
  selectContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    height: 121,
    width: 121,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colorsTheme.lightestGray,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarImage: {
    width: 90,
    height: 90,
    margin: 5,
  },
  avatarImageMargin: {
    margin: 10,
  },
  modalBackdrop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colorsTheme.blackOpacity,
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
});
