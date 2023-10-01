// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import {getStorage}
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO0gQMlKRtKadPElCwQSifoamhkzrN0r8",
  authDomain: "betahouseproject-storage.firebaseapp.com",
  projectId: "betahouseproject-storage",
  storageBucket: "betahouseproject-storage.appspot.com",
  messagingSenderId: "308095077083",
  appId: "1:308095077083:web:06e4bad5ecf2775f689afe",
  measurementId: "G-JVCC0ECWHG"
};

// Initialize Firebase
const apps = initializeApp(firebaseConfig);
 export const storage = getStorage(apps); 