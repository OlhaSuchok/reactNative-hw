import React, { useState } from "react";
import { useFonts } from "expo-font";

import {
  StyleSheet,
  View,
  ImageBackground,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import { LoginScreen } from "./src/Screens/LoginScreen";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen";

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(true);
    Keyboard.dismiss();
  };

  const [fontsLoaded] = useFonts({
    "Roboto - regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto - medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("./assets/images/background1x.jpg")}
        >
          <KeyboardAvoidingView
            style={styles.form}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            {/* <RegistrationScreen
              isShowKeyboard={isShowKeyboard}
              setIsShowKeyboard={setIsShowKeyboard}
              keyboardHide={keyboardHide}
            /> */}
            <LoginScreen
              isShowKeyboard={isShowKeyboard}
              setIsShowKeyboard={setIsShowKeyboard}
              keyboardHide={keyboardHide}
            />
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    resizeMode: "cover",
  },
  form: {
    justifyContent: "center",
    alignItems: "center",
    height: 549,
    width: "100%",
  },
});
