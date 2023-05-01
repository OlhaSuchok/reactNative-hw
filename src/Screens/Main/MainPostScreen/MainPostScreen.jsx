import React from "react";
import { View, TouchableOpacity, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { PostScreen } from "../PostScreen/PostScreen";
import { CreatePostScreen } from "../CreatePostsScreen/CreatePostsScreen";
import { ProfileScreen } from "../ProfileScreen/ProfileScreen";

import { styles } from "./MainPostScreen.styled";

const Tab = createBottomTabNavigator();

export const MainPostScreen = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          alignItems: "center",
          height: 83,
          paddingTop: 10,
          paddingBottom: 20,
          flexDirection: "row",
        },
        tabBarItemStyle: { width: 70, height: 40 },
      }}
    >
      <Tab.Screen
        name="Posts"
        component={PostScreen}
        options={{
          title: "Publication",
          headerStyle: {
            backgroundColor: "#FFFFFF",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Roboto - medium",
            fontStyle: "normal",
            fontSize: 17,
            textAlign: "center",
          },
          headerTintColor: { color: "#212121" },
          headerRight: () => (
            <TouchableOpacity
              style={styles.exitButton}
              activeOpacity={0.7}
              onPress={() => navigation.navigate("Login")}
            >
              <MaterialCommunityIcons
                name="exit-to-app"
                size={28}
                color="#BDBDBD"
              />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={{
                ...styles.buttonPlus,
                backgroundColor: focused ? "#FF6C00" : "transparent",
                left: 50,
              }}
            >
              <AntDesign
                name="appstore-o"
                size={24}
                style={{
                  color: focused ? "#FFFFFF" : "#212121",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="CreatePost"
        component={CreatePostScreen}
        options={{
          title: "Create a post",
          headerStyle: {
            backgroundColor: "#FFFFFF",
          },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Roboto - medium",
            fontStyle: "normal",
            fontSize: 17,
            textAlign: "center",
          },
          headerTintColor: { color: "#212121" },
          headerLeft: () => (
            <TouchableOpacity
              style={styles.exitOnPostButton}
              activeOpacity={0.7}
              onPress={() => navigation.navigate("Posts")}
            >
              <Ionicons
                name="arrow-back"
                size={28}
                color="border: 1px solid rgba(33, 33, 33, 0.8)"
              />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={{
                ...styles.buttonPlus,
                backgroundColor: focused ? "#FF6C00" : "transparent",
              }}
            >
              <Feather
                name="plus"
                size={24}
                style={{
                  color: focused ? "#FFFFFF" : "#212121",
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={{
                ...styles.buttonPlus,
                backgroundColor: focused ? "#FF6C00" : "transparent",
                right: 50,
              }}
            >
              <Feather
                name="user"
                size={24}
                style={{
                  color: focused ? "#FFFFFF" : "#212121",
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
