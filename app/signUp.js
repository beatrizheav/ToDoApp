import React, { useState } from "react";
import { View } from "react-native";
import { Link } from "expo-router";
import { handleInputChange } from "../hooks/handleInputChange";
import AvatarPicker from "../components/AvatarPicker";
import Ionicons from "@expo/vector-icons/Ionicons";
import CustomTitle from "../components/CustomTitle";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import AccountPrompt from "../components/AccountPrompt";
import { signUp } from "../styles/screens/sign-up";
import { colorsTheme } from "../styles/colorsTheme";
import { containers } from "../styles/containers";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  const [password1, setPassword1] = useState(null);

  const validateForm = () => {
    const errors = [];

    const validations = [
      {
        check: () => !signUpData.name || signUpData.name.length < 2,
        message: "Enter a valid name.",
      },
      {
        check: () =>
          !signUpData.email || !/\S+@\S+\.\S+/.test(signUpData.email),
        message: "Please enter a valid email address.",
      },
      {
        check: () =>
          !signUpData.password ||
          signUpData.password.length < 8 ||
          password1.length < 8,
        message: "The password must be at least 8 characters.",
      },
      {
        check: () => signUpData.password !== password1,
        message: "The passwords must match.",
      },
      {
        check: () => !signUpData.avatar || !password1,
        message: "All fields are required.",
      },
    ];

    validations.forEach((validation) => {
      if (validation.check()) {
        errors.push(validation.message);
      }
    });

    // If there are errors, alert them and return false
    if (errors.length > 0) {
      alert(errors.join("\n"));
      return false;
    }

    // If no errors, form is valid
    alert("Inputs are correct.");
    return true;
  };

  console.log(signUpData);

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
        onChangeValue={(text) => handleInputChange(setSignUpData, "name", text)}
        type={"text"}
      />
      <CustomInput
        label={"Email"}
        placeholder={"example@gmail.com"}
        value={signUpData.email}
        onChangeValue={(text) =>
          handleInputChange(setSignUpData, "email", text)
        }
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
        onChangeValue={(text) =>
          handleInputChange(setSignUpData, "password", text)
        }
        type={"password"}
      />
      <View style={signUp.avatarContainer}>
        <AvatarPicker
          selectedAvatarUri={signUpData.avatar}
          onAvatarSelect={(avatarSrc) =>
            handleInputChange(setSignUpData, "avatar", avatarSrc)
          }
        />
      </View>
      <CustomButton text={"Sign Up"} type={"big"} onPress={validateForm} />
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
