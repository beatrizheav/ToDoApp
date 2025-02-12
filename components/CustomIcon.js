import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { colorsTheme } from "../styles/colorsTheme";
import CustomAlert from "./CustomAlert";
import { customIcon } from "../styles/components/custom-icon";

const CustomIcon = ({ name, iconColor, onPress, type }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const defaultBackground = name === "edit" ? customIcon.blue : customIcon.red;
  const background = iconColor ? {} : defaultBackground;
  const color = iconColor || colorsTheme.white;
  const confirmTitle = "Delete " + type;
  const confirmText = "Are you sure you want to delete this " + type + "?";

  const onPressAction = () => {
    if (onPress) {
      onPress();
    } else {
      setModalVisible(true);
    }
  };

  return (
    <View>
      <TouchableOpacity
        style={[customIcon.container, background]}
        onPress={onPressAction}
      >
        <MaterialIcons name={name} size={22} color={color} />
      </TouchableOpacity>
      {name === "delete" && (
        <CustomAlert
          visible={modalVisible}
          title={confirmTitle}
          description={confirmText}
          setVisible={setModalVisible}
        />
      )}
    </View>
  );
};

export default CustomIcon;
