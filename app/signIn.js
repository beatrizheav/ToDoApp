import React, { useState } from "react";
import { View, Image, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useRouter } from "expo-router";
import { handleInputChange } from "../hooks/handleInputChange";
import CustomTitle from "../components/CustomTitle";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import AccountPrompt from "../components/AccountPrompt";
import { signIn } from "../styles/screens/sign-in";
import { containers } from "../styles/containers";
import useFormValidation from "../hooks/useFormValidation";
import axiosInstance from "../api/axiosInstance";

const SignIn = () => {
  const router = useRouter();

  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const [apiResponse, setApiResponse] = useState("");

  const validateForm = useFormValidation(signInData, "signIn");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      console.log(signInData);
      const response = await axiosInstance.get("/users/auth", {
        params: signInData,
      });
      setApiResponse(response);
      console.log("RESPONSE:", response.data);
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
      <View style={[containers.safeArea, signIn.main]}>
        <CustomTitle text={"Sign In"} type={"big"} />
        <View style={signIn.imageContainer}>
          <Image
            style={signIn.image}
            source={require("../assets/images/SignIn.png")}
          />
        </View>
        <View style={signIn.inputs}>
          <CustomInput
            label={"Email address"}
            placeholder={"Enter your email"}
            value={signInData.email}
            onChangeValue={(text) =>
              handleInputChange(setSignInData, "email", text)
            }
            type={"email"}
          />
          <CustomInput
            label={"Password"}
            placeholder={"Enter your password"}
            value={signInData.password}
            onChangeValue={(text) =>
              handleInputChange(setSignInData, "password", text)
            }
            type={"password"}
          />
        </View>
        <View>
          <CustomButton text={"Sign In"} type={"big"} onPress={handleSubmit} />
          <AccountPrompt
            text={"Don't have an account?"}
            textPressable={" Sign up"}
            onPress={() => router.push("./signUp")}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default SignIn;
