import React, { useState } from 'react';
import {
  FiTrendingUp,
  FiTrendingDown,
  FiDollarSign,
  FiUsers,
  FiFolder,
  FiShoppingCart,
  FiActivity,
  FiClock,
  FiCheckCircle,
  FiXCircle,
  FiPieChart,
  FiBarChart2,
  FiDownload,
  FiCalendar,
  FiGlobe,
  FiSmartphone,
  FiServer,
  FiCloud,
  FiLayout,
  FiMonitor,
  FiFilter,
  FiRefreshCw,
  FiMaximize2,
  FiTarget,
  FiAward,
  FiStar,
  FiAlertCircle
} from 'react-icons/fi';
import styles from './Analytics.module.scss';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('30days');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Overview Stats
  const overviewStats = [
    {
      title: 'Total Revenue',
      value: '$127,540',
      change: '+18.2%',
      trend: 'up',
      icon: <FiDollarSign />,
      color: 'revenue',
      subtext: 'vs last period',
      chartData: [20, 35, 30, 45, 40, 50, 55]
    },
    {
      title: 'Total Projects',
      value: '156',
      change: '+12',
      trend: 'up',
      icon: <FiFolder />,
      color: 'projects',
      subtext: 'new this month',
      chartData: [10, 15, 12, 18, 16, 20, 24]
    },
    {
      title: 'Active Clients',
      value: '342',
      change: '+24',
      trend: 'up',
      icon: <FiUsers />,
      color: 'clients',
      subtext: 'since last month',
      chartData: [15, 20, 18, 25, 22, 28, 30]
    },
    {
      title: 'Completion Rate',
      value: '94.5%',
      change: '-2.1%',
      trend: 'down',
      icon: <FiCheckCircle />,
      color: 'completion',
      subtext: 'project success',
      chartData: [90, 92, 95, 94, 96, 93, 94]
    }
  ];

  // Services Performance
  const servicesPerformance = [
    {
      name: 'Web Development',
      icon: <FiGlobe />,
      projects: 45,
      revenue: '$42,350',
      growth: 22.5,
      completionRate: 96,
      clients: 35,
      avgProjectValue: '$940',
      color: '#3498db'
    },
    {
      name: 'Mobile Development',
      icon: <FiSmartphone />,
      projects: 32,
      revenue: '$35,280',
      growth: 18.3,
      completionRate: 94,
      clients: 28,
      avgProjectValue: '$1,102',
      color: '#9b59b6'
    },
    {
      name: 'Backend Development',
      icon: <FiServer />,
      projects: 28,
      revenue: '$22,140',
      growth: 15.7,
      completionRate: 92,
      clients: 22,
      avgProjectValue: '$790',
      color: '#e67e22'
    },
    {
      name: 'Cloud Solutions',
      icon: <FiCloud />,
      projects: 18,
      revenue: '$18,920',
      growth: 28.4,
      completionRate: 95,
      clients: 15,
      avgProjectValue: '$1,051',
      color: '#1abc9c'
    },
    {
      name: 'UI/UX Design',
      icon: <FiLayout />,
      projects: 24,
      revenue: '$15,680',
      growth: 12.1,
      completionRate: 98,
      clients: 20,
      avgProjectValue: '$653',
      color: '#e74c3c'
    },
    {
      name: 'E-commerce',
      icon: <FiShoppingCart />,
      projects: 15,
      revenue: '$23,450',
      growth: 31.2,
      completionRate: 91,
      clients: 12,
      avgProjectValue: '$1,563',
      color: '#f39c12'
    }
  ];

  // Monthly Revenue Data
  const monthlyRevenue = [
    { month: 'Jan', revenue: 18500, projects: 12, clients: 8 },
    { month: 'Feb', revenue: 22300, projects: 15, clients: 10 },
    { month: 'Mar', revenue: 19800, projects: 13, clients: 9 },
    { month: 'Apr', revenue: 25600, projects: 17, clients: 12 },
    { month: 'May', revenue: 28900, projects: 19, clients: 14 },
    { month: 'Jun', revenue: 24200, projects: 16, clients: 11 },
    { month: 'Jul', revenue: 31500, projects: 21, clients: 16 },
    { month: 'Aug', revenue: 29800, projects: 20, clients: 15 },
    { month: 'Sep', revenue: 33200, projects: 22, clients: 17 },
    { month: 'Oct', revenue: 35800, projects: 24, clients: 19 },
    { month: 'Nov', revenue: 38500, projects: 26, clients: 21 },
    { month: 'Dec', revenue: 42100, projects: 28, clients: 23 }
  ];

  // Project Status Distribution
  const projectStatus = [
    { status: 'Completed', count: 89, percentage: 57, color: '#2ecc71' },
    { status: 'In Progress', count: 42, percentage: 27, color: '#3498db' },
    { status: 'Pending', count: 18, percentage: 12, color: '#f39c12' },
    { status: 'On Hold', count: 7, percentage: 4, color: '#95a5a6' }
  ];

  // Top Performing Clients
  const topClients = [
    {
      name: 'TechCorp Inc.',
      projects: 12,
      revenue: '$18,450',
      satisfaction: 98,
      lastProject: '2 days ago'
    },
    {
      name: 'FinanceHub Ltd',
      projects: 10,
      revenue: '$15,230',
      satisfaction: 95,
      lastProject: '1 week ago'
    },
    {
      name: 'DataSystems Co',
      projects: 8,
      revenue: '$12,870',
      satisfaction: 92,
      lastProject: '3 days ago'
    },
    {
      name: 'StartupXYZ',
      projects: 7,
      revenue: '$10,340',
      satisfaction: 97,
      lastProject: '5 days ago'
    },
    {
      name: 'BrandCo Agency',
      projects: 6,
      revenue: '$9,120',
      satisfaction: 94,
      lastProject: '1 day ago'
    }
  ];

  // Team Performance
  const teamPerformance = [
    {
      name: 'Development Team',
      members: 12,
      activeProjects: 28,
      completedThisMonth: 15,
      efficiency: 94,
      revenue: '$45,230'
    },
    {
      name: 'Design Team',
      members: 8,
      activeProjects: 18,
      completedThisMonth: 12,
      efficiency: 96,
      revenue: '$28,450'
    },
    {
      name: 'DevOps Team',
      members: 6,
      activeProjects: 14,
      completedThisMonth: 9,
      efficiency: 91,
      revenue: '$22,180'
    },
    {
      name: 'Support Team',
      members: 5,
      activeProjects: 10,
      completedThisMonth: 8,
      efficiency: 89,
      revenue: '$15,670'
    }
  ];

  // Geographic Distribution
  const geographicData = [
    { region: 'North America', clients: 128, revenue: '$52,340', percentage: 41 },
    { region: 'Europe', clients: 94, revenue: '$38,560', percentage: 30 },
    { region: 'Asia Pacific', clients: 76, revenue: '$24,780', percentage: 19 },
    { region: 'Middle East', clients: 32, revenue: '$9,450', percentage: 7 },
    { region: 'Latin America', clients: 12, revenue: '$2,410', percentage: 3 }
  ];

  // Technology Stack Usage
  const techStack = [
    { name: 'React', projects: 45, percentage: 65 },
    { name: 'Node.js', projects: 38, percentage: 55 },
    { name: 'Python', projects: 32, percentage: 46 },
    { name: 'AWS', projects: 28, percentage: 40 },
    { name: 'Docker', projects: 24, percentage: 35 },
    { name: 'PostgreSQL', projects: 22, percentage: 32 },
    { name: 'MongoDB', projects: 18, percentage: 26 },
    { name: 'TypeScript', projects: 16, percentage: 23 }
  ];

  // Revenue by Source
  const revenueBySource = [
    { source: 'Direct Clients', amount: '$65,340', percentage: 51, count: 145 },
    { source: 'Referrals', amount: '$38,920', percentage: 31, count: 87 },
    { source: 'Partnerships', amount: '$18,560', percentage: 15, count: 42 },
    { source: 'Marketplace', amount: '$4,720', percentage: 3, count: 18 }
  ];

  const getMaxRevenue = () => Math.max(...monthlyRevenue.map(m => m.revenue));

  return (
    <div className={styles.analytics}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.titleSection}>
            <div className={styles.titleIcon}>
              <FiBarChart2 />
            </div>
            <div>
              <h1>Analytics Dashboard</h1>
              <p>Comprehensive insights and performance metrics</p>
            </div>
          </div>
        </div>
        <div className={styles.headerRight}>
          <select
            className={styles.filterSelect}
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <option value="7days">Last 7 Days</option>
            <option value="30days">Last 30 Days</option>
            <option value="90days">Last 90 Days</option>
            <option value="6months">Last 6 Months</option>
            <option value="1year">Last Year</option>
            <option value="all">All Time</option>
          </select>
          <button className={styles.refreshBtn}>
            <FiRefreshCw /> Refresh
          </button>
          <button className={styles.exportBtn}>
            <FiDownload /> Export Report
          </button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className={styles.overviewGrid}>
        {overviewStats.map((stat, index) => (
          <div key={index} className={`${styles.statCard} ${styles[stat.color]}`}>
            <div className={styles.statHeader}>
              <div className={styles.statIcon}>{stat.icon}</div>
              <div className={`${styles.statTrend} ${styles[stat.trend]}`}>
                {stat.trend === 'up' ? <FiTrendingUp /> : <FiTrendingDown />}
                {stat.change}
              </div>
            </div>
            <div className={styles.statContent}>
              <h3>{stat.value}</h3>
              <p>{stat.title}</p>
              <span className={styles.subtext}>{stat.subtext}</span>
            </div>
            <div className={styles.miniChart}>
              {stat.chartData.map((value, idx) => (
                <div
                  key={idx}
                  className={styles.chartBar}
                  style={{ height: `${(value / Math.max(...stat.chartData)) * 100}%` }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Main Analytics Grid */}
      <div className={styles.analyticsGrid}>
        {/* Revenue Chart */}
        <div className={`${styles.analyticsCard} ${styles.revenueChart}`}>
          <div className={styles.cardHeader}>
            <div className={styles.cardTitle}>
              <FiDollarSign />
              <h3>Revenue Trends</h3>
            </div>
            <div className={styles.cardActions}>
              <button className={styles.iconBtn}><FiMaximize2 /></button>
            </div>
          </div>
          <div className={styles.chartContainer}>
            <div className={styles.revenueGraph}>
              {monthlyRevenue.slice(-6).map((month, index) => (
                <div key={index} className={styles.barWrapper}>
                  <div className={styles.barValue}>${(month.revenue / 1000).toFixed(0)}K</div>
                  <div
                    className={styles.bar}
                    style={{ height: `${(month.revenue / getMaxRevenue()) * 100}%` }}
                  >
                    <div className={styles.barFill} />
                  </div>
                  <div className={styles.barLabel}>{month.month}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.chartLegend}>
            <div className={styles.legendItem}>
              <div className={styles.legendDot} style={{ background: 'var(--text-primary)' }} />
              <span>Monthly Revenue</span>
            </div>
          </div>
        </div>

        {/* Project Status Distribution */}
        <div className={`${styles.analyticsCard} ${styles.statusCard}`}>
          <div className={styles.cardHeader}>
            <div className={styles.cardTitle}>
              <FiPieChart />
              <h3>Project Status</h3>
            </div>
          </div>
          <div className={styles.statusDistribution}>
            {projectStatus.map((status, index) => (
              <div key={index} className={styles.statusItem}>
                <div className={styles.statusInfo}>
                  <div
                    className={styles.statusDot}
                    style={{ background: status.color }}
                  />
                  <span className={styles.statusName}>{status.status}</span>
                </div>
                <div className={styles.statusStats}>
                  <span className={styles.statusCount}>{status.count}</span>
                  <span className={styles.statusPercent}>{status.percentage}%</span>
                </div>
                <div className={styles.statusBar}>
                  <div
                    className={styles.statusFill}
                    style={{
                      width: `${status.percentage}%`,
                      background: status.color
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className={styles.totalProjects}>
            <span>Total Projects:</span>
            <strong>{projectStatus.reduce((sum, s) => sum + s.count, 0)}</strong>
          </div>
        </div>
      </div>

      {/* Services Performance */}
      <div className={styles.servicesSection}>
        <div className={styles.sectionHeader}>
          <h2>Services Performance</h2>
          <p>Detailed breakdown of each service offering</p>
        </div>
        <div className={styles.servicesGrid}>
          {servicesPerformance.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceHeader}>
                <div className={styles.serviceIcon} style={{ background: service.color }}>
                  {service.icon}
                </div>
                <div className={styles.serviceGrowth}>
                  <FiTrendingUp /> +{service.growth}%
                </div>
              </div>
              <h4>{service.name}</h4>
              <div className={styles.serviceStats}>
                <div className={styles.serviceStat}>
                  <span>Revenue</span>
                  <strong>{service.revenue}</strong>
                </div>
                <div className={styles.serviceStat}>
                  <span>Projects</span>
                  <strong>{service.projects}</strong>
                </div>
              </div>
              <div className={styles.serviceMetrics}>
                <div className={styles.metric}>
                  <FiUsers />
                  <span>{service.clients} clients</span>
                </div>
                <div className={styles.metric}>
                  <FiCheckCircle />
                  <span>{service.completionRate}% rate</span>
                </div>
              </div>
              <div className={styles.avgValue}>
                <span>Avg Value:</span>
                <strong>{service.avgProjectValue}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Analytics Columns */}
      <div className={styles.analyticsColumns}>
        {/* Top Clients */}
        <div className={styles.analyticsCard}>
          <div className={styles.cardHeader}>
            <div className={styles.cardTitle}>
              <FiAward />
              <h3>Top Performing Clients</h3>
            </div>
          </div>
          <div className={styles.clientsList}>
            {topClients.map((client, index) => (
              <div key={index} className={styles.clientItem}>
                <div className={styles.clientRank}>#{index + 1}</div>
                <div className={styles.clientInfo}>
                  <h5>{client.name}</h5>
                  <div className={styles.clientMeta}>
                    <span><FiFolder /> {client.projects} projects</span>
                    <span><FiClock /> {client.lastProject}</span>
                  </div>
                </div>
                <div className={styles.clientStats}>
                  <div className={styles.clientRevenue}>{client.revenue}</div>
                  <div className={styles.clientSatisfaction}>
                    <FiStar /> {client.satisfaction}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Performance */}
        <div className={styles.analyticsCard}>
          <div className={styles.cardHeader}>
            <div className={styles.cardTitle}>
              <FiUsers />
              <h3>Team Performance</h3>
            </div>
          </div>
          <div className={styles.teamList}>
            {teamPerformance.map((team, index) => (
              <div key={index} className={styles.teamItem}>
                <div className={styles.teamInfo}>
                  <h5>{team.name}</h5>
                  <span>{team.members} members</span>
                </div>
                <div className={styles.teamMetrics}>
                  <div className={styles.teamMetric}>
                    <span>Active</span>
                    <strong>{team.activeProjects}</strong>
                  </div>
                  <div className={styles.teamMetric}>
                    <span>Completed</span>
                    <strong>{team.completedThisMonth}</strong>
                  </div>
                  <div className={styles.teamMetric}>
                    <span>Efficiency</span>
                    <strong>{team.efficiency}%</strong>
                  </div>
                </div>
                <div className={styles.teamRevenue}>
                  <FiDollarSign /> {team.revenue}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Insights Grid */}
      <div className={styles.insightsGrid}>
        {/* Geographic Distribution */}
        <div className={styles.analyticsCard}>
          <div className={styles.cardHeader}>
            <div className={styles.cardTitle}>
              <FiGlobe />
              <h3>Geographic Distribution</h3>
            </div>
          </div>
          <div className={styles.geoList}>
            {geographicData.map((geo, index) => (
              <div key={index} className={styles.geoItem}>
                <div className={styles.geoInfo}>
                  <span className={styles.geoRegion}>{geo.region}</span>
                  <span className={styles.geoClients}>{geo.clients} clients</span>
                </div>
                <div className={styles.geoBar}>
                  <div
                    className={styles.geoFill}
                    style={{ width: `${geo.percentage}%` }}
                  />
                </div>
                <div className={styles.geoRevenue}>{geo.revenue}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className={styles.analyticsCard}>
          <div className={styles.cardHeader}>
            <div className={styles.cardTitle}>
              <FiMonitor />
              <h3>Technology Stack Usage</h3>
            </div>
          </div>
          <div className={styles.techList}>
            {techStack.map((tech, index) => (
              <div key={index} className={styles.techItem}>
                <div className={styles.techInfo}>
                  <span className={styles.techName}>{tech.name}</span>
                  <span className={styles.techCount}>{tech.projects} projects</span>
                </div>
                <div className={styles.techBar}>
                  <div
                    className={styles.techFill}
                    style={{ width: `${tech.percentage}%` }}
                  />
                  <span className={styles.techPercent}>{tech.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue by Source */}
        <div className={styles.analyticsCard}>
          <div className={styles.cardHeader}>
            <div className={styles.cardTitle}>
              <FiTarget />
              <h3>Revenue by Source</h3>
            </div>
          </div>
          <div className={styles.sourceList}>
            {revenueBySource.map((source, index) => (
              <div key={index} className={styles.sourceItem}>
                <div className={styles.sourceHeader}>
                  <span className={styles.sourceName}>{source.source}</span>
                  <span className={styles.sourceAmount}>{source.amount}</span>
                </div>
                <div className={styles.sourceBar}>
                  <div
                    className={styles.sourceFill}
                    style={{ width: `${source.percentage}%` }}
                  />
                </div>
                <div className={styles.sourceMeta}>
                  <span>{source.count} clients</span>
                  <span>{source.percentage}% of total</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Insights */}
      <div className={styles.insightsSection}>
        <div className={styles.sectionHeader}>
          <h2>Key Insights & Recommendations</h2>
        </div>
        <div className={styles.insightsCards}>
          <div className={`${styles.insightCard} ${styles.positive}`}>
            <FiTrendingUp className={styles.insightIcon} />
            <h4>Strong Growth</h4>
            <p>E-commerce services showing 31.2% growth. Consider expanding this offering with additional team members.</p>
          </div>
          <div className={`${styles.insightCard} ${styles.warning}`}>
            <FiAlertCircle className={styles.insightIcon} />
            <h4>Attention Needed</h4>
            <p>Support team efficiency at 89%. Review current workload and consider adding support resources.</p>
          </div>
          <div className={`${styles.insightCard} ${styles.info}`}>
            <FiTarget className={styles.insightIcon} />
            <h4>Opportunity</h4>
            <p>Asia Pacific region shows potential with 76 clients. Focus marketing efforts to expand in this market.</p>
          </div>
          <div className={`${styles.insightCard} ${styles.success}`}>
            <FiAward className={styles.insightIcon} />
            <h4>High Performance</h4>
            <p>Design team maintains 96% efficiency with 98% completion rate. Use as benchmark for other teams.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
