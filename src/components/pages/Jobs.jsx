import React, { useState, useEffect } from 'react';
import JobCard from '../components/JobCard';

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: '',
    type: '',
    location: ''
  });

  useEffect(() => {
    // Sample job data
    const sampleJobs = [
      {
        id: 1,
        title: "Frontend Developer",
        company: "Tech Corp",
        location: "Remote",
        type: "Full-time",
        salary: "$80,000 - $100,000",
        description: "Looking for a React developer to join our team. You'll be working on modern web applications using React, Tailwind CSS, and modern JavaScript.",
        posted: "2 days ago"
      },
      {
        id: 2,
        title: "Backend Engineer",
        company: "Startup Inc",
        location: "New York, NY",
        type: "Full-time",
        salary: "$90,000 - $120,000",
        description: "Node.js and Python experience required. Join our backend team to build scalable APIs and microservices.",
        posted: "1 week ago"
      },
      {
        id: 3,
        title: "UI/UX Designer",
        company: "Design Studio",
        location: "San Francisco, CA",
        type: "Contract",
        salary: "$70 - $90 / hour",
        description: "Looking for a creative designer with Figma experience. Create beautiful user interfaces and experiences.",
        posted: "3 days ago"
      }
    ];
    setJobs(sampleJobs);
    setLoading(false);
  }, []);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const filteredJobs = jobs.filter(job => {
    return job.title.toLowerCase().includes(filters.search.toLowerCase()) &&
      (filters.type === '' || job.type === filters.type) &&
      (filters.location === '' || job.location.toLowerCase().includes(filters.location.toLowerCase()));
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl text-gray-600">Loading jobs...</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Find Your Next Opportunity</h1>
        
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="search"
            placeholder="Search jobs..."
            value={filters.search}
            onChange={handleFilterChange}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <select
            name="type"
            onChange={handleFilterChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <option value="">All Types</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
          </select>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={filters.location}
            onChange={handleFilterChange}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No jobs found. Try adjusting your filters!</p>
        </div>
      )}
    </div>
  );
}

export default Jobs;