// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAka5WXwYU0yPk9Fe50t1kKc3QDG9JBZvs",
  authDomain: "quizappassignment-5d121.firebaseapp.com",
  projectId: "quizappassignment-5d121",
  storageBucket: "quizappassignment-5d121.appspot.com",
  messagingSenderId: "228428117578",
  appId: "1:228428117578:web:b7c4854dd981c53d9218b3",
  measurementId: "G-5HTVVEY06V"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db,auth};