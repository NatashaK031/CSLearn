import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {Logo} from '../assets'; 

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('CreateAcc'), 3000);
  }, []);

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
    fontSize: 24,
    fontFamily: 'Poppins-Medium', 
  },
});
