import React from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Footer from './components/Footer'
import FirestoreExample from './components/FirestoreExample'
import Dashboard from './components/dashboard/Dashboard'
import AdminDashboard from './components/admin/AdminDashboard'
import { useAuth } from './hooks/useAuth';

export default function App() {
  const { user, isAdmin } = useAuth();
  const path = window.location.pathname;

  // Simple routing
  if (user) {
    if (path === '/dashboard') {
      return (
        <div className="min-h-screen">
          <Navbar />
          <Dashboard />
          <Footer />
        </div>
      );
    }
    
    if (path === '/admin' && isAdmin) {
      return (
        <div className="min-h-screen">
          <Navbar />
          <AdminDashboard />
          <Footer />
        </div>
      );
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <FirestoreExample />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}
