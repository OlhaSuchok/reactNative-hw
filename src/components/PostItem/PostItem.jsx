import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./PostItem.styled";

export const PostItem = ({ comment, onRemove }) => {
  const longPressHandler = () => {
    onRemove(comment.id);
  };

  return (
    <View style={styles.scr}>
      <View style={styles.postPhoto} />
      <View style={styles.postDataWrapper}>
        <Text style={styles.postName}>Sunset</Text>
        <View style={styles.postData}>
          <View style={styles.postData}>
            <View style={{ ...styles.postInfoWrapper, marginRight: 27 }}>
              <TouchableOpacity
                style={styles.postDataButton}
                activeOpacity={0.7}
              >
                <FontAwesome
                  style={styles.postCommentsCountIcon}
                  name="comment"
                  size={24}
                  color="#FF6C00"
                />
              </TouchableOpacity>
              <Text style={styles.postDataText}>43</Text>
            </View>
            <View style={{ ...styles.postInfoWrapper, marginRight: 140 }}>
              <TouchableOpacity
                style={styles.postDataButton}
                activeOpacity={0.7}
              >
                <AntDesign
                  style={styles.postLikeIcon}
                  name="like2"
                  size={24}
                  color="#FF6C00"
                />
              </TouchableOpacity>
              <Text style={styles.postDataText}>53</Text>
            </View>
          </View>
          <View style={styles.postInfoWrapper}>
            <TouchableOpacity style={styles.postDataButton} activeOpacity={0.7}>
              <EvilIcons
                style={styles.postLocationIcon}
                name="location"
                size={28}
                color="#FF6C00"
              />
            </TouchableOpacity>
            <Text
              style={{
                ...styles.postDataText,
                textDecorationLine: "underline",
              }}
            >
              Ukraine
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
