import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
  } from 'react-native';
  import React from 'react';
  
  const messages = [
    {id: '1', text: 'Hi there, I saw your profile, can you help me about my front end hw?', fromUser: true},
    {id: '2', text: 'Hallo, thank you for contact me.\nyes I can help you, what was that?', fromUser: false},
    {id: '3', text: "I have some lessons that I still don't understand about front end", fromUser: true},
    {id: '4', text: "What lessons that you still don't understand?", fromUser: false},
    {id: '5', text: 'About this............', fromUser: true},
  ];
  
  const ChatScreen = () => {
    return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={require('../../assets/propic.png')}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Avrilia Kawonal</Text>
        </View>
  
        <ScrollView style={styles.chatContainer}>
          {messages.map((msg, index) => (
            <View
              key={index}
              style={[
                styles.messageBubble,
                msg.fromUser ? styles.userBubble : styles.tutorBubble,
              ]}>
              <Text style={styles.messageText}>{msg.text}</Text>
            </View>
          ))}
        </ScrollView>
  
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Type a message...."
            style={styles.textInput}
          />
        </View>
      </View>
    );
  };
  
  export default ChatScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      paddingHorizontal: 16,
      paddingTop: 60,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
      borderBottomWidth: 1,
      borderBottomColor: '#000000',
      paddingBottom: 8,
    },
    profileImage: {
      width: 40,
      height: 40,
      marginRight: 10,
    },
    profileName: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    chatContainer: {
      flex: 1,
      marginTop: 10,
    },
    messageBubble: {
      maxWidth: '80%',
      padding: 10,
      marginVertical: 6,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: {width: 1, height: 1},
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 3,
    },
    userBubble: {
      backgroundColor: '#F0F0F0',
      alignSelf: 'flex-end',
    },
    tutorBubble: {
      backgroundColor: '#FFFFFF',
      alignSelf: 'flex-start',
      borderWidth: 1,
      borderColor: '#6495ED',
    },
    messageText: {
      fontSize: 14,
    },
    inputContainer: {
      padding: 12,
      backgroundColor: '#F5F5F5',
      borderTopWidth: 1,
      borderTopColor: '#DDD',
    },
    textInput: {
      backgroundColor: '#E0E0E0',
      borderRadius: 20,
      paddingHorizontal: 16,
      paddingVertical: 10,
      fontSize: 14,
    },
  });
  