// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_ZoOudmLqrjWgdhcSWW0rAWW5dpO3Sps",
  authDomain: "old-memories-8e409.firebaseapp.com",
  databaseURL: "https://old-memories-8e409-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "old-memories-8e409",
  storageBucket: "old-memories-8e409.firebasestorage.app",
  messagingSenderId: "53197118885",
  appId: "1:53197118885:web:938825aefea22424bf9c4c",
  measurementId: "G-CMSBRLWE31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);