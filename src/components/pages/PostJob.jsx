import React, { useState } from 'react';

function PostJob() {
  const [jobData, setJobData] = useState({
    title: '',
    company: '',
    location: '',
    type: 'Full-time',
    salary: '',
    description: '',
    requirements: ''
  });

  const handleChange = (e) => {
    setJobData({
      ...jobData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Job posted:', jobData);
    alert('Job posted successfully!');
    setJobData({
      title: '',
      company: '',
      location: '',
      type: 'Full-time',
      salary: '',
      description: '',
      requirements: ''
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Post a New Job</h1>
          <p className="text-gray-600 mb-6">Fill in the details below to reach qualified candidates</p>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Job Title *</label>
                <input
                  type="text"
                  name="title"
                  required
                  value={jobData.title}
                  onChange={handleChange}
                  placeholder="e.g., Frontend Developer"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Company Name *</label>
                <input
                  type="text"
                  name="company"
                  required
                  value={jobData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Location *</label>
                <input
                  type="text"
                  name="location"
                  required
                  value={jobData.location}
                  onChange={handleChange}
                  placeholder="e.g., Remote, New York, NY"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Job Type *</label>
                <select
                  name="type"
                  value={jobData.type}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                >
                  <option>Full-time</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                  <option>Internship</option>
                </select>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Salary Range *</label>
              <input
                type="text"
                name="salary"
                required
                value={jobData.salary}
                onChange={handleChange}
                placeholder="e.g., $80,000 - $100,000"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Job Description *</label>
              <textarea
                name="description"
                rows="5"
                required
                value={jobData.description}
                onChange={handleChange}
                placeholder="Describe the role, responsibilities, and what the candidate will do..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Requirements *</label>
              <textarea
                name="requirements"
                rows="4"
                required
                value={jobData.requirements}
                onChange={handleChange}
                placeholder="List the skills, experience, and qualifications needed..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Post Job
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PostJob;