// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDOtey062_k51gjTzprqIF_0iQ3Pt5tJTM",
    authDomain: "banortehackmty24.firebaseapp.com",
    projectId: "banortehackmty24",
    storageBucket: "banortehackmty24.appspot.com",
    messagingSenderId: "782619443237",
    appId: "1:782619443237:web:fff283e06aad68f0e27fcc",
    measurementId: "G-88T8S5T13Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Exporta la autenticación para usarla en el login
const auth = getAuth(app);

export { auth };