import React, { useState, useMemo } from 'react';
import styles from './Ecommerce.module.scss';
import { 
  FaShoppingCart, FaPlus, FaTh, FaList, FaSearch, FaEdit, FaTrash, FaEye, 
  FaTimes, FaStar, FaBox, FaDollarSign, FaUsers, FaChartLine, FaShopify,
  FaWordpress, FaMagento, FaPaypal, FaCreditCard, FaTruck, FaMobile
} from 'react-icons/fa';
import { SiWoocommerce, SiBigcommerce, SiShopify, SiStripe } from 'react-icons/si';

const Ecommerce = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      name: 'Shopify Store Development',
      type: 'Shopify',
      category: 'Store Setup',
      platform: 'Shopify',
      description: 'Complete Shopify store setup with custom theme, payment integration, and product catalog. Includes mobile optimization and SEO best practices.',
      thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
      pricing: {
        basic: { price: 2500, features: ['Basic theme setup', 'Up to 50 products', 'Payment gateway', '2 revisions', 'Mobile responsive'] },
        standard: { price: 5000, features: ['Custom theme design', 'Up to 200 products', 'Multiple payment gateways', 'Email marketing setup', 'SEO optimization', '4 revisions'] },
        premium: { price: 10000, features: ['Fully custom theme', 'Unlimited products', 'Advanced integrations', 'Inventory management', 'Analytics setup', 'Unlimited revisions', '3 months support'] }
      },
      features: [
        'Responsive design',
        'Payment gateway integration',
        'Product catalog setup',
        'Shopping cart optimization',
        'Checkout flow design',
        'Order management system',
        'Email notifications',
        'SEO optimization',
        'Mobile app integration',
        'Analytics dashboard',
        'Customer reviews',
        'Multi-currency support'
      ],
      technologies: ['Shopify', 'Liquid', 'JavaScript', 'CSS3', 'Shopify API', 'Payment Gateways'],
      deliveryTime: '3-6 weeks',
      clientCount: 124,
      completedProjects: 124,
      rating: 4.9,
      revenue: 680000,
      status: 'active',
      portfolio: [
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400',
        'https://images.unsplash.com/photo-1557821552-17105176677c?w=400',
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400'
      ]
    },
    {
      id: 2,
      name: 'WooCommerce Store',
      type: 'WordPress',
      category: 'Store Setup',
      platform: 'WooCommerce',
      description: 'Custom WooCommerce store built on WordPress with full e-commerce functionality. Includes theme customization, plugins, and payment processing.',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      pricing: {
        basic: { price: 2000, features: ['WordPress setup', 'WooCommerce installation', 'Basic theme', 'Up to 30 products', 'PayPal integration'] },
        standard: { price: 4000, features: ['Custom theme design', 'Up to 150 products', 'Multiple payment options', 'Shipping calculator', 'Email marketing', '3 revisions'] },
        premium: { price: 8000, features: ['Premium theme customization', 'Unlimited products', 'Advanced plugins', 'Custom functionality', 'Performance optimization', 'Security hardening', '2 months support'] }
      },
      features: [
        'WordPress CMS',
        'WooCommerce setup',
        'Product variations',
        'Inventory management',
        'Tax calculation',
        'Shipping options',
        'Coupon system',
        'Customer accounts',
        'Order tracking',
        'Payment gateways',
        'Email automation',
        'Analytics integration'
      ],
      technologies: ['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'JavaScript', 'Payment APIs'],
      deliveryTime: '2-5 weeks',
      clientCount: 156,
      completedProjects: 156,
      rating: 4.8,
      revenue: 560000,
      status: 'active',
      portfolio: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
        'https://images.unsplash.com/photo-1557821552-17105176677c?w=400',
        'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=400'
      ]
    },
    {
      id: 3,
      name: 'Custom E-commerce Platform',
      type: 'Custom',
      category: 'Custom Development',
      platform: 'Custom Built',
      description: 'Enterprise-level custom e-commerce platform built from scratch with React, Node.js, and MongoDB. Fully scalable and customizable solution.',
      thumbnail: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
      pricing: {
        basic: { price: 15000, features: ['Custom design', 'User authentication', 'Product catalog', 'Shopping cart', 'Basic admin panel', 'Payment integration'] },
        standard: { price: 30000, features: ['Advanced features', 'Multi-vendor support', 'Inventory system', 'Advanced admin panel', 'API development', 'Mobile responsive', '3 months support'] },
        premium: { price: 60000, features: ['Enterprise features', 'Microservices architecture', 'Advanced analytics', 'AI recommendations', 'Multi-language', 'Multi-currency', 'White-label solution', '6 months support'] }
      },
      features: [
        'Custom architecture',
        'Scalable infrastructure',
        'Advanced search',
        'Product filtering',
        'Wishlist functionality',
        'Review system',
        'Recommendation engine',
        'Admin dashboard',
        'Vendor management',
        'API integration',
        'Real-time updates',
        'Advanced security'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Stripe', 'AWS'],
      deliveryTime: '8-16 weeks',
      clientCount: 42,
      completedProjects: 42,
      rating: 5.0,
      revenue: 1260000,
      status: 'active',
      portfolio: [
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400',
        'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=400',
        'https://images.unsplash.com/photo-1557821552-17105176677c?w=400'
      ]
    },
    {
      id: 4,
      name: 'Magento E-commerce',
      type: 'Magento',
      category: 'Store Setup',
      platform: 'Magento',
      description: 'Powerful Magento 2 e-commerce solution for large-scale businesses. Includes custom extensions, advanced features, and performance optimization.',
      thumbnail: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
      pricing: {
        basic: { price: 8000, features: ['Magento 2 installation', 'Theme setup', 'Up to 100 products', 'Payment gateway', 'Basic SEO'] },
        standard: { price: 15000, features: ['Custom theme', 'Up to 500 products', 'Multiple stores', 'Advanced extensions', 'Performance tuning', 'API integration', '2 months support'] },
        premium: { price: 30000, features: ['Enterprise features', 'Unlimited products', 'Custom modules', 'B2B functionality', 'ERP integration', 'CDN setup', 'Dedicated support', '6 months support'] }
      },
      features: [
        'Magento 2 platform',
        'Multi-store support',
        'Advanced catalog',
        'B2B features',
        'ERP integration',
        'Custom extensions',
        'Performance optimization',
        'Security features',
        'Advanced SEO',
        'Marketing tools',
        'Customer segmentation',
        'Analytics & reporting'
      ],
      technologies: ['Magento 2', 'PHP', 'MySQL', 'Elasticsearch', 'Redis', 'Varnish', 'AWS'],
      deliveryTime: '6-12 weeks',
      clientCount: 38,
      completedProjects: 38,
      rating: 4.9,
      revenue: 570000,
      status: 'active',
      portfolio: [
        'https://images.unsplash.com/photo-1557821552-17105176677c?w=400',
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400'
      ]
    },
    {
      id: 5,
      name: 'Mobile Commerce App',
      type: 'Mobile App',
      category: 'Mobile Development',
      platform: 'iOS & Android',
      description: 'Native mobile commerce application for iOS and Android with seamless shopping experience. Includes push notifications and in-app payments.',
      thumbnail: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800',
      pricing: {
        basic: { price: 12000, features: ['Basic app design', 'Product catalog', 'Shopping cart', 'Payment gateway', 'User authentication', 'iOS or Android'] },
        standard: { price: 22000, features: ['Custom design', 'Advanced features', 'Push notifications', 'Social login', 'Order tracking', 'iOS & Android', '3 months support'] },
        premium: { price: 40000, features: ['Premium design', 'AR features', 'AI recommendations', 'Loyalty program', 'Advanced analytics', 'Admin app', 'White-label', '6 months support'] }
      },
      features: [
        'Native performance',
        'Intuitive UI/UX',
        'Product browsing',
        'Advanced search',
        'Wishlist & favorites',
        'Push notifications',
        'In-app payments',
        'Order management',
        'User profiles',
        'Social sharing',
        'Offline mode',
        'AR product preview'
      ],
      technologies: ['React Native', 'Swift', 'Kotlin', 'Firebase', 'Stripe SDK', 'ARKit', 'ARCore'],
      deliveryTime: '8-14 weeks',
      clientCount: 67,
      completedProjects: 67,
      rating: 4.9,
      revenue: 1474000,
      status: 'active',
      portfolio: [
        'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=400',
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400'
      ]
    },
    {
      id: 6,
      name: 'Marketplace Platform',
      type: 'Marketplace',
      category: 'Custom Development',
      platform: 'Custom Built',
      description: 'Multi-vendor marketplace platform like Etsy or Amazon. Complete seller onboarding, commission system, and payment distribution.',
      thumbnail: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800',
      pricing: {
        basic: { price: 20000, features: ['Basic marketplace', 'Vendor registration', 'Product listings', 'Commission system', 'Payment processing', 'Basic admin panel'] },
        standard: { price: 40000, features: ['Advanced features', 'Vendor dashboard', 'Review system', 'Dispute resolution', 'Analytics dashboard', 'Marketing tools', '4 months support'] },
        premium: { price: 80000, features: ['Enterprise platform', 'Custom features', 'AI-powered search', 'Advanced analytics', 'Mobile apps', 'API access', 'White-label', 'Dedicated support', '12 months support'] }
      },
      features: [
        'Multi-vendor support',
        'Vendor onboarding',
        'Commission management',
        'Payment distribution',
        'Product approval system',
        'Rating & reviews',
        'Dispute resolution',
        'Analytics dashboard',
        'Marketing tools',
        'SEO optimization',
        'Mobile responsive',
        'API integration'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe Connect', 'Elasticsearch', 'Docker'],
      deliveryTime: '12-20 weeks',
      clientCount: 28,
      completedProjects: 28,
      rating: 5.0,
      revenue: 1120000,
      status: 'active',
      portfolio: [
        'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400',
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400',
        'https://images.unsplash.com/photo-1557821552-17105176677c?w=400'
      ]
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [platformFilter, setPlatformFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('view');
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({});

  const stats = useMemo(() => {
    return {
      totalServices: services.length,
      totalClients: services.reduce((sum, s) => sum + s.clientCount, 0),
      avgRating: (services.reduce((sum, s) => sum + s.rating, 0) / services.length).toFixed(1),
      totalRevenue: services.reduce((sum, s) => sum + s.revenue, 0)
    };
  }, [services]);

  const filteredServices = useMemo(() => {
    return services.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPlatform = platformFilter === 'all' || service.platform === platformFilter;
      const matchesType = typeFilter === 'all' || service.type === typeFilter;
      return matchesSearch && matchesPlatform && matchesType;
    });
  }, [services, searchTerm, platformFilter, typeFilter]);

  const platforms = ['all', ...new Set(services.map(s => s.platform))];
  const types = ['all', ...new Set(services.map(s => s.type))];

  const handleView = (service) => {
    setSelectedService(service);
    setModalMode('view');
    setShowModal(true);
  };

  const handleAdd = () => {
    setSelectedService(null);
    setFormData({});
    setModalMode('add');
    setShowModal(true);
  };

  const handleEdit = (service) => {
    setSelectedService(service);
    setFormData(service);
    setModalMode('edit');
    setShowModal(true);
  };

  const handleDelete = (service) => {
    setSelectedService(service);
    setModalMode('delete');
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedService(null);
    setFormData({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formElements = form.elements;

    if (modalMode === 'add') {
      const newService = {
        id: services.length + 1,
        name: formElements.name.value,
        type: formElements.type.value,
        category: formElements.category.value,
        platform: formElements.platform.value,
        description: formElements.description.value,
        thumbnail: formElements.thumbnail.value || 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
        pricing: {
          basic: { 
            price: parseInt(formElements.basicPrice.value), 
            features: formElements.basicFeatures.value.split(',').map(f => f.trim()) 
          },
          standard: { 
            price: parseInt(formElements.standardPrice.value), 
            features: formElements.standardFeatures.value.split(',').map(f => f.trim()) 
          },
          premium: { 
            price: parseInt(formElements.premiumPrice.value), 
            features: formElements.premiumFeatures.value.split(',').map(f => f.trim()) 
          }
        },
        features: formElements.features.value.split(',').map(f => f.trim()),
        technologies: formElements.technologies.value.split(',').map(t => t.trim()),
        deliveryTime: formElements.deliveryTime.value,
        clientCount: parseInt(formElements.clientCount.value) || 0,
        completedProjects: parseInt(formElements.completedProjects.value) || 0,
        rating: parseFloat(formElements.rating.value) || 5.0,
        revenue: parseInt(formElements.revenue.value) || 0,
        status: formElements.status.value,
        portfolio: []
      };
      setServices([...services, newService]);
    } else if (modalMode === 'edit') {
      const updatedServices = services.map(s => 
        s.id === selectedService.id ? {
          ...s,
          name: formElements.name.value,
          type: formElements.type.value,
          category: formElements.category.value,
          platform: formElements.platform.value,
          description: formElements.description.value,
          thumbnail: formElements.thumbnail.value || s.thumbnail,
          pricing: {
            basic: { 
              price: parseInt(formElements.basicPrice.value), 
              features: formElements.basicFeatures.value.split(',').map(f => f.trim()) 
            },
            standard: { 
              price: parseInt(formElements.standardPrice.value), 
              features: formElements.standardFeatures.value.split(',').map(f => f.trim()) 
            },
            premium: { 
              price: parseInt(formElements.premiumPrice.value), 
              features: formElements.premiumFeatures.value.split(',').map(f => f.trim()) 
            }
          },
          features: formElements.features.value.split(',').map(f => f.trim()),
          technologies: formElements.technologies.value.split(',').map(t => t.trim()),
          deliveryTime: formElements.deliveryTime.value,
          clientCount: parseInt(formElements.clientCount.value),
          completedProjects: parseInt(formElements.completedProjects.value),
          rating: parseFloat(formElements.rating.value),
          revenue: parseInt(formElements.revenue.value),
          status: formElements.status.value
        } : s
      );
      setServices(updatedServices);
    }
    handleCloseModal();
  };

  const handleDeleteConfirm = () => {
    setServices(services.filter(s => s.id !== selectedService.id));
    handleCloseModal();
  };

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

  return (
    <div className={styles.ecommerce}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.titleSection}>
            <FaShoppingCart className={styles.titleIcon} />
            <div>
              <h1>E-commerce Services</h1>
              <p>Manage online store and marketplace solutions</p>
            </div>
          </div>
          <button className={styles.addButton} onClick={handleAdd}>
            <FaPlus /> Add E-commerce Service
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className={styles.stats}>
        <div className={styles.statCard}>
          <FaShoppingCart className={styles.statIcon} />
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>Total Services</span>
            <span className={styles.statValue}>{stats.totalServices}</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <FaUsers className={styles.statIcon} />
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>Total Clients</span>
            <span className={styles.statValue}>{stats.totalClients}</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <FaStar className={styles.statIcon} />
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>Average Rating</span>
            <span className={styles.statValue}>{stats.avgRating} ★</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <FaDollarSign className={styles.statIcon} />
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>Total Revenue</span>
            <span className={styles.statValue}>${(stats.totalRevenue / 1000000).toFixed(2)}M</span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        <div className={styles.searchBox}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search e-commerce services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className={styles.filters}>
          <select 
            value={platformFilter} 
            onChange={(e) => setPlatformFilter(e.target.value)}
            className={styles.filterSelect}
          >
            {platforms.map(platform => (
              <option key={platform} value={platform}>
                {platform === 'all' ? 'All Platforms' : platform}
              </option>
            ))}
          </select>
          <select 
            value={typeFilter} 
            onChange={(e) => setTypeFilter(e.target.value)}
            className={styles.filterSelect}
          >
            {types.map(type => (
              <option key={type} value={type}>
                {type === 'all' ? 'All Types' : type}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.viewToggle}>
          <button 
            className={`${styles.viewBtn} ${viewMode === 'grid' ? styles.active : ''}`}
            onClick={() => setViewMode('grid')}
          >
            <FaTh />
          </button>
          <button 
            className={`${styles.viewBtn} ${viewMode === 'list' ? styles.active : ''}`}
            onClick={() => setViewMode('list')}
          >
            <FaList />
          </button>
        </div>
      </div>

      {/* Services Grid/List */}
      {viewMode === 'grid' ? (
        <div className={styles.servicesGrid}>
          {filteredServices.map(service => (
            <div key={service.id} className={styles.serviceCard}>
              <img src={service.thumbnail} alt={service.name} className={styles.serviceImage} />
              <div className={styles.serviceContent}>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIcon}>
                    <FaShoppingCart />
                  </div>
                  <div className={styles.serviceTitleSection}>
                    <h3>{service.name}</h3>
                    <span className={styles.serviceType}>{service.category}</span>
                    <span className={styles.platformBadge}>
                      <FaBox /> {service.platform}
                    </span>
                  </div>
                  <div className={styles.serviceActions}>
                    <button onClick={() => handleView(service)}><FaEye /></button>
                    <button onClick={() => handleEdit(service)}><FaEdit /></button>
                    <button onClick={() => handleDelete(service)}><FaTrash /></button>
                  </div>
                </div>
                <p className={styles.serviceDescription}>{service.description}</p>
                <div className={styles.serviceTechnologies}>
                  {service.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                  {service.technologies.length > 3 && <span>+{service.technologies.length - 3}</span>}
                </div>
                <div className={styles.serviceStats}>
                  <span><FaUsers /> {service.clientCount} clients</span>
                  <span><FaStar /> {service.rating}</span>
                  <span><FaBox /> {service.completedProjects} projects</span>
                </div>
                <div className={styles.servicePricing}>
                  <div className={styles.priceRange}>
                    <span className={styles.priceLabel}>Starting from</span>
                    <span className={styles.priceValue}>${service.pricing.basic.price.toLocaleString()}</span>
                  </div>
                  <button className={styles.viewButton} onClick={() => handleView(service)}>
                    View Details
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
              <img src={service.thumbnail} alt={service.name} className={styles.listImage} />
              <div className={styles.listContent}>
                <div className={styles.listHeader}>
                  <div className={styles.listTitleSection}>
                    <h3>{service.name}</h3>
                    <div className={styles.listMeta}>
                      <span className={styles.serviceType}>{service.category}</span>
                      <span className={styles.platformBadge}>
                        <FaBox /> {service.platform}
                      </span>
                    </div>
                  </div>
                  <div className={styles.listActions}>
                    <button onClick={() => handleView(service)}><FaEye /></button>
                    <button onClick={() => handleEdit(service)}><FaEdit /></button>
                    <button onClick={() => handleDelete(service)}><FaTrash /></button>
                  </div>
                </div>
                <p className={styles.listDescription}>{service.description}</p>
                <div className={styles.listTechnologies}>
                  {service.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
                <div className={styles.listFooter}>
                  <div className={styles.listStats}>
                    <span><FaUsers /> {service.clientCount} clients</span>
                    <span><FaStar /> {service.rating}</span>
                    <span><FaBox /> {service.completedProjects} projects</span>
                  </div>
                  <div className={styles.listPricing}>
                    <span className={styles.priceLabel}>From ${service.pricing.basic.price.toLocaleString()}</span>
                    <button className={styles.viewButton} onClick={() => handleView(service)}>View Details</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>
                {modalMode === 'view' && 'Service Details'}
                {modalMode === 'add' && 'Add New E-commerce Service'}
                {modalMode === 'edit' && 'Edit E-commerce Service'}
                {modalMode === 'delete' && 'Delete Service'}
              </h2>
              <button className={styles.closeButton} onClick={handleCloseModal}>
                <FaTimes />
              </button>
            </div>

            <div className={styles.modalBody}>
              {modalMode === 'view' && selectedService && (
                <div className={styles.viewContent}>
                  <img src={selectedService.thumbnail} alt={selectedService.name} className={styles.viewImage} />
                  <div className={styles.viewHeader}>
                    <div className={styles.viewTitleSection}>
                      <h3>{selectedService.name}</h3>
                      <div className={styles.viewMeta}>
                        <span className={styles.serviceType}>{selectedService.category}</span>
                        <span className={styles.platformBadge}>
                          <FaBox /> {selectedService.platform}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className={styles.viewDescription}>{selectedService.description}</p>
                  
                  <div className={styles.viewPricing}>
                    <h4>Pricing Plans</h4>
                    <div className={styles.pricingPlans}>
                      <div className={styles.pricingPlan}>
                        <h5 className={styles.planName}>Basic</h5>
                        <p className={styles.planPrice}>${selectedService.pricing.basic.price.toLocaleString()}</p>
                        <ul>
                          {selectedService.pricing.basic.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div className={styles.pricingPlan}>
                        <h5 className={styles.planName}>Standard</h5>
                        <p className={styles.planPrice}>${selectedService.pricing.standard.price.toLocaleString()}</p>
                        <ul>
                          {selectedService.pricing.standard.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                      <div className={styles.pricingPlan}>
                        <h5 className={styles.planName}>Premium</h5>
                        <p className={styles.planPrice}>${selectedService.pricing.premium.price.toLocaleString()}</p>
                        <ul>
                          {selectedService.pricing.premium.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className={styles.viewFeatures}>
                    <h4>Features</h4>
                    <ul>
                      {selectedService.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.viewTechnologies}>
                    <h4>Technologies</h4>
                    <div className={styles.techBadges}>
                      {selectedService.technologies.map((tech, index) => (
                        <span key={index}>{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.viewMetrics}>
                    <div className={styles.metricItem}>
                      <span className={styles.metricLabel}>Delivery Time</span>
                      <span className={styles.metricValue}>{selectedService.deliveryTime}</span>
                    </div>
                    <div className={styles.metricItem}>
                      <span className={styles.metricLabel}>Clients</span>
                      <span className={styles.metricValue}>{selectedService.clientCount}</span>
                    </div>
                    <div className={styles.metricItem}>
                      <span className={styles.metricLabel}>Rating</span>
                      <span className={styles.metricValue}>{selectedService.rating} ★</span>
                    </div>
                    <div className={styles.metricItem}>
                      <span className={styles.metricLabel}>Revenue</span>
                      <span className={styles.metricValue}>${selectedService.revenue.toLocaleString()}</span>
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

              {(modalMode === 'add' || modalMode === 'edit') && (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label>Service Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      defaultValue={selectedService?.name} 
                      required 
                    />
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label>Type</label>
                      <select name="type" defaultValue={selectedService?.type || 'Shopify'} required>
                        <option value="Shopify">Shopify</option>
                        <option value="WordPress">WordPress</option>
                        <option value="Custom">Custom</option>
                        <option value="Magento">Magento</option>
                        <option value="Mobile App">Mobile App</option>
                        <option value="Marketplace">Marketplace</option>
                      </select>
                    </div>
                    <div className={styles.formGroup}>
                      <label>Category</label>
                      <input 
                        type="text" 
                        name="category" 
                        defaultValue={selectedService?.category || 'Store Setup'} 
                        required 
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label>Platform</label>
                    <input 
                      type="text" 
                      name="platform" 
                      defaultValue={selectedService?.platform} 
                      placeholder="e.g., Shopify, WooCommerce, Custom Built"
                      required 
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Description</label>
                    <textarea 
                      name="description" 
                      defaultValue={selectedService?.description} 
                      rows="3" 
                      required 
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Thumbnail URL</label>
                    <input 
                      type="text" 
                      name="thumbnail" 
                      defaultValue={formData.thumbnail || selectedService?.thumbnail} 
                    />
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageUpload} 
                      className={styles.uploadButton}
                    />
                    {(formData.thumbnail || selectedService?.thumbnail) && (
                      <img 
                        src={formData.thumbnail || selectedService?.thumbnail} 
                        alt="Preview" 
                        className={styles.imagePreview} 
                      />
                    )}
                  </div>

                  <div className={styles.formGroup}>
                    <label>Basic Price</label>
                    <input 
                      type="number" 
                      name="basicPrice" 
                      defaultValue={selectedService?.pricing.basic.price} 
                      required 
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Basic Features (comma-separated)</label>
                    <textarea 
                      name="basicFeatures" 
                      defaultValue={selectedService?.pricing.basic.features.join(', ')} 
                      rows="2" 
                      required 
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Standard Price</label>
                    <input 
                      type="number" 
                      name="standardPrice" 
                      defaultValue={selectedService?.pricing.standard.price} 
                      required 
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Standard Features (comma-separated)</label>
                    <textarea 
                      name="standardFeatures" 
                      defaultValue={selectedService?.pricing.standard.features.join(', ')} 
                      rows="2" 
                      required 
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Premium Price</label>
                    <input 
                      type="number" 
                      name="premiumPrice" 
                      defaultValue={selectedService?.pricing.premium.price} 
                      required 
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Premium Features (comma-separated)</label>
                    <textarea 
                      name="premiumFeatures" 
                      defaultValue={selectedService?.pricing.premium.features.join(', ')} 
                      rows="2" 
                      required 
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Features (comma-separated)</label>
                    <textarea 
                      name="features" 
                      defaultValue={selectedService?.features.join(', ')} 
                      rows="3" 
                      required 
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Technologies (comma-separated)</label>
                    <input 
                      type="text" 
                      name="technologies" 
                      defaultValue={selectedService?.technologies.join(', ')} 
                      required 
                    />
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label>Delivery Time</label>
                      <input 
                        type="text" 
                        name="deliveryTime" 
                        defaultValue={selectedService?.deliveryTime || '2-4 weeks'} 
                        required 
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Client Count</label>
                      <input 
                        type="number" 
                        name="clientCount" 
                        defaultValue={selectedService?.clientCount || 0} 
                        required 
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label>Completed Projects</label>
                      <input 
                        type="number" 
                        name="completedProjects" 
                        defaultValue={selectedService?.completedProjects || 0} 
                        required 
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Rating</label>
                      <input 
                        type="number" 
                        step="0.1" 
                        min="0" 
                        max="5" 
                        name="rating" 
                        defaultValue={selectedService?.rating || 5.0} 
                        required 
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label>Revenue</label>
                      <input 
                        type="number" 
                        name="revenue" 
                        defaultValue={selectedService?.revenue || 0} 
                        required 
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Status</label>
                      <select name="status" defaultValue={selectedService?.status || 'active'} required>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                        <option value="pending">Pending</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formActions}>
                    <button type="button" className={styles.cancelButton} onClick={handleCloseModal}>
                      Cancel
                    </button>
                    <button type="submit" className={styles.submitButton}>
                      {modalMode === 'add' ? 'Add Service' : 'Save Changes'}
                    </button>
                  </div>
                </form>
              )}

              {modalMode === 'delete' && selectedService && (
                <div className={styles.deleteContent}>
                  <div className={styles.deleteIcon}>
                    <FaTrash />
                  </div>
                  <p className={styles.deleteWarning}>
                    Are you sure you want to delete "{selectedService.name}"? This action cannot be undone.
                  </p>
                  <div className={styles.formActions}>
                    <button className={styles.cancelButton} onClick={handleCloseModal}>
                      Cancel
                    </button>
                    <button className={styles.deleteButton} onClick={handleDeleteConfirm}>
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

export default Ecommerce;
