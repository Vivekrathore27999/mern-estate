// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-ad68f.firebaseapp.com",
  projectId: "realestate-ad68f",
  storageBucket: "realestate-ad68f.appspot.com",
  messagingSenderId: "374901099024",
  appId: "1:374901099024:web:ba112f4389e7d90b911895"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);