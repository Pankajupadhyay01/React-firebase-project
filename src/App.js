import { app } from "./firebase";

import { getAuth , createUserWithEmailAndPassword } from "firebase/auth";
import "./App.css";


const auth = getAuth(app);

function App() {
    const signupUser = () =>{
        createUserWithEmailAndPassword( auth , " niyati@gmail.com " , " Niyati@123 ").then (value => console.log(value));
    };
}

export default App;


