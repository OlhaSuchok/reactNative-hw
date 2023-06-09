import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
  imageWrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 240,
    backgroundColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    marginBottom: 8,
  },
  commentsWrp: {
    flexGrow: 1,
  },
  comments: {
    paddingTop: 32,
  },
  button: {
    position: "relative",
    justifyContent: "center",
    padding: 16,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 16,
    width: 343,
    height: 50,
    backgroundColor: "#E8E8E8",
    borderRadius: 100,
  },
  buttonSend: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    right: 16,
    width: 34,
    height: 34,
    backgroundColor: "#FF6C00",
    borderRadius: 50,
  },
});
