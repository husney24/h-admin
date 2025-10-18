import React, { useState } from 'react';
import {
  FiKey,
  FiPlus,
  FiSearch,
  FiFilter,
  FiSettings,
  FiTrash2,
  FiCopy,
  FiEye,
  FiEyeOff,
  FiActivity,
  FiTrendingUp,
  FiClock,
  FiAlertCircle,
  FiCheck,
  FiX,
  FiRefreshCw,
  FiCode,
  FiBook,
  FiZap,
  FiShield,
  FiLock,
  FiUnlock,
  FiDownload,
  FiBarChart2,
  FiServer,
  FiGlobe,
  FiDatabase,
  FiCpu,
  FiHardDrive,
  FiWifi,
  FiInfo
} from 'react-icons/fi';
import styles from './APIManagement.module.scss';

const APIManagement = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [apiKeys, setApiKeys] = useState([
    {
      id: 1,
      name: 'Production API Key',
      key: 'pk_live_51J3K4L5M6N7O8P9Q0R1S2T3U4V5W6X7Y8Z9',
      environment: 'production',
      status: 'active',
      createdDate: '2024-01-15',
      lastUsed: '2 hours ago',
      requests: 1245678,
      rateLimit: '10000/hour',
      permissions: ['read', 'write', 'delete']
    },
    {
      id: 2,
      name: 'Development API Key',
      key: 'pk_test_31J3K4L5M6N7O8P9Q0R1S2T3U4V5W6X7Y8Z9',
      environment: 'development',
      status: 'active',
      createdDate: '2024-03-20',
      lastUsed: '5 minutes ago',
      requests: 45230,
      rateLimit: '1000/hour',
      permissions: ['read', 'write']
    },
    {
      id: 3,
      name: 'Mobile App Key',
      key: 'pk_live_41J3K4L5M6N7O8P9Q0R1S2T3U4V5W6X7Y8Z9',
      environment: 'production',
      status: 'active',
      createdDate: '2024-02-10',
      lastUsed: '1 hour ago',
      requests: 892345,
      rateLimit: '5000/hour',
      permissions: ['read']
    },
    {
      id: 4,
      name: 'Legacy API Key',
      key: 'pk_live_21J3K4L5M6N7O8P9Q0R1S2T3U4V5W6X7Y8Z9',
      environment: 'production',
      status: 'inactive',
      createdDate: '2023-11-05',
      lastUsed: '3 months ago',
      requests: 156789,
      rateLimit: '10000/hour',
      permissions: ['read', 'write', 'delete']
    }
  ]);

  const [endpoints, setEndpoints] = useState([
    {
      id: 1,
      method: 'GET',
      path: '/api/v1/users',
      description: 'Retrieve list of users',
      category: 'Users',
      status: 'stable',
      version: 'v1',
      requests: 245678,
      avgResponseTime: '45ms',
      successRate: 99.8,
      authRequired: true,
      rateLimit: '1000/min',
      deprecated: false
    },
    {
      id: 2,
      method: 'POST',
      path: '/api/v1/users',
      description: 'Create a new user',
      category: 'Users',
      status: 'stable',
      version: 'v1',
      requests: 12345,
      avgResponseTime: '120ms',
      successRate: 98.5,
      authRequired: true,
      rateLimit: '100/min',
      deprecated: false
    },
    {
      id: 3,
      method: 'GET',
      path: '/api/v1/projects',
      description: 'Get all projects',
      category: 'Projects',
      status: 'stable',
      version: 'v1',
      requests: 189234,
      avgResponseTime: '67ms',
      successRate: 99.2,
      authRequired: true,
      rateLimit: '500/min',
      deprecated: false
    },
    {
      id: 4,
      method: 'PUT',
      path: '/api/v1/projects/{id}',
      description: 'Update project details',
      category: 'Projects',
      status: 'stable',
      version: 'v1',
      requests: 45678,
      avgResponseTime: '95ms',
      successRate: 97.9,
      authRequired: true,
      rateLimit: '200/min',
      deprecated: false
    },
    {
      id: 5,
      method: 'DELETE',
      path: '/api/v1/projects/{id}',
      description: 'Delete a project',
      category: 'Projects',
      status: 'stable',
      version: 'v1',
      requests: 3421,
      avgResponseTime: '78ms',
      successRate: 99.1,
      authRequired: true,
      rateLimit: '50/min',
      deprecated: false
    },
    {
      id: 6,
      method: 'GET',
      path: '/api/v1/analytics',
      description: 'Retrieve analytics data',
      category: 'Analytics',
      status: 'beta',
      version: 'v1',
      requests: 67890,
      avgResponseTime: '234ms',
      successRate: 96.7,
      authRequired: true,
      rateLimit: '100/min',
      deprecated: false
    },
    {
      id: 7,
      method: 'POST',
      path: '/api/v1/webhooks',
      description: 'Register a webhook',
      category: 'Webhooks',
      status: 'stable',
      version: 'v1',
      requests: 8923,
      avgResponseTime: '156ms',
      successRate: 98.9,
      authRequired: true,
      rateLimit: '50/min',
      deprecated: false
    },
    {
      id: 8,
      method: 'GET',
      path: '/api/v0/users',
      description: 'Legacy user endpoint',
      category: 'Users',
      status: 'deprecated',
      version: 'v0',
      requests: 1234,
      avgResponseTime: '89ms',
      successRate: 95.3,
      authRequired: true,
      rateLimit: '100/min',
      deprecated: true
    }
  ]);

  const [showKeyModal, setShowKeyModal] = useState(false);
  const [showEndpointModal, setShowEndpointModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showRevokeModal, setShowRevokeModal] = useState(false);
  const [selectedKey, setSelectedKey] = useState(null);
  const [selectedEndpoint, setSelectedEndpoint] = useState(null);
  const [visibleKeys, setVisibleKeys] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterMethod, setFilterMethod] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  // Stats
  const stats = {
    totalRequests: '2.4M',
    totalEndpoints: endpoints.length,
    activeKeys: apiKeys.filter(k => k.status === 'active').length,
    avgResponseTime: '87ms',
    successRate: '98.7%',
    requestsToday: '145,234',
    errorRate: '1.3%',
    uptime: '99.97%'
  };

  // Toggle key visibility
  const toggleKeyVisibility = (keyId) => {
    setVisibleKeys(prev => ({
      ...prev,
      [keyId]: !prev[keyId]
    }));
  };

  // Copy key to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // Show toast notification (you can implement this)
  };

  // Handle create API key
  const handleCreateKey = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newKey = {
      id: apiKeys.length + 1,
      name: formData.get('name'),
      key: `pk_${formData.get('environment')}_${Math.random().toString(36).substring(2, 50)}`,
      environment: formData.get('environment'),
      status: 'active',
      createdDate: new Date().toISOString().split('T')[0],
      lastUsed: 'Never',
      requests: 0,
      rateLimit: formData.get('rateLimit'),
      permissions: formData.getAll('permissions')
    };
    setApiKeys([...apiKeys, newKey]);
    setShowKeyModal(false);
  };

  // Handle revoke key
  const handleRevokeKey = () => {
    setApiKeys(apiKeys.map(key => 
      key.id === selectedKey.id ? { ...key, status: 'inactive' } : key
    ));
    setShowRevokeModal(false);
    setSelectedKey(null);
  };

  // Filter endpoints
  const filteredEndpoints = endpoints.filter(endpoint => {
    const matchesSearch = endpoint.path.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         endpoint.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || endpoint.category === filterCategory;
    const matchesMethod = filterMethod === 'all' || endpoint.method === filterMethod;
    const matchesStatus = filterStatus === 'all' || endpoint.status === filterStatus;
    return matchesSearch && matchesCategory && matchesMethod && matchesStatus;
  });

  // Get unique categories
  const categories = ['all', ...new Set(endpoints.map(e => e.category))];
  const methods = ['all', 'GET', 'POST', 'PUT', 'DELETE', 'PATCH'];
  const statuses = ['all', 'stable', 'beta', 'deprecated'];

  return (
    <div className={styles.apiManagement}>
      {/* Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerContent}>
          <div className={styles.titleSection}>
            <div className={styles.iconBadge}>
              <FiKey />
            </div>
            <div>
              <h1>API Management</h1>
              <p>Manage API keys, endpoints, and monitor usage</p>
            </div>
          </div>
          <div className={styles.headerActions}>
            <button className={styles.secondaryBtn}>
              <FiBook /> Documentation
            </button>
            <button className={styles.primaryBtn} onClick={() => setShowKeyModal(true)}>
              <FiPlus /> Create API Key
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiActivity />
          </div>
          <div className={styles.statContent}>
            <span className={styles.statLabel}>Total Requests</span>
            <h3>{stats.totalRequests}</h3>
            <span className={styles.statChange}>
              <FiTrendingUp /> +12.5% from last month
            </span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiKey />
          </div>
          <div className={styles.statContent}>
            <span className={styles.statLabel}>Active API Keys</span>
            <h3>{stats.activeKeys}</h3>
            <span className={styles.statChange}>
              <FiCheck /> All keys operational
            </span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiZap />
          </div>
          <div className={styles.statContent}>
            <span className={styles.statLabel}>Avg Response Time</span>
            <h3>{stats.avgResponseTime}</h3>
            <span className={styles.statChange}>
              <FiTrendingUp /> -5ms improvement
            </span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiBarChart2 />
          </div>
          <div className={styles.statContent}>
            <span className={styles.statLabel}>Success Rate</span>
            <h3>{stats.successRate}</h3>
            <span className={styles.statChange}>
              <FiCheck /> Excellent performance
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className={styles.tabs}>
        <button 
          className={`${styles.tab} ${activeTab === 'overview' ? styles.active : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          <FiActivity /> Overview
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'keys' ? styles.active : ''}`}
          onClick={() => setActiveTab('keys')}
        >
          <FiKey /> API Keys ({apiKeys.length})
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'endpoints' ? styles.active : ''}`}
          onClick={() => setActiveTab('endpoints')}
        >
          <FiCode /> Endpoints ({endpoints.length})
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'usage' ? styles.active : ''}`}
          onClick={() => setActiveTab('usage')}
        >
          <FiBarChart2 /> Usage Analytics
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'settings' ? styles.active : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          <FiSettings /> Settings
        </button>
      </div>

      {/* Tab Content */}
      <div className={styles.tabContent}>
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className={styles.overviewTab}>
            <div className={styles.overviewGrid}>
              {/* Real-time Stats */}
              <div className={styles.overviewCard}>
                <div className={styles.cardHeader}>
                  <h3><FiActivity /> Real-time Statistics</h3>
                  <button className={styles.refreshBtn}>
                    <FiRefreshCw /> Refresh
                  </button>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.statRow}>
                    <span>Requests Today</span>
                    <strong>{stats.requestsToday}</strong>
                  </div>
                  <div className={styles.statRow}>
                    <span>Error Rate</span>
                    <strong className={styles.errorRate}>{stats.errorRate}</strong>
                  </div>
                  <div className={styles.statRow}>
                    <span>API Uptime</span>
                    <strong className={styles.uptime}>{stats.uptime}</strong>
                  </div>
                  <div className={styles.statRow}>
                    <span>Total Endpoints</span>
                    <strong>{stats.totalEndpoints}</strong>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className={styles.overviewCard}>
                <div className={styles.cardHeader}>
                  <h3><FiClock /> Recent Activity</h3>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.activityItem}>
                    <div className={styles.activityIcon}>
                      <FiKey />
                    </div>
                    <div className={styles.activityContent}>
                      <p>New API key created: <strong>Production API Key</strong></p>
                      <span>2 hours ago</span>
                    </div>
                  </div>
                  <div className={styles.activityItem}>
                    <div className={styles.activityIcon}>
                      <FiCode />
                    </div>
                    <div className={styles.activityContent}>
                      <p>Endpoint updated: <strong>GET /api/v1/users</strong></p>
                      <span>5 hours ago</span>
                    </div>
                  </div>
                  <div className={styles.activityItem}>
                    <div className={styles.activityIcon}>
                      <FiAlertCircle />
                    </div>
                    <div className={styles.activityContent}>
                      <p>Rate limit exceeded for <strong>Development Key</strong></p>
                      <span>1 day ago</span>
                    </div>
                  </div>
                  <div className={styles.activityItem}>
                    <div className={styles.activityIcon}>
                      <FiShield />
                    </div>
                    <div className={styles.activityContent}>
                      <p>Security scan completed: <strong>No issues found</strong></p>
                      <span>2 days ago</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* System Health */}
              <div className={styles.overviewCard}>
                <div className={styles.cardHeader}>
                  <h3><FiServer /> System Health</h3>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.healthMetric}>
                    <div className={styles.metricHeader}>
                      <span><FiCpu /> CPU Usage</span>
                      <strong>45%</strong>
                    </div>
                    <div className={styles.progressBar}>
                      <div className={styles.progress} style={{ width: '45%', backgroundColor: '#22c55e' }}></div>
                    </div>
                  </div>
                  <div className={styles.healthMetric}>
                    <div className={styles.metricHeader}>
                      <span><FiHardDrive /> Memory Usage</span>
                      <strong>67%</strong>
                    </div>
                    <div className={styles.progressBar}>
                      <div className={styles.progress} style={{ width: '67%', backgroundColor: '#f59e0b' }}></div>
                    </div>
                  </div>
                  <div className={styles.healthMetric}>
                    <div className={styles.metricHeader}>
                      <span><FiDatabase /> Database</span>
                      <strong>32%</strong>
                    </div>
                    <div className={styles.progressBar}>
                      <div className={styles.progress} style={{ width: '32%', backgroundColor: '#22c55e' }}></div>
                    </div>
                  </div>
                  <div className={styles.healthMetric}>
                    <div className={styles.metricHeader}>
                      <span><FiWifi /> Network</span>
                      <strong>Stable</strong>
                    </div>
                    <div className={styles.progressBar}>
                      <div className={styles.progress} style={{ width: '100%', backgroundColor: '#22c55e' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className={styles.overviewCard}>
                <div className={styles.cardHeader}>
                  <h3><FiZap /> Quick Actions</h3>
                </div>
                <div className={styles.cardBody}>
                  <button className={styles.quickActionBtn} onClick={() => setShowKeyModal(true)}>
                    <FiPlus /> Create New API Key
                  </button>
                  <button className={styles.quickActionBtn}>
                    <FiBook /> View Documentation
                  </button>
                  <button className={styles.quickActionBtn}>
                    <FiDownload /> Export Usage Report
                  </button>
                  <button className={styles.quickActionBtn}>
                    <FiShield /> Run Security Scan
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* API Keys Tab */}
        {activeTab === 'keys' && (
          <div className={styles.keysTab}>
            <div className={styles.keysTable}>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Key</th>
                    <th>Environment</th>
                    <th>Status</th>
                    <th>Created</th>
                    <th>Last Used</th>
                    <th>Requests</th>
                    <th>Rate Limit</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {apiKeys.map(key => (
                    <tr key={key.id}>
                      <td>
                        <div className={styles.keyName}>
                          <FiKey />
                          <span>{key.name}</span>
                        </div>
                      </td>
                      <td>
                        <div className={styles.keyValue}>
                          <code>
                            {visibleKeys[key.id] ? key.key : '••••••••••••••••••••••••••••••••••'}
                          </code>
                          <button 
                            className={styles.iconBtn}
                            onClick={() => toggleKeyVisibility(key.id)}
                          >
                            {visibleKeys[key.id] ? <FiEyeOff /> : <FiEye />}
                          </button>
                          <button 
                            className={styles.iconBtn}
                            onClick={() => copyToClipboard(key.key)}
                          >
                            <FiCopy />
                          </button>
                        </div>
                      </td>
                      <td>
                        <span className={`${styles.envBadge} ${styles[key.environment]}`}>
                          {key.environment}
                        </span>
                      </td>
                      <td>
                        <span className={`${styles.statusBadge} ${styles[key.status]}`}>
                          {key.status === 'active' ? <FiCheck /> : <FiX />}
                          {key.status}
                        </span>
                      </td>
                      <td>{key.createdDate}</td>
                      <td>{key.lastUsed}</td>
                      <td>{key.requests.toLocaleString()}</td>
                      <td>{key.rateLimit}</td>
                      <td>
                        <div className={styles.actionButtons}>
                          <button className={styles.iconBtn} title="Settings">
                            <FiSettings />
                          </button>
                          <button 
                            className={styles.iconBtn} 
                            title="Revoke"
                            onClick={() => {
                              setSelectedKey(key);
                              setShowRevokeModal(true);
                            }}
                          >
                            <FiTrash2 />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Endpoints Tab */}
        {activeTab === 'endpoints' && (
          <div className={styles.endpointsTab}>
            {/* Filters */}
            <div className={styles.controls}>
              <div className={styles.searchBox}>
                <FiSearch />
                <input 
                  type="text" 
                  placeholder="Search endpoints..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select 
                className={styles.filterSelect}
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat === 'all' ? 'All Categories' : cat}
                  </option>
                ))}
              </select>
              <select 
                className={styles.filterSelect}
                value={filterMethod}
                onChange={(e) => setFilterMethod(e.target.value)}
              >
                {methods.map(method => (
                  <option key={method} value={method}>
                    {method === 'all' ? 'All Methods' : method}
                  </option>
                ))}
              </select>
              <select 
                className={styles.filterSelect}
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                {statuses.map(status => (
                  <option key={status} value={status}>
                    {status === 'all' ? 'All Status' : status}
                  </option>
                ))}
              </select>
            </div>

            {/* Endpoints List */}
            <div className={styles.endpointsList}>
              {filteredEndpoints.map(endpoint => (
                <div key={endpoint.id} className={styles.endpointCard}>
                  <div className={styles.endpointHeader}>
                    <div className={styles.endpointTitle}>
                      <span className={`${styles.methodBadge} ${styles[endpoint.method.toLowerCase()]}`}>
                        {endpoint.method}
                      </span>
                      <code className={styles.endpointPath}>{endpoint.path}</code>
                      {endpoint.deprecated && (
                        <span className={styles.deprecatedBadge}>
                          <FiAlertCircle /> Deprecated
                        </span>
                      )}
                    </div>
                    <div className={styles.endpointActions}>
                      <button 
                        className={styles.iconBtn}
                        onClick={() => {
                          setSelectedEndpoint(endpoint);
                          setShowEndpointModal(true);
                        }}
                      >
                        <FiInfo /> Details
                      </button>
                    </div>
                  </div>
                  <p className={styles.endpointDescription}>{endpoint.description}</p>
                  <div className={styles.endpointMeta}>
                    <div className={styles.metaItem}>
                      <FiActivity />
                      <span>{endpoint.requests.toLocaleString()} requests</span>
                    </div>
                    <div className={styles.metaItem}>
                      <FiZap />
                      <span>{endpoint.avgResponseTime} avg</span>
                    </div>
                    <div className={styles.metaItem}>
                      <FiBarChart2 />
                      <span>{endpoint.successRate}% success</span>
                    </div>
                    <div className={styles.metaItem}>
                      {endpoint.authRequired ? <FiLock /> : <FiUnlock />}
                      <span>{endpoint.authRequired ? 'Auth required' : 'Public'}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <FiClock />
                      <span>{endpoint.rateLimit}</span>
                    </div>
                  </div>
                  <div className={styles.endpointFooter}>
                    <span className={`${styles.statusBadge} ${styles[endpoint.status]}`}>
                      {endpoint.status}
                    </span>
                    <span className={styles.category}>{endpoint.category}</span>
                    <span className={styles.version}>{endpoint.version}</span>
                  </div>
                </div>
              ))}
            </div>

            {filteredEndpoints.length === 0 && (
              <div className={styles.emptyState}>
                <FiCode />
                <h3>No endpoints found</h3>
                <p>Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        )}

        {/* Usage Analytics Tab */}
        {activeTab === 'usage' && (
          <div className={styles.usageTab}>
            <div className={styles.usageGrid}>
              <div className={styles.usageCard}>
                <h3><FiActivity /> Request Trends</h3>
                <div className={styles.chartPlaceholder}>
                  <p>Chart: API requests over time</p>
                  <p className={styles.note}>Showing last 30 days</p>
                </div>
              </div>
              <div className={styles.usageCard}>
                <h3><FiBarChart2 /> Top Endpoints</h3>
                <div className={styles.topEndpoints}>
                  {endpoints
                    .sort((a, b) => b.requests - a.requests)
                    .slice(0, 5)
                    .map((endpoint, index) => (
                      <div key={endpoint.id} className={styles.topEndpointItem}>
                        <span className={styles.rank}>#{index + 1}</span>
                        <code>{endpoint.path}</code>
                        <span className={styles.requests}>{endpoint.requests.toLocaleString()}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className={styles.settingsTab}>
            <div className={styles.settingsSection}>
              <h3><FiShield /> Security Settings</h3>
              <div className={styles.settingItem}>
                <div>
                  <h4>Require API Key Authentication</h4>
                  <p>All requests must include a valid API key</p>
                </div>
                <label className={styles.toggle}>
                  <input type="checkbox" defaultChecked />
                  <span className={styles.slider}></span>
                </label>
              </div>
              <div className={styles.settingItem}>
                <div>
                  <h4>Enable IP Whitelisting</h4>
                  <p>Restrict API access to specific IP addresses</p>
                </div>
                <label className={styles.toggle}>
                  <input type="checkbox" />
                  <span className={styles.slider}></span>
                </label>
              </div>
              <div className={styles.settingItem}>
                <div>
                  <h4>CORS Configuration</h4>
                  <p>Configure Cross-Origin Resource Sharing</p>
                </div>
                <button className={styles.configBtn}>Configure</button>
              </div>
            </div>

            <div className={styles.settingsSection}>
              <h3><FiZap /> Rate Limiting</h3>
              <div className={styles.settingItem}>
                <div>
                  <h4>Default Rate Limit</h4>
                  <p>Maximum requests per hour for new API keys</p>
                </div>
                <select className={styles.settingSelect}>
                  <option>1000 requests/hour</option>
                  <option>5000 requests/hour</option>
                  <option>10000 requests/hour</option>
                  <option>Unlimited</option>
                </select>
              </div>
              <div className={styles.settingItem}>
                <div>
                  <h4>Burst Protection</h4>
                  <p>Limit sudden spikes in API requests</p>
                </div>
                <label className={styles.toggle}>
                  <input type="checkbox" defaultChecked />
                  <span className={styles.slider}></span>
                </label>
              </div>
            </div>

            <div className={styles.settingsSection}>
              <h3><FiGlobe /> API Versioning</h3>
              <div className={styles.settingItem}>
                <div>
                  <h4>Current Version</h4>
                  <p>Active API version</p>
                </div>
                <span className={styles.versionBadge}>v1</span>
              </div>
              <div className={styles.settingItem}>
                <div>
                  <h4>Deprecation Policy</h4>
                  <p>Minimum notice period before deprecating endpoints</p>
                </div>
                <select className={styles.settingSelect}>
                  <option>30 days</option>
                  <option>60 days</option>
                  <option>90 days</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Create API Key Modal */}
      {showKeyModal && (
        <div className={styles.modalOverlay} onClick={() => setShowKeyModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2><FiKey /> Create New API Key</h2>
              <button className={styles.closeBtn} onClick={() => setShowKeyModal(false)}>
                <FiX />
              </button>
            </div>
            <form onSubmit={handleCreateKey}>
              <div className={styles.modalBody}>
                <div className={styles.formGroup}>
                  <label>Key Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="e.g., Production API Key"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Environment *</label>
                  <select name="environment" required>
                    <option value="production">Production</option>
                    <option value="development">Development</option>
                    <option value="staging">Staging</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label>Rate Limit *</label>
                  <select name="rateLimit" required>
                    <option value="100/hour">100 requests/hour</option>
                    <option value="1000/hour">1,000 requests/hour</option>
                    <option value="5000/hour">5,000 requests/hour</option>
                    <option value="10000/hour">10,000 requests/hour</option>
                    <option value="unlimited">Unlimited</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label>Permissions *</label>
                  <div className={styles.checkboxGroup}>
                    <label>
                      <input type="checkbox" name="permissions" value="read" defaultChecked />
                      Read
                    </label>
                    <label>
                      <input type="checkbox" name="permissions" value="write" />
                      Write
                    </label>
                    <label>
                      <input type="checkbox" name="permissions" value="delete" />
                      Delete
                    </label>
                  </div>
                </div>
                <div className={styles.infoBox}>
                  <FiInfo />
                  <p>Once created, make sure to copy your API key. You won't be able to see it again!</p>
                </div>
              </div>
              <div className={styles.modalFooter}>
                <button type="button" className={styles.cancelBtn} onClick={() => setShowKeyModal(false)}>
                  Cancel
                </button>
                <button type="submit" className={styles.submitBtn}>
                  <FiPlus /> Create API Key
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Revoke Key Modal */}
      {showRevokeModal && (
        <div className={styles.modalOverlay} onClick={() => setShowRevokeModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2><FiAlertCircle /> Revoke API Key</h2>
              <button className={styles.closeBtn} onClick={() => setShowRevokeModal(false)}>
                <FiX />
              </button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.warningBox}>
                <FiAlertCircle />
                <div>
                  <h4>Are you sure you want to revoke this API key?</h4>
                  <p>Key: <strong>{selectedKey?.name}</strong></p>
                  <p>This action cannot be undone. All applications using this key will immediately lose access.</p>
                </div>
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.cancelBtn} onClick={() => setShowRevokeModal(false)}>
                Cancel
              </button>
              <button className={styles.deleteBtn} onClick={handleRevokeKey}>
                <FiTrash2 /> Revoke Key
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Endpoint Details Modal */}
      {showEndpointModal && selectedEndpoint && (
        <div className={styles.modalOverlay} onClick={() => setShowEndpointModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2><FiCode /> Endpoint Details</h2>
              <button className={styles.closeBtn} onClick={() => setShowEndpointModal(false)}>
                <FiX />
              </button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.endpointDetail}>
                <div className={styles.detailRow}>
                  <span className={`${styles.methodBadge} ${styles[selectedEndpoint.method.toLowerCase()]}`}>
                    {selectedEndpoint.method}
                  </span>
                  <code>{selectedEndpoint.path}</code>
                </div>
                <p className={styles.detailDescription}>{selectedEndpoint.description}</p>
                
                <div className={styles.detailSection}>
                  <h4>Performance Metrics</h4>
                  <div className={styles.metricsGrid}>
                    <div className={styles.metric}>
                      <span>Total Requests</span>
                      <strong>{selectedEndpoint.requests.toLocaleString()}</strong>
                    </div>
                    <div className={styles.metric}>
                      <span>Avg Response Time</span>
                      <strong>{selectedEndpoint.avgResponseTime}</strong>
                    </div>
                    <div className={styles.metric}>
                      <span>Success Rate</span>
                      <strong>{selectedEndpoint.successRate}%</strong>
                    </div>
                    <div className={styles.metric}>
                      <span>Rate Limit</span>
                      <strong>{selectedEndpoint.rateLimit}</strong>
                    </div>
                  </div>
                </div>

                <div className={styles.detailSection}>
                  <h4>Configuration</h4>
                  <div className={styles.configItem}>
                    <span>Authentication:</span>
                    <strong>{selectedEndpoint.authRequired ? 'Required' : 'Not Required'}</strong>
                  </div>
                  <div className={styles.configItem}>
                    <span>Version:</span>
                    <strong>{selectedEndpoint.version}</strong>
                  </div>
                  <div className={styles.configItem}>
                    <span>Status:</span>
                    <span className={`${styles.statusBadge} ${styles[selectedEndpoint.status]}`}>
                      {selectedEndpoint.status}
                    </span>
                  </div>
                  <div className={styles.configItem}>
                    <span>Category:</span>
                    <strong>{selectedEndpoint.category}</strong>
                  </div>
                </div>

                <div className={styles.detailSection}>
                  <h4>Example Request</h4>
                  <div className={styles.codeBlock}>
                    <code>
                      curl -X {selectedEndpoint.method} \<br/>
                      &nbsp;&nbsp;{window.location.origin}{selectedEndpoint.path} \<br/>
                      &nbsp;&nbsp;-H "Authorization: Bearer YOUR_API_KEY" \<br/>
                      &nbsp;&nbsp;-H "Content-Type: application/json"
                    </code>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.secondaryBtn}>
                <FiBook /> View Docs
              </button>
              <button className={styles.primaryBtn} onClick={() => setShowEndpointModal(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default APIManagement;
