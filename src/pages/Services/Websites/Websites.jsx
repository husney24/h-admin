import React, { useState } from 'react';
import {
  FiGlobe,
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
  FiSmartphone,
  FiZap,
  FiShield,
  FiAward,
  FiBarChart2,
  FiDownload,
  FiFilter,
  FiStar
} from 'react-icons/fi';
import styles from './Websites.module.scss';

const Websites = () => {
  const [websites, setWebsites] = useState([
    {
      id: 1,
      name: 'Corporate Website Package',
      type: 'Corporate',
      description: 'Professional corporate website with modern design, CMS integration, and SEO optimization for businesses.',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      liveUrl: 'https://demo-corporate.example.com',
      pricing: {
        basic: '$3,500',
        standard: '$7,000',
        premium: '$12,000'
      },
      features: [
        'Custom Responsive Design',
        'CMS Integration (WordPress/Custom)',
        'Up to 10 Pages',
        'Contact Forms',
        'SEO Optimization',
        'Mobile Responsive',
        'SSL Certificate',
        'Analytics Integration',
        '3 Months Support'
      ],
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      deliveryTime: '4-6 weeks',
      clientCount: 45,
      completedProjects: 38,
      rating: 4.9,
      revenue: '$315,000',
      status: 'active',
      portfolio: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80',
        'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=400&q=80',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80'
      ]
    },
    {
      id: 2,
      name: 'E-commerce Website',
      type: 'E-commerce',
      description: 'Full-featured online store with payment gateway integration, inventory management, and order tracking.',
      thumbnail: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80',
      liveUrl: 'https://demo-ecommerce.example.com',
      pricing: {
        basic: '$8,000',
        standard: '$15,000',
        premium: '$25,000'
      },
      features: [
        'Product Management System',
        'Shopping Cart & Checkout',
        'Payment Gateway Integration',
        'Order Management',
        'Inventory Tracking',
        'Customer Accounts',
        'Admin Dashboard',
        'Email Notifications',
        'Shipping Integration',
        'Mobile App Integration',
        '6 Months Support'
      ],
      technologies: ['React', 'Next.js', 'Stripe', 'PostgreSQL', 'Redis', 'AWS'],
      deliveryTime: '8-12 weeks',
      clientCount: 28,
      completedProjects: 22,
      rating: 4.8,
      revenue: '$420,000',
      status: 'active',
      portfolio: [
        'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=400&q=80',
        'https://images.unsplash.com/photo-1661956602868-6ae368943878?w=400&q=80',
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=80'
      ]
    },
    {
      id: 3,
      name: 'Portfolio Website',
      type: 'Portfolio',
      description: 'Stunning portfolio website to showcase your work with interactive galleries and smooth animations.',
      thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
      liveUrl: 'https://demo-portfolio.example.com',
      pricing: {
        basic: '$1,500',
        standard: '$3,000',
        premium: '$5,500'
      },
      features: [
        'Modern Interactive Design',
        'Project Showcase Gallery',
        'Blog Integration',
        'Contact Form',
        'Social Media Integration',
        'Testimonials Section',
        'Resume/CV Download',
        'Dark/Light Mode',
        'Smooth Animations'
      ],
      technologies: ['React', 'Three.js', 'Framer Motion', 'Sanity CMS', 'Vercel'],
      deliveryTime: '2-4 weeks',
      clientCount: 62,
      completedProjects: 58,
      rating: 5.0,
      revenue: '$186,000',
      status: 'active',
      portfolio: [
        'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&q=80',
        'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=400&q=80',
        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&q=80'
      ]
    },
    {
      id: 4,
      name: 'Landing Page',
      type: 'Landing Page',
      description: 'High-converting landing page designed to capture leads and drive conversions for your marketing campaigns.',
      thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
      liveUrl: 'https://demo-landing.example.com',
      pricing: {
        basic: '$800',
        standard: '$1,500',
        premium: '$3,000'
      },
      features: [
        'Single Page Design',
        'Hero Section with CTA',
        'Lead Capture Forms',
        'Social Proof Section',
        'Features Showcase',
        'Pricing Tables',
        'FAQ Section',
        'Email Marketing Integration',
        'A/B Testing Ready',
        'Fast Loading Speed'
      ],
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Mailchimp', 'Google Analytics'],
      deliveryTime: '1-2 weeks',
      clientCount: 85,
      completedProjects: 80,
      rating: 4.7,
      revenue: '$127,500',
      status: 'active',
      portfolio: [
        'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&q=80',
        'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&q=80',
        'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&q=80'
      ]
    },
    {
      id: 5,
      name: 'Blog/Magazine Website',
      type: 'Blog',
      description: 'Content-rich blog or magazine website with CMS, author management, and engagement features.',
      thumbnail: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
      liveUrl: 'https://demo-blog.example.com',
      pricing: {
        basic: '$2,500',
        standard: '$5,000',
        premium: '$9,000'
      },
      features: [
        'Headless CMS Integration',
        'Category & Tag System',
        'Author Management',
        'Comment System',
        'Newsletter Integration',
        'Social Sharing',
        'Related Posts',
        'Search Functionality',
        'RSS Feed',
        'Ad Management',
        'Reading Time Estimates'
      ],
      technologies: ['Next.js', 'Contentful', 'GraphQL', 'Vercel', 'SendGrid'],
      deliveryTime: '3-5 weeks',
      clientCount: 35,
      completedProjects: 30,
      rating: 4.8,
      revenue: '$175,000',
      status: 'active',
      portfolio: [
        'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&q=80',
        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&q=80',
        'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=400&q=80'
      ]
    },
    {
      id: 6,
      name: 'SaaS Application',
      type: 'SaaS',
      description: 'Full-stack SaaS application with user authentication, subscription management, and admin panel.',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      liveUrl: 'https://demo-saas.example.com',
      pricing: {
        basic: '$15,000',
        standard: '$30,000',
        premium: '$50,000'
      },
      features: [
        'User Authentication & Authorization',
        'Multi-tenant Architecture',
        'Subscription & Billing',
        'Admin Dashboard',
        'User Dashboard',
        'API Integration',
        'Real-time Features',
        'Email Notifications',
        'Analytics & Reporting',
        'Team Management',
        'Role-based Access Control',
        '12 Months Support'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'AWS', 'Docker'],
      deliveryTime: '12-16 weeks',
      clientCount: 12,
      completedProjects: 8,
      rating: 4.9,
      revenue: '$360,000',
      status: 'active',
      portfolio: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80',
        'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80'
      ]
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedWebsite, setSelectedWebsite] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [formData, setFormData] = useState({});

  const websiteTypes = ['Corporate', 'E-commerce', 'Portfolio', 'Landing Page', 'Blog', 'SaaS'];
  const statuses = ['active', 'inactive', 'coming-soon'];

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
  const openModal = (type, website = null) => {
    setModalType(type);
    setSelectedWebsite(website);
    setFormData(website || {});
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedWebsite(null);
    setModalType('');
    setFormData({});
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formElements = form.elements;

    const newWebsite = {
      id: modalType === 'add' ? websites.length + 1 : selectedWebsite.id,
      name: formElements.name.value,
      type: formElements.type.value,
      status: formElements.status.value,
      description: formElements.description.value,
      thumbnail: formElements.thumbnail.value,
      liveUrl: formElements.liveUrl.value,
      deliveryTime: formElements.deliveryTime.value,
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
      setWebsites([...websites, newWebsite]);
    } else if (modalType === 'edit') {
      setWebsites(websites.map(w => w.id === selectedWebsite.id ? newWebsite : w));
    }

    closeModal();
  };

  // Filter Websites
  const filteredWebsites = websites.filter(website => {
    const matchesSearch = website.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          website.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' || website.type === filterType;
    const matchesStatus = filterStatus === 'all' || website.status === filterStatus;
    return matchesSearch && matchesType && matchesStatus;
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
      totalWebsites: websites.length,
      activeWebsites: websites.filter(w => w.status === 'active').length,
      totalClients: websites.reduce((sum, w) => sum + w.clientCount, 0),
      totalRevenue: websites.reduce((sum, w) => {
        const revenue = parseFloat(w.revenue.replace(/[$,]/g, ''));
        return sum + revenue;
      }, 0),
      avgRating: (websites.reduce((sum, w) => sum + w.rating, 0) / websites.length).toFixed(1),
      totalCompleted: websites.reduce((sum, w) => sum + w.completedProjects, 0)
    };
  };

  const stats = calculateStats();

  return (
    <div className={styles.websites}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.titleSection}>
            <FiGlobe className={styles.titleIcon} />
            <div>
              <h1>Website Development</h1>
              <p>Professional website solutions tailored to your needs</p>
            </div>
          </div>
        </div>
        <div className={styles.headerRight}>
          <button className={styles.exportBtn}>
            <FiDownload /> Export
          </button>
          <button className={styles.createBtn} onClick={() => openModal('add')}>
            <FiPlus /> Add Website Package
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiGlobe />
          </div>
          <div className={styles.statContent}>
            <p>Website Packages</p>
            <h3>{stats.totalWebsites}</h3>
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
            <h3>{stats.avgRating}</h3>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiTrendingUp />
          </div>
          <div className={styles.statContent}>
            <p>Active Packages</p>
            <h3>{stats.activeWebsites}</h3>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        <div className={styles.searchBar}>
          <FiSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search website packages..."
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
            {websiteTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          <select
            className={styles.filterSelect}
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All Status</option>
            {statuses.map(status => (
              <option key={status} value={status}>
                {status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.viewToggle}>
          <button
            className={`${styles.viewBtn} ${viewMode === 'grid' ? styles.active : ''}`}
            onClick={() => setViewMode('grid')}
          >
            <FiLayout />
          </button>
          <button
            className={`${styles.viewBtn} ${viewMode === 'list' ? styles.active : ''}`}
            onClick={() => setViewMode('list')}
          >
            <FiCode />
          </button>
        </div>
      </div>

      {/* Websites Grid/List */}
      {viewMode === 'grid' ? (
        <div className={styles.websitesGrid}>
          {filteredWebsites.map(website => (
            <div key={website.id} className={styles.websiteCard}>
              <div className={styles.websiteImage}>
                <img src={website.thumbnail} alt={website.name} />
                <div className={styles.imageOverlay}>
                  <button className={styles.overlayBtn} onClick={() => openModal('view', website)}>
                    <FiEye /> View Details
                  </button>
                </div>
                <div className={styles.typeBadge}>
                  <FiGlobe /> {website.type}
                </div>
                <div className={styles.ratingBadge}>
                  <FiStar /> {website.rating.toFixed(1)}
                </div>
              </div>

              <div className={styles.websiteContent}>
                <div className={styles.websiteHeader}>
                  <div className={styles.websiteIcon}><FiGlobe /></div>
                  <div className={styles.websiteTitleSection}>
                    <h3>{website.name}</h3>
                    <span className={`${styles.statusBadge} ${getStatusClass(website.status)}`}>
                      {website.status.replace('-', ' ')}
                    </span>
                  </div>
                </div>
                <p className={styles.description}>{website.description}</p>

                <div className={styles.pricing}>
                  <h4>Pricing Plans</h4>
                  <div className={styles.pricingGrid}>
                    <div className={styles.priceItem}>
                      <span>Basic</span>
                      <strong>{website.pricing.basic}</strong>
                    </div>
                    <div className={styles.priceItem}>
                      <span>Standard</span>
                      <strong>{website.pricing.standard}</strong>
                    </div>
                    <div className={styles.priceItem}>
                      <span>Premium</span>
                      <strong>{website.pricing.premium}</strong>
                    </div>
                  </div>
                </div>

                <div className={styles.stats}>
                  <div className={styles.statItem}>
                    <FiCheckCircle />
                    <span>{website.completedProjects} Projects</span>
                  </div>
                  <div className={styles.statItem}>
                    <FiUsers />
                    <span>{website.clientCount} Clients</span>
                  </div>
                  <div className={styles.statItem}>
                    <FiClock />
                    <span>{website.deliveryTime}</span>
                  </div>
                </div>

                <div className={styles.technologies}>
                  {website.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className={styles.techBadge}>{tech}</span>
                  ))}
                  {website.technologies.length > 3 && (
                    <span className={styles.techMore}>+{website.technologies.length - 3}</span>
                  )}
                </div>
              </div>

              <div className={styles.cardActions}>
                <button onClick={() => openModal('view', website)}>
                  <FiEye />
                </button>
                <button onClick={() => openModal('edit', website)}>
                  <FiEdit />
                </button>
                <button onClick={() => openModal('delete', website)} className={styles.deleteBtn}>
                  <FiTrash2 />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.websitesList}>
          {filteredWebsites.map(website => (
            <div key={website.id} className={styles.websiteListItem}>
              <div className={styles.listImage}>
                <img src={website.thumbnail} alt={website.name} />
                <div className={styles.ratingBadge}>
                  <FiStar /> {website.rating.toFixed(1)}
                </div>
              </div>

              <div className={styles.listContent}>
                <div className={styles.listHeader}>
                  <div className={styles.listTitle}>
                    <h3>{website.name}</h3>
                    <div className={styles.listBadges}>
                      <span className={styles.typeBadge}>
                        <FiGlobe /> {website.type}
                      </span>
                      <span className={`${styles.statusBadge} ${getStatusClass(website.status)}`}>
                        {website.status.replace('-', ' ')}
                      </span>
                    </div>
                  </div>
                  <div className={styles.listPricing}>
                    <span className={styles.priceLabel}>Starting from</span>
                    <h4>{website.pricing.basic}</h4>
                  </div>
                </div>

                <p className={styles.description}>{website.description}</p>

                <div className={styles.listMeta}>
                  <div className={styles.metaItem}>
                    <FiCheckCircle />
                    <span>{website.completedProjects} Completed</span>
                  </div>
                  <div className={styles.metaItem}>
                    <FiUsers />
                    <span>{website.clientCount} Clients</span>
                  </div>
                  <div className={styles.metaItem}>
                    <FiDollarSign />
                    <span>{website.revenue} Revenue</span>
                  </div>
                  <div className={styles.metaItem}>
                    <FiClock />
                    <span>{website.deliveryTime}</span>
                  </div>
                </div>

                <div className={styles.technologies}>
                  {website.technologies.map((tech, idx) => (
                    <span key={idx} className={styles.techBadge}>{tech}</span>
                  ))}
                </div>

                {website.liveUrl && (
                  <a href={website.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.liveLink}>
                    <FiExternalLink /> View Live Demo
                  </a>
                )}
              </div>

              <div className={styles.listActions}>
                <button onClick={() => openModal('view', website)}>
                  <FiEye />
                </button>
                <button onClick={() => openModal('edit', website)}>
                  <FiEdit />
                </button>
                <button onClick={() => openModal('delete', website)} className={styles.deleteBtn}>
                  <FiTrash2 />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {filteredWebsites.length === 0 && (
        <div className={styles.emptyState}>
          <FiGlobe />
          <h3>No website packages found</h3>
          <p>Try adjusting your search or filters</p>
        </div>
      )}

      {/* View Modal */}
      {showModal && modalType === 'view' && selectedWebsite && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>Website Package Details</h2>
              <button className={styles.closeBtn} onClick={closeModal}>
                <FiX />
              </button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.viewThumbnail}>
                <img src={selectedWebsite.thumbnail} alt={selectedWebsite.name} />
                <div className={styles.viewThumbnailOverlay}>
                  <div className={styles.typeBadge}>
                    <FiGlobe /> {selectedWebsite.type}
                  </div>
                  <div className={styles.ratingBadge}>
                    <FiStar /> {selectedWebsite.rating.toFixed(1)}
                  </div>
                </div>
              </div>

              <div className={styles.viewContent}>
                <div className={styles.viewHeader}>
                  <h3>{selectedWebsite.name}</h3>
                  <span className={`${styles.statusBadge} ${getStatusClass(selectedWebsite.status)}`}>
                    {selectedWebsite.status.replace('-', ' ')}
                  </span>
                </div>
                <p className={styles.viewDescription}>{selectedWebsite.description}</p>

                {/* Pricing Section */}
                <div className={styles.viewPricing}>
                  <h4>Pricing Plans</h4>
                  <div className={styles.pricingCards}>
                    <div className={styles.pricingCard}>
                      <span className={styles.planName}>Basic</span>
                      <h3 className={styles.planPrice}>{selectedWebsite.pricing.basic}</h3>
                      <p className={styles.planDesc}>Essential features to get started</p>
                    </div>
                    <div className={`${styles.pricingCard} ${styles.featured}`}>
                      <span className={styles.planName}>Standard</span>
                      <h3 className={styles.planPrice}>{selectedWebsite.pricing.standard}</h3>
                      <p className={styles.planDesc}>Most popular for growing businesses</p>
                    </div>
                    <div className={styles.pricingCard}>
                      <span className={styles.planName}>Premium</span>
                      <h3 className={styles.planPrice}>{selectedWebsite.pricing.premium}</h3>
                      <p className={styles.planDesc}>Advanced features for enterprises</p>
                    </div>
                  </div>
                </div>

                {/* Statistics */}
                <div className={styles.viewStats}>
                  <h4>Package Statistics</h4>
                  <div className={styles.statsRow}>
                    <div className={styles.statBox}>
                      <FiCheckCircle />
                      <div>
                        <p>Completed</p>
                        <h4>{selectedWebsite.completedProjects}</h4>
                      </div>
                    </div>
                    <div className={styles.statBox}>
                      <FiUsers />
                      <div>
                        <p>Clients</p>
                        <h4>{selectedWebsite.clientCount}</h4>
                      </div>
                    </div>
                    <div className={styles.statBox}>
                      <FiDollarSign />
                      <div>
                        <p>Revenue</p>
                        <h4>{selectedWebsite.revenue}</h4>
                      </div>
                    </div>
                    <div className={styles.statBox}>
                      <FiClock />
                      <div>
                        <p>Delivery</p>
                        <h4>{selectedWebsite.deliveryTime}</h4>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className={styles.viewFeatures}>
                  <h4>Features Included</h4>
                  <ul className={styles.featuresList}>
                    {selectedWebsite.features.map((feature, idx) => (
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
                    {selectedWebsite.technologies.map((tech, idx) => (
                      <div key={idx} className={styles.techCard}>
                        <FiCode />
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Portfolio */}
                {selectedWebsite.portfolio && selectedWebsite.portfolio.length > 0 && (
                  <div className={styles.viewPortfolio}>
                    <h4>Portfolio Examples</h4>
                    <div className={styles.portfolioGrid}>
                      {selectedWebsite.portfolio.map((img, idx) => (
                        <div key={idx} className={styles.portfolioItem}>
                          <img src={img} alt={`Portfolio ${idx + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Live Demo Button */}
                {selectedWebsite.liveUrl && (
                  <div className={styles.viewActions}>
                    <a 
                      href={selectedWebsite.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.demoBtn}
                    >
                      <FiExternalLink /> View Live Demo
                    </a>
                  </div>
                )}
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.cancelBtn} onClick={closeModal}>
                Close
              </button>
              <button className={styles.submitBtn} onClick={() => openModal('edit', selectedWebsite)}>
                <FiEdit /> Edit Package
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
              <h2>{modalType === 'add' ? 'Add New Website Package' : 'Edit Website Package'}</h2>
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
                    <label>Package Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Enter package name" 
                      defaultValue={selectedWebsite?.name || ''}
                      required 
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Type *</label>
                    <select name="type" defaultValue={selectedWebsite?.type || 'Corporate'} required>
                      {websiteTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label>Status *</label>
                    <select name="status" defaultValue={selectedWebsite?.status || 'active'} required>
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
                      placeholder="e.g., 4-6 weeks" 
                      defaultValue={selectedWebsite?.deliveryTime || ''}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Live Demo URL</label>
                    <input 
                      type="url" 
                      name="liveUrl"
                      placeholder="https://demo.example.com" 
                      defaultValue={selectedWebsite?.liveUrl || ''}
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
                      defaultValue={selectedWebsite?.rating || ''}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Basic Price</label>
                    <input 
                      type="text" 
                      name="basicPrice"
                      placeholder="$3,500" 
                      defaultValue={selectedWebsite?.pricing?.basic || ''}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Standard Price</label>
                    <input 
                      type="text" 
                      name="standardPrice"
                      placeholder="$7,000" 
                      defaultValue={selectedWebsite?.pricing?.standard || ''}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Premium Price</label>
                    <input 
                      type="text" 
                      name="premiumPrice"
                      placeholder="$12,000" 
                      defaultValue={selectedWebsite?.pricing?.premium || ''}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Client Count</label>
                    <input 
                      type="number" 
                      name="clientCount"
                      placeholder="45" 
                      defaultValue={selectedWebsite?.clientCount || ''}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Completed Projects</label>
                    <input 
                      type="number" 
                      name="completedProjects"
                      placeholder="38" 
                      defaultValue={selectedWebsite?.completedProjects || ''}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Total Revenue</label>
                    <input 
                      type="text" 
                      name="revenue"
                      placeholder="$315,000" 
                      defaultValue={selectedWebsite?.revenue || ''}
                    />
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label>Description *</label>
                    <textarea 
                      name="description"
                      placeholder="Enter package description" 
                      defaultValue={selectedWebsite?.description || ''}
                      rows={3}
                      required
                    />
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label>Features (comma-separated)</label>
                    <textarea 
                      name="features"
                      placeholder="Custom Design, CMS Integration, SEO Optimization..." 
                      defaultValue={selectedWebsite?.features?.join(', ') || ''}
                      rows={3}
                    />
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label>Technologies (comma-separated)</label>
                    <textarea 
                      name="technologies"
                      placeholder="React, Next.js, Tailwind CSS, Node.js..." 
                      defaultValue={selectedWebsite?.technologies?.join(', ') || ''}
                      rows={2}
                    />
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label>Portfolio Images (comma-separated URLs)</label>
                    <textarea 
                      name="portfolio"
                      placeholder="https://example.com/img1.jpg, https://example.com/img2.jpg..." 
                      defaultValue={selectedWebsite?.portfolio?.join(', ') || ''}
                      rows={2}
                    />
                  </div>
                </div>

                <div className={styles.modalFooter}>
                  <button type="button" className={styles.cancelBtn} onClick={closeModal}>
                    <FiX /> Cancel
                  </button>
                  <button type="submit" className={styles.submitBtn}>
                    <FiCheckCircle /> {modalType === 'add' ? 'Add Package' : 'Save Changes'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showModal && modalType === 'delete' && selectedWebsite && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>Delete Website Package</h2>
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
                  Do you really want to delete <strong>{selectedWebsite.name}</strong>? 
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
                  // Handle delete
                  setWebsites(websites.filter(w => w.id !== selectedWebsite.id));
                  closeModal();
                }}
              >
                <FiTrash2 /> Delete Package
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Websites;
