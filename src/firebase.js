// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
 apiKey: "AIzaSyBqBeWbWGmiKWfmuq--s-19uyR-sGqSp6g",
 authDomain: "bookstore-6e4f9.firebaseapp.com",
 projectId: "bookstore-6e4f9",
 storageBucket: "bookstore-6e4f9.appspot.com",
 messagingSenderId: "456358342846",
 appId: "1:456358342846:web:cc25c2a074e5db1b4aeeef",
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID,
//    };
