import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Arrow from '../../../src/assets/arrowblack.svg';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Arrow />
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingVertical: 38,
    backgroundColor: '#FFFFFF',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontWeight: 'bold',
    fontSize: 22,
    marginLeft: 12,
  },
});