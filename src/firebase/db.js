import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

// Messages

export const getMessages = () => {
  let dbMessages = [];
  db.ref('messages').on('child_added', (newMessage) => {
    dbMessages.push(newMessage.val());
  }).then((result) => {
    console.log(result);
  }).catch((err) => {
    console.log(err);
  });
};

export const uploadMessage = (message) => {
  const newMessageKey = db.ref().child('messages').push().key;
  db.ref(`messages/${newMessageKey}`).set(message);
};