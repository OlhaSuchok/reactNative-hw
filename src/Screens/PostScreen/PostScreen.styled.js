import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 16,
    paddingRight: 16,
  },
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
    right: 0,
    bottom: 10,
  },
  info: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingBottom: 32,
  },
  image: {
    marginRight: 8,
  },
  textWrapper: {},
  name: {
    color: "#212121",
    fontFamily: "Roboto - bold",
    fontStyle: "normal",
    fontSize: 13,
  },
  email: {
    color: "rgba(33, 33, 33, 0.8)",
    fontFamily: "Roboto - regular",
    fontStyle: "normal",
    fontSize: 13,
  },
  posts: {
    flexGrow: 1,
  },
  footer: {
    justifyContent: "flex-end",
  },
  navigation: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 32,
  },
  button: {},
  buttonPlus: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 13,
    paddingBottom: 13,
    marginLeft: 42,
    marginRight: 42,

    borderRadius: 35,
    backgroundColor: "#FF6C00",
  },
});
