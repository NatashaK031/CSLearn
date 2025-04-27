import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TextInput from '../../components/moleculesP/TextInputSignIn';
import Button from '../../components/atomsP/buttonSignIn';
import Gap from '../../components/atomsP/Gap';

const SignIn = () => {
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.title}>Sign in</Text>
      <Text style={styles.subtitle}>Hi! Welcome back, you’ve been missed</Text>

      <View style={styles.formContainer}>
        <TextInput label="Email Address" placeholder="Email Address" />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Password" secureTextEntry />
        <Gap height={24} />
        <Button label="Sign in" color="#002D62" textColor="#FFFFFF" />
      </View>

      <Text style={styles.forgotPassword}>forgot password?</Text>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#555555',
    marginBottom: 32,
    textAlign: 'center',
  },
  formContainer: {
    width: '90%',
    backgroundColor: '#D3D3D3',
    borderRadius: 10,
    padding: 24,
  },
  forgotPassword: {
    fontSize: 14,
    color: '#002D62',
    marginTop: 16,
    paddingLeft: 200,
  },
});
