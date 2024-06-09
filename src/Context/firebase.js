import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDGbn41F0GV8M8rPGsMw4ty4TYUhMHjUns",
  authDomain: "petme-1fe85.firebaseapp.com",
  projectId: "petme-1fe85",
  storageBucket: "petme-1fe85.appspot.com",
  messagingSenderId: "228010808748",
  appId: "1:228010808748:web:de817ff719ac0777ed1609"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const store = firebase.storage();

export { auth, db, store };
