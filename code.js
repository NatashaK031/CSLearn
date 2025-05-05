import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/Pages/SplashScreen';
import SignIn from './src/Pages/SignIn';
import HomePage from './src/HomeStu';
import Search from './src/Search';
import StuProfil from './src/StuProfil';
import Rules from './src/Rules';
import PaymentR from './src/Rules';
import Notification from './src/Notifications';
import HomeTutor from './src/HomeTutor';
import CreateAcc from './src/CreateAcc';
import CreateAcc2 from './src/Pages/SignUp';
import Course from './src/Course';
import Chat1 from './src/Chat1';
import Chat2 from './src/Chat2';
import Book from './src/Book';
import AveTutor from './src/AveTutor';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen name="HomeStu" component={HomePage} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Student Profile" component={StuProfil} />
        <Stack.Screen name="Rules for Tutor" component={Rules} />
        <Stack.Screen name="Payment Rules" component={PaymentR} />
        <Stack.Screen name="Home Tutor" component={HomeTutor} />
        <Stack.Screen name="Sign Up" component={CreateAcc2} />
        <Stack.Screen name="Create Account" component={CreateAcc} />
        <Stack.Screen name="Course Subject" component={Course} />
        <Stack.Screen name="Inside Chat" component={Chat2} />
        <Stack.Screen name="Chat" component={Chat1} />
        <Stack.Screen name="Book Date and Time" component={Book} />
        <Stack.Screen name="Avalilable Tutors" component={AveTutor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
