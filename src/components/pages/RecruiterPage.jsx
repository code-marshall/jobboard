import React from 'react';
import PublicHeader from '../common/PublicHeader';
import ContactForm from '../forms/ContactForm';
import LoginForm from '../forms/LoginForm';
import FAQ from '../common/FAQ';

const RecruiterPage = () => {
  const services = [
    {
      title: 'Resume Database Access',
      description: 'Access to qualified candidate profiles with advanced search and filtering capabilities.',
      icon: '📄'
    },
    {
      title: 'Job Postings',
      description: 'Post unlimited jobs across categories and reach thousands of active job seekers.',
      icon: '📝'
    },
    {
      title: 'AI Profile Shortlisting',
      description: 'Smart candidate matching using AI-powered Hybrid Scoring for efficient hiring.',
      icon: '🤖'
    },
    {
      title: 'Custom Screening',
      description: 'Tailored screening solutions including assessments and background verification.',
      icon: '✓'
    }
  ];

  return (
    <div>
      <PublicHeader />
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Find Top Talent for Your Company</h1>
            <p className="text-xl">Access our resume database and AI-powered candidate matching</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Our Products & Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <ContactForm />
            <LoginForm />
          </div>

          <section>
            <FAQ />
          </section>
        </div>
      </div>
    </div>
  );
};

export default RecruiterPage;
