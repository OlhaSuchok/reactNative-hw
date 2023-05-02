import React from "react";
import MapView, { Marker } from "react-native-maps";
import { View } from "react-native";

import { styles } from "./MapScreen.styled";

export const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapWrapper}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="Travel photo"
        />
      </MapView>
    </View>
  );
};