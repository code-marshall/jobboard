import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate, useParams } from 'react-router-dom';

// ===== AUTH CONTEXT =====
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    if (email === 'recruiter@monocept.com' && password === 'monocept123') {
      setUser({ email, company: 'Monocept' });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

// ===== SAMPLE DATA =====

const jobsData = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    department: 'Engineering',
    location: 'Bangalore, India',
    type: 'Full-time',
    salary: '₹18-25 LPA',
    postedDate: 'December 1, 2024',
    openTill: 'January 15, 2025',
    closedOn: null,
    status: 'OPEN',
    applications: 47,
    hired: 0,
    skills: ['React', 'Node.js', 'Python', 'AWS', 'MongoDB', 'Docker'],
    description: 'We are looking for a Senior Software Engineer to join our engineering team. You will be responsible for designing, developing, and maintaining scalable web applications.',
    requirements: [
      '5+ years of experience in software development',
      'Strong proficiency in React and Node.js',
      'Experience with cloud platforms (AWS preferred)',
      'Excellent problem-solving skills',
      'Strong communication skills'
    ]
  },
  {
    id: 2,
    title: 'Product Manager',
    department: 'Product',
    location: 'Hyderabad, India',
    type: 'Full-time',
    salary: '₹22-30 LPA',
    postedDate: 'December 10, 2024',
    openTill: 'January 25, 2025',
    closedOn: null,
    status: 'OPEN',
    applications: 32,
    hired: 0,
    skills: ['Product Strategy', 'Agile', 'Data Analysis', 'User Research'],
    description: 'Join our product team to drive the vision and strategy for our flagship products. You will work closely with engineering, design, and business teams.',
    requirements: [
      '3+ years of product management experience',
      'Strong analytical and problem-solving skills',
      'Experience with Agile methodologies',
      'Excellent stakeholder management',
      'Data-driven decision making'
    ]
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Mumbai, India',
    type: 'Full-time',
    salary: '₹12-18 LPA',
    postedDate: 'October 15, 2024',
    closedOn: 'November 30, 2024',
    openTill: 'November 30, 2024',
    status: 'CLOSED',
    applications: 89,
    hired: 2,
    skills: ['Figma', 'Adobe XD', 'Sketch', 'User Research', 'Prototyping'],
    description: 'Create beautiful, intuitive user interfaces and exceptional user experiences for our products.',
    requirements: [
      '3+ years of UI/UX design experience',
      'Proficiency in Figma and Adobe XD',
      'Strong portfolio showcasing design work',
      'Understanding of user-centered design principles',
      'Excellent communication skills'
    ]
  },
  {
    id: 4,
    title: 'Data Analyst',
    department: 'Analytics',
    location: 'Pune, India',
    type: 'Full-time',
    salary: '₹10-15 LPA',
    postedDate: 'September 1, 2024',
    closedOn: 'October 12, 2024',
    openTill: 'October 12, 2024',
    status: 'CLOSED',
    applications: 156,
    hired: 3,
    skills: ['SQL', 'Python', 'Tableau', 'Power BI', 'Excel'],
    description: 'Analyze complex datasets to derive actionable insights and support data-driven decision making across the organization.',
    requirements: [
      '2+ years of data analysis experience',
      'Strong SQL and Python skills',
      'Experience with BI tools (Tableau/Power BI)',
      'Statistical analysis knowledge',
      'Strong presentation skills'
    ]
  }
];

// Generate sample applicants for each job
const generateApplicants = (jobId, count) => {
  const names = ['Amit Kumar', 'Priya Singh', 'Rajesh Patel', 'Sneha Gupta', 'Vikram Sharma',
                 'Anita Reddy', 'Karthik Iyer', 'Deepa Nair', 'Rahul Verma', 'Kavya Menon',
                 'Suresh Reddy', 'Meera Shah', 'Arun Kumar', 'Divya Desai', 'Nikhil Joshi'];
  const statuses = ['Shortlisted', 'Under Review', 'Rejected', 'Hired'];

  return Array.from({ length: count }, (_, i) => ({
    id: `${jobId}-${i + 1}`,
    name: names[i % names.length] + ` ${i + 1}`,
    email: `candidate${i + 1}@email.com`,
    hybridScore: Math.floor(Math.random() * 30) + 70,
    applicationDate: new Date(2024, 11, Math.floor(Math.random() * 20) + 1).toLocaleDateString(),
    status: statuses[Math.floor(Math.random() * (jobId <= 2 ? 2 : 4))],
    jobId
  })).sort((a, b) => b.hybridScore - a.hybridScore);
};

const applicantsData = [
  ...generateApplicants(1, 47),
  ...generateApplicants(2, 32),
  ...generateApplicants(3, 89),
  ...generateApplicants(4, 156)
];

