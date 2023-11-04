import React, { useEffect, useState } from "react";
import { database } from '../config/firebase'; // Correct the import path
import { collection, getDocs, orderBy, query } from "firebase/firestore";

const useFirestore = (collectionName) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Create a query that orders data by the createdAt property in ascending order
        const q = query(collection(database, collectionName), orderBy("createdAt", "desc"));
        
        const querySnapshot = await getDocs(q);
        let documents = [];
        querySnapshot.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      } catch (error) {
        console.error("Error fetching data from Firestore:", error);
      }
    };

    fetchData();
  }, [docs]);

  return { docs };
};

export default useFirestore;
