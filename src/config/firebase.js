// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAY2AOutOs9fr2aneKzEJRzbZ9tD5fx1tQ",
  authDomain: "fireimages-23d00.firebaseapp.com",
  projectId: "fireimages-23d00",
  storageBucket: "fireimages-23d00.appspot.com",
  messagingSenderId: "58729666711",
  appId: "1:58729666711:web:c4f52e413067ee5516f1d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getFirestore(app);
