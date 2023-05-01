import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { Header } from "../../components/Header/Header";
import { MainButton } from "../../components/MainButton/MainButton";
import { Line } from "../../components/Line/Line";
import { styles } from "./CreatePostsScreen.styled";

export const CreatePostScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(true);
    Keyboard.dismiss();
  };

  const onLogin = () => {
    // if (email.trim() === "" || password.trim() === "") {
    //   Alert.alert("Fill in all fields!");
    // } else {
    //   Alert.alert("Hello!");
    //   console.log(`'email:', ${email}, 'password:', ${password},`);
    //   setEmail("");
    //   setPassword("");
    // }
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <Header navigation={navigation} title={"CREATE A POST"} />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flexGrow: 1 }}
        >
          <View style={styles.post}>
            <View>
              <View style={styles.imageWrapper}>
                <TouchableOpacity
                  style={styles.imageButton}
                  activeOpacity={0.7}
                >
                  <MaterialIcons
                    name="photo-camera"
                    size={30}
                    color="#E8E8E8"
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.imageTextWraper}
                activeOpacity={0.7}
              >
                <Text style={styles.imageText}>Upload a photo</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.form}>
              <TextInput
                style={styles.input}
                placeholder="Name..."
                // value={password}
                // onChangeText={passwordHandler}
                onFocus={() => setIsShowKeyboard(true)}
              ></TextInput>
              <Line mt={0} mb={32} />
              <View style={styles.localityWrapper}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.localityIcon}
                >
                  <MaterialIcons name="location-on" size={24} color="black" />
                </TouchableOpacity>
                <TextInput
                  style={styles.input}
                  placeholder="Locality..."
                  // value={password}
                  // onChangeText={passwordHandler}
                  onFocus={() => setIsShowKeyboard(true)}
                ></TextInput>
              </View>
              <Line mt={0} mb={32} />
              <MainButton
                isShowKeyboard={isShowKeyboard}
                onLogin={onLogin}
                text={"PUBLISH"}
                color={"#BDBDBD"}
                backgroundColor={"#F6F6F6"}
                mt={0}
                mb={30}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
        <View style={styles.footer}>
          <View style={styles.navigation}>
            <TouchableOpacity style={styles.buttonPlus} activeOpacity={0.7}>
              <AntDesign name="delete" size={24} color="#DADADA" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
