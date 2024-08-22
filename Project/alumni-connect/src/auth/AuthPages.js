import React, { useState } from 'react';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

export function AuthPages({ setCurrentPage }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center mb-8">
        <button 
          className={`px-4 py-2 rounded ${showLogin ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setShowLogin(true)}
        >
          Login
        </button>
        <button 
          className={`px-4 py-2 rounded ${!showLogin ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setShowLogin(false)}
        >
          Register
        </button>
      </div>

      {showLogin ? <LoginForm /> : <RegisterForm />}
      
      <div className="mt-8 text-center">
        <button 
          className="text-blue-600 hover:underline"
          onClick={() => setCurrentPage('home')}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
