// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCzkBZzHYkgzMqCyGK8tbYQGAZqwBfbqB0",
  authDomain: "galleryapp-65683.firebaseapp.com",
  projectId: "galleryapp-65683",
  storageBucket: "galleryapp-65683.appspot.com",
  messagingSenderId: "136353110879",
  appId: "1:136353110879:web:7f7f68a9813d47f4e8f4ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getFirestore(app);
