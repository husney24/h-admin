import React, { useState } from 'react';
import {
  FiLayers,
  FiPlus,
  FiSearch,
  FiFilter,
  FiDownload,
  FiEdit,
  FiTrash2,
  FiEye,
  FiMoreVertical,
  FiX,
  FiDollarSign,
  FiUsers,
  FiTrendingUp,
  FiCheckCircle,
  FiClock,
  FiAlertCircle,
  FiImage,
  FiUpload,
  FiGlobe,
  FiSmartphone,
  FiServer,
  FiCloud,
  FiLayout,
  FiShoppingCart,
  FiCode,
  FiStar,
  FiAward,
  FiTarget
} from 'react-icons/fi';
import styles from './AllServices.module.scss';

const AllServices = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      name: 'Web Development',
      category: 'Development',
      description: 'Custom web applications built with modern technologies and best practices for optimal performance.',
      icon: <FiGlobe />,
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
      pricing: {
        basic: '$2,500',
        standard: '$5,000',
        premium: '$10,000'
      },
      features: [
        'Responsive Design',
        'Modern Frameworks',
        'Performance Optimization',
        'SEO Friendly',
        'Cross-browser Compatible'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'JavaScript', 'TypeScript'],
      totalProjects: 45,
      activeProjects: 12,
      completedProjects: 33,
      clients: 28,
      revenue: '$180,000',
      rating: 4.8,
      status: 'active',
      deliveryTime: '4-8 weeks'
    },
    {
      id: 2,
      name: 'Mobile Development',
      category: 'Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experience.',
      icon: <FiSmartphone />,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
      pricing: {
        basic: '$5,000',
        standard: '$10,000',
        premium: '$20,000'
      },
      features: [
        'Native Performance',
        'Cross-platform',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      totalProjects: 32,
      activeProjects: 8,
      completedProjects: 24,
      clients: 20,
      revenue: '$240,000',
      rating: 4.9,
      status: 'active',
      deliveryTime: '6-12 weeks'
    },
    {
      id: 3,
      name: 'Backend Development',
      category: 'Development',
      description: 'Scalable server-side solutions and database architecture for robust application performance.',
      icon: <FiServer />,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      pricing: {
        basic: '$3,000',
        standard: '$6,000',
        premium: '$12,000'
      },
      features: [
        'RESTful APIs',
        'Database Design',
        'Authentication',
        'Real-time Features',
        'Microservices'
      ],
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'Docker'],
      totalProjects: 38,
      activeProjects: 10,
      completedProjects: 28,
      clients: 25,
      revenue: '$165,000',
      rating: 4.7,
      status: 'active',
      deliveryTime: '3-6 weeks'
    },
    {
      id: 4,
      name: 'Cloud Solutions',
      category: 'Infrastructure',
      description: 'Scalable cloud infrastructure and deployment solutions with auto-scaling and monitoring.',
      icon: <FiCloud />,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      pricing: {
        basic: '$4,000',
        standard: '$8,000',
        premium: '$15,000'
      },
      features: [
        'Auto Scaling',
        'Load Balancing',
        'CI/CD Pipelines',
        'Monitoring',
        'Security'
      ],
      technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
      totalProjects: 28,
      activeProjects: 6,
      completedProjects: 22,
      clients: 18,
      revenue: '$195,000',
      rating: 4.9,
      status: 'active',
      deliveryTime: '2-4 weeks'
    },
    {
      id: 5,
      name: 'UI/UX Design',
      category: 'Design',
      description: 'Beautiful and intuitive user interfaces and experiences with user-centered design principles.',
      icon: <FiLayout />,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
      pricing: {
        basic: '$1,500',
        standard: '$3,500',
        premium: '$7,000'
      },
      features: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'Design Systems',
        'Usability Testing'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle'],
      totalProjects: 52,
      activeProjects: 15,
      completedProjects: 37,
      clients: 35,
      revenue: '$145,000',
      rating: 5.0,
      status: 'active',
      deliveryTime: '2-4 weeks'
    },
    {
      id: 6,
      name: 'E-commerce Solutions',
      category: 'Development',
      description: 'Complete e-commerce platforms with payment integration, inventory management, and analytics.',
      icon: <FiShoppingCart />,
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80',
      pricing: {
        basic: '$6,000',
        standard: '$12,000',
        premium: '$25,000'
      },
      features: [
        'Payment Integration',
        'Inventory Management',
        'Order Tracking',
        'Admin Dashboard',
        'Analytics'
      ],
      technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'Magento'],
      totalProjects: 25,
      activeProjects: 5,
      completedProjects: 20,
      clients: 22,
      revenue: '$275,000',
      rating: 4.8,
      status: 'active',
      deliveryTime: '8-12 weeks'
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedService, setSelectedService] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    category: 'Development',
    description: '',
    image: '',
    basicPrice: '',
    standardPrice: '',
    premiumPrice: '',
    features: '',
    technologies: '',
    deliveryTime: '',
    status: 'active'
  });

  const categories = ['Development', 'Design', 'Infrastructure', 'Marketing', 'Consulting'];
  const statuses = ['active', 'inactive', 'coming-soon'];

  // Modal Handlers
  const openModal = (type, service = null) => {
    setModalType(type);
    setSelectedService(service);
    if (type === 'edit' && service) {
      setFormData({
        name: service.name,
        category: service.category,
        description: service.description,
        image: service.image,
        basicPrice: service.pricing.basic,
        standardPrice: service.pricing.standard,
        premiumPrice: service.pricing.premium,
        features: service.features.join(', '),
        technologies: service.technologies.join(', '),
        deliveryTime: service.deliveryTime,
        status: service.status
      });
      setImagePreview(service.image);
    } else if (type === 'create') {
      setFormData({
        name: '',
        category: 'Development',
        description: '',
        image: '',
        basicPrice: '',
        standardPrice: '',
        premiumPrice: '',
        features: '',
        technologies: '',
        deliveryTime: '',
        status: 'active'
      });
      setImagePreview(null);
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
    setModalType('');
    setImagePreview(null);
  };

  // Form Handlers
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      image: value
    });
    setImagePreview(value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData({
          ...formData,
          image: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreateService = (e) => {
    e.preventDefault();
    const newService = {
      id: services.length + 1,
      name: formData.name,
      category: formData.category,
      description: formData.description,
      icon: getCategoryIcon(formData.category),
      image: formData.image,
      pricing: {
        basic: formData.basicPrice,
        standard: formData.standardPrice,
        premium: formData.premiumPrice
      },
      features: formData.features.split(',').map(f => f.trim()),
      technologies: formData.technologies.split(',').map(t => t.trim()),
      totalProjects: 0,
      activeProjects: 0,
      completedProjects: 0,
      clients: 0,
      revenue: '$0',
      rating: 0,
      status: formData.status,
      deliveryTime: formData.deliveryTime
    };
    setServices([newService, ...services]);
    closeModal();
  };

  const handleUpdateService = (e) => {
    e.preventDefault();
    setServices(services.map(service =>
      service.id === selectedService.id
        ? {
            ...service,
            name: formData.name,
            category: formData.category,
            description: formData.description,
            image: formData.image,
            pricing: {
              basic: formData.basicPrice,
              standard: formData.standardPrice,
              premium: formData.premiumPrice
            },
            features: formData.features.split(',').map(f => f.trim()),
            technologies: formData.technologies.split(',').map(t => t.trim()),
            deliveryTime: formData.deliveryTime,
            status: formData.status
          }
        : service
    ));
    closeModal();
  };

  const handleDeleteService = () => {
    setServices(services.filter(service => service.id !== selectedService.id));
    closeModal();
  };

  // Filter Services
  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'all' || service.category === filterCategory;
    const matchesStatus = filterStatus === 'all' || service.status === filterStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Helper Functions
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Development': return <FiCode />;
      case 'Design': return <FiLayout />;
      case 'Infrastructure': return <FiCloud />;
      case 'Marketing': return <FiTrendingUp />;
      case 'Consulting': return <FiAward />;
      default: return <FiLayers />;
    }
  };

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
      totalServices: services.length,
      activeServices: services.filter(s => s.status === 'active').length,
      totalRevenue: services.reduce((sum, s) => {
        const revenue = parseFloat(s.revenue.replace(/[$,]/g, ''));
        return sum + revenue;
      }, 0),
      totalClients: services.reduce((sum, s) => sum + s.clients, 0)
    };
  };

  const stats = calculateStats();

  return (
    <div className={styles.allServices}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.titleSection}>
            <FiLayers className={styles.titleIcon} />
            <div>
              <h1>All Services</h1>
              <p>Manage and showcase your service offerings</p>
            </div>
          </div>
        </div>
        <div className={styles.headerRight}>
          <button className={styles.exportBtn}>
            <FiDownload /> Export
          </button>
          <button className={styles.createBtn} onClick={() => openModal('create')}>
            <FiPlus /> Add Service
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiLayers />
          </div>
          <div className={styles.statContent}>
            <p>Total Services</p>
            <h3>{stats.totalServices}</h3>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiCheckCircle />
          </div>
          <div className={styles.statContent}>
            <p>Active Services</p>
            <h3>{stats.activeServices}</h3>
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
            <FiUsers />
          </div>
          <div className={styles.statContent}>
            <p>Total Clients</p>
            <h3>{stats.totalClients}</h3>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        <div className={styles.searchBar}>
          <FiSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className={styles.filters}>
          <select
            className={styles.filterSelect}
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
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
            <FiLayers />
          </button>
        </div>
      </div>

      {/* Services Grid/List */}
      {viewMode === 'grid' ? (
        <div className={styles.servicesGrid}>
          {filteredServices.map(service => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.serviceImage}>
                <img src={service.image} alt={service.name} />
                <div className={styles.imageOverlay}>
                  <button className={styles.overlayBtn} onClick={() => openModal('view', service)}>
                    <FiEye /> View Details
                  </button>
                </div>
                <div className={styles.categoryBadge}>
                  {getCategoryIcon(service.category)}
                  {service.category}
                </div>
                <div className={styles.ratingBadge}>
                  <FiStar /> {service.rating.toFixed(1)}
                </div>
              </div>
              <div className={styles.serviceContent}>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIcon}>{service.icon}</div>
                  <div className={styles.serviceTitleSection}>
                    <h3>{service.name}</h3>
                    <span className={`${styles.statusBadge} ${getStatusClass(service.status)}`}>
                      {service.status.replace('-', ' ')}
                    </span>
                  </div>
                </div>
                <p className={styles.description}>{service.description}</p>
                
                <div className={styles.pricing}>
                  <h4>Pricing Plans</h4>
                  <div className={styles.pricingGrid}>
                    <div className={styles.priceItem}>
                      <span>Basic</span>
                      <strong>{service.pricing.basic}</strong>
                    </div>
                    <div className={styles.priceItem}>
                      <span>Standard</span>
                      <strong>{service.pricing.standard}</strong>
                    </div>
                    <div className={styles.priceItem}>
                      <span>Premium</span>
                      <strong>{service.pricing.premium}</strong>
                    </div>
                  </div>
                </div>

                <div className={styles.stats}>
                  <div className={styles.statItem}>
                    <FiTarget />
                    <span>{service.totalProjects} Projects</span>
                  </div>
                  <div className={styles.statItem}>
                    <FiUsers />
                    <span>{service.clients} Clients</span>
                  </div>
                  <div className={styles.statItem}>
                    <FiClock />
                    <span>{service.deliveryTime}</span>
                  </div>
                </div>

                <div className={styles.technologies}>
                  {service.technologies.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className={styles.techBadge}>{tech}</span>
                  ))}
                  {service.technologies.length > 3 && (
                    <span className={styles.techMore}>+{service.technologies.length - 3}</span>
                  )}
                </div>
              </div>
              <div className={styles.cardActions}>
                <button onClick={() => openModal('view', service)}>
                  <FiEye />
                </button>
                <button onClick={() => openModal('edit', service)}>
                  <FiEdit />
                </button>
                <button onClick={() => openModal('delete', service)} className={styles.deleteBtn}>
                  <FiTrash2 />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.servicesList}>
          {filteredServices.map(service => (
            <div key={service.id} className={styles.serviceListItem}>
              <div className={styles.listImage}>
                <img src={service.image} alt={service.name} />
                <div className={styles.ratingBadge}>
                  <FiStar /> {service.rating.toFixed(1)}
                </div>
              </div>
              <div className={styles.listContent}>
                <div className={styles.listHeader}>
                  <div className={styles.listTitle}>
                    <div className={styles.serviceIcon}>{service.icon}</div>
                    <div>
                      <h3>{service.name}</h3>
                      <div className={styles.listBadges}>
                        <span className={styles.categoryBadge}>
                          {getCategoryIcon(service.category)} {service.category}
                        </span>
                        <span className={`${styles.statusBadge} ${getStatusClass(service.status)}`}>
                          {service.status.replace('-', ' ')}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.listPricing}>
                    <span className={styles.priceLabel}>Starting from</span>
                    <h4>{service.pricing.basic}</h4>
                  </div>
                </div>
                <p className={styles.description}>{service.description}</p>
                <div className={styles.listMeta}>
                  <div className={styles.metaItem}>
                    <FiTarget />
                    <span>{service.totalProjects} Total Projects</span>
                  </div>
                  <div className={styles.metaItem}>
                    <FiCheckCircle />
                    <span>{service.completedProjects} Completed</span>
                  </div>
                  <div className={styles.metaItem}>
                    <FiUsers />
                    <span>{service.clients} Clients</span>
                  </div>
                  <div className={styles.metaItem}>
                    <FiDollarSign />
                    <span>{service.revenue} Revenue</span>
                  </div>
                  <div className={styles.metaItem}>
                    <FiClock />
                    <span>{service.deliveryTime}</span>
                  </div>
                </div>
                <div className={styles.technologies}>
                  {service.technologies.map((tech, idx) => (
                    <span key={idx} className={styles.techBadge}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className={styles.listActions}>
                <button onClick={() => openModal('view', service)}>
                  <FiEye />
                </button>
                <button onClick={() => openModal('edit', service)}>
                  <FiEdit />
                </button>
                <button onClick={() => openModal('delete', service)} className={styles.deleteBtn}>
                  <FiTrash2 />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {filteredServices.length === 0 && (
        <div className={styles.emptyState}>
          <FiLayers />
          <h3>No services found</h3>
          <p>Try adjusting your search or filters</p>
        </div>
      )}

      {/* Modals */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={`${styles.modal} ${modalType === 'view' ? styles.viewModal : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Create/Edit Modal */}
            {(modalType === 'create' || modalType === 'edit') && (
              <>
                <div className={styles.modalHeader}>
                  <h2>{modalType === 'create' ? 'Add New Service' : 'Edit Service'}</h2>
                  <button className={styles.closeBtn} onClick={closeModal}>
                    <FiX />
                  </button>
                </div>
                <form
                  className={styles.modalBody}
                  onSubmit={modalType === 'create' ? handleCreateService : handleUpdateService}
                >
                  {/* Image Upload Section */}
                  <div className={styles.imageUploadSection}>
                    <label>Service Image</label>
                    <div className={styles.imageUpload}>
                      {imagePreview ? (
                        <div className={styles.imagePreviewContainer}>
                          <img src={imagePreview} alt="Preview" className={styles.imagePreview} />
                          <button
                            type="button"
                            className={styles.removeImage}
                            onClick={() => {
                              setImagePreview(null);
                              setFormData({ ...formData, image: '' });
                            }}
                          >
                            <FiX />
                          </button>
                        </div>
                      ) : (
                        <div className={styles.uploadPlaceholder}>
                          <FiImage />
                          <p>Upload or enter image URL</p>
                        </div>
                      )}
                    </div>
                    <div className={styles.imageInputs}>
                      <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleImageChange}
                        placeholder="Enter image URL"
                      />
                      <label className={styles.uploadBtn}>
                        <FiUpload /> Upload
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          style={{ display: 'none' }}
                        />
                      </label>
                    </div>
                  </div>

                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label>Service Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter service name"
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Category *</label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                      >
                        {categories.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                      <label>Description *</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Enter service description"
                        rows="3"
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Basic Price *</label>
                      <input
                        type="text"
                        name="basicPrice"
                        value={formData.basicPrice}
                        onChange={handleInputChange}
                        placeholder="e.g., $2,500"
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Standard Price *</label>
                      <input
                        type="text"
                        name="standardPrice"
                        value={formData.standardPrice}
                        onChange={handleInputChange}
                        placeholder="e.g., $5,000"
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Premium Price *</label>
                      <input
                        type="text"
                        name="premiumPrice"
                        value={formData.premiumPrice}
                        onChange={handleInputChange}
                        placeholder="e.g., $10,000"
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Delivery Time *</label>
                      <input
                        type="text"
                        name="deliveryTime"
                        value={formData.deliveryTime}
                        onChange={handleInputChange}
                        placeholder="e.g., 4-8 weeks"
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Status *</label>
                      <select
                        name="status"
                        value={formData.status}
                        onChange={handleInputChange}
                        required
                      >
                        {statuses.map(status => (
                          <option key={status} value={status}>
                            {status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                      <label>Features (comma separated) *</label>
                      <textarea
                        name="features"
                        value={formData.features}
                        onChange={handleInputChange}
                        placeholder="e.g., Responsive Design, Modern Frameworks, Performance Optimization"
                        rows="2"
                        required
                      />
                    </div>
                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                      <label>Technologies (comma separated) *</label>
                      <input
                        type="text"
                        name="technologies"
                        value={formData.technologies}
                        onChange={handleInputChange}
                        placeholder="e.g., React, Next.js, Node.js"
                        required
                      />
                    </div>
                                    </div>
                  <div className={styles.modalFooter}>
                    <button type="button" className={styles.cancelBtn} onClick={closeModal}>
                      Cancel
                    </button>
                    <button type="submit" className={styles.submitBtn}>
                      {modalType === 'create' ? 'Create Service' : 'Update Service'}
                    </button>
                  </div>
                </form>
              </>
            )}

            {/* View Modal */}
            {modalType === 'view' && selectedService && (
              <>
                <div className={styles.modalHeader}>
                  <h2>Service Details</h2>
                  <button className={styles.closeBtn} onClick={closeModal}>
                    <FiX />
                  </button>
                </div>
                <div className={styles.modalBody}>
                  <div className={styles.viewImage}>
                    <img src={selectedService.image} alt={selectedService.name} />
                    <div className={styles.viewImageOverlay}>
                      <div className={styles.categoryBadge}>
                        {getCategoryIcon(selectedService.category)}
                        {selectedService.category}
                      </div>
                      <div className={styles.ratingBadge}>
                        <FiStar /> {selectedService.rating.toFixed(1)}
                      </div>
                    </div>
                  </div>
                  <div className={styles.viewContent}>
                    <div className={styles.viewHeader}>
                      <div className={styles.viewTitleSection}>
                        <div className={styles.serviceIconLarge}>{selectedService.icon}</div>
                        <div>
                          <h3>{selectedService.name}</h3>
                          <span className={`${styles.statusBadge} ${getStatusClass(selectedService.status)}`}>
                            {selectedService.status.replace('-', ' ')}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className={styles.viewDescription}>{selectedService.description}</p>

                    {/* Pricing Section */}
                    <div className={styles.viewPricing}>
                      <h4>Pricing Plans</h4>
                      <div className={styles.pricingCards}>
                        <div className={styles.pricingCard}>
                          <span className={styles.planName}>Basic</span>
                          <h3 className={styles.planPrice}>{selectedService.pricing.basic}</h3>
                          <p className={styles.planDesc}>Essential features to get started</p>
                        </div>
                        <div className={`${styles.pricingCard} ${styles.featured}`}>
                          <span className={styles.planName}>Standard</span>
                          <h3 className={styles.planPrice}>{selectedService.pricing.standard}</h3>
                          <p className={styles.planDesc}>Most popular for growing businesses</p>
                        </div>
                        <div className={styles.pricingCard}>
                          <span className={styles.planName}>Premium</span>
                          <h3 className={styles.planPrice}>{selectedService.pricing.premium}</h3>
                          <p className={styles.planDesc}>Advanced features for enterprises</p>
                        </div>
                      </div>
                    </div>

                    {/* Statistics */}
                    <div className={styles.viewStats}>
                      <h4>Service Statistics</h4>
                      <div className={styles.statsRow}>
                        <div className={styles.statBox}>
                          <FiTarget />
                          <div>
                            <p>Total Projects</p>
                            <h4>{selectedService.totalProjects}</h4>
                          </div>
                        </div>
                        <div className={styles.statBox}>
                          <FiCheckCircle />
                          <div>
                            <p>Completed</p>
                            <h4>{selectedService.completedProjects}</h4>
                          </div>
                        </div>
                        <div className={styles.statBox}>
                          <FiTrendingUp />
                          <div>
                            <p>Active</p>
                            <h4>{selectedService.activeProjects}</h4>
                          </div>
                        </div>
                        <div className={styles.statBox}>
                          <FiUsers />
                          <div>
                            <p>Clients</p>
                            <h4>{selectedService.clients}</h4>
                          </div>
                        </div>
                      </div>
                      <div className={styles.revenueBox}>
                        <FiDollarSign />
                        <div>
                          <p>Total Revenue</p>
                          <h3>{selectedService.revenue}</h3>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className={styles.viewFeatures}>
                      <h4>Key Features</h4>
                      <ul className={styles.featuresList}>
                        {selectedService.features.map((feature, idx) => (
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
                        {selectedService.technologies.map((tech, idx) => (
                          <div key={idx} className={styles.techCard}>
                            <FiCode />
                            <span>{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Delivery Time */}
                    <div className={styles.viewDelivery}>
                      <div className={styles.deliveryInfo}>
                        <FiClock />
                        <div>
                          <p>Estimated Delivery Time</p>
                          <h4>{selectedService.deliveryTime}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.modalFooter}>
                  <button className={styles.cancelBtn} onClick={closeModal}>
                    Close
                  </button>
                  <button
                    className={styles.submitBtn}
                    onClick={() => {
                      closeModal();
                      openModal('edit', selectedService);
                    }}
                  >
                    <FiEdit /> Edit Service
                  </button>
                </div>
              </>
            )}

            {/* Delete Modal */}
            {modalType === 'delete' && selectedService && (
              <>
                <div className={styles.modalHeader}>
                  <h2>Delete Service</h2>
                  <button className={styles.closeBtn} onClick={closeModal}>
                    <FiX />
                  </button>
                </div>
                <div className={styles.modalBody}>
                  <div className={styles.deleteConfirm}>
                    <div className={styles.deleteIcon}>
                      <FiAlertCircle />
                    </div>
                    <h3>Are you sure?</h3>
                    <p>
                      Do you really want to delete <strong>{selectedService.name}</strong>?
                      This will permanently remove the service and cannot be undone.
                    </p>
                  </div>
                </div>
                <div className={styles.modalFooter}>
                  <button className={styles.cancelBtn} onClick={closeModal}>
                    Cancel
                  </button>
                  <button className={styles.deleteConfirmBtn} onClick={handleDeleteService}>
                    <FiTrash2 /> Delete Service
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllServices;