import React, { useState } from 'react';
import ApplicationForm from './ApplicationForm';

function JobCard({ job }) {
  const [showApplication, setShowApplication] = useState(false);

  return (
    <>
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
          <span className={`px-3 py-1 rounded-full text-sm font-semibold
            ${job.type === 'Full-time' ? 'bg-blue-100 text-blue-700' :
              job.type === 'Part-time' ? 'bg-orange-100 text-orange-700' :
              'bg-purple-100 text-purple-700'}`}>
            {job.type}
          </span>
        </div>
        
        <div className="flex items-center space-x-4 text-gray-600 mb-3">
          <span className="font-semibold">{job.company}</span>
          <span> {job.location}</span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>
        
        <div className="flex justify-between items-center pt-4 border-t">
          <span className="text-green-600 font-bold"> {job.salary}</span>
          <span className="text-gray-500 text-sm">{job.posted}</span>
          <button
            onClick={() => setShowApplication(true)}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition"
          >
            Apply Now
          </button>
        </div>
      </div>

      {showApplication && (
        <ApplicationForm
          job={job}
          onClose={() => setShowApplication(false)}
        />
      )}
    </>
  );
}

export default JobCard;