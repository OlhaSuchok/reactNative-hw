import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  form: {
    height: 549,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingBottom: 165,
  },
  formWrapper: {
    position: "absolute",
    width: "100%",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
  },
  avatarWrapp: {
    position: "relative",
    top: -60,
    marginRight: "auto",
    marginLeft: "auto",
  },
  avatarWrapper: {
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: 32,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  avatarButton: {
    position: "absolute",
    bottom: 14,
    right: -13,
  },
  scr: {},
  title: {
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: 32,
    color: "#212121",
    fontFamily: "Roboto - medium",
    fontStyle: "normal",
    fontSize: 30,
  },
  imageWrapper: {
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
  postInfoWrapper: {
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
  postInfo: {
    flexDirection: "row",
  },
  postInfoWrpp: {
    flexDirection: "row",
  },
  postCommentsCountWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 27,
  },
  postCommentsCountButton: {
    marginRight: 10,
  },
  postCommentsCountIcon: {},
  postCommentsCountText: {
    color: "#212121",
    fontFamily: "Roboto - regular",
    fontStyle: "normal",
    fontSize: 16,
  },
  postCommentsLikeWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 140,
  },
  postLikeCountButton: {
    marginRight: 10,
  },
  postLikeIcon: {},
  postCommentsCountIcon: {},
  postLikeCountText: {
    color: "#212121",
    fontFamily: "Roboto - regular",
    fontStyle: "normal",
    fontSize: 16,
  },
  postLocationWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  postLocationButton: {
    marginRight: 10,
  },
  postLocationIcon: {},
  postLocationText: {
    color: "#212121",
    fontFamily: "Roboto - regular",
    fontStyle: "normal",
    textDecorationLine: "underline",
    fontSize: 16,
  },
  exitButton: {
    position: "absolute",
    right: 0,
    top: 77,
  },
});
