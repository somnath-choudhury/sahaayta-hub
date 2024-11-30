import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SignupForm from '@/_auth/forms/SignupForm';


const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/sign-up');
  };

  return (
    <div className="min-h-screen w-full bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white p-6 shadow-md flex justify-between">
        <h1 className="text-2xl font-bold text-blue-600">Social App</h1>
        <div className="flex space-x-6">
          <a href="#features" className="text-gray-800 hover:text-blue-600">Features</a>
          <a href="#about" className="text-gray-800 hover:text-blue-600">About</a>
          <a href="#contact" className="text-gray-800 hover:text-blue-600">Contact</a>

          

           <Link
              to="/sign-up"
              className="text-primary-500 text-small-semibold ml-1">
              Sign up
            </Link>
        </div>
      </nav>

      {/* Rest of the Landing Page */}
      <section className="flex flex-col justify-center items-center text-center py-20 bg-blue-500 text-white min-h-[70vh] w-full">
        <h2 className="text-5xl font-bold mb-4">Welcome to SocialApp</h2>
        <p className="text-xl mb-8">Connect with friends and the world around you.</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded font-bold hover:bg-gray-100">
          Get Started
        </button>
      </section>

      <footer className="bg-gray-800 text-white p-6 text-center w-full">
        <p>&copy; {new Date().getFullYear()} SocialApp. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
