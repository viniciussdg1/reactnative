import { initializeApp } from "firebase/app";
import { getAuth, getReactNativePersistence, initializeAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQDW4FKfbNntgLqgpuRKO8s16nrxg-u7E",
  authDomain: "react-dff24.firebaseapp.com",
  projectId: "react-dff24",
  storageBucket: "react-dff24.appspot.com",
  messagingSenderId: "655537683976",
  appId: "1:655537683976:web:4a6720ef27efa0766e1bbd",
  measurementId: "G-WWSSJ2DTXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = initializeAuth(app, { persistence:  getReactNativePersistence(AsyncStorage)})
