import { initializeApp } from 'firebase/app';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDnI6K4kMpqndyMw7_lcqJCVli2LyVlDvg",
  authDomain: "botresponz2.firebaseapp.com",
  projectId: "botresponz2",
  storageBucket: "botresponz2.firebasestorage.app",
  messagingSenderId: "350737833179",
  appId: "1:350737833179:web:9102125b8a282a0b78c0fe",
  measurementId: "G-3VKEF54D26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Enable offline persistence
try {
  enableIndexedDbPersistence(db);
} catch (err) {
  if (err.code == 'failed-precondition') {
    console.warn('Multiple tabs open, persistence can only be enabled in one tab at a a time.');
  } else if (err.code == 'unimplemented') {
    console.warn('The current browser doesn\'t support persistence.');
  }
}

// Create initial admin user if it doesn't exist
const createInitialAdminUser = async () => {
  try {
    const { collection, query, where, getDocs, setDoc, doc } = await import('firebase/firestore');
    const usersRef = collection(db, 'users');
    const adminQuery = query(usersRef, where("email", "==", "mike@hosthobbit.com"));
    const querySnapshot = await getDocs(adminQuery);
    
    if (querySnapshot.empty) {
      const adminUserRef = doc(db, 'users', 'admin-user');
      await setDoc(adminUserRef, {
        email: 'mike@hosthobbit.com',
        role: 'admin',
        status: 'active',
        createdAt: new Date().toISOString()
      });
      console.log('Initial admin user created');
    }
  } catch (error) {
    console.error('Error creating initial admin user:', error);
  }
};

// Call the function to create initial admin user
createInitialAdminUser();

export { app, db, auth };
