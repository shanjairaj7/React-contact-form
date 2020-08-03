import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBYqJjnLOtdPz2EL1xrTpA2qh-FMix6YGo",
  authDomain: "fir-contact-form-1a9ef.firebaseapp.com",
  databaseURL: "https://fir-contact-form-1a9ef.firebaseio.com",
  projectId: "fir-contact-form-1a9ef",
  storageBucket: "fir-contact-form-1a9ef.appspot.com",
  messagingSenderId: "207526227568",
  appId: "1:207526227568:web:5681c7e4a84fdd0d298eb5",
});

var db = firebaseApp.firestore();

export { db };
