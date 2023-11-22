import firebase from "firebase";
import "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyBwvIn_hbtBhM5XJvKnstAozgWRgQktKwY",
  authDomain: "app-zoo-be62b.firebaseapp.com",
  projectId: "app-zoo-be62b",
  storageBucket: "app-zoo-be62b.appspot.com",
  messagingSenderId: "350773179168",
  appId: "1:350773179168:web:f5f6c4f381dcde046ddd45",
  measurementId: "G-6YTVX0S696"
};
firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();
export default database;