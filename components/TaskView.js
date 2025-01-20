import React from "react";
import { Text, View } from "react-native";
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

const TaskView = ({ task }) => {
  const priorityColor =
    task.priority === "High"
      ? taskView.highPriorityColor
      : task.priority === "Medium"
      ? taskView.mediumPriorityColor
      : taskView.lowPriorityColor;

  return (
    <GestureHandlerRootView>
      <ReanimatedSwipeable
        containerStyle={taskView.swipeable}
        friction={2}
        enableTrackpadTwoFingerGesture
        renderRightActions={RightAction}
      >
        <View style={taskView.row}>
          <View style={taskView.centered}>
            <Text style={fontsTheme.semiBold}>{task.title}</Text>
            <View style={[taskView.priorityLine, priorityColor]} />
          </View>
          <View style={taskView.centered}>
            <Text style={fontsTheme.regular}>{task.category}</Text>
          </View>
        </View>
      </ReanimatedSwipeable>
    </GestureHandlerRootView>
  );
};

export default TaskView;
