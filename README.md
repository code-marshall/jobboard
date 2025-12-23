# Job Board Application

A comprehensive, production-ready job board platform built with React, featuring both public-facing pages and an authenticated recruiter dashboard.

## Features

### Public Pages
- **Home Page** - Landing page with overview of platform features
- **Job Listings** - Browse all open job positions with detailed descriptions
- **Recruiter Page** - Information for recruiters with contact form, login, services, and FAQ

### Recruiter Dashboard (Authenticated)
- **Dashboard Home** - Overview with statistics and quick access
- **Job Posts** - View all job postings (open and closed) with detailed information
- **Job Details** - Individual job pages with applicant lists, filtering, and sorting
- **Resdex** - Resume database with search, filter, and sort capabilities

## Technologies Used

- React 18
- React Router v6
- Tailwind CSS
- Vite

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will start at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Demo Login Credentials

To access the recruiter dashboard, use these credentials:

- **Email**: `recruiter@monocept.com`
- **Password**: `monocept123`

## Application Structure

### Routes

#### Public Routes
- `/` - Home page
- `/jobs` - Public job listings
- `/recruiters` - Recruiter information and login page

#### Protected Routes (Requires Authentication)
- `/dashboard` - Dashboard home with statistics
- `/dashboard/jobs` - All job postings
- `/dashboard/jobs/:id` - Individual job details with applicants
- `/dashboard/resdex` - Resume database

## Features in Detail

### Job Postings
The application includes 4 sample job postings:
- **2 Open Positions**: Senior Software Engineer, Product Manager
- **2 Closed Positions**: UI/UX Designer, Data Analyst

Each job includes:
- Full job description
- Requirements list
- Skills required
- Salary range
- Location and department
- Application tracking

### Applicant Management
- View all applicants for each job
- AI-generated Hybrid Score (0-100)
- Filter by status (Shortlisted, Under Review, Rejected, Hired)
- Filter by score range
- Sort by score or application date
- Application status tracking

### Resdex Database
8 sample candidate profiles with:
- Contact information
- Work history
- Education details
- Skills
- AI-generated match score
- Resume download option

Search and filter by:
- Name, skills, or company
- Minimum score
- Sort by score or name

### Authentication
- Simple authentication with session management
- Protected routes
- Logout functionality
- Redirects for unauthenticated users

## UI/UX Features

- Modern, professional design
- Responsive layout (mobile-friendly)
- Clean typography and spacing
- Status badges with color coding:
  - Open jobs: Green
  - Closed jobs: Gray
  - Shortlisted: Blue
  - Hired: Green
  - Rejected: Red
- Hover effects and smooth transitions
- Form validation with error messages
- Loading states
- Success messages

## Sample Data

All sample data is included in the application:
- 4 job postings with full details
- Multiple applicants per job (47, 32, 89, 156 respectively)
- 8 detailed candidate profiles in Resdex
- Company information for Monocept

## Notes

- This is a front-end application with mock authentication
- All data is stored in memory and will reset on page refresh
- File uploads are simulated (no actual file processing)
- Email functionality is simulated (no actual emails sent)
