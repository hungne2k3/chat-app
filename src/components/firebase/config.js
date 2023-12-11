import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUAlOsa0jZFZWFBp0XTLPTa-oxovraCt8",
  authDomain: "chat-2b964.firebaseapp.com",
  projectId: "chat-2b964",
  storageBucket: "chat-2b964.appspot.com",
  messagingSenderId: "532490149696",
  appId: "1:532490149696:web:5110d8b0cae9bb98b3a4a5",
  measurementId: "G-R2DYMBLPGW",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };

export default firebase;
