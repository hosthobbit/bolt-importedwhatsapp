import { db } from '../config/firebase';
import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  setDoc, 
  updateDoc, 
  deleteDoc,
  query,
  where
} from 'firebase/firestore';

// Generic error handler
const handleFirestoreError = (error, operation) => {
  console.error(`Firestore ${operation} error:`, error);
  throw new Error(`Failed to ${operation}: ${error.message}`);
};

// Create a document
export const createDocument = async (collectionName, docId, data) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await setDoc(docRef, {
      ...data,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    return docId;
  } catch (error) {
    handleFirestoreError(error, 'create document');
  }
};

// Read a document
export const getDocument = async (collectionName, docId) => {
  try {
    const docRef = doc(db, collectionName, docId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      throw new Error('Document not found');
    }
  } catch (error) {
    handleFirestoreError(error, 'get document');
  }
};

// Update a document
export const updateDocument = async (collectionName, docId, data) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, {
      ...data,
      updatedAt: new Date().toISOString()
    });
    return docId;
  } catch (error) {
    handleFirestoreError(error, 'update document');
  }
};

// Delete a document
export const deleteDocument = async (collectionName, docId) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await deleteDoc(docRef);
    return docId;
  } catch (error) {
    handleFirestoreError(error, 'delete document');
  }
};

// Query documents
export const queryDocuments = async (collectionName, conditions = []) => {
  try {
    const collectionRef = collection(db, collectionName);
    let q = collectionRef;

    if (conditions.length > 0) {
      q = query(collectionRef, ...conditions.map(c => where(c.field, c.operator, c.value)));
    }

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    handleFirestoreError(error, 'query documents');
  }
};
