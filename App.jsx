import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import SplashScreen from './src/Pages/SplashScreen';
import CreateAcc from './src/Pages/CreateAcc';
import SignIn from './src/Pages/SignIn';
import HomePage from './src/Pages/HomeStu';
import FindTutor from './src/Pages/Search';
import StudentProfile from './src/Pages/StuProfil';
import Rules from './src/Pages/Rules';
import PaymentRules from './src/Pages/PaymentR';
import Notification from './src/Pages/Notifications';
import HomeTutor from './src/Pages/HomeTutor';
import SignUp from './src/Pages/SignUp';
import Course from './src/Pages/Course';
import Chat1 from './src/Pages/Chat1';
import Chat2 from './src/Pages/Chat2';
import Book from './src/Pages/Book';
import AveTutor from './src/Pages/AveTutor';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateAcc"
          component={CreateAcc}
          options={{headerShown: false}}
        />
        <Stack.Screen name="HomeStu" component={HomePage} />
        <Stack.Screen name="Search" component={FindTutor} />
        <Stack.Screen name="StuProfil" component={StudentProfile} />
        <Stack.Screen name="Rules" component={Rules} />
        <Stack.Screen name="PaymentR" component={PaymentRules} />
        <Stack.Screen name="HomeTutor" component={HomeTutor} />
        <Stack.Screen name="CreateAcc2" component={SignUp} />
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
