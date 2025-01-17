import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import CustomButton from "./CustomButton";
import { fontsTheme } from "../styles/fontsTheme";
import { colorsTheme } from "../styles/colorsTheme";

const CustomAlert = ({ visible, title, description, setVisible }) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={() => setVisible(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <Text style={fontsTheme.bold}>{title}</Text>
            </View>
            <TouchableOpacity
              onPress={() => setVisible(false)}
              style={styles.closeButton}
            >
              <AntDesign name="close" size={20} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.body}>
            <Text style={[fontsTheme.semiBold, styles.textCenterd]}>
              {description}
            </Text>
            <CustomButton
              onPress={() => setVisible(false)}
              text={"Yes"}
              type={"small"}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: 300,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    backgroundColor: colorsTheme.softYellow,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    right: 10,
  },
  body: {
    justifyContent: "space-between",
    padding: 15,
    height: 100,
    alignItems: "center",
  },
  textCenterd: {
    textAlign: "center",
  },
});

export default CustomAlert;
