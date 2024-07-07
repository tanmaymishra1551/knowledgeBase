import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDjo2adgUZ0_95sIEPkVi1qKwwhYWI4-ao",
  authDomain: "knowlegebase-87f7f.firebaseapp.com",
  projectId: "knowlegebase-87f7f",
  storageBucket: "knowlegebase-87f7f.appspot.com",
  messagingSenderId: "941696865581",
  appId: "1:941696865581:web:0c267be54da57f20112fa4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);