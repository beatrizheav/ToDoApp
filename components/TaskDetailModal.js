import React, { useState, useEffect } from "react";
import { Modal, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Fontisto from "@expo/vector-icons/Fontisto";
import CloseIcon from "./CloseIcon";
import CustomTitle from "./CustomTitle";
import CustomIcon from "./CustomIcon";
import { fontsTheme } from "../styles/fontsTheme";
import { colorsTheme } from "../styles/colorsTheme";
import { taskDetail } from "../styles/components/task-detail-modal";
import axiosInstance from "../api/axiosInstance";

const TaskDetailModal = ({ visible, setVisible, task, onPress, setTask }) => {
  const handleClose = () => setVisible(false);

  const [dueDate, setDueDate] = useState(null);
  const priorityColor =
    task.priority === "high"
      ? taskDetail.highPriority
      : task.priority === "medium"
      ? taskDetail.mediumPriority
      : taskDetail.lowPriority;
  const [category, setCategory] = useState(null);

  useEffect(() => {
    if (task?.due_date) {
      const date = new Date(task.due_date);
      setDueDate(!isNaN(date) ? date.toISOString().split("T")[0] : undefined);
    }
  }, [task]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const { data } = await axiosInstance.get("/categories/category", {
          params: { id: task.category_id },
        });
        setCategory(data.name);
      } catch (error) {
        console.error(
          "Error fetching categories:",
          error.response?.data?.message || error.message
        );
      }
    };
    fetchCategory();
  }, [task.category_id]);

  const onPressEdit = () => {
    onPress();
    setTask(task);
    handleClose();
  };

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
            <Text style={fontsTheme.regular}>Date: {dueDate}</Text>
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
            <Text style={fontsTheme.regular}>Category: {category}</Text>
          </View>
          <View style={taskDetail.editIcon}>
            <CustomIcon
              name="edit"
              iconColor="black"
              onPress={() => onPressEdit()}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TaskDetailModal;
