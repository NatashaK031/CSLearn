import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import SplashScreen from './src/SplashScreen';
import CreateAcc from './src/CreateAcc';
import SignIn from './src/SignIn';
import HomePage from './src/HomeStu';
import FindTutor from './src/Search';
import StudentProfile from './src/StuProfil';
import Rules from './src/Rules';
import PaymentRules from './src/PaymentR'; // Make sure this file exists
import Notification from './src/Notifications';
import HomeTutor from './src/HomeTutor';
import CreateAcc2 from './src/CreateAcc2';
import Course from './src/Course';
import Chat1 from './src/Chat1';
import Chat2 from './src/Chat2';
import Book from './src/Book';
import AveTutor from './src/AveTutor';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateAcc"
          component={CreateAcc}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="HomeStu" component={HomePage} />
        <Stack.Screen name="Search" component={FindTutor} />
        <Stack.Screen name="StuProfil" component={StudentProfile} />
        <Stack.Screen name="Rules" component={Rules} />
        <Stack.Screen name="PaymentR" component={PaymentRules} />
        <Stack.Screen name="HomeTutor" component={HomeTutor} />
        <Stack.Screen name="CreateAcc2" component={CreateAcc2} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Course" component={Course} />
        <Stack.Screen name="ChatScreen" component={Chat2} />
        <Stack.Screen name="ChatList" component={Chat1} />
        <Stack.Screen name="Book" component={Book} />
        <Stack.Screen name="AveTutor" component={AveTutor} />
        <Stack.Screen name="Notifi" component={Notification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
