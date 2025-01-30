import React from "react";
import { Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import Reanimated, { useAnimatedStyle } from "react-native-reanimated";
import CustomIcon from "./CustomIcon";
import { categoryView } from "../styles/components/category-view";
import { fontsTheme } from "../styles/fontsTheme";

const CategoryView = ({ category, onPress, setCategoryEdit }) => {
  const RightAction = (prog, drag) => {
    const styleAnimation = useAnimatedStyle(() => {
      return {
        transform: [{ translateX: drag.value + 100 }],
      };
    });

    return (
      <Reanimated.View style={styleAnimation}>
        <View style={categoryView.rightAction}>
          <CustomIcon
            name={"edit"}
            onPress={() => [onPress(), setCategoryEdit(category)]}
          />
          <CustomIcon name={"delete"} type={"category"} />
        </View>
      </Reanimated.View>
    );
  };

  return (
    <GestureHandlerRootView>
      <ReanimatedSwipeable
        containerStyle={categoryView.swipeable}
        friction={2}
        enableTrackpadTwoFingerGesture
        renderRightActions={RightAction}
      >
        <View style={categoryView.centered}>
          <Text style={fontsTheme.regular}>{category.label}</Text>
        </View>
      </ReanimatedSwipeable>
    </GestureHandlerRootView>
  );
};

export default CategoryView;
