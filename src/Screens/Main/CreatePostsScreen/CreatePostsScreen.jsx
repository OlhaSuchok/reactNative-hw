import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
  TouchableWithoutFeedback,
} from "react-native";

import { Camera } from "expo-camera";

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { MainButton } from "../../../components/MainButton/MainButton";
import { Line } from "../../../components/Line/Line";

import { styles } from "./CreatePostsScreen.styled";

export const CreatePostScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [camera, setCamera] = useState(null);
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState("");
  const [location, setLocation] = useState("");
  const [locationData, setLocationData] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  const keyboardHide = () => {
    setIsShowKeyboard(true);
    Keyboard.dismiss();
  };

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    let location = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    setLocationData(coords);
    console.log("location рендер", location);

    setPhoto(photo.uri);
  };

  const sendPost = () => {
    if (!photo || !title || !location) {
      return Alert.alert("Fill in all fields");
    }

    navigation.navigate("DefaultPost", {
      photo,
      title,
      location,
      locationData,
    });
    setTitle("");
    setLocation("");
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
                onChangeText={setTitle}
                value={title}
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
                  onChangeText={setLocation}
                  value={location}
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
