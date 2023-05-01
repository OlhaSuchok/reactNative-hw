import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Line } from "../../components/Line/Line";
import { Footer } from "../../components/Footer/Footer";
import { styles } from "./PostScreen.styled";

export const PostScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(true);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>POST</Text>
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
        </View>
        <Line mb={32} mt={0} />
        <View style={styles.info}>
          <View style={styles.image}>
            <Image
              source={require("../../../assets/images/avatarPosts1x.jpg")}
            />
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.name}>Natali Romanova</Text>
            <Text style={styles.email}>email@example.com</Text>
          </View>
        </View>
        <View style={styles.posts}></View>
        <Footer navigation={navigation} />
      </View>
    </TouchableWithoutFeedback>
  );
};
