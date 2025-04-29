import { Text, View, StyleSheet, ScrollView } from 'react-native';

const Notif = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <Text style={styles.date}>Today</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.notificationBox}>
          <Text style={styles.notificationText}>Your request has been accept by the tutor</Text>
        </View>
        <View style={styles.notificationBox}>
          <Text style={styles.notificationText}>You just book a front end lesson</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Notif;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
    textAlign: 'center',
    marginBottom: 10,
    paddingTop: 50,
  },
  date: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 20,
  },
  notificationBox: {
    backgroundColor: 'navy',
    borderRadius: 0,
    padding: 15,
    marginBottom: 10,
    marginTop: 30,
  },
  notificationText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});
