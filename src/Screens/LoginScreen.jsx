import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

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

const styles = StyleSheet.create({
  form: {
    alignItems: "center",
    height: 549,
    width: "100%",
    paddingTop: 32,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  title: {
    marginTop: 0,
    marginBottom: 33,
    fontFamily: "Roboto - medium",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 30,
    color: "#212121",
  },
  input: {
    marginBottom: 16,
    padding: 16,
    height: 50,
    width: 343,
    backgroundColor: "#F6F6F6",
    color: "#212121",

    borderWidth: 1,
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    width: 343,
    height: 50,
    backgroundColor: "#FF6C00",
    color: "#FFFFFF",
    borderRadius: 100,
  },
  buttonText: {
    color: "#FFFFFF",
    fontFamily: "Roboto - regular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
  },
  buttonShowPasswordWrapper: {
    position: "relative",
    flexDirection: "row",
  },
  buttonShowPassword: {
    position: "absolute",
    top: 16,
    right: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  buttonShowPasswordText: {
    color: "#1B4371",
    fontFamily: "Roboto - regular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
  },
  registrationLink: {
    color: "#1B4371",
    fontFamily: "Roboto - regular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
  },
});
