import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  createPostWrapper: {
    flexGrow: 1,
    paddingTop: 32,
    paddingBottom: 80,
  },
  cameraWrapper: {
    position: "relative",
    marginBottom: 8,
  },
  camera: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 240,
    borderWidth: 1,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderColor: "#E8E8E8",
  },
  takePhotoContainer: {
    justifyContent: "center",
    width: "100%",
    height: 240,
  },
  snapContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "transparent",
    backgroundColor: "#FFFFFF",
  },
  flipContainer: {
    position: "absolute",
    right: 15,
    bottom: 15,
  },
  cameraTextWrapper: {
    color: "#BDBDBD",
    fontFamily: "Roboto - regular",
    fontStyle: "normal",
    fontSize: 16,
  },
  cameraText: {
    marginBottom: 48,
    color: "#BDBDBD",
    fontFamily: "Roboto - regular",
    fontStyle: "normal",
    fontSize: 16,
  },
  createPostForm: {},
  createPostInput: {
    paddingBottom: 15,
    color: "#BDBDBD",
    fontFamily: "Roboto - regular",
    fontStyle: "normal",
    fontSize: 16,
  },
  createPostLocalityInputWrapper: {
    alignItems: "center",
    flexDirection: "row",
  },
  createPostLocalityInputIcon: {
    paddingBottom: 15,
    marginRight: 4,
  },
  createPostButtonDeleteWrapper: {
    paddingTop: 10,
    paddingBottom: 32,
  },
  createPostButtonDelete: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    width: 70,
    height: 40,

    borderRadius: 35,
    backgroundColor: "#F6F6F6",
  },
});
