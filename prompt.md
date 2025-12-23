# Job Board Application Generation Prompt

Create a comprehensive, production-ready Job Board React application with the following specifications:

---

## Application Overview

Build a modern job board platform with two main user interfaces:
1. **Public-facing pages** for recruiters and job seekers
2. **Recruiter Dashboard** (authenticated area) for managing job postings and accessing the resume database

---

## Page Structure & Requirements

### 1. Public Recruiter Page (`/recruiters`)

#### Contact Form Section
Create a styled contact form with the following fields:
- Full Name (required)
- Mobile Number (required, with validation)
- Full Company Name (required)
- Email Address (required, with validation)
- A clearly visible note: "Reach out directly at: careers@company.com"

Include form validation and a success message on submission.

#### Recruiter Login Section
Create a login form with:
- Email Address field
- Password field
- "Login" button
- "Forgot Password?" link

**Sample Login Credentials to implement:**
- Company: Monocept
- Email: `recruiter@monocept.com`
- Password: `monocept123`

#### Product & Services Information Section
Display information cards/sections for:
1. **Resume Database Access** - Access to qualified candidate profiles
2. **Job Postings** - Post unlimited jobs across categories
3. **AI Profile Shortlisting** - Smart candidate matching using AI
4. **Custom Screening** - Tailored screening solutions

#### FAQ Section
Include 5-6 common FAQs with expandable answers:
- How do I post a job?
- What is the pricing structure?
- How does AI shortlisting work?
- Can I access the resume database?
- How do I contact support?
- What screening options are available?

---

### 2. Recruiter Dashboard (Authenticated Area)

#### Navigation Header
- Company logo/name (Monocept when logged in)
- Navigation links: Dashboard, Job Posts, Resdex
- User dropdown menu containing:
  - Profile settings
  - **Logout button** (must be prominently visible)

#### Dashboard Landing Page (`/dashboard`)
Display an overview with:
- Total active job postings count
- Total applications received
- Quick stats cards

#### Job Posts Listing Page (`/dashboard/jobs`)

**Display 2 Ongoing/Open Job Postings:**

**Job 1: Senior Software Engineer**
- Department: Engineering
- Location: Bangalore, India
- Type: Full-time
- Salary: ₹18-25 LPA
- Posted: December 1, 2024
- Open Till: January 15, 2025
- Status: OPEN (green badge)
- Total Applications: 47
- Skills: React, Node.js, Python, AWS, MongoDB, Docker

**Job 2: Product Manager**
- Department: Product
- Location: Hyderabad, India
- Type: Full-time
- Salary: ₹22-30 LPA
- Posted: December 10, 2024
- Open Till: January 25, 2025
- Status: OPEN (green badge)
- Total Applications: 32
- Skills: Product Strategy, Agile, Data Analysis, User Research

**Display 2 Closed Job Postings:**

**Job 3: UI/UX Designer**
- Department: Design
- Location: Mumbai, India
- Type: Full-time
- Salary: ₹12-18 LPA
- Posted: October 15, 2024
- Closed On: November 30, 2024
- Status: CLOSED (gray/red badge)
- Total Applications: 89
- Hired: 2 candidates
- Skills: Figma, Adobe XD, Sketch, User Research, Prototyping

**Job 4: Data Analyst**
- Department: Analytics
- Location: Pune, India
- Type: Full-time
- Salary: ₹10-15 LPA
- Posted: September 1, 2024
- Closed On: October 12, 2024
- Status: CLOSED (gray/red badge)
- Total Applications: 156
- Hired: 3 candidates
- Skills: SQL, Python, Tableau, Power BI, Excel

#### Individual Job Detail Page (`/dashboard/jobs/:id`)
For each job posting, show:
- Full job description (JD)
- Job posting start date & closing date
- Requirements list
- Applied candidates list with:
  - Candidate name
  - Hybrid Score (AI-generated match score)
  - Application date
  - Status (Shortlisted/Under Review/Rejected/Hired)
- Filters for the candidate list:
  - By score range
  - By status
  - By application date
- Sort by Hybrid Score (default, highest first)

---

### 3. Resdex - Resume Database Page (`/dashboard/resdex`)

Create a searchable, filterable table/grid displaying candidate resumes with these columns:

| Field | Description |
|-------|-------------|
| Name | Full name of candidate |
| Email | Email address |
| Phone | Contact number |
| Companies Worked At | Previous employers |
| Highest Education | Degree/qualification |
| College | Institution name |
| Skills | Technical/professional skills (as tags) |
| Score | Pre-generated match score (0-100) |
| Download Resume | Button to download PDF |

