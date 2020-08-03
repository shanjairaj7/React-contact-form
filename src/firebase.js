import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  // Your firebase credentials
});

var db = firebaseApp.firestore();

export { db };
