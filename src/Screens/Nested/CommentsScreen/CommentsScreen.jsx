import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import {
  View,
  TouchableOpacity,
  Keyboard,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { db } from "../../../../firebase/config";
import { collection, onSnapshot, query, addDoc } from "firebase/firestore";

import { useSelector } from "react-redux";

import { CommentItem } from "../../../components/CommentItem/CommentItem";
import { styles } from "./CommentsScreen.styled";

export const CommentsScreen = ({ navigation, route }) => {
  const { postId, photo } = route.params;
  const { userName } = useSelector((state) => state.auth);

  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const createComment = async () => {
    try {
      await addDoc(collection(db, `posts/${postId}/comments`), {
        comment,
        userName,
        data: format(Date.now(), "PPpp"),
      });
      setComment("");
    } catch (error) {
      setError(error.message);
    }
  };

  const keyboardHide = () => {
    setIsShowKeyboard(true);
    Keyboard.dismiss();
  };

  const getComments = () => {
    const q = query(collection(db, `posts/${postId}/comments`));
    onSnapshot(q, (querySnapshot) => {
      const comments = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        commentId: doc.id,
      }));
      setComments(comments);
    });
  };

  const removeCommen = (id) => {
    setComments((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flexGrow: 1, paddingTop: 32 }}
        >
          <SafeAreaView style={styles.commentsWrp}>
            <Image style={styles.imageWrapper} source={{ uri: photo }} />
            <FlatList
              style={styles.comments}
              data={comments}
              keyExtractor={(item, index) => item.commentId}
              renderItem={({ item }) => (
                <CommentItem
                  item={item}
                  onRemove={removeCommen}
                  navigation={navigation}
                />
              )}
            />
          </SafeAreaView>
          <View style={styles.button}>
            <TextInput
              placeholder="Comment..."
              onChangeText={setComment}
              value={comment}
              onFocus={() => setIsShowKeyboard(true)}
            ></TextInput>
            <TouchableOpacity
              style={styles.buttonSend}
              activeOpacity={0.7}
              onPress={createComment}
            >
              <AntDesign name="arrowup" size={22} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};
