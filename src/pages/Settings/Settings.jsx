import React, { useState } from 'react';
import {
  FiSettings,
  FiUser,
  FiBell,
  FiLock,
  FiGlobe,
  FiDollarSign,
  FiMail,
  FiDatabase,
  FiShield,
  FiEye,
  FiEyeOff,
  FiSave,
  FiRefreshCw,
  FiTrash2,
  FiUpload,
  FiImage,
  FiX,
  FiCheck,
  FiAlertCircle,
  FiSmartphone,
  FiMonitor,
  FiCreditCard,
  FiKey,
  FiUsers,
  FiToggleLeft,
  FiToggleRight,
  FiEdit,
  FiDownload,
  FiPlus,
  FiClock
} from 'react-icons/fi';
import styles from './Settings.module.scss';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false
  });
  const [profileImage, setProfileImage] = useState('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80');
  const [imagePreview, setImagePreview] = useState(null);

  // Profile Settings
  const [profileData, setProfileData] = useState({
    fullName: 'Husney',
    email: 'admin@husney.com',
    phone: '+1 234 567 8900',
    bio: 'Full-stack developer and designer passionate about creating beautiful and functional web applications.',
    location: 'New York, USA',
    website: 'https://husney.com',
    company: 'Husney Solutions',
    position: 'CEO & Founder'
  });

  // Password Settings
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Notification Settings
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    projectUpdates: true,
    teamMessages: true,
    paymentAlerts: true,
    weeklyReports: false,
    monthlyReports: true,
    marketingEmails: false
  });

  // Security Settings
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: false,
    sessionTimeout: '30',
    loginAlerts: true,
    deviceTracking: true,
    apiAccess: false
  });

  // Appearance Settings
  const [appearanceSettings, setAppearanceSettings] = useState({
    theme: 'light',
    language: 'en',
    timezone: 'UTC-5',
    dateFormat: 'MM/DD/YYYY',
    timeFormat: '12h'
  });

  // Billing Settings
  const [billingData, setbillingData] = useState({
    cardNumber: '**** **** **** 4242',
    cardHolder: 'Husney',
    expiryDate: '12/25',
    billingAddress: '123 Main St, New York, NY 10001',
    plan: 'Premium',
    billingCycle: 'monthly'
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: <FiUser /> },
    { id: 'security', label: 'Security', icon: <FiLock /> },
    { id: 'notifications', label: 'Notifications', icon: <FiBell /> },
    { id: 'appearance', label: 'Appearance', icon: <FiMonitor /> },
    { id: 'billing', label: 'Billing', icon: <FiCreditCard /> },
    { id: 'advanced', label: 'Advanced', icon: <FiDatabase /> }
  ];

  // Handlers
  const handleProfileChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value
    });
  };

  const handleNotificationToggle = (key) => {
    setNotificationSettings({
      ...notificationSettings,
      [key]: !notificationSettings[key]
    });
  };

  const handleSecurityToggle = (key) => {
    setSecuritySettings({
      ...securitySettings,
      [key]: !securitySettings[key]
    });
  };

  const handleAppearanceChange = (e) => {
    setAppearanceSettings({
      ...appearanceSettings,
      [e.target.name]: e.target.value
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUrlChange = (e) => {
    const url = e.target.value;
    setImagePreview(url);
    setProfileImage(url);
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    console.log('Profile saved:', profileData);
    // Add save logic here
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Password changed');
    setPasswordData({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword({
      ...showPassword,
      [field]: !showPassword[field]
    });
  };

  return (
    <div className={styles.settings}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.titleSection}>
            <FiSettings className={styles.titleIcon} />
            <div>
              <h1>Settings</h1>
              <p>Manage your account settings and preferences</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.settingsContainer}>
        {/* Tabs Sidebar */}
        <div className={styles.tabsSidebar}>
          <div className={styles.tabsList}>
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`${styles.tabBtn} ${activeTab === tab.id ? styles.active : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className={styles.contentArea}>
          {/* Profile Settings */}
          {activeTab === 'profile' && (
            <div className={styles.tabContent}>
              <div className={styles.sectionHeader}>
                <h2>Profile Information</h2>
                <p>Update your personal information and profile picture</p>
              </div>

              <form onSubmit={handleSaveProfile}>
                {/* Profile Picture */}
                <div className={styles.profileImageSection}>
                  <div className={styles.imagePreview}>
                    <img src={imagePreview || profileImage} alt="Profile" />
                  </div>
                  <div className={styles.imageActions}>
                    <h4>Profile Picture</h4>
                    <p>PNG, JPG or GIF (max. 2MB)</p>
                    <div className={styles.imageButtons}>
                      <label className={styles.uploadBtn}>
                        <FiUpload /> Upload Photo
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          style={{ display: 'none' }}
                        />
                      </label>
                      <button type="button" className={styles.removeBtn}>
                        <FiTrash2 /> Remove
                      </button>
                    </div>
                    <input
                      type="text"
                      placeholder="Or enter image URL"
                      className={styles.urlInput}
                      onChange={handleImageUrlChange}
                    />
                  </div>
                </div>

                {/* Form Fields */}
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={profileData.fullName}
                      onChange={handleProfileChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleProfileChange}
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleProfileChange}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Location</label>
                    <input
                      type="text"
                      name="location"
                      value={profileData.location}
                      onChange={handleProfileChange}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Website</label>
                    <input
                      type="url"
                      name="website"
                      value={profileData.website}
                      onChange={handleProfileChange}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Company</label>
                    <input
                      type="text"
                      name="company"
                      value={profileData.company}
                      onChange={handleProfileChange}
                    />
                  </div>
                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label>Bio</label>
                    <textarea
                      name="bio"
                      value={profileData.bio}
                      onChange={handleProfileChange}
                      rows="4"
                    />
                  </div>
                </div>

                <div className={styles.formActions}>
                  <button type="button" className={styles.cancelBtn}>
                    <FiRefreshCw /> Reset
                  </button>
                  <button type="submit" className={styles.saveBtn}>
                    <FiSave /> Save Changes
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Security Settings */}
          {activeTab === 'security' && (
            <div className={styles.tabContent}>
              <div className={styles.sectionHeader}>
                <h2>Security Settings</h2>
                <p>Manage your password and security preferences</p>
              </div>

              {/* Change Password */}
              <div className={styles.card}>
                <h3>Change Password</h3>
                <form onSubmit={handleChangePassword}>
                  <div className={styles.formGrid}>
                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                      <label>Current Password *</label>
                      <div className={styles.passwordInput}>
                        <input
                          type={showPassword.current ? 'text' : 'password'}
                          name="currentPassword"
                          value={passwordData.currentPassword}
                          onChange={handlePasswordChange}
                          required
                        />
                        <button
                          type="button"
                          className={styles.togglePassword}
                          onClick={() => togglePasswordVisibility('current')}
                        >
                          {showPassword.current ? <FiEyeOff /> : <FiEye />}
                        </button>
                      </div>
                    </div>
                    <div className={styles.formGroup}>
                      <label>New Password *</label>
                      <div className={styles.passwordInput}>
                        <input
                          type={showPassword.new ? 'text' : 'password'}
                          name="newPassword"
                          value={passwordData.newPassword}
                          onChange={handlePasswordChange}
                          required
                        />
                        <button
                          type="button"
                          className={styles.togglePassword}
                          onClick={() => togglePasswordVisibility('new')}
                        >
                          {showPassword.new ? <FiEyeOff /> : <FiEye />}
                        </button>
                      </div>
                    </div>
                    <div className={styles.formGroup}>
                      <label>Confirm Password *</label>
                      <div className={styles.passwordInput}>
                        <input
                          type={showPassword.confirm ? 'text' : 'password'}
                          name="confirmPassword"
                          value={passwordData.confirmPassword}
                          onChange={handlePasswordChange}
                          required
                        />
                        <button
                          type="button"
                          className={styles.togglePassword}
                          onClick={() => togglePasswordVisibility('confirm')}
                        >
                          {showPassword.confirm ? <FiEyeOff /> : <FiEye />}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={styles.formActions}>
                    <button type="submit" className={styles.saveBtn}>
                      <FiLock /> Update Password
                    </button>
                  </div>
                </form>
              </div>

              {/* Two-Factor Authentication */}
              <div className={styles.card}>
                <h3>Two-Factor Authentication</h3>
                <p className={styles.cardDescription}>
                  Add an extra layer of security to your account
                </p>
                <div className={styles.toggleOption}>
                  <div className={styles.toggleInfo}>
                    <FiShield />
                    <div>
                      <h4>Enable 2FA</h4>
                      <p>Require verification code when signing in</p>
                    </div>
                  </div>
                  <button
                    className={`${styles.toggle} ${securitySettings.twoFactorAuth ? styles.active : ''}`}
                    onClick={() => handleSecurityToggle('twoFactorAuth')}
                  >
                    {securitySettings.twoFactorAuth ? <FiToggleRight /> : <FiToggleLeft />}
                  </button>
                </div>
              </div>

              {/* Security Options */}
              <div className={styles.card}>
                <h3>Security Options</h3>
                <div className={styles.toggleOptions}>
                  <div className={styles.toggleOption}>
                    <div className={styles.toggleInfo}>
                      <FiBell />
                      <div>
                        <h4>Login Alerts</h4>
                        <p>Get notified of new login attempts</p>
                      </div>
                    </div>
                    <button
                      className={`${styles.toggle} ${securitySettings.loginAlerts ? styles.active : ''}`}
                      onClick={() => handleSecurityToggle('loginAlerts')}
                    >
                      {securitySettings.loginAlerts ? <FiToggleRight /> : <FiToggleLeft />}
                    </button>
                  </div>
                  <div className={styles.toggleOption}>
                    <div className={styles.toggleInfo}>
                      <FiSmartphone                      />
                      <div>
                        <h4>Device Tracking</h4>
                        <p>Track devices that access your account</p>
                      </div>
                    </div>
                    <button
                      className={`${styles.toggle} ${securitySettings.deviceTracking ? styles.active : ''}`}
                      onClick={() => handleSecurityToggle('deviceTracking')}
                    >
                      {securitySettings.deviceTracking ? <FiToggleRight /> : <FiToggleLeft />}
                    </button>
                  </div>
                  <div className={styles.toggleOption}>
                    <div className={styles.toggleInfo}>
                      <FiKey />
                      <div>
                        <h4>API Access</h4>
                        <p>Enable API access for third-party applications</p>
                      </div>
                    </div>
                    <button
                      className={`${styles.toggle} ${securitySettings.apiAccess ? styles.active : ''}`}
                      onClick={() => handleSecurityToggle('apiAccess')}
                    >
                      {securitySettings.apiAccess ? <FiToggleRight /> : <FiToggleLeft />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Session Timeout */}
              <div className={styles.card}>
                <h3>Session Management</h3>
                <div className={styles.formGroup}>
                  <label>Session Timeout (minutes)</label>
                  <select
                    value={securitySettings.sessionTimeout}
                    onChange={(e) => setSecuritySettings({ ...securitySettings, sessionTimeout: e.target.value })}
                  >
                    <option value="15">15 minutes</option>
                    <option value="30">30 minutes</option>
                    <option value="60">1 hour</option>
                    <option value="120">2 hours</option>
                    <option value="never">Never</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Notification Settings */}
          {activeTab === 'notifications' && (
            <div className={styles.tabContent}>
              <div className={styles.sectionHeader}>
                <h2>Notification Preferences</h2>
                <p>Manage how you receive notifications</p>
              </div>

              {/* Email Notifications */}
              <div className={styles.card}>
                <h3>Email Notifications</h3>
                <div className={styles.toggleOptions}>
                  <div className={styles.toggleOption}>
                    <div className={styles.toggleInfo}>
                      <FiMail />
                      <div>
                        <h4>Email Notifications</h4>
                        <p>Receive notifications via email</p>
                      </div>
                    </div>
                    <button
                      className={`${styles.toggle} ${notificationSettings.emailNotifications ? styles.active : ''}`}
                      onClick={() => handleNotificationToggle('emailNotifications')}
                    >
                      {notificationSettings.emailNotifications ? <FiToggleRight /> : <FiToggleLeft />}
                    </button>
                  </div>
                  <div className={styles.toggleOption}>
                    <div className={styles.toggleInfo}>
                      <FiBell />
                      <div>
                        <h4>Push Notifications</h4>
                        <p>Receive push notifications on your device</p>
                      </div>
                    </div>
                    <button
                      className={`${styles.toggle} ${notificationSettings.pushNotifications ? styles.active : ''}`}
                      onClick={() => handleNotificationToggle('pushNotifications')}
                    >
                      {notificationSettings.pushNotifications ? <FiToggleRight /> : <FiToggleLeft />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Activity Notifications */}
              <div className={styles.card}>
                <h3>Activity Notifications</h3>
                <div className={styles.toggleOptions}>
                  <div className={styles.toggleOption}>
                    <div className={styles.toggleInfo}>
                      <FiSettings />
                      <div>
                        <h4>Project Updates</h4>
                        <p>Get notified about project changes and updates</p>
                      </div>
                    </div>
                    <button
                      className={`${styles.toggle} ${notificationSettings.projectUpdates ? styles.active : ''}`}
                      onClick={() => handleNotificationToggle('projectUpdates')}
                    >
                      {notificationSettings.projectUpdates ? <FiToggleRight /> : <FiToggleLeft />}
                    </button>
                  </div>
                  <div className={styles.toggleOption}>
                    <div className={styles.toggleInfo}>
                      <FiUsers />
                      <div>
                        <h4>Team Messages</h4>
                        <p>Notifications for team messages and mentions</p>
                      </div>
                    </div>
                    <button
                      className={`${styles.toggle} ${notificationSettings.teamMessages ? styles.active : ''}`}
                      onClick={() => handleNotificationToggle('teamMessages')}
                    >
                      {notificationSettings.teamMessages ? <FiToggleRight /> : <FiToggleLeft />}
                    </button>
                  </div>
                  <div className={styles.toggleOption}>
                    <div className={styles.toggleInfo}>
                      <FiDollarSign />
                      <div>
                        <h4>Payment Alerts</h4>
                        <p>Get notified about payments and invoices</p>
                      </div>
                    </div>
                    <button
                      className={`${styles.toggle} ${notificationSettings.paymentAlerts ? styles.active : ''}`}
                      onClick={() => handleNotificationToggle('paymentAlerts')}
                    >
                      {notificationSettings.paymentAlerts ? <FiToggleRight /> : <FiToggleLeft />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Reports */}
              <div className={styles.card}>
                <h3>Reports & Summaries</h3>
                <div className={styles.toggleOptions}>
                  <div className={styles.toggleOption}>
                    <div className={styles.toggleInfo}>
                      <FiMail />
                      <div>
                        <h4>Weekly Reports</h4>
                        <p>Receive weekly activity summaries</p>
                      </div>
                    </div>
                    <button
                      className={`${styles.toggle} ${notificationSettings.weeklyReports ? styles.active : ''}`}
                      onClick={() => handleNotificationToggle('weeklyReports')}
                    >
                      {notificationSettings.weeklyReports ? <FiToggleRight /> : <FiToggleLeft />}
                    </button>
                  </div>
                  <div className={styles.toggleOption}>
                    <div className={styles.toggleInfo}>
                      <FiMail />
                      <div>
                        <h4>Monthly Reports</h4>
                        <p>Receive monthly performance reports</p>
                      </div>
                    </div>
                    <button
                      className={`${styles.toggle} ${notificationSettings.monthlyReports ? styles.active : ''}`}
                      onClick={() => handleNotificationToggle('monthlyReports')}
                    >
                      {notificationSettings.monthlyReports ? <FiToggleRight /> : <FiToggleLeft />}
                    </button>
                  </div>
                  <div className={styles.toggleOption}>
                    <div className={styles.toggleInfo}>
                      <FiMail />
                      <div>
                        <h4>Marketing Emails</h4>
                        <p>Receive marketing and promotional emails</p>
                      </div>
                    </div>
                    <button
                      className={`${styles.toggle} ${notificationSettings.marketingEmails ? styles.active : ''}`}
                      onClick={() => handleNotificationToggle('marketingEmails')}
                    >
                      {notificationSettings.marketingEmails ? <FiToggleRight /> : <FiToggleLeft />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Appearance Settings */}
          {activeTab === 'appearance' && (
            <div className={styles.tabContent}>
              <div className={styles.sectionHeader}>
                <h2>Appearance Settings</h2>
                <p>Customize the look and feel of your dashboard</p>
              </div>

              {/* Theme */}
              <div className={styles.card}>
                <h3>Theme</h3>
                <div className={styles.themeOptions}>
                  <div
                    className={`${styles.themeCard} ${appearanceSettings.theme === 'light' ? styles.active : ''}`}
                    onClick={() => setAppearanceSettings({ ...appearanceSettings, theme: 'light' })}
                  >
                    <div className={styles.themePreview}>
                      <div className={styles.lightTheme}>
                        <div className={styles.previewHeader}></div>
                        <div className={styles.previewContent}>
                          <div className={styles.previewSidebar}></div>
                          <div className={styles.previewMain}></div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.themeInfo}>
                      <h4>Light</h4>
                      {appearanceSettings.theme === 'light' && <FiCheck />}
                    </div>
                  </div>
                  <div
                    className={`${styles.themeCard} ${appearanceSettings.theme === 'dark' ? styles.active : ''}`}
                    onClick={() => setAppearanceSettings({ ...appearanceSettings, theme: 'dark' })}
                  >
                    <div className={styles.themePreview}>
                      <div className={styles.darkTheme}>
                        <div className={styles.previewHeader}></div>
                        <div className={styles.previewContent}>
                          <div className={styles.previewSidebar}></div>
                          <div className={styles.previewMain}></div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.themeInfo}>
                      <h4>Dark</h4>
                      {appearanceSettings.theme === 'dark' && <FiCheck />}
                    </div>
                  </div>
                  <div
                    className={`${styles.themeCard} ${appearanceSettings.theme === 'auto' ? styles.active : ''}`}
                    onClick={() => setAppearanceSettings({ ...appearanceSettings, theme: 'auto' })}
                  >
                    <div className={styles.themePreview}>
                      <div className={styles.autoTheme}>
                        <div className={styles.previewHeader}></div>
                        <div className={styles.previewContent}>
                          <div className={styles.previewSidebar}></div>
                          <div className={styles.previewMain}></div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.themeInfo}>
                      <h4>Auto</h4>
                      {appearanceSettings.theme === 'auto' && <FiCheck />}
                    </div>
                  </div>
                </div>
              </div>

              {/* Localization */}
              <div className={styles.card}>
                <h3>Localization</h3>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label>Language</label>
                    <select
                      name="language"
                      value={appearanceSettings.language}
                      onChange={handleAppearanceChange}
                    >
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                      <option value="zh">Chinese</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label>Timezone</label>
                    <select
                      name="timezone"
                      value={appearanceSettings.timezone}
                      onChange={handleAppearanceChange}
                    >
                      <option value="UTC-12">UTC-12:00</option>
                      <option value="UTC-8">UTC-08:00 (PST)</option>
                      <option value="UTC-5">UTC-05:00 (EST)</option>
                      <option value="UTC+0">UTC+00:00 (GMT)</option>
                      <option value="UTC+1">UTC+01:00 (CET)</option>
                      <option value="UTC+8">UTC+08:00 (SGT)</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label>Date Format</label>
                    <select
                      name="dateFormat"
                      value={appearanceSettings.dateFormat}
                      onChange={handleAppearanceChange}
                    >
                      <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                      <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                      <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label>Time Format</label>
                    <select
                      name="timeFormat"
                      value={appearanceSettings.timeFormat}
                      onChange={handleAppearanceChange}
                    >
                      <option value="12h">12 Hour</option>
                      <option value="24h">24 Hour</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Billing Settings */}
          {activeTab === 'billing' && (
            <div className={styles.tabContent}>
              <div className={styles.sectionHeader}>
                <h2>Billing & Subscription</h2>
                <p>Manage your subscription and payment methods</p>
              </div>

              {/* Current Plan */}
              <div className={styles.card}>
                <h3>Current Plan</h3>
                <div className={styles.planCard}>
                  <div className={styles.planInfo}>
                    <h2>{billingData.plan}</h2>
                    <p>Billed {billingData.billingCycle}</p>
                  </div>
                  <div className={styles.planPrice}>
                    <h3>$99</h3>
                    <span>/month</span>
                  </div>
                </div>
                <button className={styles.changePlanBtn}>
                  Change Plan
                </button>
              </div>

              {/* Payment Method */}
              <div className={styles.card}>
                <h3>Payment Method</h3>
                <div className={styles.paymentCard}>
                  <FiCreditCard />
                  <div className={styles.cardInfo}>
                    <h4>{billingData.cardNumber}</h4>
                    <p>Expires {billingData.expiryDate}</p>
                  </div>
                  <button className={styles.editBtn}>
                    <FiEdit />
                  </button>
                </div>
              </div>

              {/* Billing Address */}
              <div className={styles.card}>
                <h3>Billing Address</h3>
                <p className={styles.addressText}>{billingData.billingAddress}</p>
                <button                  className={styles.editAddressBtn}
                >
                  <FiEdit /> Edit Address
                </button>
              </div>

              {/* Billing History */}
              <div className={styles.card}>
                <h3>Billing History</h3>
                <div className={styles.billingHistory}>
                  <div className={styles.historyItem}>
                    <div className={styles.historyInfo}>
                      <h4>Premium Plan - January 2024</h4>
                      <p>Paid on Jan 1, 2024</p>
                    </div>
                    <div className={styles.historyAmount}>
                      <span>$99.00</span>
                      <button className={styles.downloadBtn}>
                        <FiDownload />
                      </button>
                    </div>
                  </div>
                  <div className={styles.historyItem}>
                    <div className={styles.historyInfo}>
                      <h4>Premium Plan - December 2023</h4>
                      <p>Paid on Dec 1, 2023</p>
                    </div>
                    <div className={styles.historyAmount}>
                      <span>$99.00</span>
                      <button className={styles.downloadBtn}>
                        <FiDownload />
                      </button>
                    </div>
                  </div>
                  <div className={styles.historyItem}>
                    <div className={styles.historyInfo}>
                      <h4>Premium Plan - November 2023</h4>
                      <p>Paid on Nov 1, 2023</p>
                    </div>
                    <div className={styles.historyAmount}>
                      <span>$99.00</span>
                      <button className={styles.downloadBtn}>
                        <FiDownload />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Advanced Settings */}
          {activeTab === 'advanced' && (
            <div className={styles.tabContent}>
              <div className={styles.sectionHeader}>
                <h2>Advanced Settings</h2>
                <p>Configure advanced options and data management</p>
              </div>

              {/* Data Export */}
              <div className={styles.card}>
                <h3>Export Data</h3>
                <p className={styles.cardDescription}>
                  Download a copy of your account data including projects, users, and settings.
                </p>
                <button className={styles.exportDataBtn}>
                  <FiDownload /> Export All Data
                </button>
              </div>

              {/* Account Deletion */}
              <div className={`${styles.card} ${styles.dangerCard}`}>
                <h3>Delete Account</h3>
                <p className={styles.cardDescription}>
                  Permanently delete your account and all associated data. This action cannot be undone.
                </p>
                <button className={styles.deleteAccountBtn}>
                  <FiAlertCircle /> Delete Account
                </button>
              </div>

              {/* API Keys */}
              <div className={styles.card}>
                <h3>API Keys</h3>
                <p className={styles.cardDescription}>
                  Manage API keys for integrations and third-party applications.
                </p>
                <div className={styles.apiKeys}>
                  <div className={styles.apiKeyItem}>
                    <div className={styles.apiKeyInfo}>
                      <h4>Production Key</h4>
                      <code>sk_live_********************4242</code>
                      <p>Created on Dec 15, 2023</p>
                    </div>
                    <button className={styles.revokeBtn}>
                      <FiTrash2 /> Revoke
                    </button>
                  </div>
                  <div className={styles.apiKeyItem}>
                    <div className={styles.apiKeyInfo}>
                      <h4>Development Key</h4>
                      <code>sk_test_********************7890</code>
                      <p>Created on Nov 20, 2023</p>
                    </div>
                    <button className={styles.revokeBtn}>
                      <FiTrash2 /> Revoke
                    </button>
                  </div>
                </div>
                <button className={styles.generateKeyBtn}>
                  <FiKey /> Generate New Key
                </button>
              </div>

              {/* Webhook Settings */}
              <div className={styles.card}>
                <h3>Webhooks</h3>
                <p className={styles.cardDescription}>
                  Configure webhook endpoints for receiving event notifications.
                </p>
                <div className={styles.webhooksList}>
                  <div className={styles.webhookItem}>
                    <div className={styles.webhookInfo}>
                      <h4>https://api.example.com/webhooks</h4>
                      <p>Events: project.created, user.updated</p>
                    </div>
                    <div className={styles.webhookActions}>
                      <button className={styles.editBtn}>
                        <FiEdit />
                      </button>
                      <button className={styles.deleteBtn}>
                        <FiTrash2 />
                      </button>
                    </div>
                  </div>
                </div>
                <button className={styles.addWebhookBtn}>
                  <FiPlus /> Add Webhook
                </button>
              </div>

              {/* Database Backup */}
              <div className={styles.card}>
                <h3>Database Backup</h3>
                <p className={styles.cardDescription}>
                  Create and manage database backups for data recovery.
                </p>
                <div className={styles.backupInfo}>
                  <div className={styles.backupItem}>
                    <FiDatabase />
                    <div>
                      <h4>Last Backup</h4>
                      <p>January 15, 2024 at 3:00 AM</p>
                    </div>
                  </div>
                  <div className={styles.backupItem}>
                    <FiClock />
                    <div>
                      <h4>Next Scheduled Backup</h4>
                      <p>January 16, 2024 at 3:00 AM</p>
                    </div>
                  </div>
                </div>
                <button className={styles.backupBtn}>
                  <FiDatabase /> Create Backup Now
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;