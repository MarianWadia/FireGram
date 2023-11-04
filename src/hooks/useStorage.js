import React, { useState, useEffect } from "react";
import { database, storage } from "../config/firebase"
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { v4 } from "uuid";
import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from "firebase/firestore";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);
  const fileName = file?.name;
  const imageRef = ref(storage, `images/${fileName}`);
  const dbCollectionRef = collection(database, 'Images');

  useEffect(() => {
    const uploadImage = uploadBytesResumable(imageRef, file);

    uploadImage.on('state_changed', (snapshot) => {
      let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      try {
        const url = await getDownloadURL(uploadImage.snapshot.ref);
        addDoc(dbCollectionRef, { url, createdAt: new Date(), fileName });
        setUrl(url);

        const querySnapshot = await getDocs(query(dbCollectionRef, where("fileName", "==", fileName)));

        if (querySnapshot.size > 1) {
          // If there are more than one documents with the same fileName, delete the extra ones
          querySnapshot.forEach((docSnap) => {
            if (docSnap.id !== querySnapshot.docs[0].id) {
              const docRef = doc(database, 'Images', docSnap.id);
              deleteDoc(docRef);
            }
          });
        }
      } catch (err) {
        setError(err);
      }
    });
  }, [file]);

  return { progress, url, error, setProgress};
};

export default useStorage;
