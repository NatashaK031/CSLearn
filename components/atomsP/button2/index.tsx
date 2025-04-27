import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button2 = ({label, color = '#FFFFFF', textColor = '#000000', onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color}]}
      onPress={onPress}
    >
      <Text style={[styles.text, {color: textColor}]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1, 
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 9, 
    borderWidth: 1,
    borderColor: '#D443EE',
    width: 108,
    height: 39,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Button2;
