import React, { useState } from "react";
import { View, TouchableOpacity, Image, Text, TextInput } from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { avatars } from "../data/avatars";
import { containers } from "../styles/containers";
import { colorsTheme } from "../styles/colorsTheme";
import CustomAlert from "../components/CustomAlert";
import CustomTitle from "../components/CustomTitle";
import { fontsTheme } from "../styles/fontsTheme";

const Profile = () => {
  const router = useRouter();
  const [alertVisible, setAlertVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const profileData = {
    avatarKey: "1",
    name: "Beatriz Avila",
    mail: "avila8beatriz@gmail.com",
    password: "Beatriz123",
  };

  const avatar = avatars.find((item) => item.key === profileData.avatarKey);

  return (
    <View style={containers.safeArea}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons
            name="arrow-back-outline"
            size={25}
            color={colorsTheme.darkBlue}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setAlertVisible(true)}>
          <MaterialIcons name="logout" size={26} color={colorsTheme.darkBlue} />
        </TouchableOpacity>
      </View>
      <Image
        source={avatar.src}
        style={{
          height: 120,
          width: 120,
          alignSelf: "center",
          borderRadius: 60,
          backgroundColor: colorsTheme.softYellow,
          marginTop: 100,
        }}
      />
      <View style={{ alignSelf: "center", marginTop: 15, marginBottom: 40 }}>
        <CustomTitle text={profileData.name} type={"small"} />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 40,
        }}
      >
        <AntDesign name="mail" size={24} color={colorsTheme.darkBlue} />
        <Text
          style={[
            fontsTheme.regular,
            { marginLeft: 10, textDecorationLine: "underline" },
          ]}
        >
          {profileData.mail}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 40,
          marginTop: 15,
        }}
      >
        <Ionicons
          name="lock-closed-outline"
          size={27}
          color={colorsTheme.darkBlue}
        />
        <TextInput
          style={[fontsTheme.regular, { marginLeft: 10, flex: 1 }]}
          value={profileData.password}
          secureTextEntry={!showPassword} // Toggle visibility based on showPassword state
          editable={false} // Prevent editing the password directly
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
        confirmAction={() => router.push("./signIn")}
      />
    </View>
  );
};

export default Profile;
