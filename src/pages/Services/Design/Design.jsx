import React, { useState } from 'react';
import {
  FiLayout,
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
  FiLayers,
  FiZap,
  FiShield,
  FiAward,
  FiBarChart2,
  FiDownload,
  FiFilter,
  FiStar,
  FiGrid,
  FiPenTool
} from 'react-icons/fi';
import styles from './Design.module.scss';

const Design = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      name: 'UI/UX Design',
      type: 'Digital Design',
      category: 'Design',
      description: 'User-centered interface and experience design with wireframes, prototypes, and interactive mockups for web and mobile applications.',
      thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
      demoUrl: 'https://uiux-demo.example.com',
      pricing: {
        basic: '$3,000',
        standard: '$8,000',
        premium: '$18,000'
      },
      features: [
        'User Research & Personas',
        'Wireframes & Mockups',
        'Interactive Prototypes',
        'User Flow Diagrams',
        'Responsive Design',
        'Design System Creation',
        'Usability Testing',
        'Style Guide',
        'Component Library',
        'Figma/Adobe XD Files',
        'Developer Handoff',
        '3 Months Support'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer'],
      deliveryTime: '3-6 weeks',
      clientCount: 72,
      completedProjects: 68,
      rating: 4.9,
      revenue: '$576,000',
      status: 'active',
      deliverables: 'Figma Files',
      portfolio: [
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80',
        'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&q=80',
        'https://images.unsplash.com/photo-1545235617-7a424c1a60cc?w=400&q=80'
      ]
    },
    {
      id: 2,
      name: 'Brand Identity Design',
      type: 'Branding',
      category: 'Design',
      description: 'Complete brand identity system including logo design, color palette, typography, and brand guidelines for consistent visual communication.',
      thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
      demoUrl: 'https://branding-demo.example.com',
      pricing: {
        basic: '$4,000',
        standard: '$10,000',
        premium: '$25,000'
      },
      features: [
        'Logo Design (3 Concepts)',
        'Brand Strategy',
        'Color Palette',
        'Typography Selection',
        'Brand Guidelines',
        'Business Card Design',
        'Letterhead Design',
        'Social Media Templates',
        'Email Signature',
        'Brand Assets Library',
        'Vector Files (AI, EPS, SVG)',
        '6 Months Support'
      ],
      technologies: ['Adobe Illustrator', 'Photoshop', 'InDesign', 'Figma', 'Affinity Designer'],
      deliveryTime: '4-8 weeks',
      clientCount: 58,
      completedProjects: 54,
      rating: 5.0,
      revenue: '$580,000',
      status: 'active',
      deliverables: 'Vector Files',
      portfolio: [
        'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&q=80',
        'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=400&q=80',
        'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&q=80'
      ]
    },
    {
      id: 3,
      name: 'Graphic Design',
      type: 'Digital Design',
      category: 'Design',
      description: 'Professional graphic design for marketing materials, social media, presentations, infographics, and promotional content.',
      thumbnail: 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=800&q=80',
      demoUrl: 'https://graphics-demo.example.com',
      pricing: {
        basic: '$2,000',
        standard: '$5,000',
        premium: '$12,000'
      },
      features: [
        'Social Media Graphics',
        'Marketing Collateral',
        'Infographics',
        'Presentation Design',
        'Flyer & Poster Design',
        'Banner Ads',
        'Brochure Design',
        'Packaging Design',
        'Print-Ready Files',
        'Multiple Format Export',
        'Unlimited Revisions',
        '3 Months Support'
      ],
      technologies: ['Adobe Photoshop', 'Illustrator', 'InDesign', 'Canva Pro', 'CorelDRAW'],
      deliveryTime: '2-4 weeks',
      clientCount: 96,
      completedProjects: 92,
      rating: 4.8,
      revenue: '$480,000',
      status: 'active',
      deliverables: 'Print Ready',
      portfolio: [
        'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=400&q=80',
        'https://images.unsplash.com/photo-1561070791-36c11767b26a?w=400&q=80',
        'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400&q=80'
      ]
    },
    {
      id: 4,
      name: 'Motion Graphics',
      type: 'Video Design',
      category: 'Design',
      description: 'Animated graphics, explainer videos, logo animations, and video editing for engaging multimedia content.',
      thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80',
      demoUrl: 'https://motion-demo.example.com',
      pricing: {
        basic: '$3,500',
        standard: '$9,000',
        premium: '$20,000'
      },
      features: [
        'Explainer Videos',
        'Logo Animation',
        '2D/3D Motion Graphics',
        'Video Editing',
        'Title Sequences',
        'Social Media Videos',
        'Commercial Ads',
        'Storyboarding',
        'Sound Design',
        'Color Grading',
        'Multiple Format Export',
        '4 Months Support'
      ],
      technologies: ['After Effects', 'Premiere Pro', 'Cinema 4D', 'Blender', 'DaVinci Resolve'],
      deliveryTime: '4-8 weeks',
      clientCount: 44,
      completedProjects: 40,
      rating: 4.9,
      revenue: '$396,000',
      status: 'active',
      deliverables: 'Video Files',
      portfolio: [
        'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&q=80',
        'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=400&q=80',
        'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&q=80'
      ]
    },
    {
      id: 5,
      name: 'Illustration Design',
      type: 'Creative Design',
      category: 'Design',
      description: 'Custom illustrations, character design, icons, and visual storytelling for unique brand representation.',
      thumbnail: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&q=80',
      demoUrl: 'https://illustration-demo.example.com',
      pricing: {
        basic: '$2,500',
        standard: '$6,500',
        premium: '$15,000'
      },
      features: [
        'Custom Illustrations',
        'Character Design',
        'Icon Set Design',
        'Editorial Illustrations',
        'Pattern Design',
        'Vector Artwork',
        'Digital Painting',
        'Concept Art',
        'Style Exploration',
        'Multiple Formats',
        'Source Files Included',
        '3 Months Support'
      ],
      technologies: ['Procreate', 'Adobe Illustrator', 'Photoshop', 'Affinity Designer', 'Clip Studio'],
      deliveryTime: '3-6 weeks',
      clientCount: 52,
      completedProjects: 48,
      rating: 4.9,
      revenue: '$338,000',
      status: 'active',
      deliverables: 'Source Files',
      portfolio: [
        'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&q=80',
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80',
        'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&q=80'
      ]
    },
    {
      id: 6,
      name: 'Web Design',
      type: 'Digital Design',
      category: 'Design',
      description: 'Modern, responsive website design with pixel-perfect layouts, interactive elements, and conversion-focused design.',
      thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
      demoUrl: 'https://webdesign-demo.example.com',
      pricing: {
        basic: '$3,500',
        standard: '$9,500',
        premium: '$22,000'
      },
      features: [
        'Homepage Design',
        'Inner Pages Design',
        'Responsive Layouts',
        'Interactive Elements',
        'Micro-interactions',
        'Hero Sections',
        'Call-to-Action Design',
        'Mobile-First Approach',
        'SEO-Friendly Design',
        'Accessibility Standards',
        'Design System',
        '6 Months Support'
      ],
      technologies: ['Figma', 'Adobe XD', 'Webflow', 'Sketch', 'Photoshop', 'Illustrator'],
      deliveryTime: '4-8 weeks',
      clientCount: 64,
      completedProjects: 60,
      rating: 4.8,
      revenue: '$608,000',
      status: 'active',
      deliverables: 'Design Files',
      portfolio: [
        'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&q=80',
        'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&q=80',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80'
      ]
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterDeliverables, setFilterDeliverables] = useState('all');
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
    deliverables: 'Figma Files'
  });

  // Filter services
  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || service.type === filterType;
    const matchesDeliverables = filterDeliverables === 'all' || service.deliverables === filterDeliverables;
    return matchesSearch && matchesType && matchesDeliverables;
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
        category: 'Design',
        description: formElements.description.value,
        thumbnail: formData.thumbnail || 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
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
        deliverables: formElements.deliverables.value,
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
              deliverables: formElements.deliverables.value
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
        deliverables: 'Figma Files'
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
        deliverables: service.deliverables
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
      deliverables: 'Figma Files'
    });
  };

  return (
    <div className={styles.design}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.titleSection}>
            <FiPenTool className={styles.titleIcon} />
            <div>
              <h1>Design Services</h1>
              <p>Manage UI/UX, branding, and creative design services</p>
            </div>
          </div>
          <button className={styles.addButton} onClick={() => openModal('add')}>
            <FiPlus /> Add Design Service
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className={styles.stats}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiLayout />
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
            placeholder="Search design services..."
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
            <option value="Digital Design">Digital Design</option>
            <option value="Branding">Branding</option>
            <option value="Video Design">Video Design</option>
            <option value="Creative Design">Creative Design</option>
          </select>

          <select
            className={styles.filterSelect}
            value={filterDeliverables}
            onChange={(e) => setFilterDeliverables(e.target.value)}
          >
            <option value="all">All Deliverables</option>
            <option value="Figma Files">Figma Files</option>
            <option value="Vector Files">Vector Files</option>
            <option value="Print Ready">Print Ready</option>
            <option value="Video Files">Video Files</option>
            <option value="Source Files">Source Files</option>
            <option value="Design Files">Design Files</option>
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
                  <FiPenTool className={styles.serviceIcon} />
                  <div className={styles.serviceTitleSection}>
                    <h3>{service.name}</h3>
                    <span className={styles.serviceType}>{service.type}</span>
                  </div>
                </div>

                <p className={styles.serviceDescription}>{service.description}</p>

                <div className={styles.deliverablesBadge}>
                  <FiDownload />
                  {service.deliverables}
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
                      <span className={styles.deliverablesBadge}>
                        <FiDownload />
                        {service.deliverables}
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
                {modalType === 'view' && 'Design Service Details'}
                {modalType === 'add' && 'Add New Design Service'}
                {modalType === 'edit' && 'Edit Design Service'}
                {modalType === 'delete' && 'Delete Design Service'}
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
                    <FiPenTool className={styles.serviceIconLarge} />
                    <div className={styles.viewTitleSection}>
                      <h3>{selectedService.name}</h3>
                      <div className={styles.viewMeta}>
                        <span className={styles.serviceType}>{selectedService.type}</span>
                        <span className={styles.deliverablesBadge}>
                          <FiDownload />
                          {selectedService.deliverables}
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
                    <h4>Technologies & Tools</h4>
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
                      placeholder="e.g., UI/UX Design"
                    />
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label>Service Type *</label>
                      <select name="type" defaultValue={formData.type} required>
                        <option value="">Select Type</option>
                        <option value="Digital Design">Digital Design</option>
                        <option value="Branding">Branding</option>
                        <option value="Video Design">Video Design</option>
                        <option value="Creative Design">Creative Design</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label>Deliverables *</label>
                      <select name="deliverables" defaultValue={formData.deliverables} required>
                        <option value="Figma Files">Figma Files</option>
                        <option value="Vector Files">Vector Files</option>
                        <option value="Print Ready">Print Ready</option>
                        <option value="Video Files">Video Files</option>
                        <option value="Source Files">Source Files</option>
                        <option value="Design Files">Design Files</option>
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
                      placeholder="Describe your design service..."
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
                        <FiDownload /> Upload
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
                        placeholder="$2,000"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Standard Price *</label>
                      <input
                        type="text"
                        name="pricingStandard"
                        defaultValue={formData.pricingStandard}
                        required
                        placeholder="$5,000"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Premium Price *</label>
                      <input
                        type="text"
                        name="pricingPremium"
                        defaultValue={formData.pricingPremium}
                        required
                        placeholder="$12,000"
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
                      placeholder="Figma, Adobe XD, Sketch..."
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Delivery Time *</label>
                    <input
                      type="text"
                      name="deliveryTime"
                      defaultValue={formData.deliveryTime}
                      required
                      placeholder="3-6 weeks"
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

export default Design;
