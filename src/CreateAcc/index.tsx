import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const CreateAcc = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, styles.signInButton]}>
        <Text style={[styles.buttonText, styles.signInText]}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.signUpButton]}>
        <Text style={[styles.buttonText, styles.signUpText]}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateAcc;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBEBEB',
  },
  button: {
    width: 298,
    height: 49,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginVertical: 10,
  },
  signInButton: {
    backgroundColor: '#161868', 
  },
  signUpButton: {
    backgroundColor: '#F4F4F4', 
    borderWidth: 1,
    borderColor: '#010327', 
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  signInText: {
    color: '#F5F5F5', 
  },
  signUpText: {
    color: '#010327', 
  },
});
