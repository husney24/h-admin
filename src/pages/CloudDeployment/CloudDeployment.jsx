import React, { useState } from 'react';
import {
  FiCloud,
  FiPlus,
  FiSearch,
  FiFilter,
  FiSettings,
  FiTrash2,
  FiRefreshCw,
  FiDownload,
  FiUpload,
  FiActivity,
  FiTrendingUp,
  FiClock,
  FiAlertCircle,
  FiCheck,
  FiX,
  FiCode,
  FiServer,
  FiGlobe,
  FiCpu,
  FiZap,
  FiShield,
  FiLock,
  FiUnlock,
  FiEdit,
  FiEye,
  FiPlay,
  FiPause,
  FiBarChart2,
  FiPackage,
  FiGitBranch,
  FiGithub,
  FiBox,
  FiLayers,
  FiTerminal,
  FiFolder,
  FiFileText,
  FiInfo,
  FiAlertTriangle,
  FiCheckCircle,
  FiXCircle,
  FiLoader
} from 'react-icons/fi';
import { FaAws, FaGoogle, FaDigitalOcean, FaDocker } from 'react-icons/fa';
import styles from './CloudDeployment.module.scss';

const CloudDeployment = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [deployments, setDeployments] = useState([
    {
      id: 1,
      name: 'Production Website',
      project: 'E-commerce Platform',
      environment: 'production',
      provider: 'AWS',
      region: 'us-east-1',
      status: 'running',
      health: 'healthy',
      version: 'v2.4.1',
      instances: 3,
      cpu: 45,
      memory: 67,
      uptime: '45 days',
      lastDeployed: '2 hours ago',
      deployedBy: 'admin',
      url: 'https://store.example.com',
      branch: 'main',
      commits: 156
    },
    {
      id: 2,
      name: 'Staging API',
      project: 'Backend Services',
      environment: 'staging',
      provider: 'Google Cloud',
      region: 'us-west-2',
      status: 'running',
      health: 'healthy',
      version: 'v1.8.3',
      instances: 2,
      cpu: 32,
      memory: 48,
      uptime: '15 days',
      lastDeployed: '5 hours ago',
      deployedBy: 'developer',
      url: 'https://api-staging.example.com',
      branch: 'develop',
      commits: 89
    },
    {
      id: 3,
      name: 'Mobile Backend',
      project: 'Mobile App API',
      environment: 'production',
      provider: 'AWS',
      region: 'eu-west-1',
      status: 'running',
      health: 'degraded',
      version: 'v3.2.0',
      instances: 5,
      cpu: 78,
      memory: 82,
      uptime: '60 days',
      lastDeployed: '1 day ago',
      deployedBy: 'admin',
      url: 'https://api.mobile.example.com',
      branch: 'main',
      commits: 234
    },
    {
      id: 4,
      name: 'Analytics Service',
      project: 'Data Processing',
      environment: 'production',
      provider: 'DigitalOcean',
      region: 'nyc3',
      status: 'running',
      health: 'healthy',
      version: 'v1.5.2',
      instances: 4,
      cpu: 56,
      memory: 71,
      uptime: '30 days',
      lastDeployed: '3 hours ago',
      deployedBy: 'devops',
      url: 'https://analytics.example.com',
      branch: 'main',
      commits: 178
    },
    {
      id: 5,
      name: 'Development Site',
      project: 'Test Environment',
      environment: 'development',
      provider: 'Google Cloud',
      region: 'us-central1',
      status: 'stopped',
      health: 'unknown',
      version: 'v0.9.0',
      instances: 1,
      cpu: 0,
      memory: 0,
      uptime: '0 days',
      lastDeployed: '2 days ago',
      deployedBy: 'developer',
      url: 'https://dev.example.com',
      branch: 'feature/new-ui',
      commits: 45
    }
  ]);

  const [pipelines, setPipelines] = useState([
    {
      id: 1,
      name: 'Production Deploy',
      deployment: 'Production Website',
      status: 'success',
      stage: 'completed',
      duration: '4m 32s',
      startTime: '2024-10-18 08:30:00',
      endTime: '2024-10-18 08:34:32',
      triggeredBy: 'admin',
      branch: 'main',
      commit: 'a7f3c2d',
      message: 'Update payment gateway integration',
      steps: [
        { name: 'Build', status: 'success', duration: '2m 15s' },
        { name: 'Test', status: 'success', duration: '1m 30s' },
        { name: 'Deploy', status: 'success', duration: '45s' }
      ]
    },
    {
      id: 2,
      name: 'Staging Deploy',
      deployment: 'Staging API',
      status: 'running',
      stage: 'deploying',
      duration: '2m 15s',
      startTime: '2024-10-18 10:45:00',
      endTime: null,
      triggeredBy: 'developer',
      branch: 'develop',
      commit: 'b8e4d3f',
      message: 'Add new API endpoints',
      steps: [
        { name: 'Build', status: 'success', duration: '1m 45s' },
        { name: 'Test', status: 'success', duration: '30s' },
        { name: 'Deploy', status: 'running', duration: '0s' }
      ]
    },
    {
      id: 3,
      name: 'Mobile Backend Deploy',
      deployment: 'Mobile Backend',
      status: 'failed',
      stage: 'testing',
      duration: '1m 45s',
      startTime: '2024-10-18 09:15:00',
      endTime: '2024-10-18 09:16:45',
      triggeredBy: 'admin',
      branch: 'hotfix/auth-issue',
      commit: 'c9f5e4a',
      message: 'Fix authentication bug',
      steps: [
        { name: 'Build', status: 'success', duration: '1m 30s' },
        { name: 'Test', status: 'failed', duration: '15s' },
        { name: 'Deploy', status: 'skipped', duration: '0s' }
      ]
    }
  ]);

  const [servers, setServers] = useState([
    {
      id: 1,
      name: 'prod-web-01',
      deployment: 'Production Website',
      type: 't3.large',
      status: 'running',
      cpu: 45,
      memory: 67,
      disk: 42,
      network: 'stable',
      ip: '54.123.45.67',
      uptime: '45 days'
    },
    {
      id: 2,
      name: 'prod-web-02',
      deployment: 'Production Website',
      type: 't3.large',
      status: 'running',
      cpu: 38,
      memory: 54,
      disk: 38,
      network: 'stable',
      ip: '54.123.45.68',
      uptime: '45 days'
    },
    {
      id: 3,
      name: 'staging-api-01',
      deployment: 'Staging API',
      type: 't3.medium',
      status: 'running',
      cpu: 32,
      memory: 48,
      disk: 35,
      network: 'stable',
      ip: '35.234.56.78',
      uptime: '15 days'
    },
    {
      id: 4,
      name: 'mobile-api-01',
      deployment: 'Mobile Backend',
      type: 't3.xlarge',
      status: 'running',
      cpu: 78,
      memory: 82,
      disk: 56,
      network: 'degraded',
      ip: '18.156.78.90',
      uptime: '60 days'
    }
  ]);

  const [showDeployModal, setShowDeployModal] = useState(false);
  const [showPipelineModal, setShowPipelineModal] = useState(false);
  const [showServerModal, setShowServerModal] = useState(false);
  const [selectedDeployment, setSelectedDeployment] = useState(null);
  const [selectedPipeline, setSelectedPipeline] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterEnvironment, setFilterEnvironment] = useState('all');
  const [filterProvider, setFilterProvider] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  // Stats
  const stats = {
    totalDeployments: deployments.length,
    runningDeployments: deployments.filter(d => d.status === 'running').length,
    healthyServices: deployments.filter(d => d.health === 'healthy').length,
    totalServers: servers.length,
    activePipelines: pipelines.filter(p => p.status === 'running').length,
    successRate: '94.5%',
    avgDeployTime: '3m 45s',
    deployToday: 12
  };

  // Get provider icon
  const getProviderIcon = (provider) => {
    switch(provider) {
      case 'AWS': return <FaAws />;
      case 'Google Cloud': return <FaGoogle />;
      case 'DigitalOcean': return <FaDigitalOcean />;
      default: return <FiCloud />;
    }
  };

  // Filter deployments
  const filteredDeployments = deployments.filter(deployment => {
    const matchesSearch = deployment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         deployment.project.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesEnvironment = filterEnvironment === 'all' || deployment.environment === filterEnvironment;
    const matchesProvider = filterProvider === 'all' || deployment.provider === filterProvider;
    const matchesStatus = filterStatus === 'all' || deployment.status === filterStatus;
    return matchesSearch && matchesEnvironment && matchesProvider && matchesStatus;
  });

  // Get unique values
  const environments = ['all', ...new Set(deployments.map(d => d.environment))];
  const providers = ['all', ...new Set(deployments.map(d => d.provider))];

  return (
    <div className={styles.cloudDeployment}>
      {/* Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerContent}>
          <div className={styles.titleSection}>
            <div className={styles.iconBadge}>
              <FiCloud />
            </div>
            <div>
              <h1>Cloud Deployment</h1>
              <p>Manage deployments, pipelines, and server infrastructure</p>
            </div>
          </div>
          <div className={styles.headerActions}>
            <button className={styles.secondaryBtn}>
              <FiDownload /> Export Logs
            </button>
            <button className={styles.primaryBtn} onClick={() => setShowDeployModal(true)}>
              <FiPlus /> New Deployment
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiCloud />
          </div>
          <div className={styles.statContent}>
            <span className={styles.statLabel}>Total Deployments</span>
            <h3>{stats.totalDeployments}</h3>
            <span className={styles.statChange}>
              <FiCheck /> {stats.runningDeployments} running
            </span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiServer />
          </div>
          <div className={styles.statContent}>
            <span className={styles.statLabel}>Active Servers</span>
            <h3>{stats.totalServers}</h3>
            <span className={styles.statChange}>
              <FiCheckCircle /> All operational
            </span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiActivity />
          </div>
          <div className={styles.statContent}>
            <span className={styles.statLabel}>Success Rate</span>
            <h3>{stats.successRate}</h3>
            <span className={styles.statChange}>
              <FiTrendingUp /> +2.3% this week
            </span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiZap />
          </div>
          <div className={styles.statContent}>
            <span className={styles.statLabel}>Avg Deploy Time</span>
            <h3>{stats.avgDeployTime}</h3>
            <span className={styles.statChange}>
              <FiClock /> {stats.deployToday} today
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
          <FiCloud /> Overview
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'deployments' ? styles.active : ''}`}
          onClick={() => setActiveTab('deployments')}
        >
          <FiPackage /> Deployments ({deployments.length})
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'pipelines' ? styles.active : ''}`}
          onClick={() => setActiveTab('pipelines')}
        >
          <FiGitBranch /> Pipelines ({pipelines.length})
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'servers' ? styles.active : ''}`}
          onClick={() => setActiveTab('servers')}
        >
          <FiServer /> Servers ({servers.length})
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
              {/* Recent Deployments */}
              <div className={styles.overviewCard}>
                <div className={styles.cardHeader}>
                  <h3><FiPackage /> Recent Deployments</h3>
                  <button className={styles.refreshBtn}>
                    <FiRefreshCw /> Refresh
                  </button>
                </div>
                <div className={styles.cardBody}>
                  {deployments.slice(0, 4).map(deploy => (
                    <div key={deploy.id} className={styles.deployItem}>
                      <div className={styles.deployInfo}>
                        <div className={styles.deployName}>
                          {getProviderIcon(deploy.provider)}
                          <span>{deploy.name}</span>
                        </div>
                        <span className={styles.deployEnv}>{deploy.environment}</span>
                      </div>
                      <span className={`${styles.statusBadge} ${styles[deploy.status]}`}>
                        {deploy.status === 'running' ? <FiCheck /> : <FiX />}
                        {deploy.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Active Pipelines */}
              <div className={styles.overviewCard}>
                <div className={styles.cardHeader}>
                  <h3><FiGitBranch /> Active Pipelines</h3>
                </div>
                <div className={styles.cardBody}>
                  {pipelines.map(pipeline => (
                    <div key={pipeline.id} className={styles.pipelineItem}>
                      <div className={styles.pipelineInfo}>
                        <div className={styles.pipelineName}>
                          <FiGitBranch />
                          <span>{pipeline.name}</span>
                        </div>
                        <span className={styles.pipelineStage}>{pipeline.stage}</span>
                      </div>
                      <span className={`${styles.statusBadge} ${styles[pipeline.status]}`}>
                        {pipeline.status === 'success' ? <FiCheck /> : 
                         pipeline.status === 'failed' ? <FiX /> : <FiLoader />}
                        {pipeline.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Server Health */}
              <div className={styles.overviewCard}>
                <div className={styles.cardHeader}>
                  <h3><FiServer /> Server Health</h3>
                </div>
                <div className={styles.cardBody}>
                  {servers.map(server => (
                    <div key={server.id} className={styles.serverHealthItem}>
                      <div className={styles.serverInfo}>
                        <span className={styles.serverName}>{server.name}</span>
                        <span className={styles.serverType}>{server.type}</span>
                      </div>
                      <div className={styles.healthMetrics}>
                        <div className={styles.metric}>
                          <span>CPU</span>
                          <strong>{server.cpu}%</strong>
                        </div>
                        <div className={styles.metric}>
                          <span>MEM</span>
                          <strong>{server.memory}%</strong>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className={styles.overviewCard}>
                <div className={styles.cardHeader}>
                  <h3><FiZap /> Quick Actions</h3>
                </div>
                <div className={styles.cardBody}>
                  <button className={styles.quickActionBtn} onClick={() => setShowDeployModal(true)}>
                    <FiPlay /> Deploy to Production
                  </button>
                  <button className={styles.quickActionBtn}>
                    <FiGitBranch /> Run Pipeline
                  </button>
                  <button className={styles.quickActionBtn}>
                    <FiTerminal /> SSH to Server
                  </button>
                  <button className={styles.quickActionBtn}>
                    <FiDownload /> Download Logs
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Deployments Tab */}
        {activeTab === 'deployments' && (
          <div className={styles.deploymentsTab}>
            {/* Filters */}
            <div className={styles.controls}>
              <div className={styles.searchBox}>
                <FiSearch />
                <input 
                  type="text" 
                  placeholder="Search deployments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select 
                className={styles.filterSelect}
                value={filterEnvironment}
                onChange={(e) => setFilterEnvironment(e.target.value)}
              >
                {environments.map(env => (
                  <option key={env} value={env}>
                    {env === 'all' ? 'All Environments' : env}
                  </option>
                ))}
              </select>
              <select 
                className={styles.filterSelect}
                value={filterProvider}
                onChange={(e) => setFilterProvider(e.target.value)}
              >
                {providers.map(prov => (
                  <option key={prov} value={prov}>
                    {prov === 'all' ? 'All Providers' : prov}
                  </option>
                ))}
              </select>
              <select 
                className={styles.filterSelect}
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="running">Running</option>
                <option value="stopped">Stopped</option>
              </select>
            </div>

            {/* Deployments Grid */}
            <div className={styles.deploymentsGrid}>
              {filteredDeployments.map(deploy => (
                <div key={deploy.id} className={styles.deploymentCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.deployTitle}>
                      <div className={styles.providerIcon}>
                        {getProviderIcon(deploy.provider)}
                      </div>
                      <div>
                        <h3>{deploy.name}</h3>
                        <span className={styles.project}>{deploy.project}</span>
                      </div>
                    </div>
                    <div className={styles.badges}>
                      <span className={`${styles.envBadge} ${styles[deploy.environment]}`}>
                        {deploy.environment}
                      </span>
                      <span className={`${styles.healthBadge} ${styles[deploy.health]}`}>
                        {deploy.health === 'healthy' ? <FiCheckCircle /> : 
                         deploy.health === 'degraded' ? <FiAlertTriangle /> : <FiXCircle />}
                        {deploy.health}
                      </span>
                    </div>
                  </div>

                  <div className={styles.cardBody}>
                    <div className={styles.deployMeta}>
                      <div className={styles.metaItem}>
                        <span>Version</span>
                        <strong>{deploy.version}</strong>
                      </div>
                      <div className={styles.metaItem}>
                        <span>Region</span>
                        <strong>{deploy.region}</strong>
                      </div>
                      <div className={styles.metaItem}>
                        <span>Instances</span>
                        <strong>{deploy.instances}</strong>
                      </div>
                      <div className={styles.metaItem}>
                        <span>Uptime</span>
                        <strong>{deploy.uptime}</strong>
                      </div>
                    </div>

                    <div className={styles.resourceMetrics}>
                      <div className={styles.resourceItem}>
                        <div className={styles.resourceHeader}>
                          <span><FiCpu /> CPU</span>
                          <strong>{deploy.cpu}%</strong>
                        </div>
                        <div className={styles.progressBar}>
                          <div 
                            className={styles.progress} 
                            style={{ 
                              width: `${deploy.cpu}%`,
                              backgroundColor: deploy.cpu > 80 ? '#ef4444' : deploy.cpu > 60 ? '#f59e0b' : '#22c55e'
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className={styles.resourceItem}>
                        <div className={styles.resourceHeader}>
                          <span><FiActivity /> Memory</span>
                          <strong>{deploy.memory}%</strong>
                        </div>
                        <div className={styles.progressBar}>
                          <div 
                            className={styles.progress} 
                            style={{ 
                              width: `${deploy.memory}%`,
                              backgroundColor: deploy.memory > 80 ? '#ef4444' : deploy.memory > 60 ? '#f59e0b' : '#22c55e'
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className={styles.deployDetails}>
                      <div className={styles.detailItem}>
                        <FiGitBranch />
                        <span>{deploy.branch} ({deploy.commits} commits)</span>
                      </div>
                      <div className={styles.detailItem}>
                        <FiClock />
                        <span>Deployed {deploy.lastDeployed}</span>
                      </div>
                      <div className={styles.detailItem}>
                        <FiGlobe />
                        <a href={deploy.url} target="_blank" rel="noopener noreferrer">{deploy.url}</a>
                      </div>
                    </div>
                  </div>

                  <div className={styles.cardFooter}>
                    <button className={styles.actionBtn}>
                      <FiEye /> Monitor
                    </button>
                    <button className={styles.actionBtn}>
                      <FiPlay /> Redeploy
                    </button>
                    <button className={styles.actionBtn}>
                      <FiTerminal /> Console
                    </button>
                    <button className={styles.actionBtn}>
                      <FiSettings /> Configure
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredDeployments.length === 0 && (
              <div className={styles.emptyState}>
                <FiCloud />
                <h3>No deployments found</h3>
                <p>Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        )}

        {/* Pipelines Tab */}
        {activeTab === 'pipelines' && (
          <div className={styles.pipelinesTab}>
            <div className={styles.pipelinesHeader}>
              <button className={styles.primaryBtn}>
                <FiPlay /> Run Pipeline
              </button>
            </div>

            <div className={styles.pipelinesList}>
              {pipelines.map(pipeline => (
                <div key={pipeline.id} className={styles.pipelineCard}>
                  <div className={styles.pipelineHeader}>
                    <div className={styles.pipelineTitle}>
                      <FiGitBranch />
                      <div>
                        <h3>{pipeline.name}</h3>
                        <span className={styles.deployment}>{pipeline.deployment}</span>
                      </div>
                    </div>
                    <span className={`${styles.statusBadge} ${styles[pipeline.status]}`}>
                      {pipeline.status === 'success' ? <FiCheckCircle /> : 
                       pipeline.status === 'failed' ? <FiXCircle /> : <FiLoader />}
                      {pipeline.status}
                    </span>
                  </div>

                  <div className={styles.pipelineBody}>
                    <div className={styles.pipelineInfo}>
                      <div className={styles.infoItem}>
                        <FiGithub />
                        <span>{pipeline.branch} • {pipeline.commit}</span>
                      </div>
                      <div className={styles.infoItem}>
                        <FiFileText />
                        <span>{pipeline.message}</span>
                      </div>
                      <div className={styles.infoItem}>
                        <FiClock />
                        <span>Started {pipeline.startTime} • Duration: {pipeline.duration}</span>
                      </div>
                    </div>

                    <div className={styles.pipelineSteps}>
                      {pipeline.steps.map((step, index) => (
                        <div key={index} className={`${styles.step} ${styles[step.status]}`}>
                          <div className={styles.stepIcon}>
                            {step.status === 'success' ? <FiCheck /> : 
                             step.status === 'failed' ? <FiX /> :
                             step.status === 'running' ? <FiLoader /> : <FiClock />}
                          </div>
                          <div className={styles.stepInfo}>
                            <span className={styles.stepName}>{step.name}</span>
                            <span className={styles.stepDuration}>{step.duration}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={styles.pipelineFooter}>
                    <span>Triggered by {pipeline.triggeredBy}</span>
                    <button className={styles.iconBtn}>
                      <FiEye /> View Logs
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Servers Tab */}
        {activeTab === 'servers' && (
          <div className={styles.serversTab}>
            <div className={styles.serversTable}>
              <table>
                <thead>
                  <tr>
                    <th>Server Name</th>
                    <th>Deployment</th>
                    <th>Type</th>
                    <th>Status</th>
                    <th>CPU</th>
                    <th>Memory</th>
                    <th>Disk</th>
                    <th>Network</th>
                    <th>IP Address</th>
                    <th>Uptime</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {servers.map(server => (
                    <tr key={server.id}>
                      <td>
                        <div className={styles.serverName}>
                          <FiServer />
                          <span>{server.name}</span>
                        </div>
                      </td>
                      <td>{server.deployment}</td>
                      <td>
                        <span className={styles.typeBadge}>{server.type}</span>
                      </td>
                      <td>
                        <span className={`${styles.statusBadge} ${styles[server.status]}`}>
                          {server.status === 'running' ? <FiCheck /> : <FiX />}
                          {server.status}
                        </span>
                      </td>
                      <td>
                        <span className={server.cpu > 80 ? styles.critical : server.cpu > 60 ? styles.warning : ''}>
                          {server.cpu}%
                        </span>
                      </td>
                      <td>
                        <span className={server.memory > 80 ? styles.critical : server.memory > 60 ? styles.warning : ''}>
                          {server.memory}%
                        </span>
                      </td>
                      <td>{server.disk}%</td>
                      <td>
                        <span className={`${styles.networkBadge} ${styles[server.network]}`}>
                          {server.network}
                        </span>
                      </td>
                      <td><code>{server.ip}</code></td>
                      <td>{server.uptime}</td>
                      <td>
                        <div className={styles.actionButtons}>
                          <button className={styles.iconBtn} title="SSH">
                            <FiTerminal />
                          </button>
                          <button className={styles.iconBtn} title="Monitor">
                            <FiEye />
                          </button>
                          <button className={styles.iconBtn} title="Restart">
                            <FiRefreshCw />
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

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className={styles.settingsTab}>
            <div className={styles.settingsSection}>
              <h3><FiCloud /> Cloud Provider Settings</h3>
              <div className={styles.settingItem}>
                <div>
                  <h4>Default Provider</h4>
                  <p>Select the default cloud provider for new deployments</p>
                </div>
                <select className={styles.settingSelect}>
                  <option>AWS</option>
                  <option>Google Cloud</option>
                  <option>DigitalOcean</option>
                  <option>Azure</option>
                </select>
              </div>
              <div className={styles.settingItem}>
                <div>
                  <h4>Auto-scaling</h4>
                  <p>Automatically scale instances based on load</p>
                </div>
                <label className={styles.toggle}>
                  <input type="checkbox" defaultChecked />
                  <span className={styles.slider}></span>
                </label>
              </div>
            </div>

            <div className={styles.settingsSection}>
              <h3><FiGitBranch /> Deployment Settings</h3>
              <div className={styles.settingItem}>
                <div>
                  <h4>Auto Deploy</h4>
                  <p>Automatically deploy on successful builds</p>
                </div>
                <label className={styles.toggle}>
                  <input type="checkbox" defaultChecked />
                  <span className={styles.slider}></span>
                </label>
              </div>
              <div className={styles.settingItem}>
                <div>
                  <h4>Rollback on Failure</h4>
                  <p>Automatically rollback failed deployments</p>
                </div>
                <label className={styles.toggle}>
                  <input type="checkbox" defaultChecked />
                  <span className={styles.slider}></span>
                </label>
              </div>
            </div>

            <div className={styles.settingsSection}>
              <h3><FiShield /> Security Settings</h3>
              <div className={styles.settingItem}>
                <div>
                  <h4>Enable SSL/TLS</h4>
                  <p>Use encrypted connections for all deployments</p>
                </div>
                <label className={styles.toggle}>
                  <input type="checkbox" defaultChecked />
                  <span className={styles.slider}></span>
                </label>
              </div>
              <div className={styles.settingItem}>
                <div>
                  <h4>Require Approval</h4>
                  <p>Production deployments require manual approval</p>
                </div>
                <label className={styles.toggle}>
                  <input type="checkbox" defaultChecked />
                  <span className={styles.slider}></span>
                </label>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Deploy Modal Placeholder */}
      {showDeployModal && (
        <div className={styles.modalOverlay} onClick={() => setShowDeployModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2><FiCloud /> New Deployment</h2>
              <button className={styles.closeBtn} onClick={() => setShowDeployModal(false)}>
                <FiX />
              </button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.formGroup}>
                <label>Deployment Name *</label>
                <input type="text" placeholder="e.g., Production Website" required />
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Environment *</label>
                  <select required>
                    <option>Production</option>
                    <option>Staging</option>
                    <option>Development</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label>Provider *</label>
                  <select required>
                    <option>AWS</option>
                    <option>Google Cloud</option>
                    <option>DigitalOcean</option>
                  </select>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label>Git Branch *</label>
                <input type="text" placeholder="main" required />
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.cancelBtn} onClick={() => setShowDeployModal(false)}>
                Cancel
              </button>
              <button className={styles.submitBtn}>
                <FiPlay /> Deploy Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CloudDeployment;
