import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '../../components/moleculesP/Header';
import TextInput from '../../components/moleculesP/TextInput';
import Button from '../../components/atomsP/button';
import Button2 from '../../components/atomsP/button2';
import Gap from '../../components/atomsP/Gap';

const CreateAcc2 = ({ navigation }) => {
  return (
    <View style={styles.pageContainer}>
      <Header title="Create Account" />
      <Text style={styles.subtitle}>
        Fill your information below and choose if you are Student or Tutor.
      </Text>

      <View style={styles.formWrapper}>
        <View style={styles.formContainer}>
          <Gap height={16} />
          <TextInput label="Name" placeholder="Type your name" />
          <Gap height={16} />
          <TextInput label="Email Address" placeholder="Type your email address" />
          <Gap height={16} />
          <TextInput label="Password" placeholder="Type your password" />
          <Gap height={24} />

          <View style={styles.roleSelection}>
            <Button2 label="Student" color="#FFFFFF" textColor="#000000" borderColor="#A020F0" />
            <Gap width={8} />
            <Button2 label="Tutor" color="#FFFFFF" textColor="#000000" borderColor="#1E90FF" onPress={() => navigation.navigate('HomeTutor')} />
          </View>

          <Gap height={30} />
          <Button
            label="Sign up"
            color="#000080"
            textColor="#FFFFFF"
            onPress={() => navigation.navigate('HomeStu')}
          />
        </View>
      </View>
    </View>
  );
};

export default CreateAcc2;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#EBEBEB',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 100,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 13,
    color: '#555555',
    marginVertical: 20,
  },
  formWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '100%',
    backgroundColor: '#D3D3D3',
    borderRadius: 20,
    padding: 24,
    marginBottom: 100,
  },
  roleSelection: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
