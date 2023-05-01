import React from "react";
import { View } from "react-native";

import { styles } from "./Line.styled";

export const Line = ({ mt, mb }) => {
  return (
    <View style={{ ...styles.line, marginTop: mt, marginBottom: mb }}></View>
  );
};
