// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
