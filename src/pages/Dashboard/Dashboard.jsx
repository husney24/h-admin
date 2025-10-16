import React, { useState } from 'react';
import {
  FiTrendingUp,
  FiUsers,
  FiFolder,
  FiDollarSign,
  FiActivity,
  FiClock,
  FiCheckCircle,
  FiAlertCircle,
  FiArrowUp,
  FiArrowDown,
  FiMoreVertical,
  FiEye,
  FiEdit,
  FiTrash2,
  FiDownload,
  FiCalendar,
  FiGlobe,
  FiSmartphone,
  FiServer,
  FiShoppingCart
} from 'react-icons/fi';
import styles from './Dashboard.module.scss';

const Dashboard = () => {
  const [timeRange, setTimeRange] = useState('week');

  // Stats Cards Data
  const statsCards = [
    {
      title: 'Total Revenue',
      value: '$48,574',
      change: '+12.5%',
      isPositive: true,
      icon: <FiDollarSign />,
      color: 'accent'
    },
    {
      title: 'Active Projects',
      value: '24',
      change: '+3',
      isPositive: true,
      icon: <FiFolder />,
      color: 'primary'
    },
    {
      title: 'Total Clients',
      value: '156',
      change: '+8.2%',
      isPositive: true,
      icon: <FiUsers />,
      color: 'success'
    },
    {
      title: 'Completion Rate',
      value: '94.5%',
      change: '-2.1%',
      isPositive: false,
      icon: <FiActivity />,
      color: 'warning'
    }
  ];

  // Recent Projects
  const recentProjects = [
    {
      id: 1,
      name: 'E-commerce Platform',
      client: 'TechCorp Inc.',
      type: 'websites',
      status: 'in-progress',
      progress: 75,
      dueDate: '2024-02-15',
      priority: 'high'
    },
    {
      id: 2,
      name: 'Mobile Banking App',
      client: 'FinanceHub',
      type: 'mobile',
      status: 'in-progress',
      progress: 45,
      dueDate: '2024-02-20',
      priority: 'medium'
    },
    {
      id: 3,
      name: 'Cloud Migration',
      client: 'DataSystems Ltd',
      type: 'cloud',
      status: 'pending',
      progress: 20,
      dueDate: '2024-03-01',
      priority: 'low'
    },
    {
      id: 4,
      name: 'API Integration',
      client: 'StartupXYZ',
      type: 'backend',
      status: 'completed',
      progress: 100,
      dueDate: '2024-01-28',
      priority: 'high'
    },
    {
      id: 5,
      name: 'UI/UX Redesign',
      client: 'BrandCo',
      type: 'design',
      status: 'in-progress',
      progress: 60,
      dueDate: '2024-02-10',
      priority: 'medium'
    }
  ];

  // Services Overview
  const servicesData = [
    { name: 'Web Development', projects: 12, revenue: '$18,450', icon: <FiGlobe />, growth: 15.3 },
    { name: 'Mobile Apps', projects: 8, revenue: '$14,230', icon: <FiSmartphone />, growth: 22.1 },
    { name: 'Backend Development', projects: 6, revenue: '$9,870', icon: <FiServer />, growth: 8.5 },
    { name: 'E-commerce', projects: 5, revenue: '$12,340', icon: <FiShoppingCart />, growth: 18.7 }
  ];

  // Recent Activities
  const recentActivities = [
    {
      id: 1,
      action: 'Project completed',
      description: 'API Integration for StartupXYZ',
      time: '2 hours ago',
      type: 'success'
    },
    {
      id: 2,
      action: 'New client added',
      description: 'TechCorp Inc. joined the platform',
      time: '5 hours ago',
      type: 'info'
    },
    {
      id: 3,
      action: 'Payment received',
      description: '$5,400 from FinanceHub',
      time: '1 day ago',
      type: 'success'
    },
    {
      id: 4,
      action: 'Deadline approaching',
      description: 'UI/UX Redesign due in 3 days',
      time: '1 day ago',
      type: 'warning'
    },
    {
      id: 5,
      action: 'Team member added',
      description: 'Sarah Johnson joined Backend team',
      time: '2 days ago',
      type: 'info'
    }
  ];

  // Task Summary
  const taskSummary = {
    total: 48,
    completed: 32,
    inProgress: 12,
    pending: 4
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'completed':
        return styles.statusCompleted;
      case 'in-progress':
        return styles.statusInProgress;
      case 'pending':
        return styles.statusPending;
      default:
        return '';
    }
  };

  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'high':
        return styles.priorityHigh;
      case 'medium':
        return styles.priorityMedium;
      case 'low':
        return styles.priorityLow;
      default:
        return '';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'websites':
        return <FiGlobe />;
      case 'mobile':
        return <FiSmartphone />;
      case 'cloud':
        return <FiServer />;
      case 'backend':
        return <FiServer />;
      case 'design':
        return <FiEdit />;
      default:
        return <FiFolder />;
    }
  };

  return (
    <div className={styles.dashboard}>
      {/* SVG Definitions */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2a2a2a" />
            <stop offset="100%" stopColor="#1a1a1a" />
          </linearGradient>
        </defs>
      </svg>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerLeft}>
          <h1>Dashboard</h1>
          <p>Welcome back, Husney! Here's what's happening today.</p>
        </div>
        <div className={styles.headerRight}>
          <select 
            className={styles.timeRangeSelect}
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
          <button className={styles.exportBtn}>
            <FiDownload /> Export Report
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className={styles.statsGrid}>
        {statsCards.map((stat, index) => (
          <div key={index} className={`${styles.statCard} ${styles[stat.color]}`}>
            <div className={styles.statIcon}>{stat.icon}</div>
            <div className={styles.statContent}>
              <p className={styles.statTitle}>{stat.title}</p>
              <h2 className={styles.statValue}>{stat.value}</h2>
              <div className={styles.statChange}>
                {stat.isPositive ? <FiArrowUp /> : <FiArrowDown />}
                <span className={stat.isPositive ? styles.positive : styles.negative}>
                  {stat.change}
                </span>
                <span className={styles.timeframe}>vs last {timeRange}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className={styles.contentGrid}>
        {/* Recent Projects */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.cardTitle}>
              <FiFolder />
              <h3>Recent Projects</h3>
            </div>
            <button className={styles.moreBtn}>
              <FiMoreVertical />
            </button>
          </div>
          <div className={styles.projectsList}>
            {recentProjects.map((project) => (
              <div key={project.id} className={styles.projectItem}>
                <div className={styles.projectIcon}>
                  {getTypeIcon(project.type)}
                </div>
                <div className={styles.projectInfo}>
                  <div className={styles.projectHeader}>
                    <h4>{project.name}</h4>
                    <span className={`${styles.priority} ${getPriorityClass(project.priority)}`}>
                      {project.priority}
                    </span>
                  </div>
                  <p className={styles.projectClient}>{project.client}</p>
                  <div className={styles.progressBar}>
                    <div 
                      className={styles.progressFill} 
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <div className={styles.projectFooter}>
                    <span className={`${styles.status} ${getStatusClass(project.status)}`}>
                      {project.status.replace('-', ' ')}
                    </span>
                    <span className={styles.dueDate}>
                      <FiCalendar /> {project.dueDate}
                    </span>
                  </div>
                </div>
                <div className={styles.projectActions}>
                  <button className={styles.actionBtn}>
                    <FiEye />
                  </button>
                  <button className={styles.actionBtn}>
                    <FiEdit />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className={styles.viewAllBtn}>View All Projects</button>
        </div>

        {/* Right Sidebar */}
        <div className={styles.sidebar}>
          {/* Task Summary */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardTitle}>
                <FiCheckCircle />
                <h3>Task Summary</h3>
              </div>
            </div>
            <div className={styles.taskSummary}>
              <div className={styles.taskCircle}>
                <svg viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" className={styles.circleBg} />
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    className={styles.circleProgress}
                    style={{
                      strokeDasharray: `${(taskSummary.completed / taskSummary.total) * 251.2} 251.2`
                    }}
                  />
                </svg>
                <div className={styles.circleText}>
                  <h2>{Math.round((taskSummary.completed / taskSummary.total) * 100)}%</h2>
                  <p>Completed</p>
                </div>
              </div>
              <div className={styles.taskStats}>
                <div className={styles.taskStat}>
                  <div className={`${styles.taskDot} ${styles.total}`}></div>
                  <span>Total Tasks</span>
                  <strong>{taskSummary.total}</strong>
                </div>
                <div className={styles.taskStat}>
                  <div className={`${styles.taskDot} ${styles.completed}`}></div>
                  <span>Completed</span>
                  <strong>{taskSummary.completed}</strong>
                </div>
                <div className={styles.taskStat}>
                  <div className={`${styles.taskDot} ${styles.progress}`}></div>
                  <span>In Progress</span>
                  <strong>{taskSummary.inProgress}</strong>
                </div>
                <div className={styles.taskStat}>
                  <div className={`${styles.taskDot} ${styles.pending}`}></div>
                  <span>Pending</span>
                  <strong>{taskSummary.pending}</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardTitle}>
                <FiClock />
                <h3>Recent Activities</h3>
              </div>
            </div>
            <div className={styles.activitiesList}>
              {recentActivities.map((activity) => (
                <div key={activity.id} className={styles.activityItem}>
                  <div className={`${styles.activityDot} ${styles[activity.type]}`}></div>
                  <div className={styles.activityContent}>
                    <h5>{activity.action}</h5>
                    <p>{activity.description}</p>
                    <span className={styles.activityTime}>{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.cardTitle}>
            <FiTrendingUp />
            <h3>Services Overview</h3>
          </div>
          <button className={styles.moreBtn}>
            <FiMoreVertical />
          </button>
        </div>
        <div className={styles.servicesGrid}>
          {servicesData.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>{service.icon}</div>
              <div className={styles.serviceInfo}>
                <h4>{service.name}</h4>
                <div className={styles.serviceStats}>
                  <div className={styles.serviceStat}>
                    <span>Projects</span>
                    <strong>{service.projects}</strong>
                  </div>
                  <div className={styles.serviceStat}>
                    <span>Revenue</span>
                    <strong>{service.revenue}</strong>
                  </div>
                </div>
                <div className={styles.serviceGrowth}>
                  <FiTrendingUp />
                  <span>+{service.growth}% growth</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;