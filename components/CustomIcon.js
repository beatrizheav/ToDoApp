import React from "react";
import { TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { colorsTheme } from "../styles/colorsTheme";
import { customIcon } from "../styles/components/custom-icon";

const CustomIcon = ({ name }) => {
  const background = name === "edit" ? customIcon.blue : customIcon.red;

  const onPressAction = () => {
    {
      name === "edit" ? alert("Edit pressed") : alert("Delete pressed");
    }
  };

  return (
    <TouchableOpacity
      style={[customIcon.container, background]}
      onPress={onPressAction}
    >
      <MaterialIcons name={name} size={24} color={colorsTheme.white} />
    </TouchableOpacity>
  );
};

export default CustomIcon;
