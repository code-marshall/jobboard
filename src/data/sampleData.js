export const jobsData = [
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

export const applicantsData = [
  ...generateApplicants(1, 47),
  ...generateApplicants(2, 32),
  ...generateApplicants(3, 89),
  ...generateApplicants(4, 156)
];

export const resdexData = [
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
