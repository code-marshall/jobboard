import React from 'react';
import { Link } from 'react-router-dom';
import DashboardHeader from '../common/DashboardHeader';
import { jobsData } from '../../data/sampleData';

const JobPostsListing = () => {
  const openJobs = jobsData.filter(job => job.status === 'OPEN');
  const closedJobs = jobsData.filter(job => job.status === 'CLOSED');

  const JobCard = ({ job }) => (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold mb-2">{job.title}</h3>
          <p className="text-gray-600">{job.department} • {job.location}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
          job.status === 'OPEN' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
        }`}>
          {job.status}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div>
          <p className="text-gray-600">Type</p>
          <p className="font-semibold">{job.type}</p>
        </div>
        <div>
          <p className="text-gray-600">Salary</p>
          <p className="font-semibold">{job.salary}</p>
        </div>
        <div>
          <p className="text-gray-600">Posted</p>
          <p className="font-semibold">{job.postedDate}</p>
        </div>
        <div>
          <p className="text-gray-600">{job.status === 'OPEN' ? 'Open Till' : 'Closed On'}</p>
          <p className="font-semibold">{job.status === 'OPEN' ? job.openTill : job.closedOn}</p>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-gray-600 text-sm mb-2">Skills Required:</p>
        <div className="flex flex-wrap gap-2">
          {job.skills.map((skill, index) => (
            <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center pt-4 border-t">
        <div>
          <p className="text-sm text-gray-600">Total Applications</p>
          <p className="text-2xl font-bold text-blue-600">{job.applications}</p>
        </div>
        {job.status === 'CLOSED' && job.hired > 0 && (
          <div>
            <p className="text-sm text-gray-600">Hired</p>
            <p className="text-2xl font-bold text-green-600">{job.hired}</p>
          </div>
        )}
        <Link
          to={`/dashboard/jobs/${job.id}`}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          View Details
        </Link>
      </div>
    </div>
  );

  return (
    <div>
      <DashboardHeader />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold mb-8">Job Postings</h1>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-green-600">Open Positions ({openJobs.length})</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {openJobs.map(job => <JobCard key={job.id} job={job} />)}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-600">Closed Positions ({closedJobs.length})</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {closedJobs.map(job => <JobCard key={job.id} job={job} />)}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default JobPostsListing;
