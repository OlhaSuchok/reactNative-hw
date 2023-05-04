import React from "react";
import MapView, { Marker } from "react-native-maps";
import { View } from "react-native";

import { styles } from "./MapScreen.styled";

export const MapScreen = ({ route }) => {
  const { longitude, latitude } = route.params.locationData;

  console.log("location карта", latitude, longitude);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapWrapper}
        region={{
          longitude,
          latitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      >
        {route.params.locationData && (
          <Marker coordinate={{ longitude, latitude }} title="Travel photo" />
        )}
      </MapView>
    </View>
  );
};
