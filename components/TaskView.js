import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import Reanimated, { useAnimatedStyle } from "react-native-reanimated";
import { taskView } from "../styles/components/task-view";

import { fontsTheme } from "../styles/fontsTheme";
import CustomIcon from "./CustomIcon";

const RightAction = (prog, drag) => {
  const styleAnimation = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: drag.value + 100 }],
    };
  });

  return (
    <Reanimated.View style={styleAnimation}>
      <View style={taskView.rightAction}>
        <CustomIcon name={"edit"} />
        <CustomIcon name={"delete"} />
      </View>
    </Reanimated.View>
  );
};

const TaskView = ({ task, setTask, setModalVisible }) => {
  const priorityColor =
    task.priority === "high"
      ? taskView.highPriorityColor
      : task.priority === "medium"
      ? taskView.mediumPriorityColor
      : task.priority === "low"
      ? taskView.lowPriorityColor
      : taskView.errorPriority;

  return (
    <GestureHandlerRootView>
      <ReanimatedSwipeable
        containerStyle={taskView.swipeable}
        friction={2}
        enableTrackpadTwoFingerGesture
        renderRightActions={RightAction}
      >
        <TouchableOpacity
          onPress={() => {
            setTask(task);
            setModalVisible(true);
          }}
        >
          <View style={taskView.row}>
            <View style={taskView.centered}>
              <Text style={fontsTheme.semiBold}>{task.name}</Text>
              <View style={[taskView.priorityLine, priorityColor]} />
            </View>
            <View style={taskView.centered}>
              <Text style={fontsTheme.regular}>{task.category}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ReanimatedSwipeable>
    </GestureHandlerRootView>
  );
};

export default TaskView;
