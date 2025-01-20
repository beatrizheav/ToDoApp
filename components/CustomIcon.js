import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { colorsTheme } from "../styles/colorsTheme";
import { customIcon } from "../styles/components/custom-icon";
import CustomAlert from "./CustomAlert";

const CustomIcon = ({ name }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const background = name === "edit" ? customIcon.blue : customIcon.red;

  const onPressAction = () => {
    if (name === "edit") {
      alert("Edit pressed");
    } else {
      setModalVisible(true);
    }
  };

  return (
    <View>
      <TouchableOpacity
        style={[styles.container, background]}
        onPress={onPressAction}
      >
        <MaterialIcons name={name} size={24} color={colorsTheme.white} />
      </TouchableOpacity>
      {name === "delete" && (
        <CustomAlert
          visible={modalVisible}
          title={"Delete task"}
          description={"Are you sure you want to delete this task?"}
          setVisible={setModalVisible}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  blue: {
    backgroundColor: colorsTheme.blue,
  },
  red: {
    backgroundColor: colorsTheme.red,
  },
});

export default CustomIcon;
