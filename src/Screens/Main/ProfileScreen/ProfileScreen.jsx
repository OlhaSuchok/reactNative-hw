import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { authSignOutUser } from "../../../../redux/auth/authOperations";
import { useDispatch } from "react-redux";

import { db } from "../../../../firebase/config";
import {
  collection,
  onSnapshot,
  query,
  getCountFromServer,
  where,
} from "firebase/firestore";

import { useSelector } from "react-redux";

import { PostItem } from "../../../components/PostItem/PostItem";
import { styles } from "./ProfileScreen.styled";

export const ProfileScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [posts, setPosts] = useState([]);

  const { userId } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(authSignOutUser());
  };

  const keyboardHide = () => {
    setIsShowKeyboard(true);
    Keyboard.dismiss();
  };

  const getUserPosts = async () => {
    const postsRef = collection(db, "posts");
    const q = query(postsRef, where("userId", "==", userId));

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
  };

  useEffect(() => {
    getUserPosts();
  }, []);

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
                  onPress={signOut}
                >
                  <MaterialCommunityIcons
                    name="exit-to-app"
                    size={30}
                    color="#BDBDBD"
                  />
                </TouchableOpacity>
                <Text style={styles.title}>Natali Romanova</Text>
                <FlatList
                  style={styles.scr}
                  data={posts}
                  keyExtractor={(item, index) => item.postId}
                  renderItem={({ item }) => (
                    <PostItem item={item} navigation={navigation} />
                  )}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
