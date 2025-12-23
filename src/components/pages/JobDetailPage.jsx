import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import DashboardHeader from '../common/DashboardHeader';
import { jobsData, applicantsData } from '../../data/sampleData';

const JobDetailPage = () => {
  const { id } = useParams();
  const job = jobsData.find(j => j.id === parseInt(id));
  const jobApplicants = applicantsData.filter(a => a.jobId === parseInt(id));

  const [filteredApplicants, setFilteredApplicants] = useState(jobApplicants);
  const [filters, setFilters] = useState({
    status: 'all',
    minScore: 0,
    maxScore: 100
  });

  useEffect(() => {
    let filtered = jobApplicants;

    if (filters.status !== 'all') {
      filtered = filtered.filter(a => a.status === filters.status);
    }

    filtered = filtered.filter(a => a.hybridScore >= filters.minScore && a.hybridScore <= filters.maxScore);

    setFilteredApplicants(filtered);
  }, [filters]);

  if (!job) return <div>Job not found</div>;

  return (
    <div>
      <DashboardHeader />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link to="/dashboard/jobs" className="text-blue-600 hover:underline mb-4 inline-block">
            ← Back to Job Posts
          </Link>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
                <p className="text-gray-600 text-lg">{job.department} • {job.location}</p>
              </div>
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                job.status === 'OPEN' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {job.status}
              </span>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-6">
              <div>
                <p className="text-gray-600 text-sm">Type</p>
                <p className="font-semibold">{job.type}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Salary</p>
                <p className="font-semibold">{job.salary}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Posted Date</p>
                <p className="font-semibold">{job.postedDate}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">{job.status === 'OPEN' ? 'Open Till' : 'Closed On'}</p>
                <p className="font-semibold">{job.status === 'OPEN' ? job.openTill : job.closedOn}</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-lg mb-2">Description</h3>
              <p className="text-gray-700">{job.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-lg mb-2">Requirements</h3>
              <ul className="list-disc list-inside space-y-1">
                {job.requirements.map((req, index) => (
                  <li key={index} className="text-gray-700">{req}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">Skills Required</h3>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Applicants ({filteredApplicants.length})</h2>

            <div className="grid md:grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Status</label>
                <select
                  value={filters.status}
                  onChange={(e) => setFilters({ ...filters, status: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg"
                >
                  <option value="all">All Statuses</option>
                  <option value="Shortlisted">Shortlisted</option>
                  <option value="Under Review">Under Review</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Hired">Hired</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Min Score</label>
                <input
                  type="number"
                  value={filters.minScore}
                  onChange={(e) => setFilters({ ...filters, minScore: parseInt(e.target.value) || 0 })}
                  className="w-full px-3 py-2 border rounded-lg"
                  min="0"
                  max="100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Max Score</label>
                <input
                  type="number"
                  value={filters.maxScore}
                  onChange={(e) => setFilters({ ...filters, maxScore: parseInt(e.target.value) || 100 })}
                  className="w-full px-3 py-2 border rounded-lg"
                  min="0"
                  max="100"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Hybrid Score</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Application Date</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {filteredApplicants.map(applicant => (
                    <tr key={applicant.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm font-medium">{applicant.name}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{applicant.email}</td>
                      <td className="px-4 py-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          applicant.hybridScore >= 90 ? 'bg-green-100 text-green-800' :
                          applicant.hybridScore >= 80 ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {applicant.hybridScore}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">{applicant.applicationDate}</td>
                      <td className="px-4 py-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          applicant.status === 'Shortlisted' ? 'bg-blue-100 text-blue-800' :
                          applicant.status === 'Hired' ? 'bg-green-100 text-green-800' :
                          applicant.status === 'Rejected' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {applicant.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;
