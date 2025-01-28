// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDsOmGJXA34y5O9vhDO0fGKN7fxljyw4UM",
    authDomain: "broodl-e8909.firebaseapp.com",
    projectId: "broodl-e8909",
    storageBucket: "broodl-e8909.firebasestorage.app",
    messagingSenderId: "1016160071355",
    appId: "1:1016160071355:web:e0ee11eb27b5b3710c439e"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)