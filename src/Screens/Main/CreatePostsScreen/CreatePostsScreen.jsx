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

// import { nanoid } from "nanoid";
import { uploadPhoto } from "../../../../firebase/uploadPhoto";

import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { useSelector } from "react-redux";

import { db } from "../../../../firebase/config";
import { collection, addDoc } from "firebase/firestore";

import { MainButton } from "../../../components/MainButton/MainButton";
import { Line } from "../../../components/Line/Line";

import { styles } from "./CreatePostsScreen.styled";

export const CreatePostScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [cameraRef, setCameraRef] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState("");
  const [location, setLocation] = useState("");
  const [locationData, setLocationData] = useState("");

  const { userId, userName } = useSelector((state) => state.auth);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === "granted");

      let location = await Location.requestForegroundPermissionsAsync();

      if (location.status !== "granted") {
        Alert("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const keyboardHide = () => {
    setIsShowKeyboard(true);
    Keyboard.dismiss();
  };

  const takePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      await MediaLibrary.createAssetAsync(uri);
      setPhoto(uri);
    }
    let location = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    setLocationData(coords);
  };

  const flipCamera = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
    console.log("type", type);
  };

  const uploadPostToServer = async () => {
    const url = await uploadPhoto(photo, "images");
    try {
      // await addDoc(collection(db, "posts"), {
      //   userId: userId,
      //   userName: userName,
      //   photo: url,
      //   title: title,
      //   location: location,
      //   locationData: locationData,
      // });

      // await addDoc(collection(db, "users"), {
      //   userId: userId,
      //   userName: userName,
      //   photo: url,
      //   title: title,
      //   location: location,
      //   locationData: locationData,
      // });

      const docRef = await addDoc(collection(db, "posts"), {
        userId: userId,
        userName: userName,
        photo: url,
        title: title,
        location: location,
        locationData: locationData,
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const sendPost = async () => {
    console.log("locationData", locationData);
    console.log("title", title);
    console.log("photo", photo);

    if (!photo || !title || !location) {
      return Alert.alert("Fill in all fields");
    }

    // const url = await uploadPhoto(photo, "images");
    // await addDoc(collection(db, "posts"), {
    //   photo: url,
    // });

    await uploadPostToServer();

    // navigation.navigate("DefaultPost", {
    //   photo,
    //   title,
    //   location,
    //   locationData,
    // });
    navigation.navigate("DefaultPost");
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
              <Camera
                style={styles.camera}
                type={type}
                ref={(ref) => {
                  setCameraRef(ref);
                }}
              >
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
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.flipContainer}
                  onPress={flipCamera}
                >
                  <MaterialIcons
                    name="flip-camera-android"
                    size={24}
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
