import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { containers } from "../styles/containers";
import TaskDetailModal from "../components/TaskDetailModal";

const Main = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const task = {
    id: "1",
    title: "Task 1",
    description: "Description of Task 1",
    date: "2025-01-20",
    priority: "High",
    category: "Work",
  };

  return (
    <View style={containers.main}>
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
        <Text style={{ fontSize: 30 }}>Open Details Task Modal</Text>
      </TouchableOpacity>
      <TaskDetailModal
        visible={modalVisible}
        setVisible={setModalVisible}
        task={task}
      />
    </View>
  );
};
export default Main;
