import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  comment: {
    flexDirection: "row",
    marginBottom: 24,
  },
  commentAvatar: {
    width: 28,
    height: 28,
    marginRight: 16,
    backgroundColor: "#FF6C00",
    borderRadius: 50,
  },
  commentTextWrapper: {
    width: 315,
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 6,
  },
  commentText: {
    marginBottom: 8,
    color: "#212121",
    fontFamily: "Roboto - regular",
    fontStyle: "normal",
    fontSize: 13,
  },
  commentTextData: {
    textAlign: "right",
    color: "#BDBDBD",
    fontFamily: "Roboto - regular",
    fontStyle: "normal",
    fontSize: 10,
  },
});
