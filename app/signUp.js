import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import { containers } from "../styles/containers";
import AvatarPicker from "../components/AvatarPicker";
import Ionicons from "@expo/vector-icons/Ionicons";
import CustomTitle from "../components/CustomTitle";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import AccountPrompt from "../components/AccountPrompt";
import { signUp } from "../styles/screens/sign-up";
import { colorsTheme } from "../styles/colorsTheme";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleInputChange = (field, value) => {
    setSignUpData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const [password1, setPassword1] = useState(null);

  return (
    <View style={[containers.safeArea, signUp.main]}>
      <View style={signUp.title}>
        <Link href={"/signIn"} style={signUp.backIcon}>
          <Ionicons
            name="arrow-back-outline"
            size={24}
            color={colorsTheme.darkBlue}
          />
        </Link>
        <CustomTitle text={"Sign Up"} type={"big"} />
      </View>
      <CustomInput
        label={"Name"}
        placeholder={"Enter your name"}
        value={signUpData.name}
        onChangeValue={(text) => handleInputChange("name", text)}
        type={"text"}
      />
      <CustomInput
        label={"Email"}
        placeholder={"example@gmail.com"}
        value={signUpData.email}
        onChangeValue={(text) => handleInputChange("email", text)}
        type={"email"}
      />
      <CustomInput
        label={"Create a password"}
        placeholder={"Must be 8 characters"}
        value={password1}
        onChangeValue={setPassword1}
        type={"password"}
      />
      <CustomInput
        label={"Confirm password"}
        placeholder={"repeat password"}
        value={signUpData.password}
        onChangeValue={(text) => handleInputChange("password", text)}
        type={"password"}
      />
      <View style={signUp.avatarContainer}>
        <AvatarPicker
          selectedAvatarUri={signUpData.avatar}
          onAvatarSelect={(avatarSrc) => handleInputChange("avatar", avatarSrc)}
        />
      </View>
      <CustomButton text={"Sign Up"} type={"big"} />
      <Link href={"/signIn"}>
        <AccountPrompt
          text={"Already have an account?"}
          textPressable={" Sign In"}
        />
      </Link>
    </View>
  );
};
export default SignUp;
