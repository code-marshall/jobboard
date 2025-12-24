import React, { useState, useEffect } from 'react';
import DashboardHeader from '../common/DashboardHeader';
import { resdexData } from '../../data/sampleData';

const ResdexPage = () => {
  const [aiSearchQuery, setAiSearchQuery] = useState('');
  const [filteredCandidates, setFilteredCandidates] = useState(resdexData);

  const handleAiSearch = () => {
    if (!aiSearchQuery.trim()) {
      setFilteredCandidates(resdexData);
      return;
    }

    const query = aiSearchQuery.toLowerCase();
    const filtered = resdexData.filter(candidate =>
      candidate.ccUsername?.toLowerCase().includes(query) ||
      candidate.email?.toLowerCase().includes(query) ||
      candidate.phone?.toLowerCase().includes(query) ||
      candidate.collegeName?.toLowerCase().includes(query) ||
      candidate.highestDegree?.toLowerCase().includes(query) ||
      candidate.skills?.some(skill => skill.toLowerCase().includes(query)) ||
      candidate.companies?.some(company => company.toLowerCase().includes(query))
    );

    setFilteredCandidates(filtered);
  };

  return (
    <div>
      <DashboardHeader />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Resdex - Resume Database</h1>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
              Contact for Full Access
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">AI Search / Smart Search</label>
                <textarea
                  value={aiSearchQuery}
                  onChange={(e) => setAiSearchQuery(e.target.value)}
                  placeholder="Describe your requirements in plain text... (e.g., 'Senior developer with React and 5 years experience', 'IIT graduate with machine learning skills', 'Candidate from top companies with high contest rating')"
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
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">
              Showing {filteredCandidates.length} candidate{filteredCandidates.length !== 1 ? 's' : ''}
            </h2>
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
                  {filteredCandidates.map(candidate => (
                    <tr key={candidate.id} className="hover:bg-gray-50">
                      <td className="px-3 py-3 text-xs font-medium">{candidate.ccUsername}</td>
                      <td className="px-3 py-3 text-xs">
                        <span className={`px-2 py-1 rounded-full font-semibold ${
                          candidate.collegeScore >= 0.8 ? 'bg-green-100 text-green-800' :
                          candidate.collegeScore >= 0.6 ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {candidate.collegeScore?.toFixed(2)}
                        </span>
                      </td>
                      <td className="px-3 py-3 text-xs">
                        <span className={`px-2 py-1 rounded-full font-semibold ${
                          candidate.companyScore >= 0.8 ? 'bg-green-100 text-green-800' :
                          candidate.companyScore >= 0.6 ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {candidate.companyScore?.toFixed(2)}
                        </span>
                      </td>
                      <td className="px-3 py-3 text-xs">
                        <a href={candidate.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                          View
                        </a>
                      </td>
                      <td className="px-3 py-3 text-xs font-medium">{candidate.contestRating}</td>
                      <td className="px-3 py-3 text-xs">{candidate.contestCount}</td>
                      <td className="px-3 py-3 text-xs text-gray-600">{candidate.resumeUpdateDate}</td>
                      <td className="px-3 py-3 text-xs text-gray-600">{candidate.email}</td>
                      <td className="px-3 py-3 text-xs text-gray-600">{candidate.phone}</td>
                      <td className="px-3 py-3 text-xs">{candidate.graduationYear}</td>
                      <td className="px-3 py-3 text-xs">{candidate.collegeName}</td>
                      <td className="px-3 py-3 text-xs">{candidate.percentage}%</td>
                      <td className="px-3 py-3 text-xs">{candidate.highestDegree}</td>
                      <td className="px-3 py-3">
                        <div className="flex flex-wrap gap-1 max-w-xs">
                          {candidate.skills?.map((skill, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-3 py-3 text-xs">
                        <div className="max-w-xs">
                          {candidate.companies?.join(', ')}
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

export default ResdexPage;
