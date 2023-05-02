import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";

import { Camera, CameraType } from "expo-camera";

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { MainButton } from "../../../components/MainButton/MainButton";
import { Line } from "../../../components/Line/Line";

import { styles } from "./CreatePostsScreen.styled";

export const CreatePostScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");

  const keyboardHide = () => {
    setIsShowKeyboard(true);
    Keyboard.dismiss();
  };

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo?.uri);
    console.log("photo", photo);
  };

  const sendPost = () => {
    if (photo) {
      console.log("navigation", navigation);
      navigation.navigate("Posts", { photo });
    }
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.createPostWrapper}>
            <View style={styles.cameraWrapper}>
              <Camera style={styles.camera} ref={setCamera}>
                {photo && (
                  <View style={styles.takePhotoContainer}>
                    <Image
                      source={{ uri: photo }}
                      style={{ width: "100%", height: 240 }}
                    />
                  </View>
                )}
                <TouchableOpacity
                  style={styles.snapContainer}
                  activeOpacity={0.7}
                  onPress={takePhoto}
                >
                  <MaterialIcons
                    style={styles.snap}
                    name="photo-camera"
                    size={28}
                    color="#BDBDBD"
                  />
                </TouchableOpacity>
              </Camera>
            </View>

            <TouchableOpacity
              style={styles.cameraTextWrapper}
              activeOpacity={0.7}
            >
              <Text style={styles.cameraText}>Upload a photo</Text>
            </TouchableOpacity>

            <View style={styles.createPostForm}>
              <TextInput
                style={styles.createPostInput}
                placeholder="Name..."
                onFocus={() => setIsShowKeyboard(true)}
              />
              <Line mt={0} mb={32} />
              <View style={styles.createPostLocalityInputWrapper}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.createPostLocalityInputIcon}
                >
                  <MaterialIcons name="location-on" size={24} color="black" />
                </TouchableOpacity>
                <TextInput
                  style={styles.createPostInput}
                  placeholder="Locality..."
                  onFocus={() => setIsShowKeyboard(true)}
                />
              </View>
              <Line mt={0} mb={32} />
              <MainButton
                isShowKeyboard={isShowKeyboard}
                text={"PUBLISH"}
                color={"#BDBDBD"}
                backgroundColor={"#F6F6F6"}
                mt={0}
                mb={0}
                onPress={sendPost}
              />
            </View>
          </View>
          <View style={styles.createPostButtonDeleteWrapper}>
            <TouchableOpacity
              style={styles.createPostButtonDelete}
              activeOpacity={0.7}
            >
              <AntDesign name="delete" size={24} color="#DADADA" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};
