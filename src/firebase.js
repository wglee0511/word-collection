import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuT4-I7KmxcfE-zBsgrPhnEblZPDmjW1o",
  authDomain: "rweet-dictionary.firebaseapp.com",
  projectId: "rweet-dictionary",
  storageBucket: "rweet-dictionary.appspot.com",
  messagingSenderId: "241086362782",
  appId: "1:241086362782:web:8b00a15fbbdfcceae7378f",
  measurementId: "G-3RJEG3H7GL",
};
// Initialize Firebase
const firebaseCerti = firebase.initializeApp(firebaseConfig);

const firestore = firebaseCerti.firestore();

export { firestore };
