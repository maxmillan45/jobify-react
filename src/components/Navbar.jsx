import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-white text-xl font-bold">
             Jobify
          </Link>
          
          <div className="flex space-x-4 items-center">
            <Link to="/" className="text-white hover:text-gray-200 px-3 py-2">
              Home
            </Link>
            <Link to="/jobs" className="text-white hover:text-gray-200 px-3 py-2">
              Browse Jobs
            </Link>
            {user ? (
              <>
                <Link to="/post-job" className="text-white hover:text-gray-200 px-3 py-2">
                  Post a Job
                </Link>
                <Link to="/dashboard" className="text-white hover:text-gray-200 px-3 py-2">
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Login / Signup
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;