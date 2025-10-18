import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // ADD THIS IMPORT
import LogoutModal from '../LogoutModal/LogoutModal';
import { 
  FiHome,
  FiBarChart2,
  FiUsers,
  FiUserCheck,
  FiShield,
  FiLayers,
  FiMonitor,
  FiSmartphone,
  FiServer,
  FiCloud,
  FiLayout,
  FiShoppingCart,
  FiFolderPlus,
  FiFolder,
  FiCheckCircle,
  FiArchive,
  FiPlusCircle,
  FiFileText,
  FiImage,
  FiStar,
  FiSettings,
  FiBox,
  FiDatabase,
  FiUploadCloud,
  FiMessageSquare,
  FiMessageCircle,
  FiHelpCircle,
  FiUser,
  FiLock,
  FiLogOut,
  FiChevronDown,
  FiChevronRight
} from 'react-icons/fi';
import styles from './Sidebar.module.scss';

const Sidebar = ({ isOpen, isMobile }) => {
  const [openMenus, setOpenMenus] = useState({});
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  const location = useLocation(); // ADD THIS LINE

  const toggleMenu = (menuName) => {
    setOpenMenus(prev => ({
      ...prev,
      [menuName]: !prev[menuName]
    }));
  };

  const handleLogoutClick = () => {
    setLogoutModalOpen(true);
  };

  const handleLogoutConfirm = () => {
    setLogoutModalOpen(false);
    // Add logout logic here (redirect, clear session, etc.)
  };

  const menuItems = [
    {
      section: 'MAIN MENU',
      items: [
        { icon: <FiHome />, label: 'Dashboard', path: '/' },
        { icon: <FiBarChart2 />, label: 'Analytics', path: '/analytics' }
      ]
    },
    {
      section: 'USER & TEAM',
      items: [
        { icon: <FiUsers />, label: 'User Management', path: '/users' },
        { icon: <FiUserCheck />, label: 'Team Management', path: '/teams' },
        { icon: <FiShield />, label: 'Roles & Permissions', path: '/roles' }
      ]
    },
    {
      section: 'SERVICES',
      items: [
        { icon: <FiLayers />, label: 'All Services', path: '/services' },
        { icon: <FiMonitor />, label: 'Websites', path: '/services/websites' },
        { icon: <FiSmartphone />, label: 'Mobile Development', path: '/services/mobile' },
        { icon: <FiServer />, label: 'Backend Development', path: '/services/backend' },
        { icon: <FiCloud />, label: 'Cloud Solutions', path: '/services/cloud' },
        { icon: <FiLayout />, label: 'UI/UX Design', path: '/services/design' },
        { icon: <FiShoppingCart />, label: 'E-commerce Solutions', path: '/services/ecommerce' }
      ]
    },
    {
      section: 'PROJECTS',
      items: [
        { icon: <FiFolderPlus />, label: 'All Projects', path: '/projects' },
        { icon: <FiCheckCircle />, label: 'Active Projects', path: '/projects/active' },
        { icon: <FiArchive />, label: 'Archived Projects', path: '/projects/archived' },
        { icon: <FiPlusCircle />, label: 'Create Project', path: '/projects/create' }
      ]
    },
    {
      section: 'CONTENT',
      items: [
        { icon: <FiFileText />, label: 'Blog Management', path: '/blog' },
        { icon: <FiImage />, label: 'Media Library', path: '/media' },
        { icon: <FiStar />, label: 'Testimonials', path: '/testimonials' }
      ]
    },
    {
      section: 'SYSTEM MANAGEMENT',
      items: [
        { icon: <FiSettings />, label: 'Settings', path: '/settings' },
        { icon: <FiBox />, label: 'Integrations', path: '/integrations' },
        { icon: <FiServer />, label: 'API Management', path: '/api' },
        { icon: <FiDatabase />, label: 'Database Management', path: '/database' },
        { icon: <FiUploadCloud />, label: 'Cloud Deployment', path: '/deployment' }
      ]
    },
    {
      section: 'SUPPORT',
      items: [
        { icon: <FiMessageSquare />, label: 'Messages', path: '/messages', badge: 3 },
        { icon: <FiMessageCircle />, label: 'Feedback', path: '/feedback' },
        { icon: <FiHelpCircle />, label: 'Help Center', path: '/help' }
      ]
    }
  ];

  return (
    <>
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed} ${isMobile ? styles.mobile : ''}`}>
      <div className={styles.sidebarContent}>
        {/* Logo */}
        <div className={styles.logo}>
          <div className={styles.logoIcon}>H</div>
          {isOpen && (
            <div className={styles.logoText}>
              <h1>husney.</h1>
              <span>admin</span>
            </div>
          )}
        </div>

        {/* Navigation - REPLACE THE ENTIRE NAVIGATION SECTION WITH THIS */}
        <nav className={styles.navigation}>
          {menuItems.map((section, idx) => (
            <div key={idx} className={styles.menuSection}>
              {isOpen && <div className={styles.sectionTitle}>{section.section}</div>}
              <ul className={styles.menuList}>
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className={styles.menuItem}>
                    <Link 
                      to={item.path} 
                      className={`${styles.menuLink} ${location.pathname === item.path ? styles.active : ''}`}
                    >
                      <span className={styles.menuIcon}>{item.icon}</span>
                      {isOpen && (
                        <>
                          <span className={styles.menuLabel}>{item.label}</span>
                          {item.badge && (
                            <span className={styles.badge}>{item.badge}</span>
                          )}
                        </>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Profile Section */}
        <div className={styles.profileSection}>
          <div className={styles.profileCard}>
            <div className={styles.profileAvatar}>
              <FiUser />
            </div>
            {isOpen && (
              <div className={styles.profileInfo}>
                <h4>Husney</h4>
                <p>Administrator</p>
              </div>
            )}
          </div>
          
          {isOpen && (
            <div className={styles.profileActions}>
              <Link to="/profile" className={styles.actionBtn}>
                <FiUser /> Profile
              </Link>
              <Link to="/settings?tab=security" className={styles.actionBtn}>
                <FiLock /> Security
              </Link>
              <button className={`${styles.actionBtn} ${styles.logout}`} onClick={handleLogoutClick}>
                <FiLogOut /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </aside>

    <LogoutModal 
      isOpen={logoutModalOpen}
      onClose={() => setLogoutModalOpen(false)}
      onConfirm={handleLogoutConfirm}
    />
    </>
  );
};

export default Sidebar;