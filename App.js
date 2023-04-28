import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { LoginScreen } from "./src/Screens/LoginScreen/LoginScreen";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen/RegistrationScreen";
import { PostScreen } from "./src/Screens/PostScreen/PostScreen";
import { CreatePostScreen } from "./src/Screens/CreatePostsScreen/CreatePostsScreen";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto - regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto - medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto - bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Register"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Posts"
          component={PostScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreatePosts"
          component={CreatePostScreen}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
