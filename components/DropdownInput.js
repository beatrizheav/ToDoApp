import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { colorsTheme } from "../styles/colorsTheme";
import { inputs } from "../styles/components/inputs";
import { fontsTheme } from "../styles/fontsTheme";
import { Feather } from "@expo/vector-icons";

const DropdownInput = ({ label, data, value, onChange, placeholder }) => {
  const handleChange = (item) => {
    onChange(item.value);
  };

  return (
    <View>
      <Text style={fontsTheme.regular}>{label}</Text>
      <Dropdown
        style={inputs.inputContainer}
        placeholderStyle={fontsTheme.regular}
        selectedTextStyle={fontsTheme.regular}
        itemTextStyle={fontsTheme.regular}
        showsVerticalScrollIndicator={true}
        data={data}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </View>
  );
};

export default DropdownInput;
