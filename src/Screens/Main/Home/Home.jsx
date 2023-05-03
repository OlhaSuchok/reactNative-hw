import React from "react";
import { View, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { CommentsScreen } from "../../Nested/CommentsScreen/CommentsScreen";
import { PostScreen } from "../PostScreen/PostScreen";
import { DefaultPostScreen } from "../../Nested/DefaultPostScreen/DefaultPostScreen";
import { MapScreen } from "../../Nested/MapScreen/MapScreen";

import { styles } from "./Home.styled";

const MainTab = createNativeStackNavigator();

export const Home = ({ navigation }) => {
  return (
    <MainTab.Navigator
      initialRouteName="PostScreen"
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
        name="PostScreen"
        component={PostScreen}
        options={{
          headerShown: false,
          // headerRight: () => (
          //   <TouchableOpacity
          //     style={styles.exitButton}
          //     activeOpacity={0.7}
          //     onPress={() => navigation.navigate("Login")}
          //   >
          //     <MaterialCommunityIcons
          //       name="exit-to-app"
          //       size={28}
          //       color="#BDBDBD"
          //     />
          //   </TouchableOpacity>
          // ),
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
        name="Comments"
        component={CommentsScreen}
        options={{
          title: "Comments",
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
              onPress={() => navigation.navigate("PostScreen")}
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
      <MainTab.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: "Location",
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
              onPress={() => navigation.navigate("PostScreen")}
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
    </MainTab.Navigator>
  );
};
