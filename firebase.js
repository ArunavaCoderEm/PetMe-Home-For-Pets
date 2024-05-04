// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBW7KHHFQL_bfeRhyBqWsRfLTJR2STppuE",

  authDomain: "petme-97263.firebaseapp.com",

  projectId: "petme-97263",

  storageBucket: "petme-97263.appspot.com",

  messagingSenderId: "591352761649",

  appId: "1:591352761649:web:adf14e515fadc8b5e0b410"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app