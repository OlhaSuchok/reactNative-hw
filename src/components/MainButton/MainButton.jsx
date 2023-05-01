import React from "react";
import { TouchableOpacity, Text } from "react-native";

import { styles } from "./MainButton.styled";

export const MainButton = ({
  onLogin,
  text,
  color,
  backgroundColor,
  mt,
  mb,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        marginBottom: mb,
        marginTop: mt,
        color: color,
        backgroundColor: backgroundColor,
        // marginTop: isShowKeyboard ? 18 : 27,
      }}
      activeOpacity={0.7}
      onPress={onLogin}
    >
      <Text
        style={{
          ...styles.buttonText,
          color: color,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
