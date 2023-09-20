import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyADGeDtSGsttIMJFS08iJTuNXz7s-6FJLk",

    authDomain: "fir-react-crud-d4498.firebaseapp.com",

    projectId: "fir-react-crud-d4498",

    storageBucket: "fir-react-crud-d4498.appspot.com",

    messagingSenderId: "1083328373114",

    appId: "1:1083328373114:web:c6db85a1474038463276c3",

    measurementId: "G-BGQY0FZ473"

};


const app = initializeApp(firebaseConfig);

export const auth = getAuth();