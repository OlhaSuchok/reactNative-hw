import React from "react";
import { View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { styles } from "./NavigationButton.styled";

export const NavigationButton = ({ navigation }) => {
  return (
    <View style={styles.navigation}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        // onPress={() => navigation.navigate("Posts")}
      >
        <AntDesign
          name="appstore-o"
          size={24}
          color="background: rgba(33, 33, 33, 0.8);
"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonPlus}
        activeOpacity={0.7}
        // onPress={() => navigation.navigate("CreatePosts")}
      >
        <Feather name="plus" size={24} color="#FFFFFF" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        // onPress={() => navigation.navigate("Profile")}
      >
        <Feather
          name="user"
          size={24}
          color="background: rgba(33, 33, 33, 0.8);
"
        />
      </TouchableOpacity>
    </View>
  );
};
