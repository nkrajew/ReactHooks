import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text style={styles.detailStyle}>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  nameStyle: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  detailStyle: {
    color: 'grey'
  }
});

export default ResultsDetail;
