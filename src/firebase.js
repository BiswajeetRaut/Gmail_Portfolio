import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDobM6chJ9rgCRuMpxkwrrYnmTPb0oA3rs",
    authDomain: "clone-7ea36.firebaseapp.com",
    projectId: "clone-7ea36",
    storageBucket: "clone-7ea36.appspot.com",
    messagingSenderId: "640703705536",
    appId: "1:640703705536:web:ba8898a5fd3d939bd85825",
    measurementId: "G-8KLKGSQ7EY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
