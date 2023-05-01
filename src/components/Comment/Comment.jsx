import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./Comment.styled";

export const Comment = ({ comment, onRemove }) => {
  const longPressHandler = () => {
    onRemove(comment.id);
  };

  return (
    <View style={styles.comment}>
      <View style={styles.commentAvatar}></View>
      <TouchableOpacity onLongPress={longPressHandler}>
        <View style={styles.commentTextWrapper}>
          <Text style={styles.commentText}>{comment.text}</Text>
          <Text style={styles.commentTextData}>{comment.data}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
