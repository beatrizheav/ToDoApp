import React from "react";
import { TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { colorsTheme } from "../styles/colorsTheme";

const CloseIcon = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AntDesign name="close" size={22} color={colorsTheme.darkBlue} />
    </TouchableOpacity>
  );
};

export default CloseIcon;
