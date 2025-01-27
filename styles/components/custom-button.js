import { StyleSheet } from "react-native";
import { colorsTheme } from "../colorsTheme";

export const customButton = StyleSheet.create({
  container: {
    backgroundColor: colorsTheme.softYellow,
    height: 54,
    width: 328,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colorsTheme.darkBlue, // Color de la sombra
    shadowOffset: { width: 0, height: 5 }, // Dirección de la sombra
    shadowOpacity: 0.3, // Opacidad de la sombra
    shadowRadius: 5, // Difuminado de la sombra
    elevation: 5, // Sombra para Android
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
