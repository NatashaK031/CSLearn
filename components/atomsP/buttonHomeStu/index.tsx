// components/atomsP/button2.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button2 = ({ label, color, textColor, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color || '#000' }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor || '#fff' }]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button2;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 24,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
