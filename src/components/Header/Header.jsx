import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FiSearch, 
  FiSun, 
  FiMoon, 
  FiMaximize, 
  FiMinimize, 
  FiBell,
  FiUser,
  FiSettings,
  FiLogOut,
  FiMenu
} from 'react-icons/fi';
import { useAuth } from '../../contexts/AuthContext';
import LogoutModal from '../LogoutModal/LogoutModal';
import styles from './Header.module.scss';

const Header = ({ toggleSidebar, isDarkMode, toggleDarkMode }) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  
  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setNotificationOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const notifications = [
    { id: 1, title: 'New Project Request', message: 'Client requested a new e-commerce project', time: '5 min ago', unread: true },
    { id: 2, title: 'Team Update', message: 'Sarah completed the UI design task', time: '1 hour ago', unread: true },
    { id: 3, title: 'Server Alert', message: 'Server CPU usage at 85%', time: '2 hours ago', unread: false },
    { id: 4, title: 'Payment Received', message: 'Invoice #1234 has been paid', time: '3 hours ago', unread: false },
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  const handleLogoutClick = () => {
    setLogoutModalOpen(true);
    setProfileOpen(false);
  };

  const handleLogoutConfirm = () => {
    logout();
    setLogoutModalOpen(false);
    navigate('/login', { replace: true });
  };

  return (
    <>
      <header className={styles.header}>
      <div className={styles.headerLeft}>
        <button className={styles.menuBtn} onClick={toggleSidebar}>
          <FiMenu />
        </button>
        
        <div className={`${styles.searchBar} ${searchFocused ? styles.focused : ''}`}>
          <FiSearch className={styles.searchIcon} />
          <input 
            type="text" 
            placeholder="Search anything..." 
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
        </div>
      </div>

      <div className={styles.headerRight}>
        <button 
          className={styles.iconBtn} 
          onClick={toggleDarkMode}
          title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
        >
          {isDarkMode ? <FiSun /> : <FiMoon />}
        </button>

        <button 
          className={styles.iconBtn} 
          onClick={toggleFullscreen}
          title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        >
          {isFullscreen ? <FiMinimize /> : <FiMaximize />}
        </button>

        <div className={styles.dropdown} ref={notificationRef}>
          <button 
            className={`${styles.iconBtn} ${styles.notificationBtn}`} 
            onClick={() => setNotificationOpen(!notificationOpen)}
          >
            <FiBell />
            {unreadCount > 0 && <span className={styles.badge}>{unreadCount}</span>}
          </button>

          {notificationOpen && (
            <div className={styles.dropdownMenu}>
              <div className={styles.dropdownHeader}>
                <h4>Notifications</h4>
                <span className={styles.count}>{unreadCount} new</span>
              </div>
              <div className={styles.notificationList}>
                {notifications.map(notification => (
                  <div 
                    key={notification.id} 
                    className={`${styles.notificationItem} ${notification.unread ? styles.unread : ''}`}
                  >
                    <div className={styles.notificationContent}>
                      <h5>{notification.title}</h5>
                      <p>{notification.message}</p>
                      <span className={styles.time}>{notification.time}</span>
                    </div>
                    {notification.unread && <div className={styles.unreadDot}></div>}
                  </div>
                ))}
              </div>
              <div className={styles.dropdownFooter}>
                <button>View All Notifications</button>
              </div>
            </div>
          )}
        </div>

        <div className={styles.dropdown} ref={profileRef}>
          <button 
            className={styles.profileBtn} 
            onClick={() => setProfileOpen(!profileOpen)}
          >
            <div className={styles.avatar}>
              <FiUser />
            </div>
            <div className={styles.profileInfo}>
              <span className={styles.name}>{user?.name || 'User'}</span>
              <span className={styles.role}>{user?.role || 'Administrator'}</span>
            </div>
          </button>

          {profileOpen && (
            <div className={`${styles.dropdownMenu} ${styles.profileMenu}`}>
              <div className={styles.profileMenuHeader}>
                <div className={styles.avatarLarge}>
                  <FiUser />
                </div>
                <h4>{user?.name || 'User'}</h4>
                <p>{user?.email || 'user@email.com'}</p>
              </div>
              <div className={styles.menuDivider}></div>
              <Link to="/profile" className={styles.menuItem} onClick={() => setProfileOpen(false)}>
                <FiUser /> My Profile
              </Link>
              <Link to="/settings" className={styles.menuItem} onClick={() => setProfileOpen(false)}>
                <FiSettings /> Settings
              </Link>
              <div className={styles.menuDivider}></div>
              <button className={`${styles.menuItem} ${styles.logout}`} onClick={handleLogoutClick}>
                <FiLogOut /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>

    <LogoutModal 
      isOpen={logoutModalOpen}
      onClose={() => setLogoutModalOpen(false)}
      onConfirm={handleLogoutConfirm}
    />
    </>
  );
};

export default Header;