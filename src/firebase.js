// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD8hmZxJIvMd-lNncPFv5P7ZoUhtH6bnkI",
  authDomain: "ethnic-closet.firebaseapp.com",
  projectId: "ethnic-closet",
  storageBucket: "ethnic-closet.firebasestorage.app",
  messagingSenderId: "691065580637",
  appId: "1:691065580637:web:6eb67ad09c754dc025f1b4",
  measurementId: "G-SMSNV2QBWC"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
