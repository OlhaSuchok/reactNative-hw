import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

// import { MainButton } from "../../../components/MainButton/MainButton";
import { MainButton } from "../../../components/MainButton/MainButton";
import { styles } from "./LoginScreen.styled";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const onLogin = () => {
    if (email.trim() === "" || password.trim() === "") {
      Alert.alert("Fill in all fields!");
    } else {
      Alert.alert("Hello!");

      console.log(`'email:', ${email}, 'password:', ${password},`);

      setEmail("");
      setPassword("");
    }
  };

  const onShowPassword = () => {
    setShowPassword(showPassword ? false : true);
  };

  const keyboardHide = () => {
    setIsShowKeyboard(true);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          // source={require("../../../assets/images/background1x.jpg")}
          source={require("../../../../assets/images/background1x.jpg")}
        >
          <KeyboardAvoidingView
            style={styles.formWrapper}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={styles.form}>
              <Text style={styles.title}>SIGN IN</Text>
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={emailHandler}
                onFocus={() => setIsShowKeyboard(true)}
              ></TextInput>
              <View style={styles.buttonShowPasswordWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  value={password}
                  onChangeText={passwordHandler}
                  secureTextEntry={showPassword}
                  onFocus={() => setIsShowKeyboard(true)}
                ></TextInput>
                <TouchableOpacity
                  style={styles.buttonShowPassword}
                  activeOpacity={0.7}
                >
                  <Text
                    style={styles.buttonShowPasswordText}
                    onPress={onShowPassword}
                  >
                    Show
                  </Text>
                </TouchableOpacity>
              </View>
              <MainButton
                isShowKeyboard={isShowKeyboard}
                onLogin={onLogin}
                text={"SIGN IN"}
                color={"#FFFFFF"}
                backgroundColor={"#FF6C00"}
                mt={0}
                mb={16}
              />
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={styles.registrationLink}>
                  Don't have an account? Sign up
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
