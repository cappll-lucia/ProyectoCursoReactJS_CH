
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

//Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJ1qIV3IlBCROhSobbxVwVdAdSY0GJDsk",
    authDomain: "opticacriado-react.firebaseapp.com",
    projectId: "opticacriado-react",
    storageBucket: "opticacriado-react.appspot.com",
    messagingSenderId: "839313662797",
    appId: "1:839313662797:web:0eb5432bbd5b4458a44d04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore + get reference 
export const db = getFirestore(app);