const resdexData = [
  {
    id: 1,
    name: 'Arjun Sharma',
    email: 'arjun.sharma@email.com',
    phone: '+91 98765 43210',
    companies: ['Google', 'Microsoft'],
    education: 'M.Tech Computer Science',
    college: 'IIT Delhi',
    skills: ['React', 'Node.js', 'Python', 'AWS'],
    score: 94
  },
  {
    id: 2,
    name: 'Priya Patel',
    email: 'priya.patel@email.com',
    phone: '+91 87654 32109',
    companies: ['Amazon', 'Flipkart'],
    education: 'B.Tech IT',
    college: 'NIT Trichy',
    skills: ['Java', 'Spring Boot', 'Microservices'],
    score: 91
  },
  {
    id: 3,
    name: 'Rahul Verma',
    email: 'rahul.verma@email.com',
    phone: '+91 76543 21098',
    companies: ['TCS', 'Infosys', 'Wipro'],
    education: 'MCA',
    college: 'Pune University',
    skills: ['Angular', 'TypeScript', '.NET'],
    score: 87
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    email: 'sneha.reddy@email.com',
    phone: '+91 65432 10987',
    companies: ['Zoho', 'Freshworks'],
    education: 'B.E. Computer Science',
    college: 'Anna University',
    skills: ['Python', 'Django', 'PostgreSQL'],
    score: 85
  },
  {
    id: 5,
    name: 'Vikram Singh',
    email: 'vikram.singh@email.com',
    phone: '+91 54321 09876',
    companies: ['Paytm', 'PhonePe'],
    education: 'B.Tech Electronics',
    college: 'BITS Pilani',
    skills: ['React Native', 'Flutter', 'Firebase'],
    score: 82
  },
  {
    id: 6,
    name: 'Ananya Krishnan',
    email: 'ananya.k@email.com',
    phone: '+91 43210 98765',
    companies: ['Accenture', 'Cognizant'],
    education: 'M.Sc Data Science',
    college: 'IISc Bangalore',
    skills: ['Machine Learning', 'Python', 'TensorFlow'],
    score: 89
  },
  {
    id: 7,
    name: 'Karthik Nair',
    email: 'karthik.nair@email.com',
    phone: '+91 32109 87654',
    companies: ['Oracle', 'SAP'],
    education: 'B.Tech CS',
    college: 'VIT Vellore',
    skills: ['Java', 'Oracle DB', 'PL/SQL'],
    score: 78
  },
  {
    id: 8,
    name: 'Divya Menon',
    email: 'divya.menon@email.com',
    phone: '+91 21098 76543',
    companies: ['Adobe', 'Salesforce'],
    education: 'B.Des Interaction Design',
    college: 'NID Ahmedabad',
    skills: ['Figma', 'UI/UX', 'Prototyping'],
    score: 92
  }
];

// ===== COMPONENTS =====

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/recruiters" />;
};

// Public Header Component
const PublicHeader = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">JobBoard</Link>
          <nav className="flex gap-6">
            <Link to="/jobs" className="text-gray-700 hover:text-blue-600 transition">Jobs</Link>
            <Link to="/recruiters" className="text-gray-700 hover:text-blue-600 transition">For Recruiters</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

// Dashboard Header Component
const DashboardHeader = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/recruiters');
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Link to="/dashboard" className="text-2xl font-bold text-blue-600">{user?.company}</Link>
            <nav className="flex gap-6">
              <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 transition">Dashboard</Link>
              <Link to="/dashboard/jobs" className="text-gray-700 hover:text-blue-600 transition">Job Posts</Link>
              <Link to="/dashboard/resdex" className="text-gray-700 hover:text-blue-600 transition">Resdex</Link>
            </nav>
          </div>
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
            >
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                {user?.company[0]}
              </div>
              <span className="text-gray-700">{user?.company}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-2 z-10">
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100 transition">
                  Profile Settings
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 transition text-red-600 font-semibold"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

// Contact Form Component
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

// Login Form Component
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(email, password)) {
      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h3 className="text-2xl font-bold mb-4">Recruiter Login</h3>
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div className="text-right">
          <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          Login
        </button>
      </form>
      <div className="mt-4 p-3 bg-gray-50 rounded text-sm">
        <p className="font-semibold mb-1">Demo credentials:</p>
        <p>Email: recruiter@monocept.com</p>
        <p>Password: monocept123</p>
      </div>
    </div>
  );
};

// FAQ Component
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

// Recruiter Page Component
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
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Find Top Talent for Your Company</h1>
            <p className="text-xl">Access our resume database and AI-powered candidate matching</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Products & Services */}
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

          {/* Contact and Login Forms */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <ContactForm />
            <LoginForm />
          </div>

          {/* FAQ Section */}
          <section>
            <FAQ />
          </section>
        </div>
      </div>
    </div>
  );
};

