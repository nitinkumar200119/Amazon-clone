import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDIGA49G7Bo3pSwAJMr0jpSU9M0dknAsxk",
    authDomain: "clone-3ab9a.firebaseapp.com",
    projectId: "clone-3ab9a",
    storageBucket: "clone-3ab9a.appspot.com",
    messagingSenderId: "586858762828",
    appId: "1:586858762828:web:c94ca731dff0ec0a1adae9",
    measurementId: "G-X0MW3XZFT5"

});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };