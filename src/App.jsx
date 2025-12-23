import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/auth/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import HomePage from './components/pages/HomePage';
import RecruiterPage from './components/pages/RecruiterPage';
import PublicJobsPage from './components/pages/PublicJobsPage';
import DashboardHome from './components/pages/DashboardHome';
import JobPostsListing from './components/pages/JobPostsListing';
import JobDetailPage from './components/pages/JobDetailPage';
import ResdexPage from './components/pages/ResdexPage';

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
