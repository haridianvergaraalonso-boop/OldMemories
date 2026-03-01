import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);