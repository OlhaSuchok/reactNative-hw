import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { LoginScreen } from "./src/Screens/LoginScreen/LoginScreen";
import { RegistrationScreen } from "./src/Screens/RegistrationScreen/RegistrationScreen";

const AuthStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto - regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto - medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name="Register" component={RegistrationScreen} />
        <AuthStack.Screen name="Login" component={LoginScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
