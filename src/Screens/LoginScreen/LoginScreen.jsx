import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "./LoginScreen.styled";

export const LoginScreen = ({ isShowKeyboard, setIsShowKeyboard }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

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

  return (
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
        <TouchableOpacity style={styles.buttonShowPassword} activeOpacity={0.7}>
          <Text style={styles.buttonShowPasswordText} onPress={onShowPassword}>
            Show
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{ ...styles.button, marginTop: isShowKeyboard ? 18 : 27 }}
        activeOpacity={0.7}
        onPress={onLogin}
      >
        <Text style={styles.buttonText}>SIGN IN</Text>
      </TouchableOpacity>
      <Text style={styles.registrationLink}>
        Don't have an account? Sign up
      </Text>
    </View>
  );
};