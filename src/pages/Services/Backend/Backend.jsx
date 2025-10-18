import React, { useState } from 'react';
import {
  FiServer,
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
  FiGrid,
  FiDatabase
} from 'react-icons/fi';
import styles from './Backend.module.scss';

const Backend = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      name: 'REST API Development',
      type: 'API Development',
      category: 'Backend',
      description: 'Scalable RESTful API services with comprehensive documentation, authentication, and rate limiting for modern applications.',
      thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      demoUrl: 'https://api-demo.example.com/docs',
      pricing: {
        basic: '$5,000',
        standard: '$12,000',
        premium: '$25,000'
      },
      features: [
        'RESTful Architecture Design',
        'JWT Authentication',
        'Role-Based Access Control',
        'API Documentation (Swagger/OpenAPI)',
        'Rate Limiting & Throttling',
        'Input Validation & Sanitization',
        'Error Handling & Logging',
        'Database Integration',
        'Caching Strategy (Redis)',
        'Unit & Integration Testing',
        'CI/CD Pipeline Setup',
        '6 Months Support'
      ],
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'Redis', 'JWT', 'Swagger'],
      deliveryTime: '4-8 weeks',
      clientCount: 56,
      completedProjects: 52,
      rating: 4.9,
      revenue: '$624,000',
      status: 'active',
      complexity: 'Medium',
      portfolio: [
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80'
      ]
    },
    {
      id: 2,
      name: 'GraphQL API Development',
      type: 'API Development',
      category: 'Backend',
      description: 'Modern GraphQL API with type-safe schemas, real-time subscriptions, and efficient data fetching for complex applications.',
      thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
      demoUrl: 'https://graphql-demo.example.com',
      pricing: {
        basic: '$8,000',
        standard: '$18,000',
        premium: '$35,000'
      },
      features: [
        'GraphQL Schema Design',
        'Type-Safe Resolvers',
        'Real-time Subscriptions',
        'DataLoader for N+1 Prevention',
        'Authentication & Authorization',
        'GraphQL Playground',
        'Query Complexity Analysis',
        'Caching & Optimization',
        'Error Handling',
        'Apollo Server/GraphQL Yoga',
        'Testing & Documentation',
        '8 Months Support'
      ],
      technologies: ['Node.js', 'GraphQL', 'Apollo Server', 'PostgreSQL', 'TypeScript', 'Redis'],
      deliveryTime: '6-10 weeks',
      clientCount: 38,
      completedProjects: 34,
      rating: 5.0,
      revenue: '$680,000',
      status: 'active',
      complexity: 'High',
      portfolio: [
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80',
        'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&q=80',
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80'
      ]
    },
    {
      id: 3,
      name: 'Microservices Architecture',
      type: 'Architecture',
      category: 'Backend',
      description: 'Distributed microservices architecture with service discovery, API gateway, and inter-service communication patterns.',
      thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      demoUrl: 'https://microservices-demo.example.com',
      pricing: {
        basic: '$15,000',
        standard: '$35,000',
        premium: '$65,000'
      },
      features: [
        'Microservices Design Patterns',
        'Service Discovery (Consul/Eureka)',
        'API Gateway (Kong/NGINX)',
        'Message Queue (RabbitMQ/Kafka)',
        'Event-Driven Architecture',
        'Circuit Breaker Pattern',
        'Distributed Tracing',
        'Centralized Logging',
        'Service Mesh (Istio)',
        'Container Orchestration (Kubernetes)',
        'Monitoring & Alerting',
        '12 Months Support'
      ],
      technologies: ['Docker', 'Kubernetes', 'Node.js', 'RabbitMQ', 'Redis', 'Prometheus', 'Grafana'],
      deliveryTime: '12-20 weeks',
      clientCount: 22,
      completedProjects: 18,
      rating: 4.8,
      revenue: '$735,000',
      status: 'active',
      complexity: 'High',
      portfolio: [
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80',
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80',
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80'
      ]
    },
    {
      id: 4,
      name: 'Database Design & Optimization',
      type: 'Database',
      category: 'Backend',
      description: 'Expert database architecture, schema design, query optimization, and performance tuning for SQL and NoSQL databases.',
      thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80',
      demoUrl: 'https://database-demo.example.com',
      pricing: {
        basic: '$6,000',
        standard: '$14,000',
        premium: '$28,000'
      },
      features: [
        'Database Schema Design',
        'Normalization & Denormalization',
        'Index Optimization',
        'Query Performance Tuning',
        'Replication & Sharding',
        'Backup & Recovery Strategy',
        'Migration Scripts',
        'Connection Pooling',
        'Data Modeling',
        'Database Security',
        'Monitoring & Alerting',
        '6 Months Support'
      ],
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Prisma'],
      deliveryTime: '4-8 weeks',
      clientCount: 64,
      completedProjects: 60,
      rating: 4.9,
      revenue: '$896,000',
      status: 'active',
      complexity: 'Medium',
      portfolio: [
        'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&q=80',
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80'
      ]
    },
    {
      id: 5,
      name: 'Real-time Backend (WebSocket)',
      type: 'Real-time',
      category: 'Backend',
      description: 'Real-time bidirectional communication systems using WebSockets for chat, notifications, and live updates.',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      demoUrl: 'https://realtime-demo.example.com',
      pricing: {
        basic: '$7,000',
        standard: '$16,000',
        premium: '$32,000'
      },
      features: [
        'WebSocket Server Setup',
        'Real-time Messaging',
        'Presence & Typing Indicators',
        'Room/Channel Management',
        'Message Queue Integration',
        'Scalable Architecture',
        'Connection Management',
        'Heartbeat & Reconnection',
        'Message Persistence',
        'Redis Pub/Sub',
        'Load Balancing',
        '8 Months Support'
      ],
      technologies: ['Socket.io', 'Node.js', 'Redis', 'MongoDB', 'WebSocket', 'NGINX'],
      deliveryTime: '5-10 weeks',
      clientCount: 42,
      completedProjects: 38,
      rating: 4.9,
      revenue: '$672,000',
      status: 'active',
      complexity: 'Medium',
      portfolio: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80',
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80',
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80'
      ]
    },
    {
      id: 6,
      name: 'Serverless Backend (AWS Lambda)',
      type: 'Serverless',
      category: 'Backend',
      description: 'Cost-effective serverless architecture using AWS Lambda, API Gateway, and managed services for auto-scaling applications.',
      thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      demoUrl: 'https://serverless-demo.example.com',
      pricing: {
        basic: '$8,500',
        standard: '$18,000',
        premium: '$38,000'
      },
      features: [
        'AWS Lambda Functions',
        'API Gateway Configuration',
        'DynamoDB/RDS Integration',
        'S3 Storage Integration',
        'CloudWatch Monitoring',
        'IAM Security Policies',
        'Cold Start Optimization',
        'Event-Driven Architecture',
        'Step Functions Workflows',
        'CI/CD Pipeline',
        'Cost Optimization',
        '10 Months Support'
      ],
      technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'S3', 'CloudFormation', 'Serverless Framework'],
      deliveryTime: '6-12 weeks',
      clientCount: 31,
      completedProjects: 27,
      rating: 4.8,
      revenue: '$567,000',
      status: 'active',
      complexity: 'High',
      portfolio: [
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80',
        'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=400&q=80',
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80'
      ]
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedService, setSelectedService] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterComplexity, setFilterComplexity] = useState('all');
  const [formData, setFormData] = useState({});

  const serviceTypes = ['API Development', 'Architecture', 'Database', 'Real-time', 'Serverless'];
  const complexityLevels = ['Low', 'Medium', 'High'];

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
  const openModal = (type, service = null) => {
    setModalType(type);
    setSelectedService(service);
    setFormData(service || {});
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
    setModalType('');
    setFormData({});
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formElements = form.elements;

    const newService = {
      id: modalType === 'add' ? services.length + 1 : selectedService.id,
      name: formElements.name.value,
      type: formElements.type.value,
      category: 'Backend',
      status: formElements.status?.value || 'active',
      description: formElements.description.value,
      thumbnail: formElements.thumbnail.value,
      demoUrl: formElements.demoUrl.value,
      deliveryTime: formElements.deliveryTime.value,
      complexity: formElements.complexity.value,
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
      setServices([...services, newService]);
    } else if (modalType === 'edit') {
      setServices(services.map(s => s.id === selectedService.id ? newService : s));
    }

    closeModal();
  };

  // Filter Services
  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' || service.type === filterType;
    const matchesComplexity = filterComplexity === 'all' || service.complexity === filterComplexity;
    return matchesSearch && matchesType && matchesComplexity;
  });

  const getStatusClass = (status) => {
    switch (status) {
      case 'active': return styles.statusActive;
      case 'inactive': return styles.statusInactive;
      case 'coming-soon': return styles.statusComingSoon;
      default: return '';
    }
  };

  const getComplexityClass = (complexity) => {
    switch (complexity) {
      case 'Low': return styles.complexityLow;
      case 'Medium': return styles.complexityMedium;
      case 'High': return styles.complexityHigh;
      default: return '';
    }
  };

  const calculateStats = () => {
    return {
      totalServices: services.length,
      totalCompleted: services.reduce((sum, service) => sum + service.completedProjects, 0),
      totalClients: services.reduce((sum, service) => sum + service.clientCount, 0),
      totalRevenue: services.reduce((sum, service) => {
        const revenue = parseInt(service.revenue.replace(/[$,]/g, ''));
        return sum + revenue;
      }, 0),
      avgRating: (services.reduce((sum, service) => sum + service.rating, 0) / services.length).toFixed(1),
      activeServices: services.filter(service => service.status === 'active').length
    };
  };

  const stats = calculateStats();

  return (
    <div className={styles.backend}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.titleSection}>
            <div className={styles.titleIcon}>
              <FiServer />
            </div>
            <div>
              <h1>Backend Development Services</h1>
              <p>API, Database, and Server-side solutions</p>
            </div>
          </div>
        </div>
        <div className={styles.headerRight}>
          <button className={styles.exportBtn}>
            <FiDownload /> Export
          </button>
          <button className={styles.createBtn} onClick={() => openModal('add')}>
            <FiPlus /> Add Backend Service
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiServer />
          </div>
          <div className={styles.statContent}>
            <p>Backend Services</p>
            <h3>{stats.totalServices}</h3>
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
            <p>Active Services</p>
            <h3>{stats.activeServices}</h3>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        <div className={styles.searchBar}>
          <FiSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search backend services..."
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
            {serviceTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          <select 
            className={styles.filterSelect}
            value={filterComplexity}
            onChange={(e) => setFilterComplexity(e.target.value)}
          >
            <option value="all">All Complexity</option>
            {complexityLevels.map(level => (
              <option key={level} value={level}>{level}</option>
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

      {/* Services Grid/List */}
      {viewMode === 'grid' ? (
        <div className={styles.servicesGrid}>
          {filteredServices.map(service => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.serviceImage}>
                <img src={service.thumbnail} alt={service.name} />
                <div className={styles.imageOverlay}>
                  <button className={styles.overlayBtn} onClick={() => openModal('view', service)}>
                    <FiEye /> View Details
                  </button>
                </div>
                <div className={styles.typeBadge}>
                  <FiServer /> {service.type}
                </div>
                <div className={styles.ratingBadge}>
                  <FiStar /> {service.rating}
                </div>
              </div>
              <div className={styles.serviceContent}>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIcon}>
                    <FiServer />
                  </div>
                  <div className={styles.serviceTitleSection}>
                    <h3>{service.name}</h3>
                    <span className={`${styles.statusBadge} ${getStatusClass(service.status)}`}>
                      {service.status}
                    </span>
                  </div>
                </div>
                <p className={styles.description}>{service.description}</p>
                <div className={styles.complexityBadge}>
                  <span className={getComplexityClass(service.complexity)}>
                    {service.complexity} Complexity
                  </span>
                </div>
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
                    <FiCheckCircle /> {service.completedProjects}
                  </div>
                  <div className={styles.statItem}>
                    <FiUsers /> {service.clientCount}
                  </div>
                  <div className={styles.statItem}>
                    <FiClock /> {service.deliveryTime}
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
                <button className={styles.deleteBtn} onClick={() => openModal('delete', service)}>
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
                <img src={service.thumbnail} alt={service.name} />
                <div className={styles.typeBadge}>
                  <FiServer /> {service.type}
                </div>
                <div className={styles.ratingBadge}>
                  <FiStar /> {service.rating}
                </div>
              </div>
              <div className={styles.listContent}>
                <div className={styles.listHeader}>
                  <div className={styles.listTitle}>
                    <div className={styles.serviceIcon}>
                      <FiServer />
                    </div>
                    <div>
                      <h3>{service.name}</h3>
                      <div className={styles.listBadges}>
                        <span className={`${styles.statusBadge} ${getStatusClass(service.status)}`}>
                          {service.status}
                        </span>
                        <span className={`${styles.complexityBadge} ${getComplexityClass(service.complexity)}`}>
                          {service.complexity}
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
                    <FiCheckCircle /> {service.completedProjects} Projects
                  </div>
                  <div className={styles.metaItem}>
                    <FiUsers /> {service.clientCount} Clients
                  </div>
                  <div className={styles.metaItem}>
                    <FiClock /> {service.deliveryTime}
                  </div>
                  <div className={styles.metaItem}>
                    <FiDollarSign /> {service.revenue} Revenue
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
                <button className={styles.deleteBtn} onClick={() => openModal('delete', service)}>
                  <FiTrash2 />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {filteredServices.length === 0 && (
        <div className={styles.emptyState}>
          <FiServer />
          <h3>No backend services found</h3>
          <p>Try adjusting your filters or add a new backend service</p>
        </div>
      )}

      {/* View Modal */}
      {showModal && modalType === 'view' && selectedService && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>Service Details</h2>
              <button className={styles.closeBtn} onClick={closeModal}>
                <FiX />
              </button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.viewContent}>
                {/* Image */}
                <div className={styles.viewImage}>
                  <img src={selectedService.thumbnail} alt={selectedService.name} />
                  <div className={styles.viewImageOverlay}>
                    <div className={styles.typeBadge}>
                      <FiServer /> {selectedService.type}
                    </div>
                    <div className={styles.ratingBadge}>
                      <FiStar /> {selectedService.rating}
                    </div>
                  </div>
                </div>

                {/* Header */}
                <div className={styles.viewHeader}>
                  <div className={styles.viewTitleSection}>
                    <div className={styles.serviceIconLarge}>
                      <FiServer />
                    </div>
                    <div>
                      <h3>{selectedService.name}</h3>
                      <div className={styles.listBadges}>
                        <span className={`${styles.statusBadge} ${getStatusClass(selectedService.status)}`}>
                          {selectedService.status}
                        </span>
                        <span className={`${styles.complexityBadge} ${getComplexityClass(selectedService.complexity)}`}>
                          {selectedService.complexity} Complexity
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className={styles.viewDescription}>{selectedService.description}</p>
                </div>

                {/* Pricing */}
                <div className={styles.viewPricing}>
                  <h4>Pricing Plans</h4>
                  <div className={styles.pricingCards}>
                    <div className={styles.pricingCard}>
                      <span className={styles.planName}>Basic</span>
                      <h3 className={styles.planPrice}>{selectedService.pricing.basic}</h3>
                      <p className={styles.planDesc}>Essential features for small projects</p>
                    </div>
                    <div className={`${styles.pricingCard} ${styles.featured}`}>
                      <span className={styles.planName}>Standard</span>
                      <h3 className={styles.planPrice}>{selectedService.pricing.standard}</h3>
                      <p className={styles.planDesc}>Most popular for growing businesses</p>
                    </div>
                    <div className={styles.pricingCard}>
                      <span className={styles.planName}>Premium</span>
                      <h3 className={styles.planPrice}>{selectedService.pricing.premium}</h3>
                      <p className={styles.planDesc}>Complete solution for enterprises</p>
                    </div>
                  </div>
                </div>

                {/* Statistics */}
                <div className={styles.viewStats}>
                  <h4>Performance Metrics</h4>
                  <div className={styles.statsRow}>
                    <div className={styles.statBox}>
                      <FiCheckCircle />
                      <div>
                        <p>Completed</p>
                        <h4>{selectedService.completedProjects}</h4>
                      </div>
                    </div>
                    <div className={styles.statBox}>
                      <FiUsers />
                      <div>
                        <p>Clients</p>
                        <h4>{selectedService.clientCount}</h4>
                      </div>
                    </div>
                    <div className={styles.statBox}>
                      <FiDollarSign />
                      <div>
                        <p>Revenue</p>
                        <h4>{selectedService.revenue}</h4>
                      </div>
                    </div>
                    <div className={styles.statBox}>
                      <FiClock />
                      <div>
                        <p>Delivery</p>
                        <h4>{selectedService.deliveryTime}</h4>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className={styles.viewFeatures}>
                  <h4>Features Included</h4>
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

                {/* Portfolio */}
                {selectedService.portfolio && selectedService.portfolio.length > 0 && (
                  <div className={styles.viewPortfolio}>
                    <h4>Portfolio Examples</h4>
                    <div className={styles.portfolioGrid}>
                      {selectedService.portfolio.map((img, idx) => (
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
                {selectedService.demoUrl && (
                  <div className={styles.viewActions}>
                    <a 
                      href={selectedService.demoUrl} 
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
              <button className={styles.submitBtn} onClick={() => openModal('edit', selectedService)}>
                <FiEdit /> Edit Service
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
              <h2>{modalType === 'add' ? 'Add New Backend Service' : 'Edit Backend Service'}</h2>
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
                    <label>Service Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Enter service name" 
                      defaultValue={selectedService?.name || ''}
                      required 
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Type *</label>
                    <select name="type" defaultValue={selectedService?.type || 'API Development'} required>
                      {serviceTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label>Complexity *</label>
                    <select name="complexity" defaultValue={selectedService?.complexity || 'Medium'} required>
                      {complexityLevels.map(level => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label>Status *</label>
                    <select name="status" defaultValue={selectedService?.status || 'active'} required>
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
                      placeholder="e.g., 4-8 weeks" 
                      defaultValue={selectedService?.deliveryTime || ''}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Demo URL</label>
                    <input 
                      type="url" 
                      name="demoUrl"
                      placeholder="https://demo.example.com" 
                      defaultValue={selectedService?.demoUrl || ''}
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
                      defaultValue={selectedService?.rating || ''}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Client Count</label>
                    <input 
                      type="number" 
                      name="clientCount"
                      placeholder="56" 
                      defaultValue={selectedService?.clientCount || ''}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Basic Price</label>
                    <input 
                      type="text" 
                      name="basicPrice"
                      placeholder="$5,000" 
                      defaultValue={selectedService?.pricing?.basic || ''}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Standard Price</label>
                    <input 
                      type="text" 
                      name="standardPrice"
                      placeholder="$12,000" 
                      defaultValue={selectedService?.pricing?.standard || ''}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Premium Price</label>
                    <input 
                      type="text" 
                      name="premiumPrice"
                      placeholder="$25,000" 
                      defaultValue={selectedService?.pricing?.premium || ''}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Completed Projects</label>
                    <input 
                      type="number" 
                      name="completedProjects"
                      placeholder="52" 
                      defaultValue={selectedService?.completedProjects || ''}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Total Revenue</label>
                    <input 
                      type="text" 
                      name="revenue"
                      placeholder="$624,000" 
                      defaultValue={selectedService?.revenue || ''}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    {/* Empty for grid alignment */}
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label>Description *</label>
                    <textarea 
                      name="description"
                      placeholder="Enter service description" 
                      defaultValue={selectedService?.description || ''}
                      rows={3}
                      required
                    />
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label>Features (comma-separated)</label>
                    <textarea 
                      name="features"
                      placeholder="JWT Authentication, Rate Limiting, Error Handling..." 
                      defaultValue={selectedService?.features?.join(', ') || ''}
                      rows={3}
                    />
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label>Technologies (comma-separated)</label>
                    <textarea 
                      name="technologies"
                      placeholder="Node.js, Express.js, MongoDB, Redis..." 
                      defaultValue={selectedService?.technologies?.join(', ') || ''}
                      rows={2}
                    />
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label>Portfolio Images (comma-separated URLs)</label>
                    <textarea 
                      name="portfolio"
                      placeholder="https://example.com/img1.jpg, https://example.com/img2.jpg..." 
                      defaultValue={selectedService?.portfolio?.join(', ') || ''}
                      rows={2}
                    />
                  </div>
                </div>

                <div className={styles.modalFooter}>
                  <button type="button" className={styles.cancelBtn} onClick={closeModal}>
                    <FiX /> Cancel
                  </button>
                  <button type="submit" className={styles.submitBtn}>
                    <FiCheckCircle /> {modalType === 'add' ? 'Add Service' : 'Save Changes'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showModal && modalType === 'delete' && selectedService && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>Delete Backend Service</h2>
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
                  Do you really want to delete <strong>{selectedService.name}</strong>? 
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
                  setServices(services.filter(s => s.id !== selectedService.id));
                  closeModal();
                }}
              >
                <FiTrash2 /> Delete Service
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Backend;
