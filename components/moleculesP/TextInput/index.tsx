import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';

const TextInput = ({label, placeholder}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Input
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor="#A3A3A3" 
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#555555', 
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC', 
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF', 
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
});
