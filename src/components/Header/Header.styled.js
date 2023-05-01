import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 10,
  },
  titleWrapper: {},
  title: {
    marginBottom: 0,
    color: "#212121",
    fontFamily: "Roboto - medium",
    fontStyle: "normal",
    fontSize: 17,
  },
  exitButton: {
    position: "absolute",
    left: 0,
    bottom: 10,
  },
});
