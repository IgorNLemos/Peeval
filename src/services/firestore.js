import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { app } from "./auth"; // Reuse the initialized app

const db = getFirestore(app);

// Firestore functions
export const createDocument = async (collectionName, data) => {
  const collectionRef = collection(db, collectionName);
  await addDoc(collectionRef, data);
};

export const fetchDocuments = async (collectionName) => {
  const collectionRef = collection(db, collectionName);
  const querySnapshot = await getDocs(collectionRef);
  return querySnapshot.docs.map(doc => doc.data());
};

// Optional: Add specific functions for creating criteria or evaluations
export const createCriteria = async (data) => createDocument('criteria', data);
export const createEvaluation = async (data) => createDocument('evaluations', data);

export default db;