// Dashboard Home Component
const DashboardHome = () => {
  const openJobs = jobsData.filter(job => job.status === 'OPEN');
  const totalApplications = jobsData.reduce((sum, job) => sum + job.applications, 0);

  return (
    <div>
      <DashboardHeader />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Active Job Postings</p>
                  <p className="text-4xl font-bold text-blue-600 mt-2">{openJobs.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Total Applications</p>
                  <p className="text-4xl font-bold text-green-600 mt-2">{totalApplications}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Resdex Candidates</p>
                  <p className="text-4xl font-bold text-purple-600 mt-2">{resdexData.length}</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-3">
                <div>
                  <p className="font-semibold">Senior Software Engineer</p>
                  <p className="text-sm text-gray-600">5 new applications today</p>
                </div>
                <Link to="/dashboard/jobs/1" className="text-blue-600 hover:underline">View Details</Link>
              </div>
              <div className="flex items-center justify-between border-b pb-3">
                <div>
                  <p className="font-semibold">Product Manager</p>
                  <p className="text-sm text-gray-600">3 new applications today</p>
                </div>
                <Link to="/dashboard/jobs/2" className="text-blue-600 hover:underline">View Details</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Job Posts Listing Component
const JobPostsListing = () => {
  const openJobs = jobsData.filter(job => job.status === 'OPEN');
  const closedJobs = jobsData.filter(job => job.status === 'CLOSED');

  const JobCard = ({ job }) => (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold mb-2">{job.title}</h3>
          <p className="text-gray-600">{job.department} • {job.location}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
          job.status === 'OPEN' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
        }`}>
          {job.status}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div>
          <p className="text-gray-600">Type</p>
          <p className="font-semibold">{job.type}</p>
        </div>
        <div>
          <p className="text-gray-600">Salary</p>
          <p className="font-semibold">{job.salary}</p>
        </div>
        <div>
          <p className="text-gray-600">Posted</p>
          <p className="font-semibold">{job.postedDate}</p>
        </div>
        <div>
          <p className="text-gray-600">{job.status === 'OPEN' ? 'Open Till' : 'Closed On'}</p>
          <p className="font-semibold">{job.status === 'OPEN' ? job.openTill : job.closedOn}</p>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-gray-600 text-sm mb-2">Skills Required:</p>
        <div className="flex flex-wrap gap-2">
          {job.skills.map((skill, index) => (
            <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center pt-4 border-t">
        <div>
          <p className="text-sm text-gray-600">Total Applications</p>
          <p className="text-2xl font-bold text-blue-600">{job.applications}</p>
        </div>
        {job.status === 'CLOSED' && job.hired > 0 && (
          <div>
            <p className="text-sm text-gray-600">Hired</p>
            <p className="text-2xl font-bold text-green-600">{job.hired}</p>
          </div>
        )}
        <Link
          to={`/dashboard/jobs/${job.id}`}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          View Details
        </Link>
      </div>
    </div>
  );

  return (
    <div>
      <DashboardHeader />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold mb-8">Job Postings</h1>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-green-600">Open Positions ({openJobs.length})</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {openJobs.map(job => <JobCard key={job.id} job={job} />)}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-600">Closed Positions ({closedJobs.length})</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {closedJobs.map(job => <JobCard key={job.id} job={job} />)}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

// Job Detail Page Component
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

  React.useEffect(() => {
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

          {/* Job Details */}
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

          {/* Applicants Section */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Applicants ({filteredApplicants.length})</h2>

            {/* Filters */}
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

            {/* Applicants Table */}
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

// Resdex Page Component
const ResdexPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCandidates, setFilteredCandidates] = useState(resdexData);
  const [filters, setFilters] = useState({
    minScore: 0,
    skill: ''
  });
  const [sortBy, setSortBy] = useState('score');

  React.useEffect(() => {
    let filtered = resdexData;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(candidate =>
        candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        candidate.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
        candidate.companies.some(company => company.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Score filter
    filtered = filtered.filter(c => c.score >= filters.minScore);

    // Skill filter
    if (filters.skill) {
      filtered = filtered.filter(c =>
        c.skills.some(skill => skill.toLowerCase().includes(filters.skill.toLowerCase()))
      );
    }

    // Sort
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

          {/* Search and Filters */}
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

          {/* Results */}
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

// Public Jobs Page Component
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

              {/* Application Form */}
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

// Home Page Component
const HomePage = () => {
  return (
    <div>
      <PublicHeader />
      <div className="min-h-screen bg-gray-50">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to JobBoard</h1>
            <p className="text-2xl mb-8">Connect talent with opportunity</p>
            <div className="flex gap-4 justify-center">
              <Link
                to="/jobs"
                className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition font-semibold text-lg"
              >
                Browse Jobs
              </Link>
              <Link
                to="/recruiters"
                className="px-8 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition font-semibold text-lg"
              >
                For Recruiters
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-2">Find Jobs</h3>
              <p className="text-gray-600">Browse thousands of job opportunities from top companies</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">AI Matching</h3>
              <p className="text-gray-600">Get matched with the right opportunities using AI</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2">Grow Your Career</h3>
              <p className="text-gray-600">Take your career to the next level</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recruiters" element={<RecruiterPage />} />
          <Route path="/jobs" element={<PublicJobsPage />} />
          <Route path="/dashboard" element={<ProtectedRoute><DashboardHome /></ProtectedRoute>} />
          <Route path="/dashboard/jobs" element={<ProtectedRoute><JobPostsListing /></ProtectedRoute>} />
          <Route path="/dashboard/jobs/:id" element={<ProtectedRoute><JobDetailPage /></ProtectedRoute>} />
          <Route path="/dashboard/resdex" element={<ProtectedRoute><ResdexPage /></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
