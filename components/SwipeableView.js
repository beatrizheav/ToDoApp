import React from "react";
import { Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import Reanimated, { useAnimatedStyle } from "react-native-reanimated";
import CustomIcon from "./CustomIcon";
import { getPriorityColor } from "../hooks/getPriorityColor";
import { fontsTheme } from "../styles/fontsTheme";
import { categoryView } from "../styles/components/category-view";
import { taskView } from "../styles/components/task-view";

const SwipeableView = ({ item, onPressEdit, setRefresh, isTask }) => {
  const priorityColor = getPriorityColor(item.priority);

  const RightAction = (prog, drag) => {
    const styleAnimation = useAnimatedStyle(() => {
      return {
        transform: [{ translateX: drag.value + 100 }],
      };
    });

    return (
      <Reanimated.View style={styleAnimation}>
        <View
          style={isTask ? taskView.iconsContainer : categoryView.rightAction}
        >
          <CustomIcon name={"edit"} onPress={() => onPressEdit()} />
          <CustomIcon name={"delete"} item={item} setRefresh={setRefresh} />
        </View>
      </Reanimated.View>
    );
  };

  return (
    <GestureHandlerRootView>
      <ReanimatedSwipeable
        containerStyle={isTask ? taskView.swipeable : categoryView.swipeable}
        friction={2}
        enableTrackpadTwoFingerGesture
        renderRightActions={RightAction}
      >
        <View style={isTask ? taskView.row : categoryView.centered}>
          {isTask ? (
            <>
              <View style={taskView.centered}>
                <Text style={fontsTheme.semiBold}>{item.name}</Text>
                <View style={[taskView.priorityLine, priorityColor]} />
              </View>
              <View style={taskView.centered}>
                <Text style={fontsTheme.regular}>{item.category}</Text>
              </View>
            </>
          ) : (
            <Text style={fontsTheme.regular}>{item.name}</Text>
          )}
        </View>
      </ReanimatedSwipeable>
    </GestureHandlerRootView>
  );
};

export default SwipeableView;
