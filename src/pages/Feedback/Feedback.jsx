import React, { useState } from 'react';
import {
  FiMessageSquare,
  FiPlus,
  FiSearch,
  FiFilter,
  FiStar,
  FiThumbsUp,
  FiThumbsDown,
  FiUser,
  FiClock,
  FiTag,
  FiCheck,
  FiX,
  FiEye,
  FiEdit,
  FiTrash2,
  FiMail,
  FiAlertCircle,
  FiCheckCircle,
  FiXCircle,
  FiTrendingUp,
  FiBarChart2,
  FiPieChart,
  FiActivity,
  FiArchive,
  FiRefreshCw,
  FiDownload,
  FiFlag,
  FiMessageCircle,
  FiHeart,
  FiInfo
} from 'react-icons/fi';
import styles from './Feedback.module.scss';

const Feedback = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [feedbackList, setFeedbackList] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      category: 'bug',
      subject: 'Payment Gateway Issue',
      message: 'I\'m experiencing issues with the payment gateway. The transaction fails after entering card details.',
      rating: 2,
      status: 'pending',
      priority: 'high',
      date: '2024-10-18 09:30:00',
      response: null,
      isRead: false,
      upvotes: 5,
      tags: ['payment', 'critical']
    },
    {
      id: 2,
      name: 'Sarah Smith',
      email: 'sarah.smith@example.com',
      category: 'feature',
      subject: 'Dark Mode Request',
      message: 'Please add a dark mode option. It would make the app much easier to use at night.',
      rating: 5,
      status: 'in-progress',
      priority: 'medium',
      date: '2024-10-18 08:15:00',
      response: 'Thank you for the suggestion! We\'re currently working on implementing dark mode.',
      isRead: true,
      upvotes: 23,
      tags: ['ui', 'enhancement']
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike.j@example.com',
      category: 'general',
      subject: 'Great Product!',
      message: 'I\'ve been using your platform for 2 months now and it\'s been fantastic. Keep up the good work!',
      rating: 5,
      status: 'resolved',
      priority: 'low',
      date: '2024-10-17 16:45:00',
      response: 'Thank you so much for your kind words! We appreciate your support.',
      isRead: true,
      upvotes: 12,
      tags: ['positive']
    },
    {
      id: 4,
      name: 'Emily Davis',
      email: 'emily.davis@example.com',
      category: 'bug',
      subject: 'Mobile App Crashes',
      message: 'The mobile app keeps crashing when I try to upload images. This happens on both iOS and Android.',
      rating: 1,
      status: 'pending',
      priority: 'high',
      date: '2024-10-17 14:20:00',
      response: null,
      isRead: false,
      upvotes: 8,
      tags: ['mobile', 'crash', 'urgent']
    },
    {
      id: 5,
      name: 'David Wilson',
      email: 'david.w@example.com',
      category: 'feature',
      subject: 'Export to CSV Feature',
      message: 'It would be helpful to have an option to export data to CSV format for reporting purposes.',
      rating: 4,
      status: 'in-progress',
      priority: 'medium',
      date: '2024-10-17 11:00:00',
      response: 'We\'re planning to add this feature in the next release!',
      isRead: true,
      upvotes: 15,
      tags: ['export', 'data']
    },
    {
      id: 6,
      name: 'Lisa Anderson',
      email: 'lisa.a@example.com',
      category: 'improvement',
      subject: 'Improve Loading Speed',
      message: 'The dashboard takes too long to load. It would be great if you could optimize the performance.',
      rating: 3,
      status: 'resolved',
      priority: 'medium',
      date: '2024-10-16 10:30:00',
      response: 'We\'ve implemented several performance improvements in the latest update.',
      isRead: true,
      upvotes: 18,
      tags: ['performance', 'optimization']
    },
    {
      id: 7,
      name: 'Robert Brown',
      email: 'robert.b@example.com',
      category: 'general',
      subject: 'Customer Support Inquiry',
      message: 'How can I contact customer support? I need help with account verification.',
      rating: 4,
      status: 'resolved',
      priority: 'low',
      date: '2024-10-16 09:15:00',
      response: 'You can reach our support team at support@example.com or use the live chat feature.',
      isRead: true,
      upvotes: 3,
      tags: ['support', 'help']
    },
    {
      id: 8,
      name: 'Jennifer Lee',
      email: 'jennifer.lee@example.com',
      category: 'bug',
      subject: 'Notification Not Working',
      message: 'I\'m not receiving email notifications for new messages. Please fix this issue.',
      rating: 2,
      status: 'pending',
      priority: 'high',
      date: '2024-10-15 15:40:00',
      response: null,
      isRead: false,
      upvotes: 6,
      tags: ['notifications', 'email']
    }
  ]);

  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [showResponseModal, setShowResponseModal] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterRating, setFilterRating] = useState('all');

  // Stats
  const stats = {
    totalFeedback: feedbackList.length,
    pendingFeedback: feedbackList.filter(f => f.status === 'pending').length,
    avgRating: (feedbackList.reduce((sum, f) => sum + f.rating, 0) / feedbackList.length).toFixed(1),
    resolvedToday: feedbackList.filter(f => f.status === 'resolved' && f.date.includes('2024-10-18')).length,
    highPriority: feedbackList.filter(f => f.priority === 'high').length,
    responseRate: ((feedbackList.filter(f => f.response).length / feedbackList.length) * 100).toFixed(0)
  };

  // Category counts
  const categoryStats = {
    bug: feedbackList.filter(f => f.category === 'bug').length,
    feature: feedbackList.filter(f => f.category === 'feature').length,
    improvement: feedbackList.filter(f => f.category === 'improvement').length,
    general: feedbackList.filter(f => f.category === 'general').length
  };

  // Filter feedback
  const filteredFeedback = feedbackList.filter(feedback => {
    const matchesSearch = feedback.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         feedback.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         feedback.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || feedback.category === filterCategory;
    const matchesStatus = filterStatus === 'all' || feedback.status === filterStatus;
    const matchesRating = filterRating === 'all' || feedback.rating === parseInt(filterRating);
    const matchesTab = activeTab === 'all' || 
                       (activeTab === 'pending' && feedback.status === 'pending') ||
                       (activeTab === 'resolved' && feedback.status === 'resolved') ||
                       (activeTab === 'unread' && !feedback.isRead);
    return matchesSearch && matchesCategory && matchesStatus && matchesRating && matchesTab;
  });

  // Get rating stars
  const getRatingStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <FiStar
        key={index}
        className={index < rating ? styles.starFilled : styles.starEmpty}
      />
    ));
  };

  // Get category icon
  const getCategoryIcon = (category) => {
    switch(category) {
      case 'bug': return <FiAlertCircle />;
      case 'feature': return <FiMessageCircle />;
      case 'improvement': return <FiTrendingUp />;
      case 'general': return <FiMessageSquare />;
      default: return <FiMessageSquare />;
    }
  };

  // Handle response
  const handleRespond = (feedback) => {
    setSelectedFeedback(feedback);
    setShowResponseModal(true);
  };

  // Handle mark as read
  const handleMarkAsRead = (id) => {
    setFeedbackList(feedbackList.map(f => 
      f.id === id ? { ...f, isRead: true } : f
    ));
  };

  // Handle status change
  const handleStatusChange = (id, newStatus) => {
    setFeedbackList(feedbackList.map(f => 
      f.id === id ? { ...f, status: newStatus } : f
    ));
  };

  return (
    <div className={styles.feedback}>
      {/* Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerContent}>
          <div className={styles.titleSection}>
            <div className={styles.iconBadge}>
              <FiMessageSquare />
            </div>
            <div>
              <h1>Feedback Management</h1>
              <p>Review and respond to customer feedback</p>
            </div>
          </div>
          <div className={styles.headerActions}>
            <button className={styles.secondaryBtn}>
              <FiDownload /> Export Report
            </button>
            <button className={styles.primaryBtn} onClick={() => setShowFeedbackModal(true)}>
              <FiPlus /> Add Feedback
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiMessageSquare />
          </div>
          <div className={styles.statContent}>
            <span className={styles.statLabel}>Total Feedback</span>
            <h3>{stats.totalFeedback}</h3>
            <span className={styles.statChange}>
              <FiTrendingUp /> {stats.pendingFeedback} pending
            </span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiStar />
          </div>
          <div className={styles.statContent}>
            <span className={styles.statLabel}>Average Rating</span>
            <h3>{stats.avgRating} / 5.0</h3>
            <span className={styles.statChange}>
              <FiCheckCircle /> {stats.responseRate}% response rate
            </span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiCheck />
          </div>
          <div className={styles.statContent}>
            <span className={styles.statLabel}>Resolved Today</span>
            <h3>{stats.resolvedToday}</h3>
            <span className={styles.statChange}>
              <FiActivity /> Great progress!
            </span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiFlag />
          </div>
          <div className={styles.statContent}>
            <span className={styles.statLabel}>High Priority</span>
            <h3>{stats.highPriority}</h3>
            <span className={styles.statChange}>
              <FiAlertCircle /> Needs attention
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className={styles.tabs}>
        <button 
          className={`${styles.tab} ${activeTab === 'all' ? styles.active : ''}`}
          onClick={() => setActiveTab('all')}
        >
          <FiMessageSquare /> All Feedback ({feedbackList.length})
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'pending' ? styles.active : ''}`}
          onClick={() => setActiveTab('pending')}
        >
          <FiClock /> Pending ({stats.pendingFeedback})
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'resolved' ? styles.active : ''}`}
          onClick={() => setActiveTab('resolved')}
        >
          <FiCheck /> Resolved ({feedbackList.filter(f => f.status === 'resolved').length})
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'unread' ? styles.active : ''}`}
          onClick={() => setActiveTab('unread')}
        >
          <FiMail /> Unread ({feedbackList.filter(f => !f.isRead).length})
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'analytics' ? styles.active : ''}`}
          onClick={() => setActiveTab('analytics')}
        >
          <FiBarChart2 /> Analytics
        </button>
      </div>

      {/* Tab Content */}
      <div className={styles.tabContent}>
        {/* Feedback List */}
        {(activeTab === 'all' || activeTab === 'pending' || activeTab === 'resolved' || activeTab === 'unread') && (
          <div className={styles.feedbackTab}>
            {/* Filters */}
            <div className={styles.controls}>
              <div className={styles.searchBox}>
                <FiSearch />
                <input 
                  type="text" 
                  placeholder="Search feedback..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select 
                className={styles.filterSelect}
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                <option value="all">All Categories</option>
                <option value="bug">Bug Report ({categoryStats.bug})</option>
                <option value="feature">Feature Request ({categoryStats.feature})</option>
                <option value="improvement">Improvement ({categoryStats.improvement})</option>
                <option value="general">General ({categoryStats.general})</option>
              </select>
              <select 
                className={styles.filterSelect}
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="resolved">Resolved</option>
              </select>
              <select 
                className={styles.filterSelect}
                value={filterRating}
                onChange={(e) => setFilterRating(e.target.value)}
              >
                <option value="all">All Ratings</option>
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
                <option value="2">2 Stars</option>
                <option value="1">1 Star</option>
              </select>
            </div>

            {/* Feedback List */}
            <div className={styles.feedbackList}>
              {filteredFeedback.map(feedback => (
                <div 
                  key={feedback.id} 
                  className={`${styles.feedbackCard} ${!feedback.isRead ? styles.unread : ''}`}
                  onClick={() => handleMarkAsRead(feedback.id)}
                >
                  <div className={styles.feedbackHeader}>
                    <div className={styles.feedbackUser}>
                      <div className={styles.userAvatar}>
                        <FiUser />
                      </div>
                      <div className={styles.userInfo}>
                        <h3>{feedback.name}</h3>
                        <span className={styles.userEmail}>{feedback.email}</span>
                      </div>
                    </div>
                    <div className={styles.feedbackMeta}>
                      <span className={`${styles.categoryBadge} ${styles[feedback.category]}`}>
                        {getCategoryIcon(feedback.category)}
                        {feedback.category}
                      </span>
                      <span className={`${styles.priorityBadge} ${styles[feedback.priority]}`}>
                        {feedback.priority}
                      </span>
                    </div>
                  </div>

                  <div className={styles.feedbackBody}>
                    <div className={styles.feedbackTitle}>
                      <h4>{feedback.subject}</h4>
                      {!feedback.isRead && <span className={styles.unreadBadge}>New</span>}
                    </div>
                    <p className={styles.feedbackMessage}>{feedback.message}</p>
                    
                    <div className={styles.feedbackRating}>
                      {getRatingStars(feedback.rating)}
                      <span className={styles.ratingText}>{feedback.rating}.0 / 5.0</span>
                    </div>

                    {feedback.tags && feedback.tags.length > 0 && (
                      <div className={styles.feedbackTags}>
                        {feedback.tags.map((tag, index) => (
                          <span key={index} className={styles.tag}>
                            <FiTag /> {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {feedback.response && (
                      <div className={styles.feedbackResponse}>
                        <div className={styles.responseHeader}>
                          <FiMessageCircle />
                          <strong>Your Response:</strong>
                        </div>
                        <p>{feedback.response}</p>
                      </div>
                    )}
                  </div>

                  <div className={styles.feedbackFooter}>
                    <div className={styles.feedbackInfo}>
                      <span className={styles.feedbackDate}>
                        <FiClock /> {feedback.date}
                      </span>
                      <span className={styles.feedbackUpvotes}>
                        <FiThumbsUp /> {feedback.upvotes} upvotes
                      </span>
                      <span className={`${styles.statusBadge} ${styles[feedback.status]}`}>
                        {feedback.status === 'resolved' ? <FiCheckCircle /> : 
                         feedback.status === 'pending' ? <FiClock /> : <FiRefreshCw />}
                        {feedback.status}
                      </span>
                    </div>
                    <div className={styles.feedbackActions}>
                      <button 
                        className={styles.actionBtn}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRespond(feedback);
                        }}
                      >
                        <FiMail /> Respond
                      </button>
                      <button className={styles.actionBtn}>
                        <FiEye /> View Details
                      </button>
                      <select 
                        className={styles.statusSelect}
                        value={feedback.status}
                        onChange={(e) => {
                          e.stopPropagation();
                          handleStatusChange(feedback.id, e.target.value);
                        }}
                      >
                        <option value="pending">Pending</option>
                        <option value="in-progress">In Progress</option>
                        <option value="resolved">Resolved</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredFeedback.length === 0 && (
              <div className={styles.emptyState}>
                <FiMessageSquare />
                <h3>No feedback found</h3>
                <p>Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className={styles.analyticsTab}>
            <div className={styles.analyticsGrid}>
              {/* Category Distribution */}
              <div className={styles.analyticsCard}>
                <div className={styles.cardHeader}>
                  <h3><FiPieChart /> Feedback by Category</h3>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.categoryStats}>
                    <div className={styles.categoryItem}>
                      <div className={styles.categoryInfo}>
                        <FiAlertCircle className={styles.bugIcon} />
                        <span>Bug Reports</span>
                      </div>
                      <div className={styles.categoryBar}>
                        <div 
                          className={styles.categoryProgress} 
                          style={{ width: `${(categoryStats.bug / feedbackList.length) * 100}%`, backgroundColor: '#ef4444' }}
                        ></div>
                      </div>
                      <strong>{categoryStats.bug}</strong>
                    </div>
                    <div className={styles.categoryItem}>
                      <div className={styles.categoryInfo}>
                        <FiMessageCircle className={styles.featureIcon} />
                        <span>Feature Requests</span>
                      </div>
                      <div className={styles.categoryBar}>
                        <div 
                          className={styles.categoryProgress} 
                          style={{ width: `${(categoryStats.feature / feedbackList.length) * 100}%`, backgroundColor: '#3b82f6' }}
                        ></div>
                      </div>
                      <strong>{categoryStats.feature}</strong>
                    </div>
                    <div className={styles.categoryItem}>
                      <div className={styles.categoryInfo}>
                        <FiTrendingUp className={styles.improvementIcon} />
                        <span>Improvements</span>
                      </div>
                      <div className={styles.categoryBar}>
                        <div 
                          className={styles.categoryProgress} 
                          style={{ width: `${(categoryStats.improvement / feedbackList.length) * 100}%`, backgroundColor: '#f59e0b' }}
                        ></div>
                      </div>
                      <strong>{categoryStats.improvement}</strong>
                    </div>
                    <div className={styles.categoryItem}>
                      <div className={styles.categoryInfo}>
                        <FiMessageSquare className={styles.generalIcon} />
                        <span>General</span>
                      </div>
                      <div className={styles.categoryBar}>
                        <div 
                          className={styles.categoryProgress} 
                          style={{ width: `${(categoryStats.general / feedbackList.length) * 100}%`, backgroundColor: '#22c55e' }}
                        ></div>
                      </div>
                      <strong>{categoryStats.general}</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rating Distribution */}
              <div className={styles.analyticsCard}>
                <div className={styles.cardHeader}>
                  <h3><FiBarChart2 /> Rating Distribution</h3>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.ratingStats}>
                    {[5, 4, 3, 2, 1].map(rating => {
                      const count = feedbackList.filter(f => f.rating === rating).length;
                      const percentage = (count / feedbackList.length) * 100;
                      return (
                        <div key={rating} className={styles.ratingItem}>
                          <div className={styles.ratingStars}>
                            {getRatingStars(rating)}
                          </div>
                          <div className={styles.ratingBar}>
                            <div 
                              className={styles.ratingProgress} 
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                          <span className={styles.ratingCount}>{count}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Status Overview */}
              <div className={styles.analyticsCard}>
                <div className={styles.cardHeader}>
                  <h3><FiActivity /> Status Overview</h3>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.statusStats}>
                    <div className={styles.statusItem}>
                      <div className={styles.statusIcon} style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)' }}>
                        <FiClock style={{ color: '#f59e0b' }} />
                      </div>
                      <div className={styles.statusInfo}>
                        <h4>{feedbackList.filter(f => f.status === 'pending').length}</h4>
                        <span>Pending</span>
                      </div>
                    </div>
                    <div className={styles.statusItem}>
                      <div className={styles.statusIcon} style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
                        <FiRefreshCw style={{ color: '#3b82f6' }} />
                      </div>
                      <div className={styles.statusInfo}>
                        <h4>{feedbackList.filter(f => f.status === 'in-progress').length}</h4>
                        <span>In Progress</span>
                      </div>
                    </div>
                    <div className={styles.statusItem}>
                      <div className={styles.statusIcon} style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>
                        <FiCheckCircle style={{ color: '#22c55e' }} />
                      </div>
                      <div className={styles.statusInfo}>
                        <h4>{feedbackList.filter(f => f.status === 'resolved').length}</h4>
                        <span>Resolved</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Tags */}
              <div className={styles.analyticsCard}>
                <div className={styles.cardHeader}>
                  <h3><FiTag /> Top Tags</h3>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.tagCloud}>
                    {['payment', 'mobile', 'ui', 'performance', 'critical', 'enhancement', 'urgent', 'support', 'data', 'export'].map((tag, index) => (
                      <span key={index} className={styles.cloudTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Response Modal */}
      {showResponseModal && selectedFeedback && (
        <div className={styles.modalOverlay} onClick={() => setShowResponseModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2><FiMail /> Respond to Feedback</h2>
              <button className={styles.closeBtn} onClick={() => setShowResponseModal(false)}>
                <FiX />
              </button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.feedbackSummary}>
                <h4>From: {selectedFeedback.name}</h4>
                <p><strong>Subject:</strong> {selectedFeedback.subject}</p>
                <p><strong>Message:</strong> {selectedFeedback.message}</p>
              </div>
              <div className={styles.formGroup}>
                <label>Your Response *</label>
                <textarea 
                  placeholder="Type your response here..."
                  rows="6"
                  defaultValue={selectedFeedback.response || ''}
                ></textarea>
              </div>
              <div className={styles.formGroup}>
                <label>Update Status</label>
                <select defaultValue={selectedFeedback.status}>
                  <option value="pending">Pending</option>
                  <option value="in-progress">In Progress</option>
                  <option value="resolved">Resolved</option>
                </select>
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.cancelBtn} onClick={() => setShowResponseModal(false)}>
                Cancel
              </button>
              <button className={styles.submitBtn}>
                <FiMail /> Send Response
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Feedback Modal Placeholder */}
      {showFeedbackModal && (
        <div className={styles.modalOverlay} onClick={() => setShowFeedbackModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2><FiPlus /> Add Feedback</h2>
              <button className={styles.closeBtn} onClick={() => setShowFeedbackModal(false)}>
                <FiX />
              </button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.formGroup}>
                <label>Name *</label>
                <input type="text" placeholder="Enter name" required />
              </div>
              <div className={styles.formGroup}>
                <label>Email *</label>
                <input type="email" placeholder="Enter email" required />
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Category *</label>
                  <select required>
                    <option value="">Select category</option>
                    <option value="bug">Bug Report</option>
                    <option value="feature">Feature Request</option>
                    <option value="improvement">Improvement</option>
                    <option value="general">General</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label>Priority *</label>
                  <select required>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
              </div>
              <div className={styles.formGroup}>
                <label>Subject *</label>
                <input type="text" placeholder="Enter subject" required />
              </div>
              <div className={styles.formGroup}>
                <label>Message *</label>
                <textarea placeholder="Enter message" rows="5" required></textarea>
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.cancelBtn} onClick={() => setShowFeedbackModal(false)}>
                Cancel
              </button>
              <button className={styles.submitBtn}>
                <FiPlus /> Add Feedback
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;
