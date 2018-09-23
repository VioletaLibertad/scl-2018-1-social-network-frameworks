/* Defining Authentication Methods */

import auth from './firebase';

// Sign up
const doCreateUserWithEmailAndPassword = (email, password) => auth.createUserwithEmailAndPassword(email, password);

// Sign in
const doSignInWithEmailAndPassword = (email, password) => auth.signInWithEmailAndPassword(email, password);

// Sign out
const doSignOut = () => auth.signOut();

export default {
  doCreateUserWithEmailAndPassword, 
  doSignInWithEmailAndPassword, 
  doSignOut
};