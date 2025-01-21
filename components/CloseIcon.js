import React from "react";
import { TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const CloseIcon = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AntDesign name="close" size={22} color="black" />
    </TouchableOpacity>
  );
};

export default CloseIcon;
