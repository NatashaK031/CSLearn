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
    { id: '1', name: 'Audrey Bambulu' },
    { id: '2', name: 'Hizkia Siregar' },
    { id: '3', name: 'Natasha Kountur' },
    { id: '4', name: 'Jeremy Thimoty' },
  ];
  
  const AveTutor = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Available Tutors</Text>
  
        <FlatList
          data={tutors}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.tutorItem}>
              <Image
                source={require('../../assets/propic.png')}
                style={styles.tutorIcon}
              />
              <Text style={styles.tutorName}>{item.name}</Text>
              <TouchableOpacity style={styles.selectButton}
              onPress={() => navigation.navigate('Book')} >
                <Text style={styles.selectButtonText}>Select</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  };
  
  export default AveTutor;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      padding: 16,
      paddingTop: 60,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
    },
    tutorItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#FFFFFF',
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    tutorIcon: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 10,
    },
    tutorName: {
      flex: 1,
      fontSize: 16,
      fontWeight: '500',
    },
    selectButton: {
      backgroundColor: '#2C2C54',
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 4,
    },
    selectButtonText: {
      color: '#FFFFFF',
      fontWeight: '600',
      fontSize: 14,
    },
  });
  