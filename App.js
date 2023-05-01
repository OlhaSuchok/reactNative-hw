import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useFonts } from "expo-font";
import { LoginScreen } from "./src/Screens/Auth/LoginScreen/LoginScreen";
import { RegistrationScreen } from "./src/Screens/Auth/RegistrationScreen/RegistrationScreen";
import { PostScreen } from "./src/Screens/Main/PostScreen/PostScreen";
import { CreatePostScreen } from "./src/Screens/Main/CreatePostsScreen/CreatePostsScreen";
import { CommentsScreen } from "./src/Screens/Main/CommentsScreen/CommentsScreen";
import { ProfileScreen } from "./src/Screens/Main/ProfileScreen/ProfileScreen";

const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto - regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto - medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto - bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
    "Inter - Medium": require("./assets/fonts/Inter/Inter-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        {/* <AuthStack.Screen
          name="Register"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        /> */}
        <AuthStack.Screen
          name="Posts"
          component={PostScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="CreatePosts"
          component={CreatePostScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Comments"
          component={CommentsScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
