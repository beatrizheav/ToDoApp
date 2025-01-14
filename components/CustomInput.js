import React from "react";
import { TextInput, Text, View } from "react-native";
import { fontsTheme } from "../styles/fontsTheme";
import { colorsTheme } from "../styles/colorsTheme";
import { customInput } from "../styles/components/customInput";

const CustomInput = ({ label, placeholder, value, onChangeValue }) => {
  return (
    <View>
      <Text style={fontsTheme.regular}>{label}</Text>
      <TextInput
        style={[customInput.container, fontsTheme.regular]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeValue}
        placeholderTextColor={colorsTheme.lightGray}
      />
    </View>
  );
};

export default CustomInput;
