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

import { useDispatch } from "react-redux";

import { MainButton } from "../../../components/MainButton/MainButton";
import { styles } from "./LoginScreen.styled";

import { authSignInUser } from "../../../../redux/auth/authOperations";

const initialState = {
  email: "",
  password: "",
};

export const LoginScreen = ({ navigation }) => {
  const [state, setState] = useState(initialState);
  const [showPassword, setShowPassword] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const dispatch = useDispatch();

  const emailHandler = (value) =>
    setState((prevState) => ({ ...prevState, email: value }));
  const passwordHandler = (value) =>
    setState((prevState) => ({ ...prevState, password: value }));

  const handleSubmit = () => {
    if (state.email.trim() === "" || state.password.trim() === "") {
      Alert.alert("Fill in all fields!");
    } else {
      Alert.alert("Hello!");
      console.log("state LoginScreen", state);

      dispatch(authSignInUser(state));
      setState(initialState);
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
                value={state.email}
                onChangeText={emailHandler}
                onFocus={() => setIsShowKeyboard(true)}
              ></TextInput>
              <View style={styles.buttonShowPasswordWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  value={state.password}
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
                onPress={handleSubmit}
                text={"SIGN IN"}
                color={"#FFFFFF"}
                backgroundColor={"#FF6C00"}
                mt={0}
                mb={16}
              />
              <View style={styles.linkWrapper}>
                <Text style={styles.registrationLink}>
                  Don't have an account?
                </Text>
                <TouchableOpacity>
                  <Text
                    style={styles.link}
                    onPress={() => navigation.navigate("Register")}
                  >
                    Sign up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
