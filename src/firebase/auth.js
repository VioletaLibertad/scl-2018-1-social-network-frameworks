/* Defining Authentication Methods */

import { auth } from './firebase';

// Sign up
export const doCreateUserWithEmailAndPassword = (email, password) => auth.createUserWithEmailAndPassword(email, password);

// Sign in
export const doSignInWithEmailAndPassword = (email, password) => auth.signInWithEmailAndPassword(email, password);

// Sign out
export const doSignOut = () => auth.signOut().then(() => {
  window.location = 'https://sin-restricciones-react.firebaseapp.com/';
});

export const user = auth.currentUser;