**Sample Resdex Data (minimum 8 candidates):**

1. **Arjun Sharma** | arjun.sharma@email.com | +91 98765 43210 | Google, Microsoft | M.Tech Computer Science | IIT Delhi | React, Node.js, Python, AWS | Score: 94

2. **Priya Patel** | priya.patel@email.com | +91 87654 32109 | Amazon, Flipkart | B.Tech IT | NIT Trichy | Java, Spring Boot, Microservices | Score: 91

3. **Rahul Verma** | rahul.verma@email.com | +91 76543 21098 | TCS, Infosys, Wipro | MCA | Pune University | Angular, TypeScript, .NET | Score: 87

4. **Sneha Reddy** | sneha.reddy@email.com | +91 65432 10987 | Zoho, Freshworks | B.E. Computer Science | Anna University | Python, Django, PostgreSQL | Score: 85

5. **Vikram Singh** | vikram.singh@email.com | +91 54321 09876 | Paytm, PhonePe | B.Tech Electronics | BITS Pilani | React Native, Flutter, Firebase | Score: 82

6. **Ananya Krishnan** | ananya.k@email.com | +91 43210 98765 | Accenture, Cognizant | M.Sc Data Science | IISc Bangalore | Machine Learning, Python, TensorFlow | Score: 89

7. **Karthik Nair** | karthik.nair@email.com | +91 32109 87654 | Oracle, SAP | B.Tech CS | VIT Vellore | Java, Oracle DB, PL/SQL | Score: 78

8. **Divya Menon** | divya.menon@email.com | +91 21098 76543 | Adobe, Salesforce | B.Des Interaction Design | NID Ahmedabad | Figma, UI/UX, Prototyping | Score: 92

**Resdex Features:**
- Search bar (search by name, skills, company)
- Filters: By score range, by skills, by education level
- Sort: By score (default), by name, by experience
- Pagination
- "Contact Us" form/button for companies wanting full Resdex access

---

### 4. Public Job Listings Page (`/jobs`)

- Display all OPEN jobs in a card/list format
- Each job card shows: Title, Company, Location, Type, Posted Date
- Clicking a job opens its detail page
- Job detail page includes:
  - Full description
  - Requirements
  - "Apply Now" button
  - Application form (Name, Email, Phone, Resume Upload, Cover Letter)

---

## Technical Requirements

### Authentication
- Implement simple auth state management
- Store logged-in user info
- Protect dashboard routes
- Logout functionality that clears session and redirects to login

### UI/UX Guidelines
- Modern, professional design
- Responsive layout (mobile-friendly)
- Clean typography and spacing
- Status badges with appropriate colors:
  - Open: Green
  - Closed: Gray or Red
  - Shortlisted: Blue
  - Hired: Green
  - Rejected: Red
- Loading states for async operations
- Form validation with error messages

### Component Structure
```
App
├── PublicLayout
│   ├── Header (with Login link)
│   ├── RecruiterPage (contact form, login, services, FAQ)
│   └── JobListingsPage (public job listings)
├── DashboardLayout (authenticated)
│   ├── DashboardHeader (logo, nav, user dropdown with LOGOUT)
│   ├── DashboardHome (overview stats)
│   ├── JobPostsPage (list of all postings)
│   ├── JobDetailPage (JD + applicants)
│   └── ResdexPage (resume database)
└── Auth
    ├── LoginForm
    └── AuthContext/State
```

---

## Sample Interactions

### Login Flow
1. User visits `/recruiters`
2. Enters email: `recruiter@monocept.com`, password: `monocept123`
3. On success, redirect to `/dashboard`
4. Dashboard shows "Welcome, Monocept" in header

### Logout Flow
1. User clicks profile/user icon in header
2. Dropdown shows "Logout" option
3. Clicking "Logout" clears auth state
4. Redirects to `/recruiters` or home page

### Viewing Job Applicants
1. From Job Posts page, click on "Senior Software Engineer"
2. View full JD and list of 47 applicants
3. Applicants sorted by Hybrid Score (highest first)
4. Filter by status or score range

---

## Styling Notes

- Use a professional color scheme (blues, grays, with accent colors)
- Cards with subtle shadows and rounded corners
- Clear visual hierarchy
- Consistent spacing (8px grid system)
- Hover effects on interactive elements
- Smooth transitions/animations

---

## Output Format

Generate a single-file React component that includes:
- All components defined within the file
- Sample data as JavaScript objects
- useState for state management
- Routing simulation (or React Router if available)
- Tailwind CSS classes for styling (or inline styles)
- All functionality working out of the box

The application should be immediately runnable and demonstrate all features described above.
