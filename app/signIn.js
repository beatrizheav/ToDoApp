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

const SignIn = () => {
  const router = useRouter();

  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  console.log(signInData);

  const validateForm = useFormValidation(signInData, "signIn");

  const handleSubmit = (e) => {
    // e.preventDefault();
    if (validateForm()) {
      alert("Inputs correct");
      // Aquí proceder con el registro
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
