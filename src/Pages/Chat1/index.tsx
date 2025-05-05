import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image,
  } from 'react-native';
  import React from 'react';
  
  const tutors = [
    { id: '1', name: 'Avrilia Kawonal', specialization: 'Front-End' },
    { id: '2', name: 'Kanaya', specialization: 'Calculus' },
    { id: '3', name: 'Gabby', specialization: 'Research Method' },
    { id: '4', name: 'Daisy', specialization: 'Web Design' },
  ];
  
  const ChatList = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Chats</Text>
  
        <FlatList
          data={tutors}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.chatItem}>
              <Image
                source={require('../../assets/propic.png')}
                style={styles.profileIcon}
              />
              <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.specialization}>Hi. I’m your tutor for {item.specialization}</Text>
              </View>
            </View>
          )}
        />
  
        <View style={styles.navBar}>
          <TouchableOpacity style={styles.navItem}>
            <Image source={require('../../assets/home.png')} style={styles.icon} onPress={() => navigation.navigate('HomeStu')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Image source={require('../../assets/Search.png')} style={styles.icon} onPress={() => navigation.navigate('Search')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Image source={require('../../assets/chat.png')} style={styles.icon} onPress={() => navigation.navigate('Chat1')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Image source={require('../../assets/Wallet.png')} style={styles.icon} onPress={() => navigation.navigate('PaymentR')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Image source={require('../../assets/person.png')} style={styles.icon} onPress={() => navigation.navigate('StuProfil')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default ChatList;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      paddingHorizontal: 16,
      paddingTop: 50,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      alignSelf: 'center',
      marginBottom: 16,
    },
    chatItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 30,
      borderBottomWidth: 1,
      borderBottomColor: '#CCCCCC',
      marginTop: 10,
    },
    profileIcon: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 12,
    },
    name: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    specialization: {
      fontSize: 14,
      color: '#666666',
    },
    navBar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: '#CCCCCC',
      paddingVertical: 10,
      backgroundColor: '#FFFFFF',
    },
    navItem: {
      alignItems: 'center',
    },
    icon: {
      width: 30,
      height: 30,
    },
  });
  