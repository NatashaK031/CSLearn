// src/SplashScreen.tsx
import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Logo} from '../assets';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EBEBEB',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    marginRight: 12,
  },
  textContainer: {
    flexDirection: 'column',
  },
});
