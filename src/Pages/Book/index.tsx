import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image,
  } from 'react-native';
  import React from 'react';
  
  const schedules = [
    { id: '1', date: 'Tue, 22 April 2025', time: '10.10-11.00' },
    { id: '2', date: 'Wed, 23 April 2025', time: '10.10-11.00' },
    { id: '3', date: 'Fri, 25 April 2025', time: '8.10-9.00' },
  ];
  
  const Book = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Book Date and Time</Text>
        <Text style={styles.subtitle}>
          Tutor only available at this date and time
        </Text>
        <Text style={styles.instruction}>
          Choose 1 schedule you want for a tutor!
        </Text>
  
        <FlatList
          data={schedules}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.scheduleCard}>
              <View style={styles.iconRow}>
                <Image
                  source={require('../assets/calender.png')}
                  style={styles.icon}
                />
                <Text style={styles.dateText}>{item.date}</Text>
              </View>
              <View style={styles.iconRow}>
                <Image
                  source={require('../assets/clock.png')}
                  style={styles.icon}
                />
                <Text style={styles.timeText}>{item.time}</Text>
              </View>
            </View>
          )}
        />
  
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default Book;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      padding: 16,
      paddingTop: 40,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 14,
      color: '#555555',
      textAlign: 'center',
      marginBottom: 5,
    },
    instruction: {
      fontSize: 14,
      color: '#000000',
      textAlign: 'center',
      marginBottom: 20,
      fontWeight: '600',
    },
    scheduleCard: {
      backgroundColor: '#FFFFFF',
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    iconRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    icon: {
      width: 24,
      height: 24,
      marginRight: 10,
    },
    dateText: {
      fontSize: 16,
      fontWeight: '500',
    },
    timeText: {
      fontSize: 16,
      fontWeight: '400',
      color: '#555555',
    },
    confirmButton: {
      backgroundColor: '#2C2C54',
      paddingVertical: 12,
      borderRadius: 4,
      alignItems: 'center',
      marginTop: 20,
    },
    confirmButtonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: '600',
    },
  });
  