import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Keyboard,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import {
  collection,
  onSnapshot,
  query,
  doc,
  getCountFromServer,
} from "firebase/firestore";

import { db } from "../../../../firebase/config";

import { PostItem } from "../../../components/PostItem/PostItem";
import { styles } from "./DefaultPostScreen.styled";

export const DefaultPostScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const getAllPosts = async () => {
    try {
      const q = query(collection(db, "posts"));

      onSnapshot(q, async (querySnapshot) => {
        const posts = await Promise.all(
          querySnapshot.docs.map(async (doc) => {
            const coll = collection(db, `posts/${doc.id}/comments`);
            const snapshot = await getCountFromServer(coll);

            return {
              ...doc.data(),
              postId: doc.id,
              commentCount: snapshot.data().count,
            };
          })
        );

        setPosts(posts);
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  console.log("posts", posts);

  useEffect(() => {
    getAllPosts();
    console.log("posts useEffect", posts);
  }, []);

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
