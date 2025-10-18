import React, { useState } from 'react';
import {
  FiDatabase,
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
  FiHardDrive,
  FiCpu,
  FiZap,
  FiShield,
  FiLock,
  FiUnlock,
  FiEdit,
  FiEye,
  FiCopy,
  FiPlay,
  FiPause,
  FiBarChart2,
  FiPieChart,
  FiFileText,
  FiArchive,
  FiPackage,
  FiUsers,
  FiGrid,
  FiList,
  FiInfo,
  FiAlertTriangle
} from 'react-icons/fi';
import styles from './DatabaseManagement.module.scss';

const DatabaseManagement = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [databases, setDatabases] = useState([
    {
      id: 1,
      name: 'production_db',
      type: 'PostgreSQL',
      version: '15.3',
      status: 'running',
      size: '45.2 GB',
      tables: 127,
      connections: 45,
      maxConnections: 100,
      uptime: '45 days',
      lastBackup: '2 hours ago',
      queries: 2456789,
      avgQueryTime: '12ms',
      host: 'prod-db-01.example.com',
      port: 5432
    },
    {
      id: 2,
      name: 'staging_db',
      type: 'PostgreSQL',
      version: '15.3',
      status: 'running',
      size: '12.8 GB',
      tables: 127,
      connections: 12,
      maxConnections: 50,
      uptime: '30 days',
      lastBackup: '1 hour ago',
      queries: 456789,
      avgQueryTime: '15ms',
      host: 'staging-db-01.example.com',
      port: 5432
    },
    {
      id: 3,
      name: 'analytics_db',
      type: 'MongoDB',
      version: '6.0.5',
      status: 'running',
      size: '128.5 GB',
      tables: 45,
      connections: 28,
      maxConnections: 200,
      uptime: '60 days',
      lastBackup: '4 hours ago',
      queries: 5678901,
      avgQueryTime: '8ms',
      host: 'analytics-db-01.example.com',
      port: 27017
    },
    {
      id: 4,
      name: 'cache_db',
      type: 'Redis',
      version: '7.0.11',
      status: 'running',
      size: '2.4 GB',
      tables: 0,
      connections: 89,
      maxConnections: 1000,
      uptime: '90 days',
      lastBackup: 'N/A',
      queries: 12456789,
      avgQueryTime: '1ms',
      host: 'cache-db-01.example.com',
      port: 6379
    },
    {
      id: 5,
      name: 'development_db',
      type: 'PostgreSQL',
      version: '15.3',
      status: 'stopped',
      size: '5.6 GB',
      tables: 127,
      connections: 0,
      maxConnections: 25,
      uptime: '0 days',
      lastBackup: '2 days ago',
      queries: 0,
      avgQueryTime: '0ms',
      host: 'dev-db-01.example.com',
      port: 5432
    }
  ]);

  const [backups, setBackups] = useState([
    {
      id: 1,
      database: 'production_db',
      type: 'Full',
      size: '45.2 GB',
      status: 'completed',
      startTime: '2024-10-18 02:00:00',
      endTime: '2024-10-18 02:45:00',
      duration: '45 min',
      location: 's3://backups/prod/2024-10-18.sql.gz'
    },
    {
      id: 2,
      database: 'staging_db',
      type: 'Full',
      size: '12.8 GB',
      status: 'completed',
      startTime: '2024-10-18 03:00:00',
      endTime: '2024-10-18 03:15:00',
      duration: '15 min',
      location: 's3://backups/staging/2024-10-18.sql.gz'
    },
    {
      id: 3,
      database: 'analytics_db',
      type: 'Incremental',
      size: '8.5 GB',
      status: 'completed',
      startTime: '2024-10-18 00:00:00',
      endTime: '2024-10-18 00:30:00',
      duration: '30 min',
      location: 's3://backups/analytics/2024-10-18-incremental.tar.gz'
    },
    {
      id: 4,
      database: 'production_db',
      type: 'Full',
      size: '44.8 GB',
      status: 'completed',
      startTime: '2024-10-17 02:00:00',
      endTime: '2024-10-17 02:43:00',
      duration: '43 min',
      location: 's3://backups/prod/2024-10-17.sql.gz'
    },
    {
      id: 5,
      database: 'production_db',
      type: 'Full',
      size: '45.0 GB',
      status: 'failed',
      startTime: '2024-10-16 02:00:00',
      endTime: '2024-10-16 02:15:00',
      duration: '15 min',
      location: null
    }
  ]);

  const [queries, setQueries] = useState([
    {
      id: 1,
      database: 'production_db',
      query: 'SELECT * FROM users WHERE created_at > NOW() - INTERVAL \'7 days\'',
      duration: '245ms',
      rows: 1523,
      status: 'completed',
      timestamp: '2024-10-18 10:45:23',
      user: 'admin'
    },
    {
      id: 2,
      database: 'production_db',
      query: 'UPDATE orders SET status = \'shipped\' WHERE order_id IN (SELECT...)',
      duration: '1.2s',
      rows: 456,
      status: 'completed',
      timestamp: '2024-10-18 10:42:15',
      user: 'admin'
    },
    {
      id: 3,
      database: 'analytics_db',
      query: 'db.events.aggregate([{$match: {date: {$gte: ISODate("2024-10-01")}}}, {$group...}])',
      duration: '3.5s',
      rows: 8923,
      status: 'completed',
      timestamp: '2024-10-18 10:38:45',
      user: 'analyst'
    },
    {
      id: 4,
      database: 'production_db',
      query: 'DELETE FROM sessions WHERE expires_at < NOW()',
      duration: '890ms',
      rows: 2341,
      status: 'completed',
      timestamp: '2024-10-18 10:35:12',
      user: 'system'
    },
    {
      id: 5,
      database: 'production_db',
      query: 'SELECT COUNT(*) FROM orders WHERE status = \'pending\' AND user_id = ?',
      duration: '15ms',
      rows: 1,
      status: 'completed',
      timestamp: '2024-10-18 10:30:00',
      user: 'api'
    }
  ]);

  const [showDatabaseModal, setShowDatabaseModal] = useState(false);
  const [showBackupModal, setShowBackupModal] = useState(false);
  const [showQueryModal, setShowQueryModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedDatabase, setSelectedDatabase] = useState(null);
  const [selectedBackup, setSelectedBackup] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  // Stats
  const stats = {
    totalDatabases: databases.length,
    runningDatabases: databases.filter(db => db.status === 'running').length,
    totalSize: '194.5 GB',
    totalQueries: '21,098,268',
    avgResponseTime: '9.2ms',
    activeConnections: databases.reduce((sum, db) => sum + db.connections, 0),
    backupsToday: backups.filter(b => b.startTime.includes('2024-10-18')).length,
    lastBackup: '2 hours ago'
  };

  // Handle create database
  const handleCreateDatabase = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newDatabase = {
      id: databases.length + 1,
      name: formData.get('name'),
      type: formData.get('type'),
      version: formData.get('version'),
      status: 'running',
      size: '0 GB',
      tables: 0,
      connections: 0,
      maxConnections: parseInt(formData.get('maxConnections')),
      uptime: '0 days',
      lastBackup: 'Never',
      queries: 0,
      avgQueryTime: '0ms',
      host: formData.get('host'),
      port: parseInt(formData.get('port'))
    };
    setDatabases([...databases, newDatabase]);
    setShowDatabaseModal(false);
  };

  // Handle create backup
  const handleCreateBackup = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newBackup = {
      id: backups.length + 1,
      database: formData.get('database'),
      type: formData.get('type'),
      size: '0 GB',
      status: 'running',
      startTime: new Date().toLocaleString(),
      endTime: null,
      duration: null,
      location: formData.get('location')
    };
    setBackups([newBackup, ...backups]);
    setShowBackupModal(false);
  };

  // Handle execute query
  const handleExecuteQuery = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newQuery = {
      id: queries.length + 1,
      database: formData.get('database'),
      query: formData.get('query'),
      duration: '0ms',
      rows: 0,
      status: 'running',
      timestamp: new Date().toLocaleString(),
      user: 'admin'
    };
    setQueries([newQuery, ...queries]);
    setShowQueryModal(false);
  };

  // Filter databases
  const filteredDatabases = databases.filter(db => {
    const matchesSearch = db.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || db.type === filterType;
    const matchesStatus = filterStatus === 'all' || db.status === filterStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  // Get unique types
  const dbTypes = ['all', ...new Set(databases.map(db => db.type))];

  return (
    <div className={styles.databaseManagement}>
      {/* Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerContent}>
          <div className={styles.titleSection}>
            <div className={styles.iconBadge}>
              <FiDatabase />
            </div>
            <div>
              <h1>Database Management</h1>
              <p>Monitor, backup, and manage your databases</p>
            </div>
          </div>
          <div className={styles.headerActions}>
            <button className={styles.secondaryBtn}>
              <FiDownload /> Export Report
            </button>
            <button className={styles.primaryBtn} onClick={() => setShowDatabaseModal(true)}>
              <FiPlus /> Add Database
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiDatabase />
          </div>
          <div className={styles.statContent}>
            <span className={styles.statLabel}>Total Databases</span>
            <h3>{stats.totalDatabases}</h3>
            <span className={styles.statChange}>
              <FiCheck /> {stats.runningDatabases} running
            </span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiHardDrive />
          </div>
          <div className={styles.statContent}>
            <span className={styles.statLabel}>Total Storage</span>
            <h3>{stats.totalSize}</h3>
            <span className={styles.statChange}>
              <FiTrendingUp /> +2.3 GB this week
            </span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiActivity />
          </div>
          <div className={styles.statContent}>
            <span className={styles.statLabel}>Total Queries</span>
            <h3>{stats.totalQueries}</h3>
            <span className={styles.statChange}>
              <FiZap /> {stats.avgResponseTime} avg
            </span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiArchive />
          </div>
          <div className={styles.statContent}>
            <span className={styles.statLabel}>Backups Today</span>
            <h3>{stats.backupsToday}</h3>
            <span className={styles.statChange}>
              <FiClock /> Last: {stats.lastBackup}
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
          <FiGrid /> Overview
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'databases' ? styles.active : ''}`}
          onClick={() => setActiveTab('databases')}
        >
          <FiDatabase /> Databases ({databases.length})
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'backups' ? styles.active : ''}`}
          onClick={() => setActiveTab('backups')}
        >
          <FiArchive /> Backups ({backups.length})
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'queries' ? styles.active : ''}`}
          onClick={() => setActiveTab('queries')}
        >
          <FiCode /> Query History ({queries.length})
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'monitoring' ? styles.active : ''}`}
          onClick={() => setActiveTab('monitoring')}
        >
          <FiBarChart2 /> Monitoring
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
              {/* Database Status */}
              <div className={styles.overviewCard}>
                <div className={styles.cardHeader}>
                  <h3><FiDatabase /> Database Status</h3>
                  <button className={styles.refreshBtn}>
                    <FiRefreshCw /> Refresh
                  </button>
                </div>
                <div className={styles.cardBody}>
                  {databases.slice(0, 4).map(db => (
                    <div key={db.id} className={styles.dbStatusItem}>
                      <div className={styles.dbInfo}>
                        <div className={styles.dbName}>
                          <FiDatabase />
                          <span>{db.name}</span>
                        </div>
                        <span className={styles.dbType}>{db.type}</span>
                      </div>
                      <span className={`${styles.statusBadge} ${styles[db.status]}`}>
                        {db.status === 'running' ? <FiCheck /> : <FiX />}
                        {db.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Connection Pool */}
              <div className={styles.overviewCard}>
                <div className={styles.cardHeader}>
                  <h3><FiUsers /> Connection Pool</h3>
                </div>
                <div className={styles.cardBody}>
                  {databases.filter(db => db.status === 'running').map(db => (
                    <div key={db.id} className={styles.connectionItem}>
                      <div className={styles.connectionHeader}>
                        <span>{db.name}</span>
                        <strong>{db.connections}/{db.maxConnections}</strong>
                      </div>
                      <div className={styles.progressBar}>
                        <div 
                          className={styles.progress} 
                          style={{ 
                            width: `${(db.connections / db.maxConnections) * 100}%`,
                            backgroundColor: (db.connections / db.maxConnections) > 0.8 ? '#ef4444' : (db.connections / db.maxConnections) > 0.6 ? '#f59e0b' : '#22c55e'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Backups */}
              <div className={styles.overviewCard}>
                <div className={styles.cardHeader}>
                  <h3><FiArchive /> Recent Backups</h3>
                </div>
                <div className={styles.cardBody}>
                  {backups.slice(0, 4).map(backup => (
                    <div key={backup.id} className={styles.backupItem}>
                      <div className={styles.backupInfo}>
                        <div className={styles.backupName}>
                          <FiArchive />
                          <span>{backup.database}</span>
                        </div>
                        <span className={styles.backupTime}>{backup.startTime}</span>
                      </div>
                      <span className={`${styles.statusBadge} ${styles[backup.status]}`}>
                        {backup.status === 'completed' ? <FiCheck /> : backup.status === 'failed' ? <FiX /> : <FiRefreshCw />}
                        {backup.status}
                      </span>
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
                  <button className={styles.quickActionBtn} onClick={() => setShowBackupModal(true)}>
                    <FiArchive /> Create Backup
                  </button>
                  <button className={styles.quickActionBtn} onClick={() => setShowQueryModal(true)}>
                    <FiCode /> Execute Query
                  </button>
                  <button className={styles.quickActionBtn}>
                    <FiRefreshCw /> Optimize Databases
                  </button>
                  <button className={styles.quickActionBtn}>
                    <FiDownload /> Export Data
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Databases Tab */}
        {activeTab === 'databases' && (
          <div className={styles.databasesTab}>
            {/* Filters */}
            <div className={styles.controls}>
              <div className={styles.searchBox}>
                <FiSearch />
                <input 
                  type="text" 
                  placeholder="Search databases..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select 
                className={styles.filterSelect}
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                {dbTypes.map(type => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Types' : type}
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

            {/* Databases Grid */}
            <div className={styles.databasesGrid}>
              {filteredDatabases.map(db => (
                <div key={db.id} className={styles.databaseCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.dbTitle}>
                      <FiDatabase />
                      <h3>{db.name}</h3>
                      <span className={`${styles.statusBadge} ${styles[db.status]}`}>
                        {db.status === 'running' ? <FiCheck /> : <FiX />}
                        {db.status}
                      </span>
                    </div>
                    <div className={styles.cardActions}>
                      <button className={styles.iconBtn} title="Settings">
                        <FiSettings />
                      </button>
                      <button 
                        className={styles.iconBtn} 
                        title="Delete"
                        onClick={() => {
                          setSelectedDatabase(db);
                          setShowDeleteModal(true);
                        }}
                      >
                        <FiTrash2 />
                      </button>
                    </div>
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.dbMetadata}>
                      <div className={styles.metaItem}>
                        <span>Type</span>
                        <strong>{db.type} {db.version}</strong>
                      </div>
                      <div className={styles.metaItem}>
                        <span>Size</span>
                        <strong>{db.size}</strong>
                      </div>
                      <div className={styles.metaItem}>
                        <span>Tables</span>
                        <strong>{db.tables}</strong>
                      </div>
                      <div className={styles.metaItem}>
                        <span>Connections</span>
                        <strong>{db.connections}/{db.maxConnections}</strong>
                      </div>
                    </div>
                    <div className={styles.dbStats}>
                      <div className={styles.statItem}>
                        <FiActivity />
                        <span>{db.queries.toLocaleString()} queries</span>
                      </div>
                      <div className={styles.statItem}>
                        <FiZap />
                        <span>{db.avgQueryTime} avg</span>
                      </div>
                      <div className={styles.statItem}>
                        <FiClock />
                        <span>Uptime: {db.uptime}</span>
                      </div>
                      <div className={styles.statItem}>
                        <FiArchive />
                        <span>Backup: {db.lastBackup}</span>
                      </div>
                    </div>
                    <div className={styles.dbConnection}>
                      <code>{db.host}:{db.port}</code>
                      <button className={styles.copyBtn}>
                        <FiCopy />
                      </button>
                    </div>
                  </div>
                  <div className={styles.cardFooter}>
                    <button className={styles.actionBtn}>
                      <FiArchive /> Backup Now
                    </button>
                    <button className={styles.actionBtn}>
                      <FiCode /> Query
                    </button>
                    <button className={styles.actionBtn}>
                      <FiEye /> Monitor
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredDatabases.length === 0 && (
              <div className={styles.emptyState}>
                <FiDatabase />
                <h3>No databases found</h3>
                <p>Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        )}

        {/* Backups Tab */}
        {activeTab === 'backups' && (
          <div className={styles.backupsTab}>
            <div className={styles.backupsHeader}>
              <button className={styles.primaryBtn} onClick={() => setShowBackupModal(true)}>
                <FiPlus /> Create Backup
              </button>
            </div>

            <div className={styles.backupsTable}>
              <table>
                <thead>
                  <tr>
                    <th>Database</th>
                    <th>Type</th>
                    <th>Size</th>
                    <th>Status</th>
                    <th>Start Time</th>
                    <th>Duration</th>
                    <th>Location</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {backups.map(backup => (
                    <tr key={backup.id}>
                      <td>
                        <div className={styles.dbName}>
                          <FiDatabase />
                          <span>{backup.database}</span>
                        </div>
                      </td>
                      <td>
                        <span className={styles.typeBadge}>{backup.type}</span>
                      </td>
                      <td>{backup.size}</td>
                      <td>
                        <span className={`${styles.statusBadge} ${styles[backup.status]}`}>
                          {backup.status === 'completed' ? <FiCheck /> : backup.status === 'failed' ? <FiX /> : <FiRefreshCw />}
                          {backup.status}
                        </span>
                      </td>
                      <td>{backup.startTime}</td>
                      <td>{backup.duration || 'N/A'}</td>
                      <td>
                        {backup.location ? (
                          <code className={styles.location}>{backup.location}</code>
                        ) : (
                          <span>N/A</span>
                        )}
                      </td>
                      <td>
                        <div className={styles.actionButtons}>
                          {backup.status === 'completed' && (
                            <>
                              <button className={styles.iconBtn} title="Download">
                                <FiDownload />
                              </button>
                              <button className={styles.iconBtn} title="Restore">
                                <FiUpload />
                              </button>
                            </>
                          )}
                          <button className={styles.iconBtn} title="Delete">
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

        {/* Query History Tab */}
        {activeTab === 'queries' && (
          <div className={styles.queriesTab}>
            <div className={styles.queriesHeader}>
              <button className={styles.primaryBtn} onClick={() => setShowQueryModal(true)}>
                <FiPlay /> Execute Query
              </button>
            </div>

            <div className={styles.queriesList}>
              {queries.map(query => (
                <div key={query.id} className={styles.queryCard}>
                  <div className={styles.queryHeader}>
                    <div className={styles.queryMeta}>
                      <span className={styles.dbName}>
                        <FiDatabase /> {query.database}
                      </span>
                      <span className={styles.timestamp}>
                        <FiClock /> {query.timestamp}
                      </span>
                      <span className={styles.user}>
                        <FiUsers /> {query.user}
                      </span>
                    </div>
                    <span className={`${styles.statusBadge} ${styles[query.status]}`}>
                      {query.status === 'completed' ? <FiCheck /> : <FiRefreshCw />}
                      {query.status}
                    </span>
                  </div>
                  <div className={styles.queryBody}>
                    <code>{query.query}</code>
                  </div>
                  <div className={styles.queryFooter}>
                    <div className={styles.queryStats}>
                      <span><FiZap /> Duration: {query.duration}</span>
                      <span><FiFileText /> Rows: {query.rows}</span>
                    </div>
                    <div className={styles.queryActions}>
                      <button className={styles.iconBtn} title="Copy">
                        <FiCopy />
                      </button>
                      <button className={styles.iconBtn} title="Re-run">
                        <FiPlay />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Monitoring Tab */}
        {activeTab === 'monitoring' && (
          <div className={styles.monitoringTab}>
            <div className={styles.monitoringGrid}>
              <div className={styles.monitoringCard}>
                <h3><FiActivity /> Query Performance</h3>
                <div className={styles.chartPlaceholder}>
                  <p>Chart: Query response times over the last 24 hours</p>
                  <p className={styles.note}>Real-time monitoring dashboard</p>
                </div>
              </div>

              <div className={styles.monitoringCard}>
                <h3><FiUsers /> Active Connections</h3>
                <div className={styles.chartPlaceholder}>
                  <p>Chart: Database connections by time</p>
                  <p className={styles.note}>Connection pool utilization</p>
                </div>
              </div>

              <div className={styles.monitoringCard}>
                <h3><FiCpu /> Resource Usage</h3>
                <div className={styles.resourceMetrics}>
                  <div className={styles.resourceItem}>
                    <div className={styles.resourceHeader}>
                      <span><FiCpu /> CPU Usage</span>
                      <strong>45%</strong>
                    </div>
                    <div className={styles.progressBar}>
                      <div className={styles.progress} style={{ width: '45%', backgroundColor: '#22c55e' }}></div>
                    </div>
                  </div>
                  <div className={styles.resourceItem}>
                    <div className={styles.resourceHeader}>
                      <span><FiHardDrive /> Memory</span>
                      <strong>67%</strong>
                    </div>
                    <div className={styles.progressBar}>
                      <div className={styles.progress} style={{ width: '67%', backgroundColor: '#f59e0b' }}></div>
                    </div>
                  </div>
                  <div className={styles.resourceItem}>
                    <div className={styles.resourceHeader}>
                      <span><FiDatabase /> Disk I/O</span>
                      <strong>32%</strong>
                    </div>
                    <div className={styles.progressBar}>
                      <div className={styles.progress} style={{ width: '32%', backgroundColor: '#22c55e' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.monitoringCard}>
                <h3><FiAlertTriangle /> Slow Queries</h3>
                <div className={styles.slowQueries}>
                  <div className={styles.slowQueryItem}>
                    <code>SELECT * FROM orders WHERE...</code>
                    <span className={styles.duration}>2.5s</span>
                  </div>
                  <div className={styles.slowQueryItem}>
                    <code>UPDATE users SET last_login...</code>
                    <span className={styles.duration}>1.8s</span>
                  </div>
                  <div className={styles.slowQueryItem}>
                    <code>DELETE FROM logs WHERE created...</code>
                    <span className={styles.duration}>1.2s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <div className={styles.settingsTab}>
            <div className={styles.settingsSection}>
              <h3><FiArchive /> Backup Settings</h3>
              <div className={styles.settingItem}>
                <div>
                  <h4>Automatic Backups</h4>
                  <p>Enable scheduled automatic backups</p>
                </div>
                <label className={styles.toggle}>
                  <input type="checkbox" defaultChecked />
                  <span className={styles.slider}></span>
                </label>
              </div>
              <div className={styles.settingItem}>
                <div>
                  <h4>Backup Frequency</h4>
                  <p>How often to create automatic backups</p>
                </div>
                <select className={styles.settingSelect}>
                  <option>Every 6 hours</option>
                  <option>Every 12 hours</option>
                  <option>Daily</option>
                  <option>Weekly</option>
                </select>
              </div>
              <div className={styles.settingItem}>
                <div>
                  <h4>Retention Period</h4>
                  <p>How long to keep backups</p>
                </div>
                <select className={styles.settingSelect}>
                  <option>7 days</option>
                  <option>30 days</option>
                  <option>90 days</option>
                  <option>1 year</option>
                </select>
              </div>
            </div>

            <div className={styles.settingsSection}>
              <h3><FiShield /> Security Settings</h3>
              <div className={styles.settingItem}>
                <div>
                  <h4>Enable SSL/TLS</h4>
                  <p>Require encrypted connections</p>
                </div>
                <label className={styles.toggle}>
                  <input type="checkbox" defaultChecked />
                  <span className={styles.slider}></span>
                </label>
              </div>
              <div className={styles.settingItem}>
                <div>
                  <h4>Query Logging</h4>
                  <p>Log all database queries for auditing</p>
                </div>
                <label className={styles.toggle}>
                  <input type="checkbox" defaultChecked />
                  <span className={styles.slider}></span>
                </label>
              </div>
              <div className={styles.settingItem}>
                <div>
                  <h4>IP Whitelisting</h4>
                  <p>Restrict database access by IP address</p>
                </div>
                <button className={styles.configBtn}>Configure</button>
              </div>
            </div>

            <div className={styles.settingsSection}>
              <h3><FiZap /> Performance Settings</h3>
              <div className={styles.settingItem}>
                <div>
                  <h4>Connection Pool Size</h4>
                  <p>Maximum number of concurrent connections</p>
                </div>
                <select className={styles.settingSelect}>
                  <option>50</option>
                  <option>100</option>
                  <option>200</option>
                  <option>500</option>
                </select>
              </div>
              <div className={styles.settingItem}>
                <div>
                  <h4>Query Cache</h4>
                  <p>Enable query result caching</p>
                </div>
                <label className={styles.toggle}>
                  <input type="checkbox" defaultChecked />
                  <span className={styles.slider}></span>
                </label>
              </div>
              <div className={styles.settingItem}>
                <div>
                  <h4>Auto-Optimize</h4>
                  <p>Automatically optimize tables and indexes</p>
                </div>
                <label className={styles.toggle}>
                  <input type="checkbox" />
                  <span className={styles.slider}></span>
                </label>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Create Database Modal */}
      {showDatabaseModal && (
        <div className={styles.modalOverlay} onClick={() => setShowDatabaseModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2><FiDatabase /> Add New Database</h2>
              <button className={styles.closeBtn} onClick={() => setShowDatabaseModal(false)}>
                <FiX />
              </button>
            </div>
            <form onSubmit={handleCreateDatabase}>
              <div className={styles.modalBody}>
                <div className={styles.formGroup}>
                  <label>Database Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="e.g., production_db"
                    required
                  />
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Type *</label>
                    <select name="type" required>
                      <option value="PostgreSQL">PostgreSQL</option>
                      <option value="MySQL">MySQL</option>
                      <option value="MongoDB">MongoDB</option>
                      <option value="Redis">Redis</option>
                      <option value="SQLite">SQLite</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label>Version *</label>
                    <input type="text" name="version" placeholder="e.g., 15.3" required />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Host *</label>
                    <input type="text" name="host" placeholder="e.g., localhost" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Port *</label>
                    <input type="number" name="port" placeholder="5432" required />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label>Max Connections *</label>
                  <input type="number" name="maxConnections" defaultValue="100" required />
                </div>
              </div>
              <div className={styles.modalFooter}>
                <button type="button" className={styles.cancelBtn} onClick={() => setShowDatabaseModal(false)}>
                  Cancel
                </button>
                <button type="submit" className={styles.submitBtn}>
                  <FiPlus /> Add Database
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Create Backup Modal */}
      {showBackupModal && (
        <div className={styles.modalOverlay} onClick={() => setShowBackupModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2><FiArchive /> Create Backup</h2>
              <button className={styles.closeBtn} onClick={() => setShowBackupModal(false)}>
                <FiX />
              </button>
            </div>
            <form onSubmit={handleCreateBackup}>
              <div className={styles.modalBody}>
                <div className={styles.formGroup}>
                  <label>Database *</label>
                  <select name="database" required>
                    {databases.filter(db => db.status === 'running').map(db => (
                      <option key={db.id} value={db.name}>{db.name}</option>
                    ))}
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label>Backup Type *</label>
                  <select name="type" required>
                    <option value="Full">Full Backup</option>
                    <option value="Incremental">Incremental Backup</option>
                    <option value="Differential">Differential Backup</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label>Storage Location *</label>
                  <input 
                    type="text" 
                    name="location"
                    placeholder="s3://backups/..."
                    required
                  />
                </div>
                <div className={styles.infoBox}>
                  <FiInfo />
                  <p>The backup will be compressed and encrypted before storage. Large databases may take several minutes to backup.</p>
                </div>
              </div>
              <div className={styles.modalFooter}>
                <button type="button" className={styles.cancelBtn} onClick={() => setShowBackupModal(false)}>
                  Cancel
                </button>
                <button type="submit" className={styles.submitBtn}>
                  <FiArchive /> Create Backup
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Execute Query Modal */}
      {showQueryModal && (
        <div className={styles.modalOverlay} onClick={() => setShowQueryModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2><FiCode /> Execute Query</h2>
              <button className={styles.closeBtn} onClick={() => setShowQueryModal(false)}>
                <FiX />
              </button>
            </div>
            <form onSubmit={handleExecuteQuery}>
              <div className={styles.modalBody}>
                <div className={styles.formGroup}>
                  <label>Database *</label>
                  <select name="database" required>
                    {databases.filter(db => db.status === 'running').map(db => (
                      <option key={db.id} value={db.name}>{db.name}</option>
                    ))}
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label>SQL Query *</label>
                  <textarea 
                    name="query"
                    placeholder="SELECT * FROM users WHERE..."
                    rows="8"
                    required
                  ></textarea>
                </div>
                <div className={styles.warningBox}>
                  <FiAlertTriangle />
                  <p><strong>Warning:</strong> Be careful when executing queries, especially UPDATE and DELETE operations. Always test queries on non-production databases first.</p>
                </div>
              </div>
              <div className={styles.modalFooter}>
                <button type="button" className={styles.cancelBtn} onClick={() => setShowQueryModal(false)}>
                  Cancel
                </button>
                <button type="submit" className={styles.submitBtn}>
                  <FiPlay /> Execute Query
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Database Modal */}
      {showDeleteModal && selectedDatabase && (
        <div className={styles.modalOverlay} onClick={() => setShowDeleteModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2><FiAlertCircle /> Delete Database</h2>
              <button className={styles.closeBtn} onClick={() => setShowDeleteModal(false)}>
                <FiX />
              </button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.dangerBox}>
                <FiAlertCircle />
                <div>
                  <h4>Are you sure you want to delete this database?</h4>
                  <p>Database: <strong>{selectedDatabase.name}</strong></p>
                  <p>This action is <strong>permanent</strong> and cannot be undone. All data will be lost.</p>
                  <p>Type the database name to confirm deletion.</p>
                  <input 
                    type="text" 
                    placeholder={selectedDatabase.name}
                    className={styles.confirmInput}
                  />
                </div>
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.cancelBtn} onClick={() => setShowDeleteModal(false)}>
                Cancel
              </button>
              <button className={styles.deleteBtn}>
                <FiTrash2 /> Delete Database
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatabaseManagement;
