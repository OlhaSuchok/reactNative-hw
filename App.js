import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useRoute } from "./router";

export default function App() {
  // const routing = useRoute(false);
  const routing = useRoute(true);

  const [fontsLoaded] = useFonts({
    "Roboto - regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto - medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto - bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
    "Inter - Medium": require("./assets/fonts/Inter/Inter-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <NavigationContainer>{routing}</NavigationContainer>;
}
