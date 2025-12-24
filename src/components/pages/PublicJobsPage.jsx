import React, { useState } from 'react';
import PublicHeader from '../common/PublicHeader';
import Footer from '../common/Footer';
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
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Job Vacancies</h1>
            <p className="text-xl text-blue-100">Discover your next career opportunity</p>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          {!selectedJob ? (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
              {openJobs.map(job => (
                <div
                  key={job.id}
                  className="group relative overflow-hidden rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 bg-white border border-gray-200 cursor-pointer"
                  onClick={() => setSelectedJob(job)}
                >
                  <div className="p-6">
                    <a className="title h5 text-lg font-semibold hover:text-blue-600 cursor-pointer">
                      {job.title}
                    </a>
                    <p className="text-slate-400 mt-2 flex items-center">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-blue-600 me-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                        <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
                      </svg>
                      Posted {job.postedDate}
                    </p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="bg-blue-600/10 text-blue-600 text-xs font-bold px-2.5 py-0.5 rounded h-5">
                        {job.type}
                      </span>
                      <p className="text-slate-400 flex items-center">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-blue-600 me-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
                          <path d="M12 11c-2 0-2-.63-2-1s.7-1 2-1 1.39.64 1.4 1h2A3 3 0 0 0 13 7.12V6h-2v1.09C9 7.42 8 8.71 8 10c0 1.12.52 3 4 3 2 0 2 .68 2 1s-.62 1-2 1c-1.84 0-2-.86-2-1H8c0 .92.66 2.55 3 2.92V18h2v-1.08c2-.34 3-1.63 3-2.92 0-1.12-.52-3-4-3z"></path>
                        </svg>
                        {job.salary}
                      </p>
                    </div>
                  </div>
                  <a className="flex items-center p-6 border-t border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors">
                    <div className="size-12 shadow-md rounded-md p-2 bg-white flex items-center justify-center">
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 rounded flex items-center justify-center text-white font-bold text-sm">
                        M
                      </div>
                    </div>
                    <div className="ms-3">
                      <h6 className="mb-0 font-semibold text-base">Monocept</h6>
                      <span className="text-slate-400 text-sm">{job.location}</span>
                    </div>
                  </a>
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
      <Footer />
    </div>
  );
};

export default PublicJobsPage;
