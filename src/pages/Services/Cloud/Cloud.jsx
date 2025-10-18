import React, { useState } from 'react';
import {
  FiCloud,
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
  FiServer,
  FiLayout,
  FiZap,
  FiShield,
  FiAward,
  FiBarChart2,
  FiDownload,
  FiFilter,
  FiStar,
  FiGrid,
  FiUploadCloud
} from 'react-icons/fi';
import styles from './Cloud.module.scss';

const Cloud = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      name: 'AWS Cloud Infrastructure',
      type: 'Cloud Platform',
      category: 'Cloud',
      description: 'Complete AWS infrastructure setup with EC2, S3, RDS, Lambda, and CloudFront for scalable cloud applications.',
      thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      demoUrl: 'https://aws-demo.example.com',
      pricing: {
        basic: '$8,000',
        standard: '$20,000',
        premium: '$45,000'
      },
      features: [
        'AWS Account Setup & Configuration',
        'EC2 Instance Management',
        'S3 Bucket & CloudFront CDN',
        'RDS Database Configuration',
        'Lambda Serverless Functions',
        'VPC & Network Security',
        'IAM Roles & Policies',
        'CloudWatch Monitoring',
        'Auto Scaling Groups',
        'Load Balancer Setup',
        'Backup & Disaster Recovery',
        '12 Months Support'
      ],
      technologies: ['AWS', 'EC2', 'S3', 'RDS', 'Lambda', 'CloudFront', 'Route53', 'CloudWatch'],
      deliveryTime: '6-10 weeks',
      clientCount: 48,
      completedProjects: 44,
      rating: 4.9,
      revenue: '$960,000',
      status: 'active',
      provider: 'AWS',
      portfolio: [
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80',
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80',
        'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=400&q=80'
      ]
    },
    {
      id: 2,
      name: 'Azure Cloud Solutions',
      type: 'Cloud Platform',
      category: 'Cloud',
      description: 'Microsoft Azure infrastructure with App Services, Azure SQL, Blob Storage, and Azure Functions for enterprise applications.',
      thumbnail: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=800&q=80',
      demoUrl: 'https://azure-demo.example.com',
      pricing: {
        basic: '$7,500',
        standard: '$18,000',
        premium: '$42,000'
      },
      features: [
        'Azure Subscription Setup',
        'App Service Deployment',
        'Azure SQL Database',
        'Blob Storage & CDN',
        'Azure Functions',
        'Virtual Networks & Security',
        'Active Directory Integration',
        'Azure Monitor & Insights',
        'Application Gateway',
        'Azure DevOps Pipeline',
        'Backup & Recovery',
        '12 Months Support'
      ],
      technologies: ['Azure', 'App Service', 'Azure SQL', 'Blob Storage', 'Functions', 'Active Directory'],
      deliveryTime: '5-9 weeks',
      clientCount: 36,
      completedProjects: 32,
      rating: 4.8,
      revenue: '$648,000',
      status: 'active',
      provider: 'Azure',
      portfolio: [
        'https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=400&q=80',
        'https://images.unsplash.com/photo-1560732488-6b0df240254a?w=400&q=80',
        'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80'
      ]
    },
    {
      id: 3,
      name: 'Google Cloud Platform (GCP)',
      type: 'Cloud Platform',
      category: 'Cloud',
      description: 'GCP infrastructure with Compute Engine, Cloud Storage, Cloud SQL, and Cloud Functions for modern cloud-native apps.',
      thumbnail: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80',
      demoUrl: 'https://gcp-demo.example.com',
      pricing: {
        basic: '$7,000',
        standard: '$17,000',
        premium: '$40,000'
      },
      features: [
        'GCP Project Setup',
        'Compute Engine VM Management',
        'Cloud Storage & CDN',
        'Cloud SQL Database',
        'Cloud Functions',
        'VPC Network Configuration',
        'Identity & Access Management',
        'Stackdriver Monitoring',
        'Load Balancing',
        'Kubernetes Engine (GKE)',
        'Backup Strategy',
        '10 Months Support'
      ],
      technologies: ['GCP', 'Compute Engine', 'Cloud Storage', 'Cloud SQL', 'Cloud Functions', 'GKE'],
      deliveryTime: '5-9 weeks',
      clientCount: 28,
      completedProjects: 25,
      rating: 4.8,
      revenue: '$476,000',
      status: 'active',
      provider: 'GCP',
      portfolio: [
        'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&q=80',
        'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80',
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80'
      ]
    },
    {
      id: 4,
      name: 'DevOps & CI/CD Pipeline',
      type: 'DevOps',
      category: 'Cloud',
      description: 'Complete DevOps setup with CI/CD pipelines, containerization, orchestration, and automated deployment workflows.',
      thumbnail: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80',
      demoUrl: 'https://devops-demo.example.com',
      pricing: {
        basic: '$6,000',
        standard: '$15,000',
        premium: '$35,000'
      },
      features: [
        'CI/CD Pipeline Setup',
        'Docker Containerization',
        'Kubernetes Orchestration',
        'GitHub Actions/Jenkins',
        'Automated Testing',
        'Infrastructure as Code (Terraform)',
        'Monitoring & Alerting',
        'Log Aggregation',
        'Security Scanning',
        'Blue-Green Deployment',
        'Rollback Strategies',
        '8 Months Support'
      ],
      technologies: ['Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Terraform', 'Prometheus', 'Grafana'],
      deliveryTime: '4-8 weeks',
      clientCount: 52,
      completedProjects: 48,
      rating: 4.9,
      revenue: '$780,000',
      status: 'active',
      provider: 'Multi-Cloud',
      portfolio: [
        'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&q=80',
        'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&q=80',
        'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&q=80'
      ]
    },
    {
      id: 5,
      name: 'Cloud Migration Services',
      type: 'Migration',
      category: 'Cloud',
      description: 'Seamless migration from on-premise to cloud infrastructure with minimal downtime and data integrity assurance.',
      thumbnail: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
      demoUrl: 'https://migration-demo.example.com',
      pricing: {
        basic: '$10,000',
        standard: '$25,000',
        premium: '$55,000'
      },
      features: [
        'Infrastructure Assessment',
        'Migration Strategy Planning',
        'Data Migration & Sync',
        'Application Replatforming',
        'Database Migration',
        'Network Configuration',
        'Security & Compliance',
        'Performance Optimization',
        'Testing & Validation',
        'Cutover Planning',
        'Post-Migration Support',
        '12 Months Support'
      ],
      technologies: ['AWS Migration Hub', 'Azure Migrate', 'Database Migration Service', 'Terraform', 'Ansible'],
      deliveryTime: '8-12 weeks',
      clientCount: 32,
      completedProjects: 28,
      rating: 4.7,
      revenue: '$800,000',
      status: 'active',
      provider: 'Multi-Cloud',
      portfolio: [
        'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80',
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80',
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=80'
      ]
    },
    {
      id: 6,
      name: 'Cloud Security & Compliance',
      type: 'Security',
      category: 'Cloud',
      description: 'Comprehensive cloud security setup with encryption, access controls, compliance monitoring, and threat detection.',
      thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
      demoUrl: 'https://security-demo.example.com',
      pricing: {
        basic: '$9,000',
        standard: '$22,000',
        premium: '$50,000'
      },
      features: [
        'Security Audit & Assessment',
        'Identity & Access Management',
        'Encryption at Rest & Transit',
        'Network Security Groups',
        'Web Application Firewall',
        'DDoS Protection',
        'Security Monitoring & SIEM',
        'Compliance Framework (SOC2, GDPR)',
        'Vulnerability Scanning',
        'Incident Response Plan',
        'Security Training',
        '12 Months Support'
      ],
      technologies: ['AWS Security Hub', 'Azure Security Center', 'CloudFlare', 'Splunk', 'Qualys', 'Vault'],
      deliveryTime: '6-10 weeks',
      clientCount: 40,
      completedProjects: 36,
      rating: 4.9,
      revenue: '$880,000',
      status: 'active',
      provider: 'Multi-Cloud',
      portfolio: [
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=80',
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80',
        'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&q=80'
      ]
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterProvider, setFilterProvider] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('view');
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    description: '',
    thumbnail: '',
    demoUrl: '',
    pricingBasic: '',
    pricingStandard: '',
    pricingPremium: '',
    features: '',
    technologies: '',
    deliveryTime: '',
    provider: 'AWS'
  });

  // Filter services
  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || service.type === filterType;
    const matchesProvider = filterProvider === 'all' || service.provider === filterProvider;
    return matchesSearch && matchesType && matchesProvider;
  });

  // Calculate stats
  const totalClients = services.reduce((sum, service) => sum + service.clientCount, 0);
  const avgRating = (services.reduce((sum, service) => sum + service.rating, 0) / services.length).toFixed(1);
  const totalRevenue = services.reduce((sum, service) => {
    const revenue = parseInt(service.revenue.replace(/[$,]/g, ''));
    return sum + revenue;
  }, 0);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formElements = form.elements;

    if (modalType === 'add') {
      const newService = {
        id: services.length + 1,
        name: formElements.name.value,
        type: formElements.type.value,
        category: 'Cloud',
        description: formElements.description.value,
        thumbnail: formData.thumbnail || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
        demoUrl: formElements.demoUrl.value,
        pricing: {
          basic: formElements.pricingBasic.value,
          standard: formElements.pricingStandard.value,
          premium: formElements.pricingPremium.value
        },
        features: formElements.features.value.split(',').map(f => f.trim()),
        technologies: formElements.technologies.value.split(',').map(t => t.trim()),
        deliveryTime: formElements.deliveryTime.value,
        clientCount: 0,
        completedProjects: 0,
        rating: 5.0,
        revenue: '$0',
        status: 'active',
        provider: formElements.provider.value,
        portfolio: []
      };
      setServices([...services, newService]);
    } else if (modalType === 'edit') {
      setServices(services.map(service =>
        service.id === selectedService.id
          ? {
              ...service,
              name: formElements.name.value,
              type: formElements.type.value,
              description: formElements.description.value,
              thumbnail: formData.thumbnail || service.thumbnail,
              demoUrl: formElements.demoUrl.value,
              pricing: {
                basic: formElements.pricingBasic.value,
                standard: formElements.pricingStandard.value,
                premium: formElements.pricingPremium.value
              },
              features: formElements.features.value.split(',').map(f => f.trim()),
              technologies: formElements.technologies.value.split(',').map(t => t.trim()),
              deliveryTime: formElements.deliveryTime.value,
              provider: formElements.provider.value
            }
          : service
      ));
    }
    closeModal();
  };

  const handleDelete = () => {
    setServices(services.filter(service => service.id !== selectedService.id));
    closeModal();
  };

  const openModal = (type, service = null) => {
    setModalType(type);
    setSelectedService(service);
    if (type === 'add') {
      setFormData({
        name: '',
        type: '',
        description: '',
        thumbnail: '',
        demoUrl: '',
        pricingBasic: '',
        pricingStandard: '',
        pricingPremium: '',
        features: '',
        technologies: '',
        deliveryTime: '',
        provider: 'AWS'
      });
    } else if (type === 'edit' && service) {
      setFormData({
        name: service.name,
        type: service.type,
        description: service.description,
        thumbnail: service.thumbnail,
        demoUrl: service.demoUrl,
        pricingBasic: service.pricing.basic,
        pricingStandard: service.pricing.standard,
        pricingPremium: service.pricing.premium,
        features: service.features.join(', '),
        technologies: service.technologies.join(', '),
        deliveryTime: service.deliveryTime,
        provider: service.provider
      });
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedService(null);
    setFormData({
      name: '',
      type: '',
      description: '',
      thumbnail: '',
      demoUrl: '',
      pricingBasic: '',
      pricingStandard: '',
      pricingPremium: '',
      features: '',
      technologies: '',
      deliveryTime: '',
      provider: 'AWS'
    });
  };

  return (
    <div className={styles.cloud}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.titleSection}>
            <FiCloud className={styles.titleIcon} />
            <div>
              <h1>Cloud Services</h1>
              <p>Manage cloud infrastructure and DevOps services</p>
            </div>
          </div>
          <button className={styles.addButton} onClick={() => openModal('add')}>
            <FiPlus /> Add Cloud Service
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className={styles.stats}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiCloud />
          </div>
          <div className={styles.statInfo}>
            <p className={styles.statLabel}>Active Services</p>
            <h3 className={styles.statValue}>{services.length}</h3>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiUsers />
          </div>
          <div className={styles.statInfo}>
            <p className={styles.statLabel}>Total Clients</p>
            <h3 className={styles.statValue}>{totalClients}</h3>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiStar />
          </div>
          <div className={styles.statInfo}>
            <p className={styles.statLabel}>Average Rating</p>
            <h3 className={styles.statValue}>{avgRating} ⭐</h3>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiDollarSign />
          </div>
          <div className={styles.statInfo}>
            <p className={styles.statLabel}>Total Revenue</p>
            <h3 className={styles.statValue}>${(totalRevenue / 1000).toFixed(0)}K</h3>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        <div className={styles.searchBox}>
          <FiSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search cloud services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className={styles.filters}>
          <select
            className={styles.filterSelect}
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">All Types</option>
            <option value="Cloud Platform">Cloud Platform</option>
            <option value="DevOps">DevOps</option>
            <option value="Migration">Migration</option>
            <option value="Security">Security</option>
          </select>

          <select
            className={styles.filterSelect}
            value={filterProvider}
            onChange={(e) => setFilterProvider(e.target.value)}
          >
            <option value="all">All Providers</option>
            <option value="AWS">AWS</option>
            <option value="Azure">Azure</option>
            <option value="GCP">GCP</option>
            <option value="Multi-Cloud">Multi-Cloud</option>
          </select>

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
              <FiLayout />
            </button>
          </div>
        </div>
      </div>

      {/* Services Grid/List */}
      {viewMode === 'grid' ? (
        <div className={styles.servicesGrid}>
          {filteredServices.map(service => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.serviceImage}>
                <img src={service.thumbnail} alt={service.name} />
                <div className={styles.serviceActions}>
                  <button onClick={() => openModal('view', service)} title="View">
                    <FiEye />
                  </button>
                  <button onClick={() => openModal('edit', service)} title="Edit">
                    <FiEdit />
                  </button>
                  <button onClick={() => openModal('delete', service)} title="Delete">
                    <FiTrash2 />
                  </button>
                </div>
              </div>

              <div className={styles.serviceContent}>
                <div className={styles.serviceHeader}>
                  <FiCloud className={styles.serviceIcon} />
                  <div className={styles.serviceTitleSection}>
                    <h3>{service.name}</h3>
                    <span className={styles.serviceType}>{service.type}</span>
                  </div>
                </div>

                <p className={styles.serviceDescription}>{service.description}</p>

                <div className={styles.providerBadge}>
                  <FiUploadCloud />
                  {service.provider}
                </div>

                <div className={styles.serviceTechnologies}>
                  {service.technologies.slice(0, 4).map((tech, index) => (
                    <span key={index} className={styles.techBadge}>{tech}</span>
                  ))}
                  {service.technologies.length > 4 && (
                    <span className={styles.techBadge}>+{service.technologies.length - 4}</span>
                  )}
                </div>

                <div className={styles.serviceStats}>
                  <div className={styles.stat}>
                    <FiUsers />
                    <span>{service.clientCount} clients</span>
                  </div>
                  <div className={styles.stat}>
                    <FiStar />
                    <span>{service.rating}</span>
                  </div>
                  <div className={styles.stat}>
                    <FiCheckCircle />
                    <span>{service.completedProjects} done</span>
                  </div>
                </div>

                <div className={styles.servicePricing}>
                  <div className={styles.priceRange}>
                    <span className={styles.priceLabel}>Starting from</span>
                    <span className={styles.priceValue}>{service.pricing.basic}</span>
                  </div>
                  <button className={styles.viewButton} onClick={() => openModal('view', service)}>
                    View Details <FiExternalLink />
                  </button>
                </div>
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
              </div>

              <div className={styles.listContent}>
                <div className={styles.listHeader}>
                  <div className={styles.listTitleSection}>
                    <h3>{service.name}</h3>
                    <div className={styles.listMeta}>
                      <span className={styles.serviceType}>{service.type}</span>
                      <span className={styles.providerBadge}>
                        <FiUploadCloud />
                        {service.provider}
                      </span>
                    </div>
                  </div>
                  <div className={styles.listActions}>
                    <button onClick={() => openModal('view', service)} title="View">
                      <FiEye />
                    </button>
                    <button onClick={() => openModal('edit', service)} title="Edit">
                      <FiEdit />
                    </button>
                    <button onClick={() => openModal('delete', service)} title="Delete">
                      <FiTrash2 />
                    </button>
                  </div>
                </div>

                <p className={styles.listDescription}>{service.description}</p>

                <div className={styles.listTechnologies}>
                  {service.technologies.map((tech, index) => (
                    <span key={index} className={styles.techBadge}>{tech}</span>
                  ))}
                </div>

                <div className={styles.listFooter}>
                  <div className={styles.listStats}>
                    <div className={styles.stat}>
                      <FiUsers />
                      <span>{service.clientCount} clients</span>
                    </div>
                    <div className={styles.stat}>
                      <FiStar />
                      <span>{service.rating}</span>
                    </div>
                    <div className={styles.stat}>
                      <FiCheckCircle />
                      <span>{service.completedProjects} completed</span>
                    </div>
                    <div className={styles.stat}>
                      <FiDollarSign />
                      <span>{service.revenue}</span>
                    </div>
                  </div>
                  <div className={styles.listPricing}>
                    <span className={styles.priceLabel}>From</span>
                    <span className={styles.priceValue}>{service.pricing.basic}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>
                {modalType === 'view' && 'Cloud Service Details'}
                {modalType === 'add' && 'Add New Cloud Service'}
                {modalType === 'edit' && 'Edit Cloud Service'}
                {modalType === 'delete' && 'Delete Cloud Service'}
              </h2>
              <button className={styles.closeButton} onClick={closeModal}>
                <FiX />
              </button>
            </div>

            <div className={styles.modalBody}>
              {modalType === 'view' && selectedService && (
                <div className={styles.viewContent}>
                  <div className={styles.viewImage}>
                    <img src={selectedService.thumbnail} alt={selectedService.name} />
                  </div>

                  <div className={styles.viewHeader}>
                    <FiCloud className={styles.serviceIconLarge} />
                    <div className={styles.viewTitleSection}>
                      <h3>{selectedService.name}</h3>
                      <div className={styles.viewMeta}>
                        <span className={styles.serviceType}>{selectedService.type}</span>
                        <span className={styles.providerBadge}>
                          <FiUploadCloud />
                          {selectedService.provider}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className={styles.viewDescription}>{selectedService.description}</p>

                  {selectedService.demoUrl && (
                    <a href={selectedService.demoUrl} target="_blank" rel="noopener noreferrer" className={styles.demoLink}>
                      <FiExternalLink /> View Demo
                    </a>
                  )}

                  <div className={styles.viewPricing}>
                    <h4>Pricing Plans</h4>
                    <div className={styles.pricingPlans}>
                      <div className={styles.pricingPlan}>
                        <span className={styles.planName}>Basic</span>
                        <span className={styles.planPrice}>{selectedService.pricing.basic}</span>
                      </div>
                      <div className={styles.pricingPlan}>
                        <span className={styles.planName}>Standard</span>
                        <span className={styles.planPrice}>{selectedService.pricing.standard}</span>
                      </div>
                      <div className={styles.pricingPlan}>
                        <span className={styles.planName}>Premium</span>
                        <span className={styles.planPrice}>{selectedService.pricing.premium}</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.viewFeatures}>
                    <h4>Features</h4>
                    <ul>
                      {selectedService.features.map((feature, index) => (
                        <li key={index}>
                          <FiCheckCircle /> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.viewTechnologies}>
                    <h4>Technologies</h4>
                    <div className={styles.techBadges}>
                      {selectedService.technologies.map((tech, index) => (
                        <span key={index} className={styles.techBadge}>{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.viewMetrics}>
                    <div className={styles.metricItem}>
                      <FiClock />
                      <div>
                        <span className={styles.metricLabel}>Delivery Time</span>
                        <span className={styles.metricValue}>{selectedService.deliveryTime}</span>
                      </div>
                    </div>
                    <div className={styles.metricItem}>
                      <FiUsers />
                      <div>
                        <span className={styles.metricLabel}>Clients Served</span>
                        <span className={styles.metricValue}>{selectedService.clientCount}</span>
                      </div>
                    </div>
                    <div className={styles.metricItem}>
                      <FiCheckCircle />
                      <div>
                        <span className={styles.metricLabel}>Completed Projects</span>
                        <span className={styles.metricValue}>{selectedService.completedProjects}</span>
                      </div>
                    </div>
                    <div className={styles.metricItem}>
                      <FiStar />
                      <div>
                        <span className={styles.metricLabel}>Rating</span>
                        <span className={styles.metricValue}>{selectedService.rating} ⭐</span>
                      </div>
                    </div>
                  </div>

                  {selectedService.portfolio && selectedService.portfolio.length > 0 && (
                    <div className={styles.viewPortfolio}>
                      <h4>Portfolio</h4>
                      <div className={styles.portfolioGrid}>
                        {selectedService.portfolio.map((image, index) => (
                          <img key={index} src={image} alt={`Portfolio ${index + 1}`} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {(modalType === 'add' || modalType === 'edit') && (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label>Service Name *</label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={formData.name}
                      required
                      placeholder="e.g., AWS Cloud Infrastructure"
                    />
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label>Service Type *</label>
                      <select name="type" defaultValue={formData.type} required>
                        <option value="">Select Type</option>
                        <option value="Cloud Platform">Cloud Platform</option>
                        <option value="DevOps">DevOps</option>
                        <option value="Migration">Migration</option>
                        <option value="Security">Security</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label>Cloud Provider *</label>
                      <select name="provider" defaultValue={formData.provider} required>
                        <option value="AWS">AWS</option>
                        <option value="Azure">Azure</option>
                        <option value="GCP">GCP</option>
                        <option value="Multi-Cloud">Multi-Cloud</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label>Description *</label>
                    <textarea
                      name="description"
                      defaultValue={formData.description}
                      required
                      rows="3"
                      placeholder="Describe your cloud service..."
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Service Image</label>
                    <div className={styles.imageUpload}>
                      <input
                        type="file"
                        id="imageUpload"
                        accept="image/*"
                        onChange={handleImageUpload}
                        style={{ display: 'none' }}
                      />
                      <input
                        type="text"
                        name="thumbnail"
                        value={formData.thumbnail}
                        onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
                        placeholder="Or paste image URL"
                      />
                      <button
                        type="button"
                        onClick={() => document.getElementById('imageUpload').click()}
                        className={styles.uploadButton}
                      >
                        <FiUploadCloud /> Upload
                      </button>
                    </div>
                    {formData.thumbnail && (
                      <div className={styles.imagePreview}>
                        <img src={formData.thumbnail} alt="Preview" />
                      </div>
                    )}
                  </div>

                  <div className={styles.formGroup}>
                    <label>Demo URL</label>
                    <input
                      type="url"
                      name="demoUrl"
                      defaultValue={formData.demoUrl}
                      placeholder="https://demo.example.com"
                    />
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label>Basic Price *</label>
                      <input
                        type="text"
                        name="pricingBasic"
                        defaultValue={formData.pricingBasic}
                        required
                        placeholder="$5,000"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Standard Price *</label>
                      <input
                        type="text"
                        name="pricingStandard"
                        defaultValue={formData.pricingStandard}
                        required
                        placeholder="$12,000"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Premium Price *</label>
                      <input
                        type="text"
                        name="pricingPremium"
                        defaultValue={formData.pricingPremium}
                        required
                        placeholder="$25,000"
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label>Features (comma-separated) *</label>
                    <textarea
                      name="features"
                      defaultValue={formData.features}
                      required
                      rows="4"
                      placeholder="Feature 1, Feature 2, Feature 3..."
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Technologies (comma-separated) *</label>
                    <input
                      type="text"
                      name="technologies"
                      defaultValue={formData.technologies}
                      required
                      placeholder="AWS, Docker, Kubernetes, Terraform..."
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Delivery Time *</label>
                    <input
                      type="text"
                      name="deliveryTime"
                      defaultValue={formData.deliveryTime}
                      required
                      placeholder="4-8 weeks"
                    />
                  </div>

                  <div className={styles.formActions}>
                    <button type="button" className={styles.cancelButton} onClick={closeModal}>
                      Cancel
                    </button>
                    <button type="submit" className={styles.submitButton}>
                      {modalType === 'add' ? 'Add Service' : 'Save Changes'}
                    </button>
                  </div>
                </form>
              )}

              {modalType === 'delete' && selectedService && (
                <div className={styles.deleteContent}>
                  <div className={styles.deleteIcon}>
                    <FiTrash2 />
                  </div>
                  <p>Are you sure you want to delete <strong>{selectedService.name}</strong>?</p>
                  <p className={styles.deleteWarning}>This action cannot be undone.</p>
                  <div className={styles.formActions}>
                    <button type="button" className={styles.cancelButton} onClick={closeModal}>
                      Cancel
                    </button>
                    <button type="button" className={styles.deleteButton} onClick={handleDelete}>
                      Delete Service
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cloud;
