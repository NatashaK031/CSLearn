import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import Input from './components/Input';
import Button from './components/button';
import Title from './components/Title';

const App = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const onSubmit = () => {
    console.log({ name, username, email, address, phoneNumber });
    Alert.alert('Data Submitted', `Name: ${name}\nUsername: ${username}\nEmail: ${email}\nAddress: ${address}\nPhone Number: ${phoneNumber}`);
  };

  return (
    <View style={styles.container}>
      <Title titleText="Registration" />
      <Input
        label="Name"
        placeholder="Masukan nama lengkap anda"
        onChangeText={(e) => setName(e)}
      />
      <Input
        label="Username"
        placeholder="Masukan username anda"
        onChangeText={(e) => setUsername(e)}
      />
      <Input
        label="Email"
        placeholder="Masukan email anda"
        keyboardType="email-address"
        onChangeText={(e) => setEmail(e)}
      />
      <Input
        label="Address"
        placeholder="Masukan alamat anda"
        onChangeText={(e) => setAddress(e)}
      />
      <Input
        label="Phone Number"
        placeholder="Masukan Nomor telepon anda"
        keyboardType="numeric"
        onChangeText={(e) => setPhoneNumber(e.replace(/[^0-9]/g, ''))}
      />
      <Button label="Register" onPress={onSubmit} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
});