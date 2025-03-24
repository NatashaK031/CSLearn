import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.redContainer}>
        <View style={styles.rowLeft}>
          <View style={styles.blackBox} />
          <View style={styles.yellowBox} />
          <View style={styles.blackBox} />
        </View>
      </View>

      <View style={styles.whiteContainer}>
        <Image style={styles.logo} source={require('./picture/logouk.png')} />
      </View>

      <View style={styles.blueContainer}>
        <View style={styles.rowCenter}>
          <View style={styles.blackBox} />
          <View style={styles.yellowBox} />
          <View style={styles.blackBox} />
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  redContainer: {
    backgroundColor: 'red',
    padding: 10,
    alignItems: 'flex-start',
  },

  rowLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  whiteContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  logo: {
    width: 400,
    height: 200,
    resizeMode: 'contain',
  },

  blueContainer: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
  },

  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  blackBox: {
    backgroundColor: 'black',
    width: 80,
    height: 80,
    margin: 5,
  },

  yellowBox: {
    backgroundColor: 'yellow',
    width: 80,
    height: 80,
    margin: 5,
  },
});
