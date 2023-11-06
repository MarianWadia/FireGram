// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBP9a2mw-WncRHpKKMYjC_UJIXJDXpB1mY",
  authDomain: "galleryapp-378c8.firebaseapp.com",
  projectId: "galleryapp-378c8",
  storageBucket: "galleryapp-378c8.appspot.com",
  messagingSenderId: "833610887988",
  appId: "1:833610887988:web:2da84e28b07a2c8d692b61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getFirestore(app);
