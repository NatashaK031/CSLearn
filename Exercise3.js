//1.import component raect-native
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
//2.buat component
// component adalah function yang return jsx
const App = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
      </View>
      <Text style={styles.subTitle}>Username</Text>
      <TextInput style={styles.input} placeholder="Enter your email" />
      <Text style={styles.subTitle1}>Password</Text>
      <TextInput style={styles.input1} placeholder="Enter your password" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </>
  );
};

//3.export component
export default App;

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: '700',
    color: 'black',
    textAlign: 'left',
    marginTop: 20,
    marginLeft: 20,
  },

  subTitle: {
    fontSize: 25,
    marginRight: 250,
    fontWeight: 400,
    marginBottom: 10,
    marginTop: 50,
    color: 'black',
    textAlign: 'center',
  },

  subTitle1: {
    fontSize: 25,
    marginRight: 250,
    fontWeight: 400,
    marginBottom: 10,
    marginTop: 10,
    color: 'black',
    textAlign: 'center',
  },

  input: {
    borderColor: 'grey',
    borderWidth: 2,
    margin: 20,
    marginTop: -5,
    fontSize: 15,
    borderRadius: 10,
    padding: 15,
  },

  input1: {
    borderColor: 'grey',
    borderWidth: 2,
    margin: 20,
    marginTop: -5,
    fontSize: 15,
    borderRadius: 10,
    padding: 15,
  },

  button: {
    backgroundColor: 'orange',
    margin: 40,
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
  },
});
