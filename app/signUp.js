import React, { useState } from "react";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useRouter } from "expo-router";
import { handleInputChange } from "../hooks/handleInputChange";
import AvatarPicker from "../components/AvatarPicker";
import BackIcon from "../components/BackIcon";
import CustomTitle from "../components/CustomTitle";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import AccountPrompt from "../components/AccountPrompt";
import { signUp } from "../styles/screens/sign-up";
import { containers } from "../styles/containers";
import useFormValidation from "../hooks/useFormValidation";
import axiosInstance from "../api/axiosInstance";

const SignUp = () => {
  const router = useRouter();

  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const data = { ...signUpData, confirmPassword };

  const validateForm = useFormValidation(data, "signUp");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await axiosInstance.post("/users/registration", signUpData);
      router.push("/main");
    } catch (error) {
      if (error.response) {
        errorMessage =
          error.response.data.message ||
          "Something went wrong while processing your request.";
        alert(errorMessage);
      } else if (error.request) {
        console.error("Request error:", error.request);
        alert("Error: No response from the server.");
      } else {
        console.error("Error message:", error.data.message);
        alert("Error: An unexpected error occurred.");
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={[containers.safeArea, signUp.main]}>
        <View style={signUp.title}>
          <BackIcon />
          <CustomTitle text={"Sign Up"} type={"big"} />
        </View>
        <CustomInput
          label={"Name"}
          placeholder={"Enter your name"}
          value={signUpData.name}
          onChangeValue={(text) =>
            handleInputChange(setSignUpData, "name", text)
          }
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
          value={confirmPassword}
          onChangeValue={setConfirmPassword}
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
            selectedAvatar={signUpData.avatar}
            onAvatarSelect={(avatarSrc) =>
              handleInputChange(setSignUpData, "avatar", avatarSrc)
            }
          />
        </View>
        <CustomButton text={"Sign Up"} type={"big"} onPress={handleSubmit} />
        <AccountPrompt
          text={"Already have an account?"}
          textPressable={" Sign In"}
          onPress={() => router.push("/signIn")}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
export default SignUp;
