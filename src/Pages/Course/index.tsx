import {StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import AveTutor from '../AveTutor';

const subjects = [
  {title: 'Data Mining', icon: require('../assets/DM.png'), screen: 'DataMiningScreen'},
  {title: 'Research Method', icon: require('../assets/RM.png'), screen: 'ResearchScreen'},
  {title: 'Coding', icon: require('../assets/Code.png'), screen: 'CodingScreen'},
  {title: 'Front-End', icon: require('../assets/FE.png'), screen: 'FrontendScreen'},
  {title: 'Web Design', icon: require('../assets/WD.png'), screen: 'WebDesignScreen'},
  {title: 'Back-End', icon: require('../assets/BE.png'), screen: 'BackendScreen'},
  {title: 'ComGraf', icon: require('../assets/CG.png'), screen: 'ComGraf'},
  {title: 'AI', icon: require('../assets/AI.png'), screen: 'AIScreen'},
];

const Subject = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Subject</Text>
      <View style={styles.grid}>
        {subjects.map((item, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.iconWrapper}>
              <Image source={item.icon} style={styles.icon} resizeMode="contain" />
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('AveTutor')}>
              <Text style={styles.buttonText}>{item.title}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Subject;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
  },
  card: {
    width: 140,
    alignItems: 'center',
    marginBottom: 20,
  },
  iconWrapper: {
    width: 120,
    height: 120,
    borderWidth: 1.5,
    borderColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 10,
  },
  icon: {
    width: 80,
    height: 80,
  },
  button: {
    backgroundColor: '#FF6B81',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
  },
});
