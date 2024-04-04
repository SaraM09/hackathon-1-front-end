import { auth } from '../firebase/firebaseConfig';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    sendEmailVerification,
    updatePassword,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth';

export const doCreateUserWithEmailPassword = async (email, passsword) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailPassword = async (email, passsword) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return 
}