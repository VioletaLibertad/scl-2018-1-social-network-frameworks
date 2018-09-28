import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

// Export raw database

export const fbDatabase = db;


// export const deletePost = (elementId) => {
//   /* eslint no-restricted-globals: ["off", "location"] */
//   if (confirm('¿Estás seguro de eliminar este mensaje?')) {
//     event.stopPropagation();
//     const messagesRef = db.ref('messages').child(elementId);
//     messagesRef.remove();
//     const element = document.getElementById(elementId);
//     element.parentNode.removeChild(element);
//   }
// }
