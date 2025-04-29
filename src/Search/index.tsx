import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

const tutors = [
  {id: '1', name: 'Audrey Bambulu'},
  {id: '2', name: 'Hizkia Siregar'},
  {id: '3', name: 'Natasha Kountur'},
  {id: '4', name: 'Jeremy Thimoty'},
];

const FindTutor = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Image
          source={require('../assets/backarrow.png')}
          style={styles.icon}
        />
      </TouchableOpacity>

      <Text style={styles.title}>Find a Tutor</Text>
      <Text style={styles.subtitle}>I AM LOOKING FOR</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Enter the name or subjects"
      />

      <FlatList
        data={tutors}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.tutorItem}>
            <Image
              source={require('../assets/propic.png')}
              style={styles.tutorIcon}
            />
            <Text style={styles.tutorName}>{item.name}</Text>
          </View>
        )}
      />

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

export default FindTutor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
    
  },
  backButton: {
    marginBottom: 16,
    marginTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 10,
    marginLeft: 40,
  },
  subtitle: {
    fontSize: 14,
    color: '#555555',
    marginBottom: 16,
    marginLeft: 40,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 0,
    padding: 8,
    marginBottom: 16,
    textAlign: 'center',
    backgroundColor: '#EBEBEB',
  },
  tutorItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    marginLeft: 40,
  },
  tutorIcon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  tutorName: {
    fontSize: 16,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
    paddingVertical: 8,
  },
  navItem: {
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
});
