// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDthkTESI-I90GPs0DjDDbpEjUPyJVNTUc",
  authDomain: "chatgpt-messenger-38f20.firebaseapp.com",
  projectId: "chatgpt-messenger-38f20",
  storageBucket: "chatgpt-messenger-38f20.appspot.com",
  messagingSenderId: "1013665781394",
  appId: "1:1013665781394:web:96380f18796f22c5adb84b",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
