// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuU5IZ7QMAp-Apzkz2l1nRF9ykxd53lf4",
  authDomain: "vananagayrimenkul.firebaseapp.com",
  projectId: "vananagayrimenkul",
  storageBucket: "vananagayrimenkul.appspot.com",
  messagingSenderId: "879037168139",
  appId: "1:879037168139:web:afb9516a1024f7b64e250e"
};
//Firebase fonksiyonları burada olacak
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);