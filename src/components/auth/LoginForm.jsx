import React, { useState } from 'react';
import { auth, db } from '../../config/firebase';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { FcGoogle } from 'react-icons/fc';

export default function LoginForm({ onClose, onSwitchToRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      setError('');
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: 'select_account'
      });

      console.log('Starting Google sign-in process...');
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Google sign-in successful', { uid: user.uid, email: user.email });

      // Check if user document exists
      const userRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userRef);

      if (!userDoc.exists()) {
        console.log('Creating new user document in Firestore...');
        // Create user document if it doesn't exist
        const userData = {
          email: user.email,
          name: user.displayName || '',
          role: user.email === 'mike@hosthobbit.com' ? 'admin' : 'user',
          status: 'active',
          createdAt: new Date().toISOString(),
          authProvider: 'google',
          photoURL: user.photoURL || null,
          lastLogin: new Date().toISOString()
        };

        await setDoc(userRef, userData);
        console.log('User document created successfully');
      } else {
        console.log('User document already exists, updating lastLogin...');
        // Update last login time
        await setDoc(userRef, {
          lastLogin: new Date().toISOString()
        }, { merge: true });
      }

      console.log('Authentication process completed successfully');
      onClose();
      // Force page reload to update UI
      window.location.reload();
    } catch (error) {
      console.error('Detailed Google sign-in error:', {
        code: error.code,
        message: error.message,
        fullError: error
      });
      
      switch (error.code) {
        case 'auth/popup-closed-by-user':
          setError('Sign-in popup was closed. Please try again.');
          break;
        case 'auth/popup-blocked':
          setError('Pop-up was blocked by your browser. Please enable pop-ups for this site.');
          break;
        case 'auth/cancelled-popup-request':
          setError('Multiple pop-up requests were cancelled.');
          break;
        case 'auth/network-request-failed':
          setError('Network error occurred. Please check your connection.');
          break;
        case 'auth/unauthorized-domain':
          setError('This domain is not authorized for Google sign-in. Please contact support.');
          break;
        default:
          setError(`Authentication error: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      
      // Check if user document exists
      const userRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userRef);
      
      if (!userDoc.exists()) {
        // Create user document if it doesn't exist
        await setDoc(userRef, {
          email: user.email,
          name: user.displayName || '',
          role: email === 'mike@hosthobbit.com' ? 'admin' : 'user',
          status: 'active',
          createdAt: new Date().toISOString(),
          authProvider: 'email',
          lastLogin: new Date().toISOString()
        });
      } else {
        // Update last login time
        await setDoc(userRef, {
          lastLogin: new Date().toISOString()
        }, { merge: true });
      }
      
      onClose();
      // Force page reload to update UI
      window.location.reload();
    } catch (error) {
      console.error('Login error:', error);
      switch (error.code) {
        case 'auth/user-not-found':
          setError('No account found with this email');
          break;
        case 'auth/wrong-password':
          setError('Incorrect password');
          break;
        default:
          setError('Failed to log in. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      
      {error && (
        <div className="bg-red-50 text-red-500 p-3 rounded mb-4">
          {error}
        </div>
      )}

      <button
        onClick={handleGoogleSignIn}
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 mb-4"
      >
        <FcGoogle size={24} />
        <span>Continue with Google</span>
      </button>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or continue with email</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full btn-primary disabled:opacity-50"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      <div className="mt-4 text-center">
        <p className="text-gray-600">
          Don't have an account?{' '}
          <button
            onClick={onSwitchToRegister}
            className="text-[#25D366] hover:text-[#075E54]"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
}
