import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard</h1>
        <div className="bg-purple-50 border-l-4 border-purple-600 p-4 mb-6">
          <p className="text-purple-700">Welcome back, {user?.name || 'User'}!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">5</h3>
            <p>Jobs Posted</p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">12</h3>
            <p>Applications Received</p>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">3</h3>
            <p>Active Jobs</p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Applications</h2>
          <div className="bg-gray-50 rounded-lg p-6 text-center text-gray-500">
            No applications to display yet
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;