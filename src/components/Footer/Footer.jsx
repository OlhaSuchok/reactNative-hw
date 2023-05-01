import React from "react";
import { View } from "react-native";

import { Line } from "../Line/Line";
import { NavigationButton } from "../NavigationButton/NavigationButton";
import { styles } from "./Footer.styled";

export const Footer = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <Line />
      <NavigationButton navigation={navigation} />
    </View>
  );
};
