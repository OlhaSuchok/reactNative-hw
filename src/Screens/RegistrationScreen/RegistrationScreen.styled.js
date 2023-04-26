import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  form: {
    alignItems: "center",
    paddingTop: 32,
    height: 549,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  avatar: {},
  avatarWrapper: {
    position: "relative",
    marginBottom: 32,
    marginTop: -95,
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
    fontWeight: 500,
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
    borderStyle: "solid",
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
    fontWeight: 400,
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
    fontWeight: 400,
    fontSize: 16,
  },
  registrationLink: {
    color: "#1B4371",
    fontFamily: "Roboto - regular",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
  },
});