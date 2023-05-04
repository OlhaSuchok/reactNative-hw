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
import { AntDesign } from "@expo/vector-icons";

import { MainButton } from "../../../components/MainButton/MainButton";
import { styles } from "./RegistrationScreen.styled";

import { authSignUpUser } from "../../../../redux/auth/authOperations";

const initialState = {
  email: "",
  password: "",
  nickname: "",
};

export const RegistrationScreen = ({ navigation }) => {
  const [state, setState] = useState(initialState);
  const [showPassword, setShowPassword] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const dispatch = useDispatch();
  const nicknameHandler = (value) =>
    setState((prevState) => ({ ...prevState, nickname: value }));
  const emailHandler = (value) =>
    setState((prevState) => ({ ...prevState, email: value }));
  const passwordHandler = (value) =>
    setState((prevState) => ({ ...prevState, password: value }));

  const handleSubmit = () => {
    console.log("state", state);
    if (
      state.nickname.trim() === "" ||
      state.email.trim() === "" ||
      state.password.trim() === ""
    ) {
      Alert.alert("Fill in all fields!");
    } else {
      Alert.alert("Welcome,", `${state.nickname}!`);

      dispatch(authSignUpUser(state));
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
              <View style={styles.avatarWrapper}>
                <View style={styles.avatar}></View>
                <TouchableOpacity
                  style={styles.avatarButton}
                  activeOpacity={0.7}
                >
                  <AntDesign
                    style={styles.avatarIcon}
                    name="pluscircleo"
                    size={26}
                    color="#FF6C00"
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.title}>SIGN UP</Text>
              <TextInput
                style={styles.input}
                placeholder="Name"
                value={state.nickname}
                onChangeText={nicknameHandler}
                onFocus={() => setIsShowKeyboard(true)}
                maxLength={20}
              ></TextInput>
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={state.email}
                onChangeText={emailHandler}
                onFocus={() => setIsShowKeyboard(true)}
                maxLength={20}
              ></TextInput>
              <View style={styles.buttonShowPasswordWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  value={state.password}
                  onChangeText={passwordHandler}
                  secureTextEntry={showPassword}
                  onFocus={() => setIsShowKeyboard(true)}
                  maxLength={20}
                ></TextInput>
                <TouchableOpacity
                  style={styles.buttonShowPassword}
                  activeOpacity={0.7}
                  onPress={onShowPassword}
                >
                  <Text style={styles.buttonShowPasswordText}>Show</Text>
                </TouchableOpacity>
              </View>
              <MainButton
                isShowKeyboard={isShowKeyboard}
                onPress={handleSubmit}
                text={"SIGN UP"}
                color={"#FFFFFF"}
                backgroundColor={"#FF6C00"}
                mt={0}
                mb={16}
              />
              <View style={styles.linkWrapper}>
                <Text style={styles.registrationLink}>
                  Already have an account?
                </Text>
                <TouchableOpacity>
                  <Text
                    style={styles.link}
                    onPress={() => navigation.navigate("Login")}
                  >
                    Sign in
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
