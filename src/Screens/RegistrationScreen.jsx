import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const RegistrationScreen = ({ isShowKeyboard, setIsShowKeyboard }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

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

  return (
    <View style={styles.form}>
      <View style={styles.avatarWrapper}>
        <View style={styles.avatar}></View>
        <TouchableOpacity style={styles.avatarButton} activeOpacity={0.7}>
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
      ></TextInput>
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
          onPress={onShowPassword}
        >
          <Text style={styles.buttonShowPasswordText}>Show</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{ ...styles.button, marginTop: isShowKeyboard ? 18 : 27 }}
        activeOpacity={0.7}
        onPress={onLogin}
      >
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
      <Text style={styles.registrationLink}>
        Already have an account? Sign in
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    alignItems: "center",
    paddingTop: 32,
    height: 549,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  avatar: {},
  avatarWrapper: {
    position: "relative",
    marginBottom: 32,
    marginTop: -60,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  avatarButton: {
    position: "absolute",
    bottom: 14,
    right: -13,
  },
  avatarIcon: {},
  title: {
    marginTop: 0,
    marginBottom: 33,
    color: "#212121",
    fontFamily: "Roboto - medium",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 30,
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
