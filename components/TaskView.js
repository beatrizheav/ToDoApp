import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import Reanimated, {
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { colorsTheme } from "../styles/colorsTheme";
import { fontsTheme } from "../styles/fontsTheme";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import CustomIcon from "./CustomIcon";

const RightAction = (prog, drag) => {
  const styleAnimation = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: drag.value + 100 }],
    };
  });

  return (
    <Reanimated.View style={styleAnimation}>
      <View style={styles.rightAction}>
        <CustomIcon name={"edit"} />
        <CustomIcon name={"delete"} />
      </View>
    </Reanimated.View>
  );
};

const TaskView = () => {
  return (
    <GestureHandlerRootView>
      <ReanimatedSwipeable
        containerStyle={styles.swipeable}
        friction={2}
        enableTrackpadTwoFingerGesture
        renderRightActions={RightAction}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={fontsTheme.semiBold}>Send email</Text>
            <View style={styles.priorityLine} />
          </View>
          <View
            style={{
              height: "100%",
              justifyContent: "center",
            }}
          >
            <Text style={fontsTheme.regular}>Work</Text>
          </View>
        </View>
      </ReanimatedSwipeable>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  rightAction: {
    flexDirection: "row",
    width: 100,
    height: "100%",
    // backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
  },
  priorityLine: {
    height: 4,
    width: 30,
    backgroundColor: colorsTheme.vividRed,
    borderRadius: 2,
  },
  swipeable: {
    height: 48,
    width: "100%",
    paddingVertical: 8,
    paddingHorizontal: "6%",
    borderWidth: 1,
    borderColor: colorsTheme.lightestGray,
    borderRadius: 10,
    // backgroundColor: "blue",
    justifyContent: "center",
  },
});

export default TaskView;
