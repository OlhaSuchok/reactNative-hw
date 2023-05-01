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
import { AntDesign } from "@expo/vector-icons";

import { MainButton } from "../../../components/MainButton/MainButton";
import { styles } from "./RegistrationScreen.styled";

export const RegistrationScreen = ({ navigation }) => {
  console.log("navigation register", navigation);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const nameHandler = (text) => setName(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const onLogin = () => {
    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      Alert.alert("Fill in all fields!");
    } else {
      Alert.alert("Welcome,", `${name}!`);

      console.log(
        `'name:', ${name}, 'email:', ${email}, 'password:', ${password},`
      );

      setName("");
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
                value={name}
                onChangeText={nameHandler}
                onFocus={() => setIsShowKeyboard(true)}
                maxLength={20}
              ></TextInput>
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={emailHandler}
                onFocus={() => setIsShowKeyboard(true)}
                maxLength={20}
              ></TextInput>
              <View style={styles.buttonShowPasswordWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  value={password}
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
                onLogin={onLogin}
                text={"SIGN UP"}
                color={"#FFFFFF"}
                backgroundColor={"#FF6C00"}
                mt={0}
                mb={16}
              />
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.registrationLink}>
                  Already have an account? Sign in
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
