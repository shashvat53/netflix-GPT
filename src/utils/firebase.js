// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn-kt-CAuIf-4jVyykKVBuBnhXdP9V2AU",
  authDomain: "netflix-gpt-ef388.firebaseapp.com",
  projectId: "netflix-gpt-ef388",
  storageBucket: "netflix-gpt-ef388.appspot.com",
  messagingSenderId: "294717497889",
  appId: "1:294717497889:web:aa0228df6f7b80379e7960",
  measurementId: "G-WQWSRZKPLC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
