// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import {getAuth} from 'firebase/auth';
import {getDatabase} from 'firebase/database';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC0EurSqL8jvdXONMOW1XsvWBrv4drlNL4',
  authDomain: 'cslearn-fecff.firebaseapp.com',
  projectId: 'cslearn-fecff',
  storageBucket: 'cslearn-fecff.firebasestorage.app',
  messagingSenderId: '981736109249',
  appId: '1:981736109249:web:8e0e62c3c7e74fd346d040',
  measurementId: 'G-141G5NZXYC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// Initialize Firebase Services
const Auth = getAuth(app);
const fireDB = getDatabase(app);

export {app, Auth, fireDB};
