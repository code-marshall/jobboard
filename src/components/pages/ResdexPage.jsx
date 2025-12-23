import React, { useState, useEffect } from 'react';
import DashboardHeader from '../common/DashboardHeader';
import { resdexData } from '../../data/sampleData';

const ResdexPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCandidates, setFilteredCandidates] = useState(resdexData);
  const [filters, setFilters] = useState({
    minScore: 0,
    skill: ''
  });
  const [sortBy, setSortBy] = useState('score');

  useEffect(() => {
    let filtered = resdexData;

    if (searchTerm) {
      filtered = filtered.filter(candidate =>
        candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        candidate.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
        candidate.companies.some(company => company.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    filtered = filtered.filter(c => c.score >= filters.minScore);

    if (filters.skill) {
      filtered = filtered.filter(c =>
        c.skills.some(skill => skill.toLowerCase().includes(filters.skill.toLowerCase()))
      );
    }

    if (sortBy === 'score') {
      filtered.sort((a, b) => b.score - a.score);
    } else if (sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredCandidates(filtered);
  }, [searchTerm, filters, sortBy]);

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
            <div className="grid md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by name, skills, or company..."
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Min Score</label>
                <input
                  type="number"
                  value={filters.minScore}
                  onChange={(e) => setFilters({ ...filters, minScore: parseInt(e.target.value) || 0 })}
                  className="w-full px-4 py-2 border rounded-lg"
                  min="0"
                  max="100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg"
                >
                  <option value="score">Score (High to Low)</option>
                  <option value="name">Name (A-Z)</option>
                </select>
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
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Phone</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Companies</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Education</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Skills</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Score</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Resume</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {filteredCandidates.map(candidate => (
                    <tr key={candidate.id} className="hover:bg-gray-50">
                      <td className="px-4 py-4">
                        <div className="font-semibold">{candidate.name}</div>
                        <div className="text-xs text-gray-500">{candidate.college}</div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-600">{candidate.email}</td>
                      <td className="px-4 py-4 text-sm text-gray-600">{candidate.phone}</td>
                      <td className="px-4 py-4 text-sm">
                        <div className="max-w-xs">
                          {candidate.companies.join(', ')}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm">{candidate.education}</td>
                      <td className="px-4 py-4">
                        <div className="flex flex-wrap gap-1 max-w-xs">
                          {candidate.skills.map((skill, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          candidate.score >= 90 ? 'bg-green-100 text-green-800' :
                          candidate.score >= 80 ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {candidate.score}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <button className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm">
                          Download
                        </button>
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
