import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "knowlegebase-87f7f.firebaseapp.com",
  projectId: "knowlegebase-87f7f",
  storageBucket: "knowlegebase-87f7f.appspot.com",
  messagingSenderId: "941696865581",
  appId: "1:941696865581:web:0c267be54da57f20112fa4"
};

export const app = initializeApp(firebaseConfig);