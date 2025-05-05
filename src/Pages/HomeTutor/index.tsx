import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.pageContainer}>
        <View style={styles.header}>
          <Text style={styles.welcomeTitle}>Welcome back,</Text>
          <Text style={styles.username}>Hizkia!</Text>
        </View>

        <Image source={require('../assets/unklab.png')} style={styles.bannerImage} resizeMode="cover" />

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Upcoming Sessions</Text>
          <View style={styles.sessionRow}>
            <Image source={require('../assets/propic.png')} style={styles.sessionIcon} />
            <View style={styles.sessionDetails}>
              <Text style={styles.sessionName}>Amelia Sugiharto</Text>
              <View style={styles.sessionInfoRow}>
                <Text style={styles.sessionSubject}>Front End Development</Text>
                <Text style={styles.dot}>•</Text>
                <Text style={styles.sessionTime}>14.00 WITA</Text>
              </View>
            </View>
          </View>
        </View>

        <Text style={styles.newRequest}>New Request</Text>
      </ScrollView>

      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Image source={require('../assets/home.png')} style={styles.icon} />
          <Text style={styles.navLabel}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Search')}>
          <Image source={require('../assets/Search.png')} style={styles.icon} />
          <Text style={styles.navLabel}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Chat1')}>
          <Image source={require('../assets/chat.png')} style={styles.icon} />
          <Text style={styles.navLabel}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('PaymentR')}>
          <Image source={require('../assets/Wallet.png')} style={styles.icon} />
          <Text style={styles.navLabel}>Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Profile')}>
          <Image source={require('../assets/person.png')} style={styles.icon} />
          <Text style={styles.navLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomePage;

// (Same styles as before, paste your existing styles here)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
  pageContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    backgroundColor: '#161868',
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  welcomeTitle: {
    color: '#fff',
    fontSize: 16,
  },
  username: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bannerImage: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginVertical: 16,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 12,
  },
  sessionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sessionIcon: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  sessionDetails: {
    flex: 1,
  },
  sessionName: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
  },
  sessionInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sessionSubject: {
    fontSize: 12,
    color: '#333',
  },
  dot: {
    marginHorizontal: 6,
    color: '#333',
  },
  sessionTime: {
    fontSize: 12,
    color: '#333',
  },
  newRequest: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 16,
    paddingHorizontal: 4,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  navItem: {
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  navLabel: {
    fontSize: 12,
    color: '#000',
  },
});