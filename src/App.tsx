import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './hooks/useAuth';
import DashboardLayout from './components/DashboardLayout';

// Pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AdminDashboard from './pages/AdminDashboard';
import CitizenDashboard from './pages/CitizenDashboard';
import PoliticianDashboard from './pages/PoliticianDashboard';
import ModeratorDashboard from './pages/ModeratorDashboard';
import ReportIssuePage from './pages/ReportIssuePage';
import DiscussionPage from './pages/DiscussionPage';
import ConfirmationPage from './pages/ConfirmationPage';

function DashboardRouter() {
  const { user } = useAuth();
  
  if (!user) return <Navigate to="/login" />;

  switch (user.role) {
    case 'admin':
      return <AdminDashboard />;
    case 'politician':
      return <PoliticianDashboard />;
    case 'moderator':
      return <ModeratorDashboard />;
    case 'citizen':
    default:
      return <CitizenDashboard />;
  }
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* Protected Dashboard Routes */}
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashboardRouter />} />
            <Route path="/report-issue" element={<ReportIssuePage />} />
            <Route path="/discussions" element={<DiscussionPage />} />
            <Route path="/issues" element={<div className="p-8 text-center text-slate-500">Issues List Page (Coming Soon)</div>} />
            <Route path="/issues/:id" element={<DiscussionPage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
            <Route path="/map" element={<div className="p-8 text-center text-slate-500">Interactive Map (Coming Soon)</div>} />
            <Route path="/settings" element={<div className="p-8 text-center text-slate-500">Settings Page (Coming Soon)</div>} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
