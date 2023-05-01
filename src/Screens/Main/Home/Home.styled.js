import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  navigation: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 32,
  },
  button: {},
  buttonPlus: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 40,
    paddingBottom: 0,
    paddingTop: 0,
    borderRadius: 35,
  },
  exitButton: {
    position: "absolute",
    right: 16,
  },
  exitOnPostButton: {
    position: "absolute",
    left: 16,
  },
  title: {},
});
