import React, { useState } from "react";
import { formatDistance, subDays, format } from "date-fns";
import {
  View,
  TouchableOpacity,
  Keyboard,
  Image,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

import { CommentItem } from "../../../components/CommentItem/CommentItem";
import { styles } from "./CommentsScreen.styled";

const commentsList = [
  {
    id: 1,
    text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love sometips!",
    data: format(Date.now(), "PPpp"),
  },
  {
    id: 2,
    text: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
    data: format(Date.now(), "PPpp"),
  },
  {
    id: 3,
    text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love sometips!",
    data: format(Date.now(), "PPpp"),
  },
  {
    id: 4,
    text: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
    data: format(Date.now(), "PPpp"),
  },
];

export const CommentsScreen = ({ navigation }) => {
  const [comments, setComments] = useState(commentsList);
  const [value, setValue] = useState("");
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(true);
    Keyboard.dismiss();
  };

  const addComment = (text) => {
    setComments((prevComments) => [
      ...prevComments,
      {
        id: Date.now().toString(),
        text,
        data: format(Date.now(), "PPpp"),
      },
    ]);
  };

  const pressHandler = (text) => {
    if (value.trim()) {
      addComment(value);
      setValue("");
    } else {
      Alert.alert("Введіть коментарій");
    }
  };

  const removeCommen = (id) => {
    setComments((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flexGrow: 1, paddingTop: 32 }}
        >
          <View style={styles.commentsWrp}>
            <View style={styles.imageWrapper}></View>
            <ScrollView>
              <FlatList
                style={styles.comments}
                data={comments}
                keyExtractor={(item, index) => item.id.toString()}
                renderItem={({ item }) => (
                  <CommentItem
                    item={item}
                    onRemove={removeCommen}
                    navigation={navigation}
                  />
                )}
              />
            </ScrollView>
          </View>
          <View style={styles.button}>
            <TextInput
              placeholder="Comment..."
              onChangeText={setValue}
              value={value}
              onFocus={() => setIsShowKeyboard(true)}
            ></TextInput>
            <TouchableOpacity
              style={styles.buttonSend}
              activeOpacity={0.7}
              onPress={pressHandler}
              onSubmit={addComment}
            >
              <AntDesign name="arrowup" size={22} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};
