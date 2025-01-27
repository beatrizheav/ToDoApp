import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import CustomButton from "./CustomButton";
import { navBar } from "../styles/components/nav-bar";
import { colorsTheme } from "../styles/colorsTheme";

const NavBar = () => {
  const router = useRouter();

  return (
    <View style={navBar.container}>
      <TouchableOpacity onPress={() => router.push("./categories")}>
        <Ionicons
          name="layers-outline"
          size={30}
          color={colorsTheme.darkBlue}
        />
      </TouchableOpacity>
      <CustomButton type={"add"} />
      <TouchableOpacity onPress={() => router.push("./profile")}>
        <FontAwesome name="user-o" size={27} color={colorsTheme.darkBlue} />
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;
