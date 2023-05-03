import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

import { styles } from "./PostItem.styled";

export const PostItem = ({ item, navigation }) => {
  const onCommentPressHandler = () => {
    navigation.navigate("Comments");
  };

  const onLocationPressHandler = () => {
    const { locationData } = item;
    navigation.navigate("Map", { locationData });
  };

  return (
    <View style={styles.scr}>
      <Image style={styles.postPhoto} source={{ uri: item.photo }} />
      <View style={styles.postDataWrapper}>
        <Text style={styles.postName}>{item.title}</Text>
        <View style={styles.postData}>
          <View style={styles.postData}>
            <View style={{ ...styles.postInfoWrapper, marginRight: 27 }}>
              <TouchableOpacity
                style={styles.postDataButton}
                activeOpacity={0.7}
                onPress={onCommentPressHandler}
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
            <View
              style={{
                ...styles.postInfoWrapper,
              }}
            >
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
          <View
            style={{
              ...styles.postInfoWrapper,
              position: "absolute",
              right: 0,
            }}
          >
            <TouchableOpacity
              style={styles.postDataButton}
              activeOpacity={0.7}
              onPress={onLocationPressHandler}
            >
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
              {item.location}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
