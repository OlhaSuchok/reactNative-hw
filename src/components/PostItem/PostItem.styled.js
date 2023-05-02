import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  postWrapper: {},
  postPhoto: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 240,
    backgroundColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    marginBottom: 8,
  },
  postDataWrapper: {
    marginBottom: 34,
  },
  postName: {
    alignItems: "flex-start",
    marginBottom: 10,
    color: "#212121",
    fontFamily: "Roboto - medium",
    fontStyle: "normal",
    fontSize: 16,
  },
  postData: {
    flexDirection: "row",
  },
  postInfoWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  postDataButton: {
    marginRight: 10,
  },
  postDataText: {
    color: "#212121",
    fontFamily: "Roboto - regular",
    fontStyle: "normal",
    fontSize: 16,
  },
  postCommentsCountIcon: {},
  postLikeIcon: {},
  postCommentsCountIcon: {},
  postLocationIcon: {},
});
