import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Platform,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Footer } from "../../components/Footer/Footer";
import { styles } from "./ProfileScreen.styled";

export const ProfileScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardHide = () => {
    setIsShowKeyboard(true);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../../../assets/images/background1x.jpg")}
        >
          <KeyboardAvoidingView
            style={styles.formWrapper}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={styles.form}>
              <View style={styles.avatarWrapp}>
                <View style={styles.avatarWrapper}>
                  <View style={styles.avatar} />
                  <TouchableOpacity
                    style={styles.avatarButton}
                    activeOpacity={0.7}
                  >
                    <AntDesign
                      style={styles.avatarIcon}
                      name="pluscircleo"
                      size={26}
                      color="#FF6C00"
                    />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={styles.exitButton}
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate("Login")}
                >
                  <MaterialCommunityIcons
                    name="exit-to-app"
                    size={30}
                    color="#BDBDBD"
                  />
                </TouchableOpacity>
                <Text style={styles.title}>Natali Romanova</Text>
                <ScrollView style={styles.scr}>
                  <View style={styles.imageWrapper} />
                  <View style={styles.postInfoWrapper}>
                    <Text style={styles.postName}>Sunset</Text>
                    <View style={styles.postInfo}>
                      <View style={styles.postInfoWrpp}>
                        <View style={styles.postCommentsCountWrapper}>
                          <TouchableOpacity
                            style={styles.postCommentsCountButton}
                            activeOpacity={0.7}
                          >
                            <FontAwesome
                              style={styles.postCommentsCountIcon}
                              name="comment"
                              size={24}
                              color="#FF6C00"
                            />
                          </TouchableOpacity>
                          <Text style={styles.postCommentsCountText}>43</Text>
                        </View>
                        <View style={styles.postCommentsLikeWrapper}>
                          <TouchableOpacity
                            style={styles.postLikeCountButton}
                            activeOpacity={0.7}
                          >
                            <AntDesign
                              style={styles.postLikeIcon}
                              name="like2"
                              size={24}
                              color="#FF6C00"
                            />
                          </TouchableOpacity>
                          <Text style={styles.postLikeCountText}>53</Text>
                        </View>
                      </View>
                      <View style={styles.postLocationWrapper}>
                        <TouchableOpacity
                          style={styles.postLocationButton}
                          activeOpacity={0.7}
                        >
                          <EvilIcons
                            style={styles.postLocationIcon}
                            name="location"
                            size={28}
                            color="#FF6C00"
                          />
                        </TouchableOpacity>
                        <Text style={styles.postLocationText}>Ukraine</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.imageWrapper} />
                  <View style={styles.postInfoWrapper}>
                    <Text style={styles.postName}>Sunset</Text>
                    <View style={styles.postInfo}>
                      <View style={styles.postInfoWrpp}>
                        <View style={styles.postCommentsCountWrapper}>
                          <TouchableOpacity
                            style={styles.postCommentsCountButton}
                            activeOpacity={0.7}
                          >
                            <FontAwesome
                              style={styles.postCommentsCountIcon}
                              name="comment"
                              size={24}
                              color="#FF6C00"
                            />
                          </TouchableOpacity>
                          <Text style={styles.postCommentsCountText}>43</Text>
                        </View>
                        <View style={styles.postCommentsLikeWrapper}>
                          <TouchableOpacity
                            style={styles.postLikeCountButton}
                            activeOpacity={0.7}
                          >
                            <AntDesign
                              style={styles.postLikeIcon}
                              name="like2"
                              size={24}
                              color="#FF6C00"
                            />
                          </TouchableOpacity>
                          <Text style={styles.postLikeCountText}>53</Text>
                        </View>
                      </View>
                      <View style={styles.postLocationWrapper}>
                        <TouchableOpacity
                          style={styles.postLocationButton}
                          activeOpacity={0.7}
                        >
                          <EvilIcons
                            style={styles.postLocationIcon}
                            name="location"
                            size={28}
                            color="#FF6C00"
                          />
                        </TouchableOpacity>
                        <Text style={styles.postLocationText}>Ukraine</Text>
                      </View>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
        <Footer navigation={navigation} />
      </View>
    </TouchableWithoutFeedback>
  );
};
