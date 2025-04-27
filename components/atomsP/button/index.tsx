import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ label, color = '#161868', textColor = '#FFFFFF', onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: color }]}
        onPress={onPress}>
        <Text style={[styles.text, { color: textColor }]}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#161868', 
  },
  button: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 59,
    width: 247,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;
