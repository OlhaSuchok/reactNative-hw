import React from "react";
import MapView, { Marker } from "react-native-maps";
import { View } from "react-native";

import { styles } from "./MapScreen.styled";

export const MapScreen = ({ route }) => {
  const { locationData } = route.params;

  console.log("location карта", locationData);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapWrapper}
        region={{
          ...locationData,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      >
        {locationData && (
          <Marker coordinate={locationData} title="Travel photo" />
        )}
      </MapView>
    </View>
  );
};
