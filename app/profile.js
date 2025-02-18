import React, { useState } from "react";
import { View, TouchableOpacity, Image, Text, TextInput } from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import CustomAlert from "../components/CustomAlert";
import CustomTitle from "../components/CustomTitle";
import BackIcon from "../components/BackIcon";
import { avatars } from "../data/avatars";
import { containers } from "../styles/containers";
import { colorsTheme } from "../styles/colorsTheme";
import { fontsTheme } from "../styles/fontsTheme";
import { profile } from "../styles/screens/profile";
import { useUser } from "../context/UserContext";

const Profile = () => {
  const router = useRouter();
  const { user, clearUser } = useUser();
  const [alertVisible, setAlertVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const avatar = avatars.find((item) => item.key === user.avatar);

  return (
    <View style={containers.safeArea}>
      <View style={profile.header}>
        <BackIcon />
        <TouchableOpacity onPress={() => setAlertVisible(true)}>
          <MaterialIcons name="logout" size={26} color={colorsTheme.darkBlue} />
        </TouchableOpacity>
      </View>
      <Image source={avatar.src} style={profile.avatar} />
      <View style={profile.title}>
        <CustomTitle text={user.name} type={"small"} />
      </View>
      <View style={profile.infoContainer}>
        <AntDesign name="mail" size={24} color={colorsTheme.darkBlue} />
        <Text style={[fontsTheme.regular, profile.mailText]}>{user.email}</Text>
      </View>
      <View style={profile.infoContainer}>
        <Ionicons
          name="lock-closed-outline"
          size={27}
          color={colorsTheme.darkBlue}
        />
        <TextInput
          style={[fontsTheme.regular, profile.passwordText]}
          value={user.password}
          secureTextEntry={!showPassword}
          editable={false}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Feather
            name={showPassword ? "eye" : "eye-off"}
            size={20}
            color={colorsTheme.lightGray}
          />
        </TouchableOpacity>
      </View>
      <CustomAlert
        visible={alertVisible}
        setVisible={setAlertVisible}
        title={"Log out"}
        description={"Are you sure you want to log out?"}
        confirmAction={() => [router.push("./signIn"), clearUser()]}
      />
    </View>
  );
};

export default Profile;
