import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I post a job?',
      answer: 'After logging into your recruiter dashboard, navigate to the Job Posts section and click "Post New Job". Fill in the job details, requirements, and click submit.'
    },
    {
      question: 'What is the pricing structure?',
      answer: 'We offer flexible pricing plans based on your hiring needs. Contact us at careers@company.com for custom pricing details.'
    },
    {
      question: 'How does AI shortlisting work?',
      answer: 'Our AI analyzes candidate profiles against job requirements, generating a Hybrid Score that helps you identify the best matches quickly and efficiently.'
    },
    {
      question: 'Can I access the resume database?',
      answer: 'Yes! Premium members get full access to our Resdex database with thousands of qualified candidates. You can search, filter, and download resumes.'
    },
    {
      question: 'How do I contact support?',
      answer: 'You can reach our support team at careers@company.com or use the contact form on this page. We typically respond within 24 hours.'
    },
    {
      question: 'What screening options are available?',
      answer: 'We offer custom screening solutions including technical assessments, behavioral interviews, and background verification services tailored to your needs.'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center text-left font-semibold text-gray-800 hover:text-blue-600 transition"
            >
              <span>{faq.question}</span>
              <svg
                className={`w-5 h-5 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
