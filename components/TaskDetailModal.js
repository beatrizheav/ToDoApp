import React from "react";
import { Modal, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Fontisto from "@expo/vector-icons/Fontisto";
import CloseIcon from "./CloseIcon";
import CustomTitle from "./CustomTitle";
import CustomIcon from "./CustomIcon";
import { fontsTheme } from "../styles/fontsTheme";
import { colorsTheme } from "../styles/colorsTheme";
import { taskDetail } from "../styles/components/task-detail-modal";

const TaskDetailModal = ({ visible, setVisible, task }) => {
  const handleClose = () => setVisible(false);
  console.log("TASK RECEIVED", task);

  const priorityColor =
    task.priority === "high"
      ? taskDetail.highPriority
      : task.priority === "medium"
      ? taskDetail.mediumPriority
      : taskDetail.lowPriority;

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={handleClose}
    >
      <View style={taskDetail.overlay}>
        <View style={taskDetail.modalContainer}>
          <View style={taskDetail.header}>
            <View style={taskDetail.textHeader}>
              <CustomTitle text={task.name} type={"small"} />
            </View>
            <CloseIcon onPress={handleClose} />
          </View>

          <View style={taskDetail.detailsItem}>
            <Text style={fontsTheme.regular}>{task.description}</Text>
          </View>

          <View style={taskDetail.detailsItem}>
            <Fontisto
              name="date"
              size={20}
              color={colorsTheme.darkBlue}
              style={taskDetail.iconsMargin}
            />
            <Text style={fontsTheme.regular}>Date: {task.dueDate}</Text>
          </View>
          <View style={taskDetail.detailsItem}>
            <View
              style={[
                taskDetail.priorityCircle,
                priorityColor,
                taskDetail.iconsMargin,
              ]}
            />
            <Text style={fontsTheme.regular}>Priority: {task.priority}</Text>
          </View>
          <View style={taskDetail.detailsItem}>
            <Ionicons
              name="layers-outline"
              size={24}
              color={colorsTheme.darkBlue}
              style={taskDetail.iconsMargin}
            />
            <Text style={fontsTheme.regular}>Category: {task.category}</Text>
          </View>
          <View style={taskDetail.editIcon}>
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

export default TaskDetailModal;
