import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { colorsTheme } from "../styles/colorsTheme";

const DropdownInput = ({ label, data, value, onChange, placeholder }) => {
  const handleChange = (item) => {
    onChange(item.value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
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

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  dropdown: {
    backgroundColor: colorsTheme.lightGray,
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 50,
    borderWidth: 1,
    borderColor: colorsTheme.darkGray,
  },
  placeholderStyle: {
    fontSize: 14,
    color: colorsTheme.darkGray,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
  },
});

export default DropdownInput;
