// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADGeDtSGsttIMJFS08iJTuNXz7s-6FJLk",

    authDomain: "fir-react-crud-d4498.firebaseapp.com",
  
    projectId: "fir-react-crud-d4498",
  
    storageBucket: "fir-react-crud-d4498.appspot.com",
  
    messagingSenderId: "1083328373114",
  
    appId: "1:1083328373114:web:c6db85a1474038463276c3",
  
    measurementId: "G-BGQY0FZ473"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth(app);