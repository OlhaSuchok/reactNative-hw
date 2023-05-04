import React from "react";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";
import { store } from "./redux/store";

import { Main } from "./src/components/Main/Main";

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
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
