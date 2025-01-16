import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { customButton } from "../styles/components/custom-button";
import { fontsTheme } from "../styles/fontsTheme";

const CustomButton = ({ text, type }) => {
  const buttonStyle = [
    customButton.container,
    type === "big" ? customButton.big : customButton.small,
  ];

  return (
    <TouchableOpacity style={buttonStyle}>
      <Text style={fontsTheme.buttons}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
