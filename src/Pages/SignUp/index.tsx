import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../../../components/moleculesP/Header';
import TextInput from '../../../components/moleculesP/TextInput';
import Button from '../../../components/atomsP/button';
import Button2 from '../../../components/atomsP/button2';
import Gap from '../../../components/atomsP/Gap';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {getDatabase, ref, set} from 'firebase/database';
import {showMessage} from 'react-native-flash-message';
import {Auth, fireDB} from '../../config/firebase';

const SignUp = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    createUserWithEmailAndPassword(Auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        set(ref(fireDB, 'users/' + user.uid), {
          fullName: fullName,
          email: email,
        });
        showMessage({
          message: 'Registration success',
          type: 'success',
        });
        navigation.navigate('SignIn');
      })
      .catch(error => {
        showMessage({
          message: error.message,
          type: 'danger',
        });
      });
  };

  return (
    <View style={styles.pageContainer}>
      <Header title="Create Account" />
      <Text style={styles.subtitle}>
        Fill your information below and choose if you are Student or Tutor.
      </Text>

      <View style={styles.formWrapper}>
        <View style={styles.formContainer}>
          <Gap height={16} />
          <TextInput
            label="Name"
            placeholder="Type your name"
            value={fullName}
            onChangeText={setFullName}
          />
          <Gap height={16} />
          <TextInput
            label="Email Address"
            placeholder="Type your email address"
            value={email}
            onChangeText={setEmail}
          />
          <Gap height={16} />
          <TextInput
            label="Password"
            placeholder="Type your password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Gap height={24} />

          <View style={styles.roleSelection}>
            <Button2
              label="Student"
              color="#FFFFFF"
              textColor="#000000"
              borderColor="#A020F0"
            />
            <Gap width={8} />
            <Button2
              label="Tutor"
              color="#FFFFFF"
              textColor="#000000"
              borderColor="#1E90FF"
              onPress={() => navigation.navigate('HomeTutor')}
            />
          </View>

          <Gap height={30} />
          <Button
            label="Sign up"
            color="#000080"
            textColor="#FFFFFF"
            onPress={onSubmit}
          />
        </View>
      </View>
    </View>
  );
};

export default SignUp;

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
