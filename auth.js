import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";
import { GoogleAuthProvider } from "firebase/auth/cordova";

export const createuser = async (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password);
}

export const signinemailpass = async (email,password) => {
    return signInWithEmailAndPassword(auth,email,password);
}

export const signingoogle = async () => {
    const provider = GoogleAuthProvider();
    const result = await signInWithPopup(auth,provider);
    return result;
}

export const signOut = () => {
    return auth.signOut();
}

