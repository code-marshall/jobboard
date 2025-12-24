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

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pb-20">
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
            <div>
              <button
                onClick={() => setSelectedJob(null)}
                className="text-blue-600 hover:underline mb-6 inline-flex items-center"
              >
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to All Jobs
              </button>

              <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                {/* Main Content - Left Side */}
                <div className="lg:col-span-8 md:col-span-6">
                  {/* Job Header Card */}
                  <div className="md:flex items-center p-6 shadow-sm shadow-gray-200 rounded-md bg-white">
                    <div className="size-28 rounded-full p-4 bg-white shadow-sm shadow-gray-200 flex items-center justify-center flex-shrink-0">
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                        M
                      </div>
                    </div>
                    <div className="md:ms-4 md:mt-0 mt-6">
                      <h5 className="text-xl font-semibold">{selectedJob.title}</h5>
                      <div className="mt-2">
                        <span className="text-slate-400 font-medium me-2 inline-flex items-center">
                          <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" className="text-[18px] text-blue-600 me-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"></path>
                          </svg>
                          Monocept
                        </span>
                        <span className="text-slate-400 font-medium me-2 inline-flex items-center">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="text-[18px] text-blue-600 me-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
                          </svg>
                          {selectedJob.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Job Description */}
                  <div className="mt-6">
                    <h5 className="text-lg font-semibold">Job Description:</h5>
                    <p className="text-slate-400 mt-4">{selectedJob.description}</p>
                  </div>

                  {/* Requirements */}
                  <div className="mt-6">
                    <h5 className="text-lg font-semibold">Requirements:</h5>
                    <ul className="list-none mt-4">
                      {selectedJob.requirements.map((req, index) => (
                        <li key={index} className="text-slate-400 mt-2 flex items-start">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-blue-600 me-2 mt-1 flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                            <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"></path>
                          </svg>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills Required */}
                  <div className="mt-6">
                    <h5 className="text-lg font-semibold">Skills Required:</h5>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {selectedJob.skills.map((skill, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Apply Section */}
                  <div className="mt-6 bg-white rounded-md shadow-sm shadow-gray-200 p-6">
                    <h2 className="text-xl font-semibold mb-6">Apply for this Position</h2>

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
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                          <input
                            type="email"
                            value={applicationForm.email}
                            onChange={(e) => setApplicationForm({ ...applicationForm, email: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                          <input
                            type="tel"
                            value={applicationForm.phone}
                            onChange={(e) => setApplicationForm({ ...applicationForm, phone: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Resume Upload *</label>
                          <input
                            type="file"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            accept=".pdf,.doc,.docx"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
                          <textarea
                            value={applicationForm.coverLetter}
                            onChange={(e) => setApplicationForm({ ...applicationForm, coverLetter: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32"
                            placeholder="Tell us why you're a great fit for this role..."
                          ></textarea>
                        </div>
                        <button
                          type="submit"
                          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold text-base"
                        >
                          Submit Application
                        </button>
                      </form>
                    )}
                  </div>
                </div>

                {/* Sidebar - Right Side */}
                <div className="lg:col-span-4 md:col-span-6">
                  <div className="shadow-sm shadow-gray-200 rounded-md bg-white sticky top-20">
                    <div className="p-6">
                      <h5 className="text-lg font-semibold">Job Information</h5>
                    </div>
                    <div className="p-6 border-t border-slate-100">
                      <ul className="list-none space-y-4">
                        <li className="flex items-start">
                          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="size-5 flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="8.5" cy="7" r="4"></circle>
                            <polyline points="17 11 19 13 23 9"></polyline>
                          </svg>
                          <div className="ms-4">
                            <p className="font-medium text-gray-700">Employee Type:</p>
                            <span className="text-blue-600 font-medium text-sm">{selectedJob.type}</span>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="size-5 flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                          <div className="ms-4">
                            <p className="font-medium text-gray-700">Location:</p>
                            <span className="text-blue-600 font-medium text-sm">{selectedJob.location}</span>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="size-5 flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <line x1="12" y1="1" x2="12" y2="23"></line>
                            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                          </svg>
                          <div className="ms-4">
                            <p className="font-medium text-gray-700">Salary:</p>
                            <span className="text-blue-600 font-medium text-sm">{selectedJob.salary}</span>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="size-5 flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                          </svg>
                          <div className="ms-4">
                            <p className="font-medium text-gray-700">Date Posted:</p>
                            <span className="text-blue-600 font-medium text-sm">Posted {selectedJob.postedDate}</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
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
