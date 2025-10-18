import React, { useState } from 'react';
import {
  FiLink,
  FiPlus,
  FiSearch,
  FiFilter,
  FiCheck,
  FiX,
  FiSettings,
  FiExternalLink,
  FiRefreshCw,
  FiTrash2,
  FiAlertCircle,
  FiClock,
  FiZap,
  FiGrid,
  FiList,
  FiArrowRight,
  FiKey,
  FiShield,
  FiActivity,
  FiDatabase,
  FiMail,
  FiMessageSquare,
  FiCreditCard,
  FiTrello,
  FiGithub,
  FiDroplet,
  FiBox,
  FiFigma,
  FiCloud,
  FiLock,
  FiUnlock,
  FiEye,
  FiInfo,
  FiPhone
} from 'react-icons/fi';
import { 
  FaSlack, 
  FaStripe, 
  FaGoogle, 
  FaAws, 
  FaMailchimp,
  FaJira,
  FaGitlab,
  FaHubspot,
  FaSalesforce,
  FaShopify,
  FaPaypal,
  FaDocker,
  FaMicrosoft,
  FaLinkedin,
  FaTwitter,
  FaFacebook
} from 'react-icons/fa';
import styles from './Integrations.module.scss';

const Integrations = () => {
  const [integrations, setIntegrations] = useState([
    {
      id: 1,
      name: 'Slack',
      icon: <FaSlack />,
      category: 'Communication',
      description: 'Team collaboration and messaging platform',
      status: 'connected',
      connectedDate: '2024-01-15',
      lastSync: '2 hours ago',
      apiCalls: '12,450',
      color: '#4A154B',
      features: ['Real-time notifications', 'Channel integration', 'Bot commands'],
      plans: ['Free', 'Pro', 'Business']
    },
    {
      id: 2,
      name: 'Stripe',
      icon: <FaStripe />,
      category: 'Payment',
      description: 'Online payment processing and billing',
      status: 'connected',
      connectedDate: '2024-01-10',
      lastSync: '5 mins ago',
      apiCalls: '8,234',
      color: '#635BFF',
      features: ['Payment processing', 'Subscription billing', 'Invoice management'],
      plans: ['Standard', 'Custom']
    },
    {
      id: 3,
      name: 'Google Workspace',
      icon: <FaGoogle />,
      category: 'Productivity',
      description: 'Cloud productivity and collaboration tools',
      status: 'connected',
      connectedDate: '2024-01-05',
      lastSync: '1 hour ago',
      apiCalls: '15,678',
      color: '#4285F4',
      features: ['Email sync', 'Calendar integration', 'Drive storage'],
      plans: ['Business Starter', 'Business Standard', 'Business Plus']
    },
    {
      id: 4,
      name: 'AWS',
      icon: <FaAws />,
      category: 'Cloud',
      description: 'Amazon Web Services cloud computing platform',
      status: 'available',
      connectedDate: null,
      lastSync: null,
      apiCalls: '0',
      color: '#FF9900',
      features: ['S3 storage', 'EC2 instances', 'Lambda functions'],
      plans: ['Free Tier', 'Pay as you go']
    },
    {
      id: 5,
      name: 'GitHub',
      icon: <FiGithub />,
      category: 'Development',
      description: 'Version control and collaboration platform',
      status: 'connected',
      connectedDate: '2023-12-20',
      lastSync: '30 mins ago',
      apiCalls: '22,890',
      color: '#181717',
      features: ['Repository sync', 'Webhook integration', 'Issue tracking'],
      plans: ['Free', 'Pro', 'Team', 'Enterprise']
    },
    {
      id: 6,
      name: 'Mailchimp',
      icon: <FaMailchimp />,
      category: 'Marketing',
      description: 'Email marketing and automation platform',
      status: 'available',
      connectedDate: null,
      lastSync: null,
      apiCalls: '0',
      color: '#FFE01B',
      features: ['Email campaigns', 'Audience management', 'Analytics'],
      plans: ['Free', 'Essentials', 'Standard', 'Premium']
    },
    {
      id: 7,
      name: 'Jira',
      icon: <FaJira />,
      category: 'Project Management',
      description: 'Issue tracking and project management',
      status: 'available',
      connectedDate: null,
      lastSync: null,
      apiCalls: '0',
      color: '#0052CC',
      features: ['Task management', 'Sprint planning', 'Custom workflows'],
      plans: ['Free', 'Standard', 'Premium', 'Enterprise']
    },
    {
      id: 8,
      name: 'Trello',
      icon: <FiTrello />,
      category: 'Project Management',
      description: 'Visual project management with boards',
      status: 'available',
      connectedDate: null,
      lastSync: null,
      apiCalls: '0',
      color: '#0079BF',
      features: ['Board management', 'Card automation', 'Power-ups'],
      plans: ['Free', 'Standard', 'Premium', 'Enterprise']
    },
    {
      id: 9,
      name: 'HubSpot',
      icon: <FaHubspot />,
      category: 'CRM',
      description: 'Customer relationship management platform',
      status: 'available',
      connectedDate: null,
      lastSync: null,
      apiCalls: '0',
      color: '#FF7A59',
      features: ['Contact management', 'Sales pipeline', 'Marketing automation'],
      plans: ['Free', 'Starter', 'Professional', 'Enterprise']
    },
    {
      id: 10,
      name: 'Salesforce',
      icon: <FaSalesforce />,
      category: 'CRM',
      description: 'Enterprise CRM and customer success platform',
      status: 'available',
      connectedDate: null,
      lastSync: null,
      apiCalls: '0',
      color: '#00A1E0',
      features: ['Sales Cloud', 'Service Cloud', 'Marketing Cloud'],
      plans: ['Essentials', 'Professional', 'Enterprise', 'Unlimited']
    },
    {
      id: 11,
      name: 'Figma',
      icon: <FiFigma />,
      category: 'Design',
      description: 'Collaborative interface design tool',
      status: 'connected',
      connectedDate: '2024-01-12',
      lastSync: '3 hours ago',
      apiCalls: '5,432',
      color: '#F24E1E',
      features: ['Design sync', 'Comment notifications', 'Version control'],
      plans: ['Starter', 'Professional', 'Organization']
    },
    {
      id: 12,
      name: 'Shopify',
      icon: <FaShopify />,
      category: 'E-commerce',
      description: 'E-commerce platform and online store',
      status: 'available',
      connectedDate: null,
      lastSync: null,
      apiCalls: '0',
      color: '#96BF48',
      features: ['Store sync', 'Order management', 'Inventory tracking'],
      plans: ['Basic', 'Shopify', 'Advanced', 'Plus']
    },
    {
      id: 13,
      name: 'PayPal',
      icon: <FaPaypal />,
      category: 'Payment',
      description: 'Online payment and money transfer service',
      status: 'available',
      connectedDate: null,
      lastSync: null,
      apiCalls: '0',
      color: '#00457C',
      features: ['Payment gateway', 'Subscription billing', 'Invoicing'],
      plans: ['Business', 'Premium']
    },
    {
      id: 14,
      name: 'Twilio',
      icon: <FiPhone />,
      category: 'Communication',
      description: 'Cloud communications platform',
      status: 'available',
      connectedDate: null,
      lastSync: null,
      apiCalls: '0',
      color: '#F22F46',
      features: ['SMS messaging', 'Voice calls', 'WhatsApp integration'],
      plans: ['Pay as you go']
    },
    {
      id: 15,
      name: 'Docker',
      icon: <FaDocker />,
      category: 'Development',
      description: 'Container platform for application deployment',
      status: 'available',
      connectedDate: null,
      lastSync: null,
      apiCalls: '0',
      color: '#2496ED',
      features: ['Container management', 'Image registry', 'Deployment automation'],
      plans: ['Free', 'Pro', 'Team', 'Business']
    },
    {
      id: 16,
      name: 'GitLab',
      icon: <FaGitlab />,
      category: 'Development',
      description: 'DevOps platform for the entire software lifecycle',
      status: 'available',
      connectedDate: null,
      lastSync: null,
      apiCalls: '0',
      color: '#FC6D26',
      features: ['CI/CD pipelines', 'Repository hosting', 'Issue tracking'],
      plans: ['Free', 'Premium', 'Ultimate']
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedIntegration, setSelectedIntegration] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const categories = ['Communication', 'Payment', 'Productivity', 'Cloud', 'Development', 'Marketing', 'Project Management', 'CRM', 'Design', 'E-commerce'];

  const stats = {
    total: integrations.length,
    connected: integrations.filter(i => i.status === 'connected').length,
    available: integrations.filter(i => i.status === 'available').length,
    totalApiCalls: integrations.reduce((sum, i) => sum + parseInt(i.apiCalls.replace(/,/g, '')), 0)
  };

  const openModal = (type, integration = null) => {
    setModalType(type);
    setSelectedIntegration(integration);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedIntegration(null);
    setModalType('');
  };

  const handleConnect = () => {
    if (selectedIntegration) {
      const updated = integrations.map(i =>
        i.id === selectedIntegration.id
          ? { ...i, status: 'connected', connectedDate: new Date().toISOString().split('T')[0], lastSync: 'Just now' }
          : i
      );
      setIntegrations(updated);
      closeModal();
    }
  };

  const handleDisconnect = () => {
    if (selectedIntegration) {
      const updated = integrations.map(i =>
        i.id === selectedIntegration.id
          ? { ...i, status: 'available', connectedDate: null, lastSync: null, apiCalls: '0' }
          : i
      );
      setIntegrations(updated);
      closeModal();
    }
  };

  const filteredIntegrations = integrations.filter(integration => {
    const matchesSearch = integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          integration.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'all' || integration.category === filterCategory;
    const matchesStatus = filterStatus === 'all' || integration.status === filterStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'connected':
        return <span className={styles.statusConnected}><FiCheck /> Connected</span>;
      case 'available':
        return <span className={styles.statusAvailable}><FiUnlock /> Available</span>;
      default:
        return <span className={styles.statusDisabled}><FiX /> Disabled</span>;
    }
  };

  return (
    <div className={styles.integrations}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.titleSection}>
            <FiLink className={styles.titleIcon} />
            <div>
              <h1>Integrations</h1>
              <p>Connect your favorite tools and services</p>
            </div>
          </div>
        </div>
        <div className={styles.headerRight}>
          <button className={styles.docsBtn}>
            <FiInfo /> Documentation
          </button>
          <button className={styles.addBtn}>
            <FiPlus /> Request Integration
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiGrid />
          </div>
          <div className={styles.statContent}>
            <p>Total Integrations</p>
            <h3>{stats.total}</h3>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiCheck />
          </div>
          <div className={styles.statContent}>
            <p>Connected</p>
            <h3>{stats.connected}</h3>
            <span className={styles.statChange}>
              <FiZap /> Active
            </span>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiUnlock />
          </div>
          <div className={styles.statContent}>
            <p>Available</p>
            <h3>{stats.available}</h3>
            <span className={styles.statChange}>Ready to connect</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiActivity />
          </div>
          <div className={styles.statContent}>
            <p>API Calls (Month)</p>
            <h3>{stats.totalApiCalls.toLocaleString()}</h3>
            <span className={styles.statChange}>
              <FiArrowRight /> Healthy
            </span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        <div className={styles.searchBar}>
          <FiSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search integrations..."
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
            <option value="connected">Connected</option>
            <option value="available">Available</option>
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
            <FiList />
          </button>
        </div>
      </div>

      {/* Integrations Grid/List */}
      {viewMode === 'grid' ? (
        <div className={styles.integrationsGrid}>
          {filteredIntegrations.map(integration => (
            <div key={integration.id} className={styles.integrationCard}>
              <div className={styles.cardHeader}>
                <div 
                  className={styles.integrationIcon}
                  style={{ background: `${integration.color}15`, color: integration.color }}
                >
                  {integration.icon}
                </div>
                {getStatusBadge(integration.status)}
              </div>
              <div className={styles.cardContent}>
                <h3>{integration.name}</h3>
                <p className={styles.category}>{integration.category}</p>
                <p className={styles.description}>{integration.description}</p>
                
                {integration.status === 'connected' && (
                  <div className={styles.connectionInfo}>
                    <div className={styles.infoItem}>
                      <FiClock />
                      <span>Last sync: {integration.lastSync}</span>
                    </div>
                    <div className={styles.infoItem}>
                      <FiActivity />
                      <span>{integration.apiCalls} API calls</span>
                    </div>
                  </div>
                )}

                <div className={styles.features}>
                  {integration.features.slice(0, 3).map((feature, idx) => (
                    <span key={idx} className={styles.featureTag}>
                      <FiCheck /> {feature}
                    </span>
                  ))}
                </div>
              </div>
              <div className={styles.cardActions}>
                {integration.status === 'connected' ? (
                  <>
                    <button 
                      className={styles.configureBtn}
                      onClick={() => openModal('configure', integration)}
                    >
                      <FiSettings /> Configure
                    </button>
                    <button 
                      className={styles.disconnectBtn}
                      onClick={() => openModal('disconnect', integration)}
                    >
                      Disconnect
                    </button>
                  </>
                ) : (
                  <button 
                    className={styles.connectBtn}
                    onClick={() => openModal('connect', integration)}
                  >
                    <FiZap /> Connect
                  </button>
                )}
                <button 
                  className={styles.detailsBtn}
                  onClick={() => openModal('details', integration)}
                >
                  <FiEye /> Details
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.integrationsList}>
          {filteredIntegrations.map(integration => (
            <div key={integration.id} className={styles.integrationListItem}>
              <div 
                className={styles.listIcon}
                style={{ background: `${integration.color}15`, color: integration.color }}
              >
                {integration.icon}
              </div>
              <div className={styles.listContent}>
                <div className={styles.listHeader}>
                  <div className={styles.listTitle}>
                    <h3>{integration.name}</h3>
                    <span className={styles.category}>{integration.category}</span>
                  </div>
                  {getStatusBadge(integration.status)}
                </div>
                <p className={styles.description}>{integration.description}</p>
                {integration.status === 'connected' && (
                  <div className={styles.listMeta}>
                    <div className={styles.metaItem}>
                      <FiClock />
                      <span>Last sync: {integration.lastSync}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <FiActivity />
                      <span>{integration.apiCalls} API calls</span>
                    </div>
                    <div className={styles.metaItem}>
                      <FiKey />
                      <span>Connected on {integration.connectedDate}</span>
                    </div>
                  </div>
                )}
              </div>
              <div className={styles.listActions}>
                {integration.status === 'connected' ? (
                  <>
                    <button 
                      className={styles.configureBtn}
                      onClick={() => openModal('configure', integration)}
                    >
                      <FiSettings />
                    </button>
                    <button 
                      className={styles.viewBtn}
                      onClick={() => openModal('details', integration)}
                    >
                      <FiEye />
                    </button>
                    <button 
                      className={styles.disconnectBtn}
                      onClick={() => openModal('disconnect', integration)}
                    >
                      <FiX />
                    </button>
                  </>
                ) : (
                  <>
                    <button 
                      className={styles.viewBtn}
                      onClick={() => openModal('details', integration)}
                    >
                      <FiEye />
                    </button>
                    <button 
                      className={styles.connectBtn}
                      onClick={() => openModal('connect', integration)}
                    >
                      <FiZap /> Connect
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {filteredIntegrations.length === 0 && (
        <div className={styles.emptyState}>
          <FiLink />
          <h3>No integrations found</h3>
          <p>Try adjusting your search or filters</p>
        </div>
      )}

      {/* Modals */}
      {showModal && selectedIntegration && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Connect Modal */}
            {modalType === 'connect' && (
              <>
                <div className={styles.modalHeader}>
                  <h2>Connect {selectedIntegration.name}</h2>
                  <button className={styles.closeBtn} onClick={closeModal}>
                    <FiX />
                  </button>
                </div>
                <div className={styles.modalBody}>
                  <div 
                    className={styles.modalIcon}
                    style={{ background: `${selectedIntegration.color}15`, color: selectedIntegration.color }}
                  >
                    {selectedIntegration.icon}
                  </div>
                  <h3>Connect to {selectedIntegration.name}</h3>
                  <p className={styles.modalDescription}>
                    {selectedIntegration.description}
                  </p>
                  
                  <div className={styles.featuresList}>
                    <h4>What you'll get:</h4>
                    <ul>
                      {selectedIntegration.features.map((feature, idx) => (
                        <li key={idx}>
                          <FiCheck /> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.permissionsList}>
                    <h4>Permissions required:</h4>
                    <div className={styles.permission}>
                      <FiShield />
                      <span>Read and write access to your data</span>
                    </div>
                    <div className={styles.permission}>
                      <FiDatabase />
                      <span>Access to API endpoints</span>
                    </div>
                    <div className={styles.permission}>
                      <FiActivity />
                      <span>Webhook notifications</span>
                    </div>
                  </div>
                </div>
                <div className={styles.modalFooter}>
                  <button className={styles.cancelBtn} onClick={closeModal}>
                    Cancel
                  </button>
                  <button className={styles.connectBtnLarge} onClick={handleConnect}>
                    <FiZap /> Connect {selectedIntegration.name}
                  </button>
                </div>
              </>
            )}

            {/* Details Modal */}
            {modalType === 'details' && (
              <>
                <div className={styles.modalHeader}>
                  <h2>{selectedIntegration.name} Details</h2>
                  <button className={styles.closeBtn} onClick={closeModal}>
                    <FiX />
                  </button>
                </div>
                <div className={styles.modalBody}>
                  <div className={styles.detailsGrid}>
                    <div className={styles.detailItem}>
                      <strong>Category:</strong>
                      <span>{selectedIntegration.category}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <strong>Status:</strong>
                      {getStatusBadge(selectedIntegration.status)}
                    </div>
                    {selectedIntegration.connectedDate && (
                      <div className={styles.detailItem}>
                        <strong>Connected Date:</strong>
                        <span>{selectedIntegration.connectedDate}</span>
                      </div>
                    )}
                    {selectedIntegration.lastSync && (
                      <div className={styles.detailItem}>
                        <strong>Last Sync:</strong>
                        <span>{selectedIntegration.lastSync}</span>
                      </div>
                    )}
                    <div className={styles.detailItem}>
                      <strong>API Calls:</strong>
                      <span>{selectedIntegration.apiCalls}</span>
                    </div>
                  </div>

                  <div className={styles.section}>
                    <h4>Features</h4>
                    <div className={styles.featuresTags}>
                      {selectedIntegration.features.map((feature, idx) => (
                        <span key={idx} className={styles.featureTag}>
                          <FiCheck /> {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.section}>
                    <h4>Available Plans</h4>
                    <div className={styles.plansTags}>
                      {selectedIntegration.plans.map((plan, idx) => (
                        <span key={idx} className={styles.planTag}>
                          {plan}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.section}>
                    <h4>Description</h4>
                    <p>{selectedIntegration.description}</p>
                  </div>
                </div>
                <div className={styles.modalFooter}>
                  <button className={styles.cancelBtn} onClick={closeModal}>
                    Close
                  </button>
                  <button className={styles.docsBtn}>
                    <FiExternalLink /> View Documentation
                  </button>
                </div>
              </>
            )}

            {/* Disconnect Modal */}
            {modalType === 'disconnect' && (
              <>
                <div className={styles.modalHeader}>
                  <h2>Disconnect Integration</h2>
                  <button className={styles.closeBtn} onClick={closeModal}>
                    <FiX />
                  </button>
                </div>
                <div className={styles.modalBody}>
                  <div className={styles.disconnectConfirm}>
                    <div className={styles.disconnectIcon}>
                      <FiAlertCircle />
                    </div>
                    <h3>Disconnect {selectedIntegration.name}?</h3>
                    <p>
                      This will remove the integration and stop all data syncing. 
                      You can reconnect at any time, but you'll need to reconfigure the settings.
                    </p>
                  </div>
                </div>
                <div className={styles.modalFooter}>
                  <button className={styles.cancelBtn} onClick={closeModal}>
                    Cancel
                  </button>
                  <button className={styles.disconnectConfirmBtn} onClick={handleDisconnect}>
                    <FiX /> Disconnect
                  </button>
                </div>
              </>
            )}

            {/* Configure Modal */}
            {modalType === 'configure' && (
              <>
                <div className={styles.modalHeader}>
                  <h2>Configure {selectedIntegration.name}</h2>
                  <button className={styles.closeBtn} onClick={closeModal}>
                    <FiX />
                  </button>
                </div>
                <div className={styles.modalBody}>
                  <div className={styles.configForm}>
                    <div className={styles.formGroup}>
                      <label>API Key</label>
                      <input
                        type="password"
                        placeholder="Enter your API key"
                        defaultValue="sk_live_********************4242"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Webhook URL</label>
                      <input
                        type="text"
                        placeholder="https://your-domain.com/webhook"
                        defaultValue="https://api.husney.com/webhooks/integration"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Sync Frequency</label>
                      <select>
                        <option value="realtime">Real-time</option>
                        <option value="5min">Every 5 minutes</option>
                        <option value="15min">Every 15 minutes</option>
                        <option value="hourly">Hourly</option>
                        <option value="daily">Daily</option>
                      </select>
                    </div>
                    <div className={styles.formGroup}>
                      <label>Notifications</label>
                      <div className={styles.checkboxGroup}>
                        <label>
                          <input type="checkbox" defaultChecked />
                          <span>Email notifications</span>
                        </label>
                        <label>
                          <input type="checkbox" defaultChecked />
                          <span>Error alerts</span>
                        </label>
                        <label>
                          <input type="checkbox" />
                          <span>Daily sync reports</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className={styles.configActions}>
                    <button className={styles.testBtn}>
                      <FiRefreshCw /> Test Connection
                    </button>
                    <button className={styles.syncBtn}>
                      <FiRefreshCw /> Sync Now
                    </button>
                  </div>
                </div>
                <div className={styles.modalFooter}>
                  <button className={styles.cancelBtn} onClick={closeModal}>
                    Cancel
                  </button>
                  <button className={styles.saveBtn} onClick={closeModal}>
                    <FiCheck /> Save Changes
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

export default Integrations;
