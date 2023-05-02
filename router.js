import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { LoginScreen } from "./src/Screens/Auth/LoginScreen/LoginScreen";
import { RegistrationScreen } from "./src/Screens/Auth/RegistrationScreen/RegistrationScreen";
import { Home } from "./src/Screens/Main/Home/Home";

const Stack = createStackNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
