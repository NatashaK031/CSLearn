import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function UserCard({firstName, lastName, email, avatar}) {
  return (
    <View style={styles.card}>
      <Image source={{uri: avatar}} style={styles.avatar} />
      <View>
        <Text style={styles.name}>{`${firstName} ${lastName}`}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 3,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  email: {
    color: '#555',
  },
});
