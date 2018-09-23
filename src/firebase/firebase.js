/* Firebase Configuration */

import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA2dyaPf9zhrymkfTqmXg1yXBAnECvqZIk",
  authDomain: "sin-restricciones-react.firebaseapp.com",
  databaseURL: "https://sin-restricciones-react.firebaseio.com",
  projectId: "sin-restricciones-react",
  storageBucket: "sin-restricciones-react.appspot.com",
  messagingSenderId: "642209402059"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export default {
  auth
};