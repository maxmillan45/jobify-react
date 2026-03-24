import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const features = [
    { icon: "💼", title: "Find Your Dream Job", desc: "Browse thousands of job listings from top companies" },
    { icon: "🚀", title: "Post Jobs Easily", desc: "Reach qualified candidates with our easy job posting system" },
    { icon: "📊", title: "Track Applications", desc: "Monitor your job applications and get real-time updates" },
    { icon: "🤝", title: "Connect Directly", desc: "Communicate with employers and candidates seamlessly" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Jobify</h1>
          <p className="text-xl mb-8">Your Gateway to Career Success</p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/jobs"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition"
            >
              Find Jobs
            </Link>
            <Link
              to="/post-job"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition"
            >
              Post a Job
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Jobify?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;