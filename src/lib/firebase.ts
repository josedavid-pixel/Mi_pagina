// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0UgRbjOJbVd3V-oaJl_HRQExV0TNqnjQ",
  authDomain: "personapulse-9qywh.firebaseapp.com",
  projectId: "personapulse-9qywh",
  storageBucket: "personapulse-9qywh.firebasestorage.app",
  messagingSenderId: "17403538335",
  appId: "1:17403538335:web:7449654ec0dd7acd70ebaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the Firestore instance
export const db = getFirestore(app);