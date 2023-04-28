import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { styles } from "./Line.styled";

export const Line = ({ mt, mb }) => {
  return (
    <View style={{ ...styles.line, marginTop: mt, marginBottom: mb }}></View>
  );
};
