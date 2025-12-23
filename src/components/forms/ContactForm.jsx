import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    company: '',
    email: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.mobile.trim()) newErrors.mobile = 'Mobile number is required';
    else if (!/^[\d\s+-]+$/.test(formData.mobile)) newErrors.mobile = 'Invalid mobile number';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email address';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData({ fullName: '', mobile: '', company: '', email: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
      {submitted && (
        <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
          Thank you! We'll get back to you soon.
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number *</label>
          <input
            type="tel"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Company Name *</label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Or reach out directly at:</strong> careers@company.com
          </p>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
