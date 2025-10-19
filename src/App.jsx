import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './styles/global.scss';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import BackgroundPattern from './components/BackgroundPattern/BackgroundPattern';
import Dashboard from './pages/Dashboard/Dashboard';
import Analytics from './pages/Analytics/Analytics';
import UserManagement from './pages/UserManagement/UserManagement';
import AllProjects from './pages/Projects/AllProjects';
import ActiveProjects from './pages/Projects/ActiveProjects/ActiveProjects';
import ArchivedProjects from './pages/Projects/ArchivedProjects/ArchivedProjects';
import CreateProject from './pages/Projects/CreateProject/CreateProject';
import AllServices from './pages/Services/AllServices';
import Settings from './pages/Settings/Settings';
import Messages from './pages/Messages/Messages';
import Teams from './pages/Teams/Teams';
import Roles from './pages/Roles/Roles';
import Websites from './pages/Services/Websites/Websites';
import MobileApps from './pages/Services/MobileApps/MobileApps';
import Backend from './pages/Services/Backend/Backend';
import Cloud from './pages/Services/Cloud/Cloud';
import Design from './pages/Services/Design/Design';
import Ecommerce from './pages/Services/Ecommerce/Ecommerce';
import Integrations from './pages/Integrations/Integrations';
import APIManagement from './pages/APIManagement/APIManagement';
import DatabaseManagement from './pages/DatabaseManagement/DatabaseManagement';
import CloudDeployment from './pages/CloudDeployment/CloudDeployment';
import Feedback from './pages/Feedback/Feedback';
import HelpCenter from './pages/HelpCenter/HelpCenter';
import Profile from './pages/Profile/Profile';
import Blog from './pages/Blog/Blog';
import Media from './pages/Media/Media';
import Testimonials from './pages/Testimonials/Testimonials';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import ForgotPassword from './pages/Auth/ForgotPassword';
import ResetPassword from './pages/Auth/ResetPassword';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  // Initialize dark mode from localStorage or system preference
  const getInitialTheme = () => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Otherwise, use system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  };
  
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

  // Handle window resize for sidebar
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Listen to system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      // Only auto-update if user hasn't manually set a preference
      const savedTheme = localStorage.getItem('theme');
      if (!savedTheme) {
        setIsDarkMode(e.matches);
      }
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    // Save user preference
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <AuthProvider>
        <AppContent 
          sidebarOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          isMobile={isMobile}
        />
      </AuthProvider>
    </Router>
  );
}

const AppContent = ({ sidebarOpen, toggleSidebar, isDarkMode, toggleDarkMode, isMobile }) => {
  return (
    <div className="app">
      <Routes>
        {/* Public Auth Routes - No Header/Sidebar */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        
        {/* Protected Routes - With Header/Sidebar */}
        <Route path="/*" element={
          <ProtectedRoute>
            <>
              <BackgroundPattern />
              <Header 
                toggleSidebar={toggleSidebar} 
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
              />
              <Sidebar isOpen={sidebarOpen} isMobile={isMobile} />
              
              {isMobile && sidebarOpen && (
                <div 
                  className="overlay" 
                  onClick={toggleSidebar}
                />
              )}

              <main className={`main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/analytics" element={<Analytics />} />
                  <Route path="/users" element={<UserManagement />} />
                  <Route path="/teams" element={<Teams />} />
                  <Route path="/roles" element={<Roles />} />
                  <Route path="/services" element={<AllServices />} />
                  <Route path="/services/websites" element={<Websites />} />
                  <Route path="/services/mobile" element={<MobileApps />} />
                  <Route path="/services/backend" element={<Backend />} />
                  <Route path="/services/cloud" element={<Cloud />} />
                  <Route path="/services/design" element={<Design />} />
                  <Route path="/services/ecommerce" element={<Ecommerce />} />
                  <Route path="/projects" element={<AllProjects />} />
                  <Route path="/projects/active" element={<ActiveProjects />} />
                  <Route path="/projects/archived" element={<ArchivedProjects />} />
                  <Route path="/projects/create" element={<CreateProject />} />
                  <Route path="/integrations" element={<Integrations />} />
                  <Route path="/api" element={<APIManagement />} />
                  <Route path="/database" element={<DatabaseManagement />} />
                  <Route path="/deployment" element={<CloudDeployment />} />
                  <Route path="/feedback" element={<Feedback />} />
                  <Route path="/help" element={<HelpCenter />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/media" element={<Media />} />
                  <Route path="/testimonials" element={<Testimonials />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/messages" element={<Messages />} />
                </Routes>
              </main>
            </>
          </ProtectedRoute>
        } />
      </Routes>
    </div>
  );
};

export default App;