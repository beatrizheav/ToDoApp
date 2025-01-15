import React, { useState } from "react";
import { TextInput, Text, View, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { fontsTheme } from "../styles/fontsTheme";
import { colorsTheme } from "../styles/colorsTheme";
import { customInput } from "../styles/components/customInput";

const CustomInput = ({ label, placeholder, value, onChangeValue, type }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const isPassword = type === "password";
  const isParagraph = type === "paragraph";
  const keyboardType = type === "email" ? "email-address" : "default";

  const inputStyle = [
    type === "password"
      ? customInput.inputPassword
      : type === "text" || type === "email"
      ? customInput.inputText
      : type === "paragraph"
      ? customInput.inputParagraph
      : {},
    fontsTheme.regular,
    customInput.input,
  ];

  return (
    <View style={customInput.container}>
      <Text style={fontsTheme.regular}>{label}</Text>
      <View
        style={[
          customInput.inputContainer,
          type === "password"
            ? customInput.passwordContainer
            : type === "paragraph"
            ? customInput.paragraphContainer
            : {},
        ]}
      >
        <TextInput
          style={inputStyle}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeValue}
          placeholderTextColor={colorsTheme.lightGray}
          keyboardType={keyboardType}
          secureTextEntry={isPassword && !showPassword}
          multiline={isParagraph}
        />
        {isPassword && (
          <TouchableOpacity
            style={customInput.iconPassword}
            onPress={togglePasswordVisibility}
          >
            <Feather
              name={showPassword ? "eye" : "eye-off"}
              size={20}
              color={colorsTheme.lightGray}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomInput;
