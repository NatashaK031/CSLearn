import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect } from 'react';
import { Logo } from '../assets'; 

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('SignIn');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
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
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Poppins-Medium', // Make sure this font is loaded via `react-native-config` or `expo-font` if needed
    color: '#000',
  },
});
