import React, { useState } from 'react';
import {
  FiSmartphone,
  FiPlus,
  FiSearch,
  FiEdit,
  FiTrash2,
  FiEye,
  FiX,
  FiExternalLink,
  FiCheckCircle,
  FiClock,
  FiDollarSign,
  FiUsers,
  FiTrendingUp,
  FiCode,
  FiLayout,
  FiZap,
  FiShield,
  FiAward,
  FiBarChart2,
  FiDownload,
  FiFilter,
  FiStar,
  FiGrid
} from 'react-icons/fi';
import styles from './MobileApps.module.scss';

const MobileApps = () => {
  const [apps, setApps] = useState([
    {
      id: 1,
      name: 'E-commerce Mobile App',
      type: 'E-commerce',
      platform: 'iOS & Android',
      description: 'Full-featured mobile shopping app with seamless checkout, push notifications, and real-time inventory tracking.',
      thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
      demoUrl: 'https://demo-ecommerce-app.example.com',
      pricing: {
        basic: '$15,000',
        standard: '$30,000',
        premium: '$50,000'
      },
      features: [
        'Cross-Platform Development (iOS & Android)',
        'User Authentication & Profiles',
        'Product Catalog & Search',
        'Shopping Cart & Wishlist',
        'Secure Payment Integration',
        'Push Notifications',
        'Order Tracking',
        'In-App Chat Support',
        'Rating & Reviews',
        'Analytics Dashboard',
        'Admin Panel',
        '12 Months Support'
      ],
      technologies: ['React Native', 'Firebase', 'Stripe', 'Redux', 'Node.js', 'MongoDB'],
      deliveryTime: '12-16 weeks',
      clientCount: 32,
      completedProjects: 28,
      rating: 4.9,
      revenue: '$896,000',
      status: 'active',
      downloads: '150K+',
      portfolio: [
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80',
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=80',
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80'
      ]
    },
    {
      id: 2,
      name: 'Food Delivery App',
      type: 'Food & Delivery',
      platform: 'iOS & Android',
      description: 'Complete food delivery solution with real-time tracking, multiple payment options, and restaurant management.',
      thumbnail: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&q=80',
      demoUrl: 'https://demo-fooddelivery.example.com',
      pricing: {
        basic: '$18,000',
        standard: '$35,000',
        premium: '$60,000'
      },
      features: [
        'Multi-Restaurant Platform',
        'Real-Time Order Tracking',
        'GPS Integration',
        'Multiple Payment Gateways',
        'Driver Management System',
        'Push Notifications',
        'In-App Calling',
        'Rating & Reviews',
        'Promo Code System',
        'Restaurant Admin Dashboard',
        'Delivery Partner App',
        'Analytics & Reports'
      ],
      technologies: ['Flutter', 'Google Maps API', 'Firebase', 'Node.js', 'PostgreSQL', 'Socket.io'],
      deliveryTime: '14-18 weeks',
      clientCount: 24,
      completedProjects: 20,
      rating: 4.8,
      revenue: '$720,000',
      status: 'active',
      downloads: '200K+',
      portfolio: [
        'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=400&q=80',
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80',
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80'
      ]
    },
    {
      id: 3,
      name: 'Fitness & Health Tracker',
      type: 'Fitness & Health',
      platform: 'iOS & Android',
      description: 'Comprehensive fitness tracking app with workout plans, nutrition tracking, and social features for motivation.',
      thumbnail: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80',
      demoUrl: 'https://demo-fitness.example.com',
      pricing: {
        basic: '$12,000',
        standard: '$25,000',
        premium: '$45,000'
      },
      features: [
        'Activity & Workout Tracking',
        'Calorie & Nutrition Tracker',
        'Custom Workout Plans',
        'Progress Analytics',
        'Social Feed & Challenges',
        'Wearable Device Integration',
        'Video Exercise Library',
        'Personal Trainer Booking',
        'Goal Setting & Reminders',
        'Health Data Sync',
        'Premium Subscription System',
        '6 Months Support'
      ],
      technologies: ['React Native', 'HealthKit', 'Google Fit', 'Firebase', 'Express.js', 'MySQL'],
      deliveryTime: '10-14 weeks',
      clientCount: 38,
      completedProjects: 35,
      rating: 4.9,
      revenue: '$945,000',
      status: 'active',
      downloads: '500K+',
      portfolio: [
        'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400&q=80',
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80',
        'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80'
      ]
    },
    {
      id: 4,
      name: 'Social Networking App',
      type: 'Social Media',
      platform: 'iOS & Android',
      description: 'Feature-rich social networking platform with messaging, stories, live streaming, and content sharing.',
      thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
      demoUrl: 'https://demo-social.example.com',
      pricing: {
        basic: '$20,000',
        standard: '$40,000',
        premium: '$75,000'
      },
      features: [
        'User Profiles & Authentication',
        'News Feed Algorithm',
        'Real-Time Messaging',
        'Stories & Reels',
        'Live Streaming',
        'Photo & Video Sharing',
        'Follow/Unfollow System',
        'Notifications Engine',
        'Content Moderation',
        'Hashtags & Discovery',
        'Privacy Controls',
        'Advanced Analytics'
      ],
      technologies: ['Flutter', 'WebRTC', 'Firebase', 'AWS S3', 'Redis', 'GraphQL', 'Kubernetes'],
      deliveryTime: '16-24 weeks',
      clientCount: 18,
      completedProjects: 15,
      rating: 4.7,
      revenue: '$675,000',
      status: 'active',
      downloads: '1M+',
      portfolio: [
        'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80',
        'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&q=80',
        'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=400&q=80'
      ]
    },
    {
      id: 5,
      name: 'On-Demand Service App',
      type: 'On-Demand',
      platform: 'iOS & Android',
      description: 'Uber-like service booking app for various industries including taxi, beauty, cleaning, and handyman services.',
      thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      demoUrl: 'https://demo-ondemand.example.com',
      pricing: {
        basic: '$16,000',
        standard: '$32,000',
        premium: '$55,000'
      },
      features: [
        'Service Provider & Customer Apps',
        'Real-Time GPS Tracking',
        'Automated Dispatch System',
        'Multiple Payment Options',
        'In-App Calling & Messaging',
        'Booking Scheduler',
        'Rating & Review System',
        'Earnings Dashboard',
        'Promo & Referral System',
        'Multi-Language Support',
        'Admin Control Panel',
        '9 Months Support'
      ],
      technologies: ['React Native', 'Google Maps', 'Twilio', 'Stripe', 'Node.js', 'MongoDB', 'AWS'],
      deliveryTime: '12-16 weeks',
      clientCount: 29,
      completedProjects: 25,
      rating: 4.8,
      revenue: '$825,000',
      status: 'active',
      downloads: '300K+',
      portfolio: [
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80',
        'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=400&q=80',
        'https://images.unsplash.com/photo-1556742208-999815fca738?w=400&q=80'
      ]
    },
    {
      id: 6,
      name: 'Educational Learning App',
      type: 'Education',
      platform: 'iOS & Android',
      description: 'Interactive e-learning platform with video courses, quizzes, certificates, and progress tracking for students.',
      thumbnail: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
      demoUrl: 'https://demo-learning.example.com',
      pricing: {
        basic: '$14,000',
        standard: '$28,000',
        premium: '$48,000'
      },
      features: [
        'Course Management System',
        'Video Player with Controls',
        'Interactive Quizzes & Tests',
        'Progress Tracking',
        'Certificate Generation',
        'Offline Download Support',
        'Discussion Forums',
        'Live Classes Integration',
        'Gamification & Badges',
        'Parent/Teacher Dashboard',
        'Payment & Subscription',
        '8 Months Support'
      ],
      technologies: ['Flutter', 'Vimeo API', 'Firebase', 'Agora SDK', 'Node.js', 'MySQL', 'Redis'],
      deliveryTime: '10-14 weeks',
      clientCount: 42,
      completedProjects: 38,
      rating: 5.0,
      revenue: '$1,140,000',
      status: 'active',
      downloads: '750K+',
      portfolio: [
        'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&q=80',
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80',
        'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&q=80'
      ]
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedApp, setSelectedApp] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterPlatform, setFilterPlatform] = useState('all');
  const [formData, setFormData] = useState({});

  const appTypes = ['E-commerce', 'Food & Delivery', 'Fitness & Health', 'Social Media', 'On-Demand', 'Education'];
  const platforms = ['iOS & Android', 'iOS Only', 'Android Only'];

  // Image upload handler
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, thumbnail: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Modal Handlers
  const openModal = (type, app = null) => {
    setModalType(type);
    setSelectedApp(app);
    setFormData(app || {});
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedApp(null);
    setModalType('');
    setFormData({});
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formElements = form.elements;

    const newApp = {
      id: modalType === 'add' ? apps.length + 1 : selectedApp.id,
      name: formElements.name.value,
      type: formElements.type.value,
      platform: formElements.platform.value,
      status: formElements.status?.value || 'active',
      description: formElements.description.value,
      thumbnail: formElements.thumbnail.value,
      demoUrl: formElements.demoUrl.value,
      deliveryTime: formElements.deliveryTime.value,
      downloads: formElements.downloads.value,
      rating: parseFloat(formElements.rating.value) || 0,
      clientCount: parseInt(formElements.clientCount.value) || 0,
      completedProjects: parseInt(formElements.completedProjects.value) || 0,
      revenue: formElements.revenue.value,
      pricing: {
        basic: formElements.basicPrice.value,
        standard: formElements.standardPrice.value,
        premium: formElements.premiumPrice.value
      },
      features: formElements.features.value 
        ? formElements.features.value.split(',').map(f => f.trim()).filter(f => f)
        : [],
      technologies: formElements.technologies.value 
        ? formElements.technologies.value.split(',').map(t => t.trim()).filter(t => t)
        : [],
      portfolio: formElements.portfolio.value 
        ? formElements.portfolio.value.split(',').map(p => p.trim()).filter(p => p)
        : []
    };

    if (modalType === 'add') {
      setApps([...apps, newApp]);
    } else if (modalType === 'edit') {
      setApps(apps.map(a => a.id === selectedApp.id ? newApp : a));
    }

    closeModal();
  };

  // Filter Apps
  const filteredApps = apps.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' || app.type === filterType;
    const matchesPlatform = filterPlatform === 'all' || app.platform === filterPlatform;
    return matchesSearch && matchesType && matchesPlatform;
  });

  const getStatusClass = (status) => {
    switch (status) {
      case 'active': return styles.statusActive;
      case 'inactive': return styles.statusInactive;
      case 'coming-soon': return styles.statusComingSoon;
      default: return '';
    }
  };

  const calculateStats = () => {
    return {
      totalApps: apps.length,
      totalCompleted: apps.reduce((sum, app) => sum + app.completedProjects, 0),
      totalClients: apps.reduce((sum, app) => sum + app.clientCount, 0),
      totalRevenue: apps.reduce((sum, app) => {
        const revenue = parseInt(app.revenue.replace(/[$,]/g, ''));
        return sum + revenue;
      }, 0),
      avgRating: (apps.reduce((sum, app) => sum + app.rating, 0) / apps.length).toFixed(1),
      activeApps: apps.filter(app => app.status === 'active').length,
      totalDownloads: apps.reduce((sum, app) => {
        const downloads = parseInt(app.downloads.replace(/[K+M+,]/g, '')) * 
                         (app.downloads.includes('M') ? 1000 : 1);
        return sum + downloads;
      }, 0)
    };
  };

  const stats = calculateStats();

  return (
    <div className={styles.mobileApps}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.titleSection}>
            <div className={styles.titleIcon}>
              <FiSmartphone />
            </div>
            <div>
              <h1>Mobile App Development</h1>
              <p>iOS & Android app development packages</p>
            </div>
          </div>
        </div>
        <div className={styles.headerRight}>
          <button className={styles.exportBtn}>
            <FiDownload /> Export
          </button>
          <button className={styles.createBtn} onClick={() => openModal('add')}>
            <FiPlus /> Add Mobile App
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiSmartphone />
          </div>
          <div className={styles.statContent}>
            <p>App Packages</p>
            <h3>{stats.totalApps}</h3>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiCheckCircle />
          </div>
          <div className={styles.statContent}>
            <p>Completed Projects</p>
            <h3>{stats.totalCompleted}</h3>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiUsers />
          </div>
          <div className={styles.statContent}>
            <p>Total Clients</p>
            <h3>{stats.totalClients}</h3>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiDollarSign />
          </div>
          <div className={styles.statContent}>
            <p>Total Revenue</p>
            <h3>${(stats.totalRevenue / 1000).toFixed(0)}K</h3>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiStar />
          </div>
          <div className={styles.statContent}>
            <p>Average Rating</p>
            <h3>{stats.avgRating} ★</h3>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiTrendingUp />
          </div>
          <div className={styles.statContent}>
            <p>Total Downloads</p>
            <h3>{(stats.totalDownloads / 1000).toFixed(0)}K+</h3>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        <div className={styles.searchBar}>
          <FiSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search mobile apps..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className={styles.filters}>
          <select 
            className={styles.filterSelect}
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">All Types</option>
            {appTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          <select 
            className={styles.filterSelect}
            value={filterPlatform}
            onChange={(e) => setFilterPlatform(e.target.value)}
          >
            <option value="all">All Platforms</option>
            {platforms.map(platform => (
              <option key={platform} value={platform}>{platform}</option>
            ))}
          </select>
        </div>
        <div className={styles.viewToggle}>
          <button 
            className={`${styles.viewBtn} ${viewMode === 'grid' ? styles.active : ''}`}
            onClick={() => setViewMode('grid')}
          >
            <FiGrid />
          </button>
          <button 
            className={`${styles.viewBtn} ${viewMode === 'list' ? styles.active : ''}`}
            onClick={() => setViewMode('list')}
          >
            <FiFilter />
          </button>
        </div>
      </div>

      {/* Apps Grid/List */}
      {viewMode === 'grid' ? (
        <div className={styles.appsGrid}>
          {filteredApps.map(app => (
            <div key={app.id} className={styles.appCard}>
              <div className={styles.appImage}>
                <img src={app.thumbnail} alt={app.name} />
                <div className={styles.imageOverlay}>
                  <button className={styles.overlayBtn} onClick={() => openModal('view', app)}>
                    <FiEye /> View Details
                  </button>
                </div>
                <div className={styles.typeBadge}>
                  <FiSmartphone /> {app.type}
                </div>
                <div className={styles.ratingBadge}>
                  <FiStar /> {app.rating}
                </div>
              </div>
              <div className={styles.appContent}>
                <div className={styles.appHeader}>
                  <div className={styles.appIcon}>
                    <FiSmartphone />
                  </div>
                  <div className={styles.appTitleSection}>
                    <h3>{app.name}</h3>
                    <span className={`${styles.statusBadge} ${getStatusClass(app.status)}`}>
                      {app.status}
                    </span>
                  </div>
                </div>
                <p className={styles.description}>{app.description}</p>
                <div className={styles.platformBadge}>
                  <FiSmartphone /> {app.platform}
                </div>
                <div className={styles.pricing}>
                  <h4>Pricing Plans</h4>
                  <div className={styles.pricingGrid}>
                    <div className={styles.priceItem}>
                      <span>Basic</span>
                      <strong>{app.pricing.basic}</strong>
                    </div>
                    <div className={styles.priceItem}>
                      <span>Standard</span>
                      <strong>{app.pricing.standard}</strong>
                    </div>
                    <div className={styles.priceItem}>
                      <span>Premium</span>
                      <strong>{app.pricing.premium}</strong>
                    </div>
                  </div>
                </div>
                <div className={styles.stats}>
                  <div className={styles.statItem}>
                    <FiDownload /> {app.downloads}
                  </div>
                  <div className={styles.statItem}>
                    <FiCheckCircle /> {app.completedProjects}
                  </div>
                  <div className={styles.statItem}>
                    <FiUsers /> {app.clientCount}
                  </div>
                </div>
                <div className={styles.technologies}>
                  {app.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className={styles.techBadge}>{tech}</span>
                  ))}
                  {app.technologies.length > 3 && (
                    <span className={styles.techMore}>+{app.technologies.length - 3}</span>
                  )}
                </div>
              </div>
              <div className={styles.cardActions}>
                <button onClick={() => openModal('view', app)}>
                  <FiEye />
                </button>
                <button onClick={() => openModal('edit', app)}>
                  <FiEdit />
                </button>
                <button className={styles.deleteBtn} onClick={() => openModal('delete', app)}>
                  <FiTrash2 />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.appsList}>
          {filteredApps.map(app => (
            <div key={app.id} className={styles.appListItem}>
              <div className={styles.listImage}>
                <img src={app.thumbnail} alt={app.name} />
                <div className={styles.typeBadge}>
                  <FiSmartphone /> {app.type}
                </div>
                <div className={styles.ratingBadge}>
                  <FiStar /> {app.rating}
                </div>
              </div>
              <div className={styles.listContent}>
                <div className={styles.listHeader}>
                  <div className={styles.listTitle}>
                    <div className={styles.appIcon}>
                      <FiSmartphone />
                    </div>
                    <div>
                      <h3>{app.name}</h3>
                      <div className={styles.listBadges}>
                        <span className={`${styles.statusBadge} ${getStatusClass(app.status)}`}>
                          {app.status}
                        </span>
                        <span className={styles.platformBadge}>
                          <FiSmartphone /> {app.platform}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.listPricing}>
                    <span className={styles.priceLabel}>Starting from</span>
                    <h4>{app.pricing.basic}</h4>
                  </div>
                </div>
                <p className={styles.description}>{app.description}</p>
                <div className={styles.listMeta}>
                  <div className={styles.metaItem}>
                    <FiDownload /> {app.downloads} Downloads
                  </div>
                  <div className={styles.metaItem}>
                    <FiCheckCircle /> {app.completedProjects} Projects
                  </div>
                  <div className={styles.metaItem}>
                    <FiUsers /> {app.clientCount} Clients
                  </div>
                  <div className={styles.metaItem}>
                    <FiClock /> {app.deliveryTime}
                  </div>
                  <div className={styles.metaItem}>
                    <FiDollarSign /> {app.revenue} Revenue
                  </div>
                </div>
                <div className={styles.technologies}>
                  {app.technologies.map((tech, idx) => (
                    <span key={idx} className={styles.techBadge}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className={styles.listActions}>
                <button onClick={() => openModal('view', app)}>
                  <FiEye />
                </button>
                <button onClick={() => openModal('edit', app)}>
                  <FiEdit />
                </button>
                <button className={styles.deleteBtn} onClick={() => openModal('delete', app)}>
                  <FiTrash2 />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredApps.length === 0 && (
        <div className={styles.emptyState}>
          <FiSmartphone />
          <h3>No mobile apps found</h3>
          <p>Try adjusting your filters or add a new mobile app package</p>
        </div>
      )}

      {/* View Modal */}
      {showModal && modalType === 'view' && selectedApp && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>App Details</h2>
              <button className={styles.closeBtn} onClick={closeModal}>
                <FiX />
              </button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.viewContent}>
                {/* Image */}
                <div className={styles.viewImage}>
                  <img src={selectedApp.thumbnail} alt={selectedApp.name} />
                  <div className={styles.viewImageOverlay}>
                    <div className={styles.typeBadge}>
                      <FiSmartphone /> {selectedApp.type}
                    </div>
                    <div className={styles.ratingBadge}>
                      <FiStar /> {selectedApp.rating}
                    </div>
                  </div>
                </div>

                {/* Header */}
                <div className={styles.viewHeader}>
                  <div className={styles.viewTitleSection}>
                    <div className={styles.appIconLarge}>
                      <FiSmartphone />
                    </div>
                    <div>
                      <h3>{selectedApp.name}</h3>
                      <div className={styles.listBadges}>
                        <span className={`${styles.statusBadge} ${getStatusClass(selectedApp.status)}`}>
                          {selectedApp.status}
                        </span>
                        <span className={styles.platformBadge}>
                          <FiSmartphone /> {selectedApp.platform}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className={styles.viewDescription}>{selectedApp.description}</p>
                </div>

                {/* Pricing */}
                <div className={styles.viewPricing}>
                  <h4>Pricing Plans</h4>
                  <div className={styles.pricingCards}>
                    <div className={styles.pricingCard}>
                      <span className={styles.planName}>Basic</span>
                      <h3 className={styles.planPrice}>{selectedApp.pricing.basic}</h3>
                      <p className={styles.planDesc}>Essential features for small projects</p>
                    </div>
                    <div className={`${styles.pricingCard} ${styles.featured}`}>
                      <span className={styles.planName}>Standard</span>
                      <h3 className={styles.planPrice}>{selectedApp.pricing.standard}</h3>
                      <p className={styles.planDesc}>Most popular for growing businesses</p>
                    </div>
                    <div className={styles.pricingCard}>
                      <span className={styles.planName}>Premium</span>
                      <h3 className={styles.planPrice}>{selectedApp.pricing.premium}</h3>
                      <p className={styles.planDesc}>Complete solution for enterprises</p>
                    </div>
                  </div>
                </div>

                {/* Statistics */}
                <div className={styles.viewStats}>
                  <h4>Performance Metrics</h4>
                  <div className={styles.statsRow}>
                    <div className={styles.statBox}>
                      <FiDownload />
                      <div>
                        <p>Downloads</p>
                        <h4>{selectedApp.downloads}</h4>
                      </div>
                    </div>
                    <div className={styles.statBox}>
                      <FiCheckCircle />
                      <div>
                        <p>Completed</p>
                        <h4>{selectedApp.completedProjects}</h4>
                      </div>
                    </div>
                    <div className={styles.statBox}>
                      <FiUsers />
                      <div>
                        <p>Clients</p>
                        <h4>{selectedApp.clientCount}</h4>
                      </div>
                    </div>
                    <div className={styles.statBox}>
                      <FiClock />
                      <div>
                        <p>Delivery</p>
                        <h4>{selectedApp.deliveryTime}</h4>
                      </div>
                    </div>
                  </div>
                  <div className={styles.revenueBox}>
                    <FiDollarSign />
                    <div>
                      <p>Total Revenue</p>
                      <h3>{selectedApp.revenue}</h3>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className={styles.viewFeatures}>
                  <h4>Features Included</h4>
                  <ul className={styles.featuresList}>
                    {selectedApp.features.map((feature, idx) => (
                      <li key={idx}>
                        <FiCheckCircle /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className={styles.viewTechnologies}>
                  <h4>Technologies Used</h4>
                  <div className={styles.techGrid}>
                    {selectedApp.technologies.map((tech, idx) => (
                      <div key={idx} className={styles.techCard}>
                        <FiCode />
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Portfolio */}
                {selectedApp.portfolio && selectedApp.portfolio.length > 0 && (
                  <div className={styles.viewPortfolio}>
                    <h4>Portfolio Examples</h4>
                    <div className={styles.portfolioGrid}>
                      {selectedApp.portfolio.map((img, idx) => (
                        <div key={idx} className={styles.portfolioItem}>
                          <img src={img} alt={`Portfolio ${idx + 1}`} />
                          <div className={styles.portfolioOverlay}>
                            <FiEye />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Demo Link */}
                {selectedApp.demoUrl && (
                  <div className={styles.viewActions}>
                    <a 
                      href={selectedApp.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.demoBtn}
                    >
                      <FiExternalLink /> View Demo
                    </a>
                  </div>
                )}
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.cancelBtn} onClick={closeModal}>
                Close
              </button>
              <button className={styles.submitBtn} onClick={() => openModal('edit', selectedApp)}>
                <FiEdit /> Edit App
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add/Edit Modal */}
      {showModal && (modalType === 'add' || modalType === 'edit') && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>{modalType === 'add' ? 'Add New Mobile App' : 'Edit Mobile App'}</h2>
              <button className={styles.closeBtn} onClick={closeModal}>
                <FiX />
              </button>
            </div>
            <div className={styles.modalBody}>
              <form onSubmit={handleSubmit}>
                {/* Image Section */}
                <div className={styles.imageUploadSection}>
                  <label>Thumbnail Image</label>
                  <div 
                    className={styles.imageUpload}
                    onClick={() => document.getElementById('thumbnailFileInput').click()}
                  >
                    {formData?.thumbnail ? (
                      <div className={styles.imagePreviewContainer}>
                        <img src={formData.thumbnail} alt="Preview" />
                        <button 
                          type="button"
                          className={styles.removeImage}
                          onClick={(e) => {
                            e.stopPropagation();
                            setFormData({ ...formData, thumbnail: '' });
                          }}
                        >
                          <FiX />
                        </button>
                      </div>
                    ) : (
                      <div className={styles.uploadPlaceholder}>
                        <FiLayout />
                        <p>Click to upload thumbnail image</p>
                      </div>
                    )}
                  </div>
                  <input 
                    id="thumbnailFileInput"
                    type="file" 
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleImageUpload}
                  />
                  <div className={styles.imageInputs}>
                    <input 
                      type="text" 
                      name="thumbnail"
                      placeholder="Or paste image URL" 
                      value={formData?.thumbnail || ''}
                      onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
                    />
                    <button 
                      type="button" 
                      className={styles.uploadBtn}
                      onClick={() => document.getElementById('thumbnailFileInput').click()}
                    >
                      <FiDownload /> Upload
                    </button>
                  </div>
                </div>

                {/* Form Fields */}
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label>App Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Enter app name" 
                      defaultValue={selectedApp?.name || ''}
                      required 
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Type *</label>
                    <select name="type" defaultValue={selectedApp?.type || 'E-commerce'} required>
                      {appTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label>Platform *</label>
                    <select name="platform" defaultValue={selectedApp?.platform || 'iOS & Android'} required>
                      {platforms.map(platform => (
                        <option key={platform} value={platform}>{platform}</option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label>Status *</label>
                    <select name="status" defaultValue={selectedApp?.status || 'active'} required>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                      <option value="coming-soon">Coming Soon</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label>Delivery Time</label>
                    <input 
                      type="text" 
                      name="deliveryTime"
                      placeholder="e.g., 12-16 weeks" 
                      defaultValue={selectedApp?.deliveryTime || ''}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Demo URL</label>
                    <input 
                      type="url" 
                      name="demoUrl"
                      placeholder="https://demo.example.com" 
                      defaultValue={selectedApp?.demoUrl || ''}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Downloads</label>
                    <input 
                      type="text" 
                      name="downloads"
                      placeholder="e.g., 150K+" 
                      defaultValue={selectedApp?.downloads || ''}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Rating</label>
                    <input 
                      type="number" 
                      name="rating"
                      step="0.1"
                      min="0"
                      max="5"
                      placeholder="4.8" 
                      defaultValue={selectedApp?.rating || ''}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Basic Price</label>
                    <input 
                      type="text" 
                      name="basicPrice"
                      placeholder="$15,000" 
                      defaultValue={selectedApp?.pricing?.basic || ''}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Standard Price</label>
                    <input 
                      type="text" 
                      name="standardPrice"
                      placeholder="$30,000" 
                      defaultValue={selectedApp?.pricing?.standard || ''}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Premium Price</label>
                    <input 
                      type="text" 
                      name="premiumPrice"
                      placeholder="$50,000" 
                      defaultValue={selectedApp?.pricing?.premium || ''}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Client Count</label>
                    <input 
                      type="number" 
                      name="clientCount"
                      placeholder="32" 
                      defaultValue={selectedApp?.clientCount || ''}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Completed Projects</label>
                    <input 
                      type="number" 
                      name="completedProjects"
                      placeholder="28" 
                      defaultValue={selectedApp?.completedProjects || ''}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Total Revenue</label>
                    <input 
                      type="text" 
                      name="revenue"
                      placeholder="$896,000" 
                      defaultValue={selectedApp?.revenue || ''}
                    />
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label>Description *</label>
                    <textarea 
                      name="description"
                      placeholder="Enter app description" 
                      defaultValue={selectedApp?.description || ''}
                      rows={3}
                      required
                    />
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label>Features (comma-separated)</label>
                    <textarea 
                      name="features"
                      placeholder="User Authentication, Push Notifications, Real-time Chat..." 
                      defaultValue={selectedApp?.features?.join(', ') || ''}
                      rows={3}
                    />
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label>Technologies (comma-separated)</label>
                    <textarea 
                      name="technologies"
                      placeholder="React Native, Firebase, Node.js, MongoDB..." 
                      defaultValue={selectedApp?.technologies?.join(', ') || ''}
                      rows={2}
                    />
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label>Portfolio Images (comma-separated URLs)</label>
                    <textarea 
                      name="portfolio"
                      placeholder="https://example.com/img1.jpg, https://example.com/img2.jpg..." 
                      defaultValue={selectedApp?.portfolio?.join(', ') || ''}
                      rows={2}
                    />
                  </div>
                </div>

                <div className={styles.modalFooter}>
                  <button type="button" className={styles.cancelBtn} onClick={closeModal}>
                    <FiX /> Cancel
                  </button>
                  <button type="submit" className={styles.submitBtn}>
                    <FiCheckCircle /> {modalType === 'add' ? 'Add App' : 'Save Changes'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showModal && modalType === 'delete' && selectedApp && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>Delete Mobile App</h2>
              <button className={styles.closeBtn} onClick={closeModal}>
                <FiX />
              </button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.deleteConfirm}>
                <div className={styles.deleteIcon}>
                  <FiTrash2 />
                </div>
                <h3>Are you sure?</h3>
                <p>
                  Do you really want to delete <strong>{selectedApp.name}</strong>? 
                  This action cannot be undone.
                </p>
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.cancelBtn} onClick={closeModal}>
                <FiX /> Cancel
              </button>
              <button 
                className={styles.deleteConfirmBtn}
                onClick={() => {
                  setApps(apps.filter(a => a.id !== selectedApp.id));
                  closeModal();
                }}
              >
                <FiTrash2 /> Delete App
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileApps;
