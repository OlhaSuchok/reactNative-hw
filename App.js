import React, { useState } from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useRoute } from "./router";
import { store } from "./redux/store";

// import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";

export default function App() {
  const [user, setUser] = useState(null);
  const routing = useRoute(user);

  const [fontsLoaded] = useFonts({
    "Roboto - regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto - medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto - bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
    "Inter - Medium": require("./assets/fonts/Inter/Inter-Medium.ttf"),
  });

  auth.onAuthStateChanged((user) => setUser(user));

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>{routing}</NavigationContainer>
    </Provider>
  );
}
