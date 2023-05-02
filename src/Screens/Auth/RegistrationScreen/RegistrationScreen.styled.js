import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  form: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 32,
    height: 549,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  formWrapper: {
    justifyContent: "center",
    alignItems: "center",
    height: 549,
    width: "100%",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    resizeMode: "cover",
  },
  avatar: {},
  avatarWrapper: {
    position: "relative",
    marginBottom: 32,
    marginTop: -170,
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
  avatarIcon: {},
  title: {
    marginTop: 0,
    marginBottom: 33,
    color: "#212121",
    fontFamily: "Roboto - medium",
    fontStyle: "normal",
    fontSize: 30,
  },
  input: {
    marginBottom: 16,
    padding: 16,
    height: 50,
    width: 343,
    backgroundColor: "#F6F6F6",
    color: "#212121",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    width: 343,
    height: 50,
    backgroundColor: "#FF6C00",
    color: "#FFFFFF",
    borderRadius: 100,
  },
  buttonText: {
    color: "#FFFFFF",
    fontFamily: "Roboto - regular",
    fontStyle: "normal",
    fontSize: 16,
  },
  buttonShowPasswordWrapper: {
    position: "relative",
    flexDirection: "row",
  },
  buttonShowPassword: {
    position: "absolute",
    top: 16,
    right: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  buttonShowPasswordText: {
    color: "#1B4371",
    fontFamily: "Roboto - regular",
    fontStyle: "normal",
    fontSize: 16,
  },
  linkWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  registrationLink: {
    marginRight: 5,
    color: "#1B4371",
    fontFamily: "Roboto - regular",
    fontStyle: "normal",
    fontSize: 16,
  },
  link: {
    color: "#1B4371",
    fontFamily: "Roboto - regular",
    fontStyle: "normal",
    fontSize: 16,
  },
});
