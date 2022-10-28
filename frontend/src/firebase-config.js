// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDOUT6SNJuF676xa1q3T1HoavUrNRM1SmI",
  authDomain: "react-firebase-4c134.firebaseapp.com",
  projectId: "react-firebase-4c134",
  storageBucket: "react-firebase-4c134.appspot.com",
  messagingSenderId: "683792630454",
  appId: "1:683792630454:web:4ad3e4f50a1a71a32adc17",
  measurementId: "G-9GZ2V1NWFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const provider = new GoogleAuthProvider()