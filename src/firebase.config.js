
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'





const firebaseConfig = {

  apiKey: "AIzaSyB151_PNaf5Xn0LTKf8dOzJXg4ConDql8M",

  authDomain: "house-marketplace-app-18d43.firebaseapp.com",

  projectId: "house-marketplace-app-18d43",

  storageBucket: "house-marketplace-app-18d43.appspot.com",

  messagingSenderId: "858795671272",

  appId: "1:858795671272:web:a91e60bb679d3c6cfe935d"

};


// Initialize Firebase

initializeApp(firebaseConfig);
export const db = getFirestore()