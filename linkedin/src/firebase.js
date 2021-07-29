import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBRBzTKVnDbGE6NF4Z6VUilxU7JvXQLGTA",
  authDomain: "linkedin-f0356.firebaseapp.com",
  projectId: "linkedin-f0356",
  storageBucket: "linkedin-f0356.appspot.com",
  messagingSenderId: "1059935865213",
  appId: "1:1059935865213:web:66cec4aac01481a0b82414",
  measurementId: "G-M6C9HYXC2K",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
