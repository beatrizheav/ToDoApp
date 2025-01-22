import React, { useState } from "react";
import { View, Image, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Link } from "expo-router";
import { handleInputChange } from "../hooks/handleInputChange";
import CustomTitle from "../components/CustomTitle";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import AccountPrompt from "../components/AccountPrompt";
import { signIn } from "../styles/screens/sign-in";
import { containers } from "../styles/containers";

const SignIn = () => {
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (field, value) => {
    setSignInData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const validateForm = () => {
    if (!signInData.email || !signInData.password) {
      alert("Both fields are required.");
      return false;
    }

    alert("Inputs correct");
    return true;
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
            onChangeValue={(text) => handleInputChange("email", text)}
            type={"email"}
          />
          <CustomInput
            label={"Password"}
            placeholder={"Enter your password"}
            value={signInData.password}
            onChangeValue={(text) => handleInputChange("password", text)}
            type={"password"}
          />
        </View>
        <View>
          <CustomButton text={"Sign In"} type={"big"} onPress={validateForm} />
          <Link href={"/signUp"}>
            <AccountPrompt
              text={"Don't have an account?"}
              textPressable={" Sign up"}
            />
          </Link>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default SignIn;
