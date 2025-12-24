import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import DashboardHeader from '../common/DashboardHeader';
import { jobsData, applicantsData } from '../../data/sampleData';

const JobDetailPage = () => {
  const { id } = useParams();
  const job = jobsData.find(j => j.id === parseInt(id));
  const jobApplicants = applicantsData.filter(a => a.jobId === parseInt(id));

  const [filteredApplicants, setFilteredApplicants] = useState(jobApplicants);
  const [aiSearchQuery, setAiSearchQuery] = useState('');
  const [resumeDownloadMessage, setResumeDownloadMessage] = useState('');

  const handleAiSearch = () => {
    if (!aiSearchQuery.trim()) {
      setFilteredApplicants(jobApplicants);
      return;
    }

    const query = aiSearchQuery.toLowerCase();
    const filtered = jobApplicants.filter(applicant =>
      applicant.ccUsername?.toLowerCase().includes(query) ||
      applicant.email?.toLowerCase().includes(query) ||
      applicant.phone?.toLowerCase().includes(query) ||
      applicant.collegeName?.toLowerCase().includes(query) ||
      applicant.highestDegree?.toLowerCase().includes(query) ||
      applicant.skills?.some(skill => skill.toLowerCase().includes(query)) ||
      applicant.companies?.some(company => company.toLowerCase().includes(query))
    );

    setFilteredApplicants(filtered);
  };

  const handleDownloadCSV = () => {
    const headers = [
      'CC Username', 'College Score', 'Company Score', 'LinkedIn URL', 'Contest Rating',
      'Contest Count', 'Resume Update Date', 'Email', 'Phone Number', 'Graduation Year',
      'College Name', 'Percentage', 'Highest Degree', 'Tech Stacks/Skills', 'Companies Worked'
    ];

    const csvRows = [headers.join(',')];

    filteredApplicants.forEach(applicant => {
      const row = [
        applicant.ccUsername || '',
        applicant.collegeScore?.toFixed(2) || '',
        applicant.companyScore?.toFixed(2) || '',
        applicant.linkedinUrl || '',
        applicant.contestRating || '',
        applicant.contestCount || '',
        applicant.resumeUpdateDate || '',
        applicant.email || '',
        applicant.phone || '',
        applicant.graduationYear || '',
        `"${applicant.collegeName || ''}"`,
        applicant.percentage || '',
        applicant.highestDegree || '',
        `"${applicant.skills?.join(', ') || ''}"`,
        `"${applicant.companies?.join(', ') || ''}"`
      ];
      csvRows.push(row.join(','));
    });

    const csvContent = csvRows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `job_${job.id}_applicants_${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const handleDownloadAllResumes = () => {
    setResumeDownloadMessage('Resume download job scheduled. A download link will be generated in some time.');
    setTimeout(() => {
      setResumeDownloadMessage('');
    }, 5000);
  };

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
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Applicants ({filteredApplicants.length})</h2>
              <div className="flex gap-3">
                <button
                  onClick={handleDownloadCSV}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold"
                >
                  Download CSV
                </button>
                <button
                  onClick={handleDownloadAllResumes}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
                >
                  Download All Resumes
                </button>
              </div>
            </div>

            {resumeDownloadMessage && (
              <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg text-blue-700">
                {resumeDownloadMessage}
              </div>
            )}

            <div className="flex gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">AI Search / Smart Search</label>
                <textarea
                  value={aiSearchQuery}
                  onChange={(e) => setAiSearchQuery(e.target.value)}
                  placeholder="Describe your requirements in plain text... (e.g., 'High contest rating candidates', 'IIT graduates', 'Candidates with machine learning skills')"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
                  rows="3"
                />
              </div>
              <div className="flex items-end">
                <button
                  onClick={handleAiSearch}
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold h-fit"
                >
                  Search
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-3 text-left text-xs font-semibold text-gray-700">CC Username</th>
                    <th className="px-3 py-3 text-left text-xs font-semibold text-gray-700">College Score</th>
                    <th className="px-3 py-3 text-left text-xs font-semibold text-gray-700">Company Score</th>
                    <th className="px-3 py-3 text-left text-xs font-semibold text-gray-700">LinkedIn URL</th>
                    <th className="px-3 py-3 text-left text-xs font-semibold text-gray-700">Contest Rating</th>
                    <th className="px-3 py-3 text-left text-xs font-semibold text-gray-700">Contest Count</th>
                    <th className="px-3 py-3 text-left text-xs font-semibold text-gray-700">Resume Update Date</th>
                    <th className="px-3 py-3 text-left text-xs font-semibold text-gray-700">Email</th>
                    <th className="px-3 py-3 text-left text-xs font-semibold text-gray-700">Phone Number</th>
                    <th className="px-3 py-3 text-left text-xs font-semibold text-gray-700">Graduation Year</th>
                    <th className="px-3 py-3 text-left text-xs font-semibold text-gray-700">College Name</th>
                    <th className="px-3 py-3 text-left text-xs font-semibold text-gray-700">Percentage</th>
                    <th className="px-3 py-3 text-left text-xs font-semibold text-gray-700">Highest Degree</th>
                    <th className="px-3 py-3 text-left text-xs font-semibold text-gray-700">Tech Stacks/Skills</th>
                    <th className="px-3 py-3 text-left text-xs font-semibold text-gray-700">Companies Worked</th>
                    <th className="px-3 py-3 text-left text-xs font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {filteredApplicants.map(applicant => (
                    <tr key={applicant.id} className="hover:bg-gray-50">
                      <td className="px-3 py-3 text-xs font-medium">{applicant.ccUsername}</td>
                      <td className="px-3 py-3 text-xs">
                        <span className={`px-2 py-1 rounded-full font-semibold ${
                          applicant.collegeScore >= 0.8 ? 'bg-green-100 text-green-800' :
                          applicant.collegeScore >= 0.6 ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {applicant.collegeScore?.toFixed(2)}
                        </span>
                      </td>
                      <td className="px-3 py-3 text-xs">
                        <span className={`px-2 py-1 rounded-full font-semibold ${
                          applicant.companyScore >= 0.8 ? 'bg-green-100 text-green-800' :
                          applicant.companyScore >= 0.6 ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {applicant.companyScore?.toFixed(2)}
                        </span>
                      </td>
                      <td className="px-3 py-3 text-xs">
                        <a href={applicant.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          View
                        </a>
                      </td>
                      <td className="px-3 py-3 text-xs font-medium">{applicant.contestRating}</td>
                      <td className="px-3 py-3 text-xs">{applicant.contestCount}</td>
                      <td className="px-3 py-3 text-xs text-gray-600">{applicant.resumeUpdateDate}</td>
                      <td className="px-3 py-3 text-xs text-gray-600">{applicant.email}</td>
                      <td className="px-3 py-3 text-xs text-gray-600">{applicant.phone}</td>
                      <td className="px-3 py-3 text-xs">{applicant.graduationYear}</td>
                      <td className="px-3 py-3 text-xs">{applicant.collegeName}</td>
                      <td className="px-3 py-3 text-xs">{applicant.percentage}%</td>
                      <td className="px-3 py-3 text-xs">{applicant.highestDegree}</td>
                      <td className="px-3 py-3">
                        <div className="flex flex-wrap gap-1 max-w-xs">
                          {applicant.skills?.map((skill, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-3 py-3 text-xs">
                        <div className="max-w-xs">
                          {applicant.companies?.join(', ')}
                        </div>
                      </td>
                      <td className="px-3 py-3">
                        <div className="flex gap-2">
                          <button className="px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition text-xs">
                            View Profile
                          </button>
                          <button className="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-xs">
                            Download
                          </button>
                        </div>
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
