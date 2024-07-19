import React from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ0NyWFHY9P-u8tH0BcUEvQ_566jSGWKM",
  authDomain: "jewerly-139e8.firebaseapp.com",
  projectId: "jewerly-139e8",
  storageBucket: "jewerly-139e8.appspot.com",
  messagingSenderId: "1001585811742",
  appId: "1:1001585811742:web:78c20cd46118df5a04e90f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app