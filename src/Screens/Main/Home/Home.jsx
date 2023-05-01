import React from "react";
import { View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { PostScreen } from "../PostScreen/PostScreen";
import { CreatePostScreen } from "../CreatePostsScreen/CreatePostsScreen";
import { CommentsScreen } from "../CommentsScreen/CommentsScreen";
import { ProfileScreen } from "../ProfileScreen/ProfileScreen";

import { styles } from "./Home.styled";

const MainTab = createBottomTabNavigator();

export const Home = () => {
  return (
    <MainTab.Navigator
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
      <MainTab.Screen
        name="Posts"
        component={PostScreen}
        options={{
          headerShown: false,
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
      <MainTab.Screen
        name="CreatePost"
        component={CreatePostScreen}
        options={{
          headerShown: false,
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
      <MainTab.Screen
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
    </MainTab.Navigator>
  );
};
