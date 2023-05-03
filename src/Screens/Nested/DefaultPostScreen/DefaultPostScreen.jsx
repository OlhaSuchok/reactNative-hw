import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Keyboard,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import { PostItem } from "../../../components/PostItem/PostItem";
import { styles } from "./DefaultPostScreen.styled";

export const DefaultPostScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  useEffect(() => {
    if (route.params) {
      const { photo, title, location, locationData } = route.params;
      setPosts((prevState) => [
        ...prevState,
        {
          id: Date.now().toString(),
          title: title,
          photo: photo,
          location: location,
          locationData: {
            ...locationData,
          },
        },
      ]);
    }
  }, [route.params]);

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
          keyExtractor={(index) => index.toString()}
          renderItem={({ item }) => (
            <PostItem item={item} navigation={navigation} />
          )}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
