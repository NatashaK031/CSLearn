import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Button from '../../components/atomsP/buttonHomeStu';
import Gap from '../../components/atomsP/Gap';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.pageContainer}>
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Welcome to CSLearn!</Text>
          <Image
            source={require('../assets/bell.png')}
            style={styles.bellIcon}
            resizeMode="contain"
          />
        </View>

        <Image
          source={require('../assets/unklab.png')}
          style={styles.image}
          resizeMode="cover"
        />

        <View style={styles.buttonRow}>
          <Button label="Course" color="#0D0E52" textColor="#FFFFFF" />
          <Gap width={16} />
          <Button label="Subject" color="#0D0E52" textColor="#FFFFFF" />
        </View>

        <Text style={styles.thankYouText}>Thank you for choosing this tutors !</Text>

        <View style={styles.tutorBox}>
          <Text style={styles.tutorName}>Hizkia Siregar</Text>
          <Text style={styles.tutorSubject}>Programming</Text>
        </View>

        <View style={styles.tutorBox}>
          <Text style={styles.tutorName}>Joshua Dadung</Text>
          <Text style={styles.tutorSubject}>Data Mining</Text>
        </View>
      </ScrollView>

      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../assets/home.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../assets/Search.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../assets/chat.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../assets/Wallet.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../assets/person.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  pageContainer: {
    flex: 1,
    padding: 16,
  },
  header: {
    backgroundColor: '#0D0E52',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  welcomeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  bellIcon: {
    width: 24,
    height: 24,
  },
  image: {
    height: 180,
    width: '100%',
    borderRadius: 10,
    marginVertical: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24,
  },
  thankYouText: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 12,
    textAlign: 'center',
  },
  tutorBox: {
    backgroundColor: '#D3D3D3',
    padding: 16,
    borderRadius: 1,
    marginBottom: 12,
  },
  tutorName: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  tutorSubject: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  navItem: {
    padding: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
