// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5BVU71hGsHdUu2j49UL5txtruBqt0N-c",
  authDomain: "venturevue-14724.firebaseapp.com",
  projectId: "venturevue-14724",
  storageBucket: "venturevue-14724.appspot.com",
  messagingSenderId: "850296386334",
  appId: "1:850296386334:web:2fa392b8d0c8c9ccd84f0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
