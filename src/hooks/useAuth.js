import { useState, useEffect } from 'react';
import { auth, db } from '../config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      console.log('Auth state changed:', firebaseUser ? 'User logged in' : 'No user');
      
      if (firebaseUser) {
        try {
          console.log('Fetching additional user data from Firestore...');
          const userRef = doc(db, 'users', firebaseUser.uid);
          const userDoc = await getDoc(userRef);
          const userData = userDoc.data();
          
          const enrichedUser = {
            ...firebaseUser,
            ...(userData || {}),
          };
          
          console.log('User data retrieved:', {
            uid: enrichedUser.uid,
            email: enrichedUser.email,
            role: enrichedUser.role
          });
          
          setUser(enrichedUser);
          setIsAdmin(userData?.role === 'admin');
        } catch (error) {
          console.error('Error fetching user data:', error);
          // Still set the basic user data even if Firestore fetch fails
          setUser(firebaseUser);
          setIsAdmin(false);
        }
      } else {
        setUser(null);
        setIsAdmin(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { user, loading, isAdmin };
}
