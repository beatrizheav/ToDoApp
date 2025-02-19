import React from "react";
import { Modal, View, Text } from "react-native";
import CloseIcon from "./CloseIcon";
import CustomButton from "./CustomButton";
import { fontsTheme } from "../styles/fontsTheme";
import { customAlert } from "../styles/components/custom-alert";

const CustomAlert = ({ visible, setVisible, confirmAction, type }) => {
  const title = "Delete " + type;
  const description = "Are you sure you want to delete this " + type + "?";
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={() => setVisible(false)}
    >
      <View style={customAlert.modalOverlay}>
        <View style={customAlert.modalContainer}>
          <View style={customAlert.header}>
            <Text style={[fontsTheme.bold, customAlert.title]}>{title}</Text>
            <CloseIcon
              onPress={() => setVisible(false)}
              style={customAlert.closeButton}
            />
          </View>
          <View style={customAlert.body}>
            <Text style={[fontsTheme.semiBold, customAlert.description]}>
              {description}
            </Text>
            <CustomButton
              onPress={() => [setVisible(false), confirmAction()]}
              text={"Yes"}
              type={"small"}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomAlert;
