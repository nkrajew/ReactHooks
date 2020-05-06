import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const LocationSearchBar = ({ area, onAreaChange, onAreaSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={area}
        onChangeText={onAreaChange}
        onEndEditing={onAreaSubmit}
      />
      </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10
  },
  inputStyle: {
    flex: 1,
    marginLeft: 5,
    fontSize: 18
  }
});

export default LocationSearchBar;
