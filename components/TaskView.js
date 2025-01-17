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

const TaskView = ({ name, priority, category }) => {
  const priorityColor =
    priority === "High"
      ? taskView.highPriorityLine
      : priority === "Medium"
      ? taskView.mediumPriorityLine
      : taskView.lowPriorityLine;

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
            <Text style={fontsTheme.semiBold}>{name}</Text>
            <View style={[taskView.priorityLine, priorityColor]} />
          </View>
          <View style={taskView.centered}>
            <Text style={fontsTheme.regular}>{category}</Text>
          </View>
        </View>
      </ReanimatedSwipeable>
    </GestureHandlerRootView>
  );
};

export default TaskView;
