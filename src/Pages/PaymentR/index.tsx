import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const PaymentRules = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Image
            source={require('../../assets/backarrow.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment Rules</Text>
      </View>

      <View style={styles.rulesContainer}>
        <View style={styles.ruleItem}>
          <Image
            source={require('../../assets/MoneyS.png')}
            style={styles.ruleIcon}
          />
          <View style={styles.ruleTextContainer}>
            <Text style={styles.ruleTitle}>Payment System</Text>
            <Text style={styles.ruleDescription}>
              All payments are made directly between student and tutor (outside
              the app).
            </Text>
          </View>
        </View>

        <View style={styles.ruleItem}>
          <Image
            source={require('../../assets/MoneyS.png')}
            style={styles.ruleIcon}
          />
          <View style={styles.ruleTextContainer}>
            <Text style={styles.ruleTitle}>Cancellations</Text>
            <Text style={styles.ruleDescription}>
              Discuss cancellations and refunds directly with your tutor face to
              face.
            </Text>
          </View>
        </View>

        <View style={styles.ruleItem}>
          <Image
            source={require('../../assets/MoneyS.png')}
            style={styles.ruleIcon}
          />
          <View style={styles.ruleTextContainer}>
            <Text style={styles.ruleTitle}>Trusts and communication</Text>
            <Text style={styles.ruleDescription}>
              Be clear, respectful, no bad words and please always be kind.
            </Text>
          </View>
        </View>

        <View style={styles.ruleItem}>
          <Image
            source={require('../../assets/MoneyS.png')}
            style={styles.ruleIcon}
          />
          <View style={styles.ruleTextContainer}>
            <Text style={styles.ruleTitle}>Disclaimer</Text>
            <Text style={styles.ruleDescription}>
              CSLearn is not responsible for any student issues. Use at your own
              risk.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PaymentRules;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2C1E63',
    padding: 16,
  },
  backButton: {
    marginRight: 16,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rulesContainer: {
    padding: 16,
  },
  ruleItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 24,
  },
  ruleIcon: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
  ruleTextContainer: {
    flex: 1,
  },
  ruleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  ruleDescription: {
    fontSize: 14,
    color: '#555555',
    marginBottom: 20,
  },
});
