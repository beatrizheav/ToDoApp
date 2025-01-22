import React, { useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import { containers } from "../styles/containers";
import CustomTitle from "../components/CustomTitle";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import AccountPrompt from "../components/AccountPrompt";

const SignIn = () => {
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={containers.main}>
      <CustomTitle text={"Sign In"} type={"big"} />
      <Image
        style={styles.image}
        source={require("../assets/images/SignIn.png")}
      />
      <CustomInput
        label={"Email address"}
        placeholder={"Enter your email"}
        value={email}
        onChangeValue={setEmail}
        type={"email"}
      />
      <CustomInput
        label={"Password"}
        placeholder={"Enter your password"}
        value={password}
        onChangeValue={setPassword}
        type={"password"}
      />
      <CustomButton text={"Sign In"} type={"big"} onPress={""} />
      <AccountPrompt
        text={"Don't have an account?"}
        textPressable={" Sign up"}
      />
    </View>
  );
};
export default SignIn;

const styles = StyleSheet.create({
  image: {
    width: 230,
    height: 230,
  },
});
