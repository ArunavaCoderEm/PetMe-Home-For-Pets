import { initializeApp } from "firebase/app";
import 'firebase/auth';
import firebase from "firebase/compat/app";
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDhY28IMMut_8cSBIOpqtQ5rJl1DH9Iid4",
  authDomain: "petmeauth-1aa87.firebaseapp.com",
  projectId: "petmeauth-1aa87",
  storageBucket: "petmeauth-1aa87.appspot.com",
  messagingSenderId: "12536296792",
  appId: "1:12536296792:web:f800bd5dfbb089998ae12d"
};

const app = initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const store = firebase.firestore();

export { auth, db, store };