import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABIo3l97h9Dl9yTckawFbZ_COEiDtolUo",
  authDomain: "coderhouse-react-618de.firebaseapp.com",
  projectId: "coderhouse-react-618de",
  storageBucket: "coderhouse-react-618de.appspot.com",
  messagingSenderId: "971535409527",
  appId: "1:971535409527:web:7e66c5dda4b138031ac172"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);