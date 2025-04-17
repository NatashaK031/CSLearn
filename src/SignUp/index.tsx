import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/button';
import Gap from '../../components/atoms/Gap';

const SignUp = () => {
  return (
    <View style={styles.pageContainer}>
      <Header title="Sign Up" />
      <View style={styles.contentContainer}>
        <TouchableOpacity style={styles.photoContainer}>
          <Image source={require('../assets/pic.png')} />
        </TouchableOpacity>
        <Gap height={16} />
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your Email Address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button label="Continue" />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 24,
    flex: 1,
    paddingHorizontal: 24,
  },
  photoContainer: {
    width: 110,
    height: 110,
    borderRadius: 1,
    marginLeft: 125,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 26,
  },
});