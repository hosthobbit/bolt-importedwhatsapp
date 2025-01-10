import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useAuth } from '../hooks/useAuth';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';
import AuthModal from './auth/AuthModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authView, setAuthView] = useState('login');
  const { user, loading, isAdmin } = useAuth();

  const handleAuthClick = (view) => {
    setAuthView(view);
    setShowAuthModal(true);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.href = '/';
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const isHomePage = window.location.pathname === '/';

  return (
    <>
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <img src="/logo.svg" alt="BotResponz" className="h-8 w-auto" />
                <span className="ml-2 font-bold text-xl">BotResponz</span>
              </a>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {isHomePage && (
                <>
                  <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
                  <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</a>
                  <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
                </>
              )}
              
              {user ? (
                <div className="flex items-center space-x-4">
                  {isAdmin && (
                    <a 
                      href="/admin" 
                      className="text-purple-600 hover:text-purple-800 font-medium"
                    >
                      Admin
                    </a>
                  )}
                  <a 
                    href="/dashboard" 
                    className="text-[#25D366] hover:text-[#075E54] font-medium"
                  >
                    Dashboard
                  </a>
                  <span className="text-gray-600">
                    {user.displayName || user.email}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handleAuthClick('login')}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => handleAuthClick('register')}
                    className="btn-primary"
                  >
                    Register
                  </button>
                </div>
              )}
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {isHomePage && (
                <>
                  <a href="#features" className="block px-3 py-2 text-gray-600">Features</a>
                  <a href="#how-it-works" className="block px-3 py-2 text-gray-600">How It Works</a>
                  <a href="#pricing" className="block px-3 py-2 text-gray-600">Pricing</a>
                </>
              )}
              
              {user ? (
                <>
                  {isAdmin && (
                    <a 
                      href="/admin" 
                      className="block px-3 py-2 text-purple-600"
                    >
                      Admin
                    </a>
                  )}
                  <a 
                    href="/dashboard" 
                    className="block px-3 py-2 text-[#25D366]"
                  >
                    Dashboard
                  </a>
                  <span className="block px-3 py-2 text-gray-600">
                    {user.displayName || user.email}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-3 py-2 text-gray-600"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleAuthClick('login')}
                    className="block w-full text-left px-3 py-2 text-gray-600"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => handleAuthClick('register')}
                    className="block w-full text-left px-3 py-2 text-[#25D366]"
                  >
                    Register
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        initialView={authView}
      />
    </>
  );
}
