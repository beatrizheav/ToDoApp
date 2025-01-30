import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { customButton } from "../styles/components/custom-button";
import { fontsTheme } from "../styles/fontsTheme";
import Feather from "@expo/vector-icons/Feather";
import { colorsTheme } from "../styles/colorsTheme";

const CustomButton = ({ text, type, onPress }) => {
  const buttonStyle = [
    customButton.container,
    type === "big"
      ? customButton.big
      : type === "small"
      ? customButton.small
      : customButton.add,
  ];

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      {type === "add" ? (
        <Feather name="plus" size={24} color={colorsTheme.darkBlue} />
      ) : (
        <Text style={fontsTheme.buttons}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
