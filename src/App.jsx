import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import BackgroundPattern from './components/BackgroundPattern/BackgroundPattern';
import Dashboard from './pages/Dashboard/Dashboard';
import UserManagement from './pages/UserManagement/UserManagement';
import AllProjects from './pages/Projects/AllProjects';
import AllServices from './pages/Services/AllServices';
import Settings from './pages/Settings/Settings';
import Messages from './pages/Messages/Messages';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div className="app">
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
            <Route path="/users" element={<UserManagement />} />
            <Route path="/services" element={<AllServices />} />
            <Route path="/projects" element={<AllProjects />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/messages" element={<Messages />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;