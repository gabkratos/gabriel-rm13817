// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY4wqylcicDfVJ7BhERBroS6JFDaNB8nw",
  authDomain: "crud-simples-da3d5.firebaseapp.com",
  projectId: "crud-simples-da3d5",
  storageBucket: "crud-simples-da3d5.appspot.com",
  messagingSenderId: "946633598282",
  appId: "1:946633598282:web:718d35a65a128ae64f4db3",
  measurementId: "G-86YC77HTY6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);