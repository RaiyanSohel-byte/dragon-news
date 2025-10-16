// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRVDOdvyOWIkPfbgrRrGRdKl2Qvgvo1pI",
  authDomain: "auth-context-bab09.firebaseapp.com",
  projectId: "auth-context-bab09",
  storageBucket: "auth-context-bab09.firebasestorage.app",
  messagingSenderId: "551994398483",
  appId: "1:551994398483:web:f90bad82b56aeea2212ce6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
