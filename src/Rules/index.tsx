import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Button from '../../components/atomsP/buttonRules';
import Gap from '../../components/atomsP/Gap';

const Rules = () => {
  return (
    <View style={styles.pageContainer}>
      <Image
        source={require('../assets/Tutors.png')}
        style={styles.headerImage}
      />

      <View style={styles.contentContainer}>
        <Text style={styles.infoText1}>
          If you want to change your teaching subjects, you'll need to delete
          your current account and create a new one. This is because when you
          first sign up, you can only choose three subjects to teach.
        </Text>
        <Gap height={5} />
        <Text style={styles.infoText2}>
          If you later decide to switch subjects, simply delete your account and
          register again with your new subject choices. Don’t worry there’s no
          disadvantage to doing this. The only thing that will be lost is your
          chat history.
        </Text>
        <Gap height={16} />
        <Text style={styles.infoText3}>
          So yes, it's perfectly fine to delete your account if you want to make
          changes to your selected subjects.
        </Text>
      </View>

      <Text style={styles.noteText}>
        If you already understand, please press continue!
      </Text>
      <Gap height={16} />
      <Button label="I understand" color="#161868" textColor="#FFFFFF" onPress={() => navigation.navigate('SignIn')} />
    </View>
  );
};

export default Rules;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
    padding: 16,
  },
  headerImage: {
    width: '70%',
    height: 130,
    marginTop: 50,
    paddingBottom: 50,
  },

  infoText3: {
    fontSize: 14,
    color: '#555555',
    textAlign: 'center',
    paddingTop: 10,
  },

  infoText2: {
    fontSize: 14,
    color: '#555555',
    textAlign: 'center',
    paddingTop: 10,
  },

  infoText1: {
    fontSize: 14,
    color: '#555555',
    textAlign: 'center',
    paddingTop: 60,
  },
  noteText: {
    fontSize: 12,
    color: '#555555',
    textAlign: 'center',
    marginVertical: 8,
    paddingTop: 150,
  },
});
