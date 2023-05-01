import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Line } from "../Line/Line";
import { styles } from "./Header.styled";

export const Header = ({ mt, mb, title, navigation }) => {
  return (
    // <View style={{ ...styles.line, marginTop: mt, marginBottom: mb }}></View>
    <View>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.exitButton}
          activeOpacity={0.7}
          onPress={() => navigation.navigate("Posts")}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color="border: 1px solid rgba(33, 33, 33, 0.8)"
          />
        </TouchableOpacity>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
      <Line mt={0} mb={32} />
    </View>
  );
};
