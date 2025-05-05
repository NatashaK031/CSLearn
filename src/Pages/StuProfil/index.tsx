import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const StudentProfile = ({ navigation }) => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Student Profile</Text>
      </View>

      <View style={styles.profileCard}>
        <View style={styles.profileIcon}>
          <Text style={styles.iconText}>👤</Text>
        </View>
        <Text style={styles.name}>Gloria Kirey Dumaha</Text>

        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Image source={require('../assets/email.png')} style={styles.detailIcon} />
            <Text style={styles.detailText}>S22210117@student.unklab.ac.id</Text>
          </View>
          <View style={styles.detailRow}>
            <Image source={require('../assets/time.png')} style={styles.detailIcon} />
            <Text style={styles.detailText}>S22210117@student.unklab.ac.id</Text>
          </View>
          <View style={styles.detailRow}>
            <Image source={require('../assets/location.png')} style={styles.detailIcon} />
            <Text style={styles.detailText}>S22210117@student.unklab.ac.id</Text>
          </View>
          <View style={styles.detailRow}>
            <Image source={require('../assets/people.png')} style={styles.detailIcon} />
            <Text style={styles.detailText}>S22210117@student.unklab.ac.id</Text>
          </View>
        </View>
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.deleteButton}
         onPress={() => navigation.navigate('SplashScreen')}
         >
          <Text style={styles.buttonText}>delete acc</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.buttonText}>log out</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../assets/home.png')} style={styles.navIcon} onPress={() => navigation.navigate('HomeStu')} />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../assets/services.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Services</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../assets/setting.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Setting</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('../assets/person.png')} style={styles.navIcon} />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StudentProfile;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#EBEBEB',
  },
  backButton: {
    marginRight: 10,
  },
  backButtonText: {
    fontSize: 24,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  profileCard: {
    backgroundColor: '#2C2C54',
    borderRadius: 20,
    padding: 20,
    margin: 20,
    alignItems: 'center',
  },
  profileIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  iconText: {
    fontSize: 40,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  detailsContainer: {
    width: '100%',
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
  detailIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  detailText: {
    fontSize: 14,
    color: '#000',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
  deleteButton: {
    backgroundColor: '#161868',
    borderRadius: 10,
    padding: 10,
    width: 120,
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: '#161868',
    borderRadius: 10,
    padding: 10,
    width: 120,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '600',
  },
  navBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#DDD',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
  },
  navText: {
    fontSize: 12,
    marginTop: 5,
  },
});
