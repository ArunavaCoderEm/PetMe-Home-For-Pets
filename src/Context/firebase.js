import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDZk_Cg0AXWq6a-QLvWUXTgZMp_5EYUT14",
  authDomain: "petme-d7039.firebaseapp.com",
  projectId: "petme-d7039",
  storageBucket: "petme-d7039.appspot.com",
  messagingSenderId: "656484110784",
  appId: "1:656484110784:web:7fc1b95bd4b58954c6f825"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const store = firebase.storage();

export { auth, db, store };
