import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import { PostItem } from "../../../components/PostItem/PostItem";
import { styles } from "./PostScreen.styled";

export const PostScreen = ({ route }) => {
  // const { photo } = route?.params;

  // console.log("photo PostScreen", photo);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(true);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <View style={styles.info}>
          <View style={styles.image}>
            <Image
              source={require("../../../../assets/images/avatarPosts1x.jpg")}
            />
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.name}>Natali Romanova</Text>
            <Text style={styles.email}>email@example.com</Text>
          </View>
        </View>
        <View style={styles.posts}>
          <PostItem />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
