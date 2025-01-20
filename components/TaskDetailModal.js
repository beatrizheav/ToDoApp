import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Fontisto from "@expo/vector-icons/Fontisto";
import CloseIcon from "./CloseIcon";
import CustomTitle from "./CustomTitle";
import CustomIcon from "./CustomIcon";
import { fontsTheme } from "../styles/fontsTheme";
import { colorsTheme } from "../styles/colorsTheme";

const TaskDetailModal = ({ visible, setVisible, task }) => {
  const handleClose = () => setVisible(false);

  const priorityColor =
    task.priority === "High"
      ? colorsTheme.vividRed
      : task.priority === "Medium"
      ? colorsTheme.Yellow
      : colorsTheme.Green;

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={handleClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <View style={styles.header}>
            <View style={styles.textHeader}>
              <CustomTitle text={task.title} type={"small"} />
            </View>
            <CloseIcon onPress={handleClose} />
          </View>

          <View style={styles.detailsItem}>
            <Text style={fontsTheme.regular}>{task.description}</Text>
          </View>

          <View style={styles.detailsItem}>
            <Fontisto
              name="date"
              size={20}
              color={colorsTheme.darkBlue}
              style={styles.iconsMargin}
            />
            <Text style={fontsTheme.regular}>Date: {task.date}</Text>
          </View>
          <View style={styles.detailsItem}>
            <View
              style={[
                styles.priorityCircle,
                { backgroundColor: priorityColor },
                styles.iconsMargin,
              ]}
            />
            <Text style={fontsTheme.regular}>Priority: {task.priority}</Text>
          </View>

          {/* Task Category and Edit Icon */}
          <View style={styles.detailsItem}>
            <Ionicons
              name="layers-outline"
              size={24}
              color={colorsTheme.darkBlue}
              style={styles.iconsMargin}
            />
            <Text style={fontsTheme.regular}>Category: {task.category}</Text>
          </View>
          <View style={styles.editIcon}>
            <CustomIcon
              name="edit"
              iconColor="black"
              onPress={() => alert("Edit pressed")}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colorsTheme.blackOpacity,
  },
  modalContainer: {
    width: "80%",
    backgroundColor: colorsTheme.white,
    borderRadius: 15,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  textHeader: {
    width: "85%",
  },
  detailsItem: {
    width: "95%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  priorityCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  iconsMargin: {
    marginRight: 7,
  },
  editIcon: {
    justifyContent: "center",
    alignItems: "flex-end",
    width: "100%",
  },
});

export default TaskDetailModal;
