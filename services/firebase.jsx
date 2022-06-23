// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2uGnpG9zibOH1JMXUYwff33Ccb7CMic8",
  authDomain: "crud-simples-heitor.firebaseapp.com",
  projectId: "crud-simples-heitor",
  storageBucket: "crud-simples-heitor.appspot.com",
  messagingSenderId: "309330137588",
  appId: "1:309330137588:web:6ba99098258e5e742329a1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
