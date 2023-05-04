import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./CommentItem.styled";

export const CommentItem = ({ item, onRemove }) => {
  const longPressHandler = () => {
    // onRemove(item.commentId);
  };

  return (
    <View style={styles.comment}>
      <View style={styles.commentAvatar}></View>
      <TouchableOpacity onLongPress={longPressHandler}>
        <View style={styles.commentTextWrapper}>
          <Text style={styles.commentText}>{item.comment}</Text>
          <Text style={styles.commentTextData}>{item.data}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
