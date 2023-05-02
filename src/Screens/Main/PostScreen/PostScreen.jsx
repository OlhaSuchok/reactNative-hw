import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import { PostItem } from "../../../components/PostItem/PostItem";
import { styles } from "./PostScreen.styled";

export const PostScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  useEffect(() => {
    if (route.params) {
      // const { photo } = route?.params;
      // console.log("photo PostScreen", photo);
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  console.log("posts PostScreen", posts);

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
        <FlatList
          style={styles.posts}
          data={posts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <PostItem item={item} navigation={navigation} />
          )}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
