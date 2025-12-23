import React, { useState } from 'react';
import PublicHeader from '../common/PublicHeader';
import { jobsData } from '../../data/sampleData';

const PublicJobsPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const openJobs = jobsData.filter(job => job.status === 'OPEN');

  const handleApply = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedJob(null);
      setApplicationForm({ name: '', email: '', phone: '', coverLetter: '' });
    }, 3000);
  };

  return (
    <div>
      <PublicHeader />
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Find Your Dream Job</h1>
            <p className="text-xl">Browse {openJobs.length} open positions</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {!selectedJob ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {openJobs.map(job => (
                <div key={job.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition cursor-pointer"
                     onClick={() => setSelectedJob(job)}>
                  <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                  <p className="text-gray-600 mb-2">Monocept</p>
                  <p className="text-gray-600 mb-4">{job.location}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">{job.type}</span>
                    <span className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs">{job.salary}</span>
                  </div>
                  <p className="text-sm text-gray-500">Posted {job.postedDate}</p>
                  <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <button
                onClick={() => setSelectedJob(null)}
                className="text-blue-600 hover:underline mb-4 inline-block"
              >
                ← Back to All Jobs
              </button>

              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h1 className="text-3xl font-bold mb-2">{selectedJob.title}</h1>
                <p className="text-gray-600 text-lg mb-4">Monocept • {selectedJob.location}</p>

                <div className="flex gap-4 mb-6">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded">{selectedJob.type}</span>
                  <span className="px-3 py-1 bg-green-50 text-green-700 rounded">{selectedJob.salary}</span>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold text-lg mb-2">Description</h3>
                  <p className="text-gray-700">{selectedJob.description}</p>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold text-lg mb-2">Requirements</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {selectedJob.requirements.map((req, index) => (
                      <li key={index} className="text-gray-700">{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold text-lg mb-2">Skills Required</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedJob.skills.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Apply for this Position</h2>

                {submitted ? (
                  <div className="p-6 bg-green-100 text-green-700 rounded-lg text-center">
                    <h3 className="text-xl font-bold mb-2">Application Submitted!</h3>
                    <p>Thank you for applying. We'll review your application and get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleApply} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        value={applicationForm.name}
                        onChange={(e) => setApplicationForm({ ...applicationForm, name: e.target.value })}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <input
                        type="email"
                        value={applicationForm.email}
                        onChange={(e) => setApplicationForm({ ...applicationForm, email: e.target.value })}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                      <input
                        type="tel"
                        value={applicationForm.phone}
                        onChange={(e) => setApplicationForm({ ...applicationForm, phone: e.target.value })}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Resume Upload *</label>
                      <input
                        type="file"
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        accept=".pdf,.doc,.docx"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
                      <textarea
                        value={applicationForm.coverLetter}
                        onChange={(e) => setApplicationForm({ ...applicationForm, coverLetter: e.target.value })}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 h-32"
                        placeholder="Tell us why you're a great fit for this role..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold text-lg"
                    >
                      Submit Application
                    </button>
                  </form>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PublicJobsPage;
