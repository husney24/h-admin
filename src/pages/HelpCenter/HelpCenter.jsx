import React, { useState } from 'react';
import {
  FiHelpCircle,
  FiSearch,
  FiBook,
  FiMessageCircle,
  FiVideo,
  FiFileText,
  FiDownload,
  FiMail,
  FiPhone,
  FiClock,
  FiCheckCircle,
  FiAlertCircle,
  FiTrendingUp,
  FiUsers,
  FiStar,
  FiThumbsUp,
  FiThumbsDown,
  FiChevronRight,
  FiChevronDown,
  FiExternalLink,
  FiPlay,
  FiCode,
  FiSettings,
  FiShield,
  FiCreditCard,
  FiGlobe,
  FiZap,
  FiBox,
  FiLayers,
  FiMonitor,
  FiSmartphone,
  FiDatabase,
  FiCloud,
  FiLock,
  FiRefreshCw,
  FiArrowRight,
  FiInfo
} from 'react-icons/fi';
import styles from './HelpCenter.module.scss';

const HelpCenter = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // FAQs
  const faqs = [
    {
      id: 1,
      category: 'getting-started',
      question: 'How do I create my first project?',
      answer: 'To create your first project, navigate to the Projects page from the sidebar, click the "New Project" button, fill in the project details including name, description, team members, and click "Create Project". Your project will be created instantly.',
      helpful: 45,
      views: 1234
    },
    {
      id: 2,
      category: 'getting-started',
      question: 'How do I invite team members?',
      answer: 'Go to the Team Management section, click "Invite Member", enter their email address, select their role (Admin, Manager, or Member), and send the invitation. They will receive an email with instructions to join.',
      helpful: 38,
      views: 892
    },
    {
      id: 3,
      category: 'account',
      question: 'How do I change my password?',
      answer: 'Navigate to Settings > Security, click on "Change Password", enter your current password and new password twice for confirmation, then click "Update Password". You will be logged out and need to sign in with your new password.',
      helpful: 52,
      views: 2145
    },
    {
      id: 4,
      category: 'account',
      question: 'Can I have multiple accounts?',
      answer: 'Yes, you can create multiple accounts using different email addresses. However, each account is separate and cannot share data or resources. For team collaboration, we recommend using a single account with team member invitations.',
      helpful: 29,
      views: 567
    },
    {
      id: 5,
      category: 'billing',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and bank transfers for enterprise plans. All transactions are secure and encrypted.',
      helpful: 67,
      views: 1789
    },
    {
      id: 6,
      category: 'billing',
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time from the Billing section in Settings. Your access will continue until the end of your current billing period, and you won\'t be charged again.',
      helpful: 81,
      views: 3421
    },
    {
      id: 7,
      category: 'technical',
      question: 'What are the API rate limits?',
      answer: 'API rate limits vary by plan: Free (100 requests/hour), Pro (1,000 requests/hour), Enterprise (10,000 requests/hour). Rate limit headers are included in each response. Contact sales for custom limits.',
      helpful: 34,
      views: 678
    },
    {
      id: 8,
      category: 'technical',
      question: 'How do I integrate with third-party services?',
      answer: 'Visit the Integrations page, browse available integrations, click "Connect" on your desired service, authorize access, and configure settings. Most integrations are set up in under 2 minutes.',
      helpful: 41,
      views: 923
    },
    {
      id: 9,
      category: 'security',
      question: 'Is my data encrypted?',
      answer: 'Yes, all data is encrypted both in transit (TLS 1.3) and at rest (AES-256). We follow industry best practices and comply with SOC 2, GDPR, and HIPAA standards.',
      helpful: 73,
      views: 2567
    },
    {
      id: 10,
      category: 'security',
      question: 'Do you offer two-factor authentication?',
      answer: 'Yes, we support multiple 2FA methods including authenticator apps (Google Authenticator, Authy), SMS codes, and hardware security keys (YubiKey). Enable 2FA in Settings > Security.',
      helpful: 59,
      views: 1456
    }
  ];

  // Categories
  const categories = [
    { id: 'all', name: 'All Topics', icon: <FiBook />, count: faqs.length },
    { id: 'getting-started', name: 'Getting Started', icon: <FiZap />, count: 2 },
    { id: 'account', name: 'Account & Profile', icon: <FiUsers />, count: 2 },
    { id: 'billing', name: 'Billing & Plans', icon: <FiCreditCard />, count: 2 },
    { id: 'technical', name: 'Technical', icon: <FiCode />, count: 2 },
    { id: 'security', name: 'Security', icon: <FiShield />, count: 2 }
  ];

  // Documentation
  const documentation = [
    {
      id: 1,
      title: 'Quick Start Guide',
      description: 'Get started with the platform in 5 minutes',
      icon: <FiZap />,
      color: '#3b82f6',
      articles: 8,
      readTime: '10 min'
    },
    {
      id: 2,
      title: 'API Documentation',
      description: 'Complete API reference and examples',
      icon: <FiCode />,
      color: '#8b5cf6',
      articles: 24,
      readTime: '45 min'
    },
    {
      id: 3,
      title: 'User Guides',
      description: 'Step-by-step tutorials and how-tos',
      icon: <FiBook />,
      color: '#10b981',
      articles: 35,
      readTime: '2 hours'
    },
    {
      id: 4,
      title: 'Video Tutorials',
      description: 'Watch and learn from video guides',
      icon: <FiVideo />,
      color: '#f59e0b',
      articles: 12,
      readTime: '1.5 hours'
    },
    {
      id: 5,
      title: 'Integrations Guide',
      description: 'Connect with your favorite tools',
      icon: <FiLayers />,
      color: '#ec4899',
      articles: 18,
      readTime: '30 min'
    },
    {
      id: 6,
      title: 'Best Practices',
      description: 'Tips and tricks from experts',
      icon: <FiStar />,
      color: '#14b8a6',
      articles: 15,
      readTime: '40 min'
    }
  ];

  // Popular Articles
  const popularArticles = [
    { id: 1, title: 'How to set up your first deployment', views: 5432, category: 'Getting Started' },
    { id: 2, title: 'Understanding user roles and permissions', views: 4821, category: 'Account' },
    { id: 3, title: 'API authentication guide', views: 4156, category: 'Technical' },
    { id: 4, title: 'Billing FAQs', views: 3789, category: 'Billing' },
    { id: 5, title: 'Security best practices', views: 3234, category: 'Security' }
  ];

  // Support stats
  const stats = {
    totalArticles: 112,
    avgResponseTime: '< 2 hours',
    satisfaction: '98%',
    activeTickets: 23
  };

  // Filter FAQs
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Toggle FAQ
  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className={styles.helpCenter}>
      {/* Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerContent}>
          <div className={styles.titleSection}>
            <div className={styles.iconBadge}>
              <FiHelpCircle />
            </div>
            <div>
              <h1>Help Center</h1>
              <p>Find answers, guides, and support resources</p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className={styles.heroSearch}>
          <div className={styles.searchBox}>
            <FiSearch />
            <input 
              type="text" 
              placeholder="Search for help articles, FAQs, tutorials..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className={styles.searchBtn}>Search</button>
          </div>
          <div className={styles.popularSearches}>
            <span>Popular:</span>
            <button onClick={() => setSearchTerm('password')}>Reset Password</button>
            <button onClick={() => setSearchTerm('API')}>API Setup</button>
            <button onClick={() => setSearchTerm('billing')}>Billing</button>
            <button onClick={() => setSearchTerm('team')}>Add Team Members</button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiBook />
          </div>
          <div className={styles.statContent}>
            <span className={styles.statLabel}>Help Articles</span>
            <h3>{stats.totalArticles}</h3>
            <span className={styles.statChange}>
              <FiCheckCircle /> Always updated
            </span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiClock />
          </div>
          <div className={styles.statContent}>
            <span className={styles.statLabel}>Response Time</span>
            <h3>{stats.avgResponseTime}</h3>
            <span className={styles.statChange}>
              <FiTrendingUp /> Fast support
            </span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiStar />
          </div>
          <div className={styles.statContent}>
            <span className={styles.statLabel}>Satisfaction Rate</span>
            <h3>{stats.satisfaction}</h3>
            <span className={styles.statChange}>
              <FiThumbsUp /> Highly rated
            </span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiMessageCircle />
          </div>
          <div className={styles.statContent}>
            <span className={styles.statLabel}>Active Tickets</span>
            <h3>{stats.activeTickets}</h3>
            <span className={styles.statChange}>
              <FiInfo /> Being resolved
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
          <FiBook /> Overview
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'faqs' ? styles.active : ''}`}
          onClick={() => setActiveTab('faqs')}
        >
          <FiHelpCircle /> FAQs ({faqs.length})
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'documentation' ? styles.active : ''}`}
          onClick={() => setActiveTab('documentation')}
        >
          <FiFileText /> Documentation
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'videos' ? styles.active : ''}`}
          onClick={() => setActiveTab('videos')}
        >
          <FiVideo /> Video Tutorials
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'contact' ? styles.active : ''}`}
          onClick={() => setActiveTab('contact')}
        >
          <FiMail /> Contact Support
        </button>
      </div>

      {/* Tab Content */}
      <div className={styles.tabContent}>
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className={styles.overviewTab}>
            {/* Documentation Grid */}
            <div className={styles.sectionHeader}>
              <h2><FiBook /> Browse by Category</h2>
              <p>Explore our comprehensive documentation and guides</p>
            </div>

            <div className={styles.docsGrid}>
              {documentation.map(doc => (
                <div key={doc.id} className={styles.docCard}>
                  <div className={styles.docIcon} style={{ backgroundColor: `${doc.color}15`, color: doc.color }}>
                    {doc.icon}
                  </div>
                  <div className={styles.docContent}>
                    <h3>{doc.title}</h3>
                    <p>{doc.description}</p>
                    <div className={styles.docMeta}>
                      <span><FiFileText /> {doc.articles} articles</span>
                      <span><FiClock /> {doc.readTime}</span>
                    </div>
                  </div>
                  <button className={styles.docBtn}>
                    Explore <FiArrowRight />
                  </button>
                </div>
              ))}
            </div>

            {/* Popular Articles */}
            <div className={styles.sectionHeader}>
              <h2><FiTrendingUp /> Popular Articles</h2>
              <p>Most viewed help articles this month</p>
            </div>

            <div className={styles.popularArticles}>
              {popularArticles.map((article, index) => (
                <div key={article.id} className={styles.articleItem}>
                  <div className={styles.articleRank}>#{index + 1}</div>
                  <div className={styles.articleInfo}>
                    <h4>{article.title}</h4>
                    <span className={styles.articleCategory}>{article.category}</span>
                  </div>
                  <div className={styles.articleStats}>
                    <span><FiUsers /> {article.views.toLocaleString()} views</span>
                  </div>
                  <button className={styles.articleBtn}>
                    <FiExternalLink />
                  </button>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className={styles.quickActions}>
              <div className={styles.actionCard}>
                <div className={styles.actionIcon}>
                  <FiMessageCircle />
                </div>
                <h3>Contact Support</h3>
                <p>Get help from our support team</p>
                <button className={styles.actionBtn}>
                  Start Chat <FiArrowRight />
                </button>
              </div>

              <div className={styles.actionCard}>
                <div className={styles.actionIcon}>
                  <FiDownload />
                </div>
                <h3>Download Resources</h3>
                <p>Access guides, templates, and tools</p>
                <button className={styles.actionBtn}>
                  Browse <FiArrowRight />
                </button>
              </div>

              <div className={styles.actionCard}>
                <div className={styles.actionIcon}>
                  <FiVideo />
                </div>
                <h3>Watch Tutorials</h3>
                <p>Learn from video walkthroughs</p>
                <button className={styles.actionBtn}>
                  Watch Now <FiArrowRight />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* FAQs Tab */}
        {activeTab === 'faqs' && (
          <div className={styles.faqsTab}>
            {/* Categories */}
            <div className={styles.categoryFilters}>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  className={`${styles.categoryBtn} ${selectedCategory === cat.id ? styles.active : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.icon}
                  <span>{cat.name}</span>
                  <span className={styles.categoryCount}>{cat.count}</span>
                </button>
              ))}
            </div>

            {/* FAQ List */}
            <div className={styles.faqList}>
              {filteredFaqs.map(faq => (
                <div 
                  key={faq.id} 
                  className={`${styles.faqItem} ${expandedFaq === faq.id ? styles.expanded : ''}`}
                >
                  <div className={styles.faqHeader} onClick={() => toggleFaq(faq.id)}>
                    <h3>{faq.question}</h3>
                    <button className={styles.faqToggle}>
                      {expandedFaq === faq.id ? <FiChevronDown /> : <FiChevronRight />}
                    </button>
                  </div>
                  {expandedFaq === faq.id && (
                    <div className={styles.faqBody}>
                      <p>{faq.answer}</p>
                      <div className={styles.faqFooter}>
                        <div className={styles.faqMeta}>
                          <span><FiUsers /> {faq.views} views</span>
                          <span><FiThumbsUp /> {faq.helpful} found helpful</span>
                        </div>
                        <div className={styles.faqActions}>
                          <button className={styles.helpfulBtn}>
                            <FiThumbsUp /> Helpful
                          </button>
                          <button className={styles.helpfulBtn}>
                            <FiThumbsDown /> Not Helpful
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredFaqs.length === 0 && (
              <div className={styles.emptyState}>
                <FiHelpCircle />
                <h3>No FAQs found</h3>
                <p>Try adjusting your search or browse different categories</p>
              </div>
            )}
          </div>
        )}

        {/* Documentation Tab */}
        {activeTab === 'documentation' && (
          <div className={styles.documentationTab}>
            <div className={styles.docsLayout}>
              <div className={styles.docsSidebar}>
                <h3>Documentation</h3>
                <nav className={styles.docsNav}>
                  <a href="#" className={styles.active}>
                    <FiZap /> Getting Started
                  </a>
                  <a href="#">
                    <FiCode /> API Reference
                  </a>
                  <a href="#">
                    <FiSettings /> Configuration
                  </a>
                  <a href="#">
                    <FiDatabase /> Data Management
                  </a>
                  <a href="#">
                    <FiCloud /> Deployment
                  </a>
                  <a href="#">
                    <FiShield /> Security
                  </a>
                  <a href="#">
                    <FiLayers /> Integrations
                  </a>
                  <a href="#">
                    <FiMonitor /> Monitoring
                  </a>
                </nav>
              </div>

              <div className={styles.docsContent}>
                <div className={styles.docsHeader}>
                  <h2>Getting Started Guide</h2>
                  <div className={styles.docsMeta}>
                    <span><FiClock /> Last updated: Oct 15, 2024</span>
                    <span><FiUsers /> 2,341 readers</span>
                  </div>
                </div>

                <div className={styles.docsArticle}>
                  <h3>Welcome to the Platform</h3>
                  <p>This comprehensive guide will help you get started with our platform in just a few minutes. Follow the steps below to set up your account and start building.</p>

                  <h4>1. Create Your Account</h4>
                  <p>Sign up for a free account using your email address or connect with Google, GitHub, or other supported providers. Email verification is required for security.</p>

                  <h4>2. Set Up Your Profile</h4>
                  <p>Complete your profile information including your name, company, and role. This helps us provide personalized recommendations and support.</p>

                  <h4>3. Create Your First Project</h4>
                  <p>Navigate to the Projects page and click "New Project". Give it a name, description, and invite team members if needed.</p>

                  <div className={styles.codeBlock}>
                    <div className={styles.codeHeader}>
                      <span>Example API Call</span>
                      <button><FiCode /> Copy</button>
                    </div>
                    <pre><code>{`// Initialize the SDK
import { Client } from '@platform/sdk';

const client = new Client({
  apiKey: 'your-api-key',
  environment: 'production'
});

// Create a new project
const project = await client.projects.create({
  name: 'My First Project',
  description: 'Getting started with the platform'
});`}</code></pre>
                  </div>

                  <h4>4. Explore Features</h4>
                  <p>Take a tour of the dashboard, explore integrations, set up your first deployment, and configure your settings.</p>

                  <div className={styles.infoBox}>
                    <FiInfo />
                    <div>
                      <strong>Pro Tip:</strong>
                      <p>Check out our video tutorials for visual walkthroughs of common tasks.</p>
                    </div>
                  </div>

                  <h4>Next Steps</h4>
                  <ul>
                    <li>Read the API documentation</li>
                    <li>Set up integrations with your tools</li>
                    <li>Invite your team members</li>
                    <li>Configure security settings</li>
                    <li>Deploy your first application</li>
                  </ul>
                </div>

                <div className={styles.docsNavigation}>
                  <button className={styles.prevBtn}>
                    <FiChevronRight style={{ transform: 'rotate(180deg)' }} /> Previous
                  </button>
                  <button className={styles.nextBtn}>
                    Next <FiChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Videos Tab */}
        {activeTab === 'videos' && (
          <div className={styles.videosTab}>
            <div className={styles.videosGrid}>
              {[
                { title: 'Platform Overview', duration: '5:30', views: '12.5K', thumbnail: '1' },
                { title: 'Creating Your First Project', duration: '8:45', views: '8.2K', thumbnail: '2' },
                { title: 'API Integration Tutorial', duration: '15:20', views: '6.7K', thumbnail: '3' },
                { title: 'Team Collaboration Guide', duration: '10:15', views: '5.4K', thumbnail: '4' },
                { title: 'Security Best Practices', duration: '12:40', views: '4.9K', thumbnail: '5' },
                { title: 'Deployment Strategies', duration: '18:30', views: '7.8K', thumbnail: '6' }
              ].map((video, index) => (
                <div key={index} className={styles.videoCard}>
                  <div className={styles.videoThumbnail}>
                    <div className={styles.playBtn}>
                      <FiPlay />
                    </div>
                    <span className={styles.duration}>{video.duration}</span>
                  </div>
                  <div className={styles.videoInfo}>
                    <h4>{video.title}</h4>
                    <div className={styles.videoMeta}>
                      <span><FiUsers /> {video.views} views</span>
                      <span><FiThumbsUp /> 98%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact Tab */}
        {activeTab === 'contact' && (
          <div className={styles.contactTab}>
            <div className={styles.contactGrid}>
              <div className={styles.contactMethods}>
                <div className={styles.contactCard}>
                  <div className={styles.contactIcon}>
                    <FiMessageCircle />
                  </div>
                  <h3>Live Chat</h3>
                  <p>Chat with our support team in real-time</p>
                  <span className={styles.availability}>
                    <FiCheckCircle /> Available now
                  </span>
                  <button className={styles.contactBtn}>
                    Start Chat
                  </button>
                </div>

                <div className={styles.contactCard}>
                  <div className={styles.contactIcon}>
                    <FiMail />
                  </div>
                  <h3>Email Support</h3>
                  <p>Send us an email and we'll respond within 2 hours</p>
                  <span className={styles.availability}>
                    support@example.com
                  </span>
                  <button className={styles.contactBtn}>
                    Send Email
                  </button>
                </div>

                <div className={styles.contactCard}>
                  <div className={styles.contactIcon}>
                    <FiPhone />
                  </div>
                  <h3>Phone Support</h3>
                  <p>Call us for urgent issues (Enterprise only)</p>
                  <span className={styles.availability}>
                    Mon-Fri, 9AM-6PM EST
                  </span>
                  <button className={styles.contactBtn}>
                    View Number
                  </button>
                </div>
              </div>

              <div className={styles.contactForm}>
                <h3>Submit a Support Ticket</h3>
                <p>Fill out the form below and we'll get back to you shortly</p>

                <form>
                  <div className={styles.formGroup}>
                    <label>Subject *</label>
                    <input type="text" placeholder="Brief description of your issue" required />
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label>Category *</label>
                      <select required>
                        <option value="">Select a category</option>
                        <option value="technical">Technical Issue</option>
                        <option value="billing">Billing Question</option>
                        <option value="feature">Feature Request</option>
                        <option value="bug">Bug Report</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label>Priority *</label>
                      <select required>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="urgent">Urgent</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label>Description *</label>
                    <textarea 
                      placeholder="Provide detailed information about your request..." 
                      rows="6"
                      required
                    ></textarea>
                  </div>

                  <div className={styles.formGroup}>
                    <label>Attachments (Optional)</label>
                    <div className={styles.fileUpload}>
                      <FiDownload />
                      <span>Drag & drop files or click to browse</span>
                    </div>
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    <FiMail /> Submit Ticket
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HelpCenter;
