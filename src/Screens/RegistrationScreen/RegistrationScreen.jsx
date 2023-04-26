import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./RegistrationScreen.styled";

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
