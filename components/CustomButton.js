import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { customButton } from "../styles/components/custom-button";
import { fontsTheme } from "../styles/fontsTheme";
import { colorsTheme } from "../styles/colorsTheme";

const CustomButton = ({ text, type, onPress }) => {
  const buttonStyles = {
    big: customButton.big,
    small: customButton.small,
  };

  const buttonStyle = [
    customButton.container,
    buttonStyles[type] || customButton.add,
  ];

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      testID="custom-button"
    >
      {type === "add" ? (
        <Feather
          name="plus"
          size={24}
          color={colorsTheme.darkBlue}
          testID="feather-icon"
        />
      ) : (
        <Text style={fontsTheme.buttons}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
