import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import LocationSearchBar from "../components/LocationSearchBar";

const LocationScreen = ({ navigation }) => {
  const [area, setArea] = useState('');

  return (
    <View style={styles.backgroundStyle}>
    <LocationSearchBar
      area={area}
      onAreaChange={setArea}
      onAreaSubmit={() => navigation.navigate('SearchScreen')}
    />
      </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'white',
    flex: 1
  }
});

export default LocationScreen;
