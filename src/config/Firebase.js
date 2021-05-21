import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseapp = firebase.initializeApp({
  apiKey: "AIzaSyDF5dhbOshkEXMMaFl2Xd5QN9xh9X9Z9Hg",
  authDomain: "shoppingx.firebaseapp.com",
  projectId: "shoppingx",
  storageBucket: "shoppingx.appspot.com",
  messagingSenderId: "985139271599",
  appId: "1:985139271599:web:3ba1eea9da43c2b2e3c15a",
  measurementId: "G-64CKYSBNGP",
});

export const auth = firebaseapp.auth();
export default firebaseapp;
