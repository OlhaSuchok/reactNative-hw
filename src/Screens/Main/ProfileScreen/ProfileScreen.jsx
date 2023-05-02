import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { PostItem } from "../../../components/PostItem/PostItem";
import { styles } from "./ProfileScreen.styled";

export const ProfileScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

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
              <View style={styles.avatarWrapp}>
                <View style={styles.avatarWrapper}>
                  <View style={styles.avatar} />
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
                <TouchableOpacity
                  style={styles.exitButton}
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate("Login")}
                >
                  <MaterialCommunityIcons
                    name="exit-to-app"
                    size={30}
                    color="#BDBDBD"
                  />
                </TouchableOpacity>
                <Text style={styles.title}>Natali Romanova</Text>
                <ScrollView style={styles.scr}>
                  <PostItem />
                </ScrollView>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
