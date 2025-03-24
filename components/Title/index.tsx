import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Title = ({ titleText }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>{titleText}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  titleContainer: {
    marginBottom: 40,
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'Right',
  },
});