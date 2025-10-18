import React, { useState } from 'react';
import {
  FiStar,
  FiPlus,
  FiSearch,
  FiFilter,
  FiEdit,
  FiTrash2,
  FiEye,
  FiCheck,
  FiX,
  FiClock,
  FiCalendar,
  FiUser,
  FiMail,
  FiMessageSquare,
  FiThumbsUp,
  FiThumbsDown,
  FiMoreVertical,
  FiGrid,
  FiList,
  FiAward,
  FiTrendingUp,
  FiUsers,
  FiCheckCircle,
  FiAlertCircle,
  FiImage,
  FiUpload
} from 'react-icons/fi';
import styles from './Testimonials.module.scss';

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRating, setFilterRating] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(''); // 'view', 'approve', 'reject', 'delete'
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  // Sample testimonials data
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      company: 'TechCorp Inc.',
      position: 'CEO',
      rating: 5,
      title: 'Outstanding Service and Support',
      testimonial: 'Working with Husney has been an absolute pleasure. Their team delivered our project ahead of schedule and exceeded all our expectations. The attention to detail and quality of work is remarkable.',
      date: '2025-10-15',
      status: 'approved',
      featured: true,
      projectType: 'Website Development',
      likes: 45
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael.c@example.com',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      company: 'FinanceHub',
      position: 'CTO',
      rating: 5,
      title: 'Exceptional Mobile App Development',
      testimonial: 'The mobile banking app they developed for us is stunning and highly functional. Our users love it and engagement has increased by 300%. Highly recommended!',
      date: '2025-10-12',
      status: 'approved',
      featured: true,
      projectType: 'Mobile Development',
      likes: 62
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      email: 'emily.r@example.com',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      company: 'DataSystems Ltd',
      position: 'Product Manager',
      rating: 4,
      title: 'Great Cloud Solutions',
      testimonial: 'Professional team with excellent technical expertise. They helped us migrate our entire infrastructure to the cloud seamlessly. Minor communication delays but overall great experience.',
      date: '2025-10-10',
      status: 'pending',
      featured: false,
      projectType: 'Cloud Solutions',
      likes: 28
    },
    {
      id: 4,
      name: 'David Park',
      email: 'david.p@example.com',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      company: 'StartupXYZ',
      position: 'Founder',
      rating: 5,
      title: 'Best Backend Development Team',
      testimonial: 'Their backend development skills are top-notch. They built a scalable API infrastructure that handles millions of requests daily. Very impressed with their work!',
      date: '2025-10-08',
      status: 'approved',
      featured: false,
      projectType: 'Backend Development',
      likes: 38
    },
    {
      id: 5,
      name: 'Jessica Williams',
      email: 'jessica.w@example.com',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80',
      company: 'BrandCo',
      position: 'Marketing Director',
      rating: 5,
      title: 'Beautiful UI/UX Design',
      testimonial: 'The design team transformed our outdated interface into a modern, user-friendly experience. Our customer satisfaction scores have improved significantly!',
      date: '2025-10-05',
      status: 'approved',
      featured: true,
      projectType: 'UI/UX Design',
      likes: 51
    },
    {
      id: 6,
      name: 'Robert Martinez',
      email: 'robert.m@example.com',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      company: 'E-Shop Global',
      position: 'Operations Manager',
      rating: 4,
      title: 'Solid E-commerce Solution',
      testimonial: 'Good quality work on our e-commerce platform. The checkout process is smooth and conversion rates have improved. Would work with them again.',
      date: '2025-10-03',
      status: 'pending',
      featured: false,
      projectType: 'E-commerce',
      likes: 19
    },
    {
      id: 7,
      name: 'Amanda Thompson',
      email: 'amanda.t@example.com',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
      company: 'InnovateTech',
      position: 'VP Engineering',
      rating: 3,
      title: 'Decent Service',
      testimonial: 'The project was completed but had some bugs initially. Support team was responsive in fixing issues. Average experience overall.',
      date: '2025-10-01',
      status: 'rejected',
      featured: false,
      projectType: 'Website Development',
      likes: 8
    },
    {
      id: 8,
      name: 'Christopher Lee',
      email: 'chris.l@example.com',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
      company: 'NextGen Apps',
      position: 'CEO',
      rating: 5,
      title: 'Amazing Partnership',
      testimonial: 'Husney team became an extension of our team. Their proactive approach and innovative solutions helped us launch ahead of competitors. 10/10 would recommend!',
      date: '2025-09-28',
      status: 'approved',
      featured: true,
      projectType: 'Mobile Development',
      likes: 74
    }
  ]);

  // Calculate stats
  const stats = {
    total: testimonials.length,
    approved: testimonials.filter(t => t.status === 'approved').length,
    pending: testimonials.filter(t => t.status === 'pending').length,
    rejected: testimonials.filter(t => t.status === 'rejected').length,
    featured: testimonials.filter(t => t.featured).length,
    averageRating: (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1)
  };

  // Filter testimonials
  const filteredTestimonials = testimonials.filter(testimonial => {
    const matchesSearch = testimonial.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         testimonial.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         testimonial.testimonial.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === 'all' || testimonial.status === activeTab;
    const matchesRating = filterRating === 'all' || testimonial.rating === parseInt(filterRating);
    
    return matchesSearch && matchesTab && matchesRating;
  });

  // Modal handlers
  const openModal = (type, testimonial) => {
    setModalType(type);
    setSelectedTestimonial(testimonial);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType('');
    setSelectedTestimonial(null);
  };

  const handleApprove = () => {
    setTestimonials(testimonials.map(t =>
      t.id === selectedTestimonial.id ? { ...t, status: 'approved' } : t
    ));
    closeModal();
  };

  const handleReject = () => {
    setTestimonials(testimonials.map(t =>
      t.id === selectedTestimonial.id ? { ...t, status: 'rejected' } : t
    ));
    closeModal();
  };

  const handleDelete = () => {
    setTestimonials(testimonials.filter(t => t.id !== selectedTestimonial.id));
    closeModal();
  };

  const toggleFeatured = (id) => {
    setTestimonials(testimonials.map(t =>
      t.id === id ? { ...t, featured: !t.featured } : t
    ));
  };

  // Render stars
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FiStar
        key={index}
        className={index < rating ? styles.starFilled : styles.starEmpty}
      />
    ));
  };

  // Get status badge
  const getStatusBadge = (status) => {
    const badges = {
      approved: { icon: <FiCheckCircle />, label: 'Approved', class: styles.statusApproved },
      pending: { icon: <FiClock />, label: 'Pending Review', class: styles.statusPending },
      rejected: { icon: <FiAlertCircle />, label: 'Rejected', class: styles.statusRejected }
    };
    return badges[status] || badges.pending;
  };

  return (
    <div className={styles.testimonials}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerContent}>
          <div className={styles.headerText}>
            <div className={styles.iconBadge}>
              <FiStar />
            </div>
            <div>
              <h1>Testimonials Management</h1>
              <p>Manage and showcase client testimonials</p>
            </div>
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
            <span className={styles.statLabel}>Total Reviews</span>
            <span className={styles.statValue}>{stats.total}</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiCheckCircle />
          </div>
          <div className={styles.statContent}>
            <span className={styles.statLabel}>Approved</span>
            <span className={styles.statValue}>{stats.approved}</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiClock />
          </div>
          <div className={styles.statContent}>
            <span className={styles.statLabel}>Pending</span>
            <span className={styles.statValue}>{stats.pending}</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiAward />
          </div>
          <div className={styles.statContent}>
            <span className={styles.statLabel}>Featured</span>
            <span className={styles.statValue}>{stats.featured}</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiStar />
          </div>
          <div className={styles.statContent}>
            <span className={styles.statLabel}>Avg Rating</span>
            <span className={styles.statValue}>{stats.averageRating}</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiThumbsUp />
          </div>
          <div className={styles.statContent}>
            <span className={styles.statLabel}>Total Likes</span>
            <span className={styles.statValue}>
              {testimonials.reduce((sum, t) => sum + t.likes, 0)}
            </span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className={styles.filters}>
        <div className={styles.filterLeft}>
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${activeTab === 'all' ? styles.active : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Reviews
            </button>
            <button
              className={`${styles.tab} ${activeTab === 'approved' ? styles.active : ''}`}
              onClick={() => setActiveTab('approved')}
            >
              Approved
            </button>
            <button
              className={`${styles.tab} ${activeTab === 'pending' ? styles.active : ''}`}
              onClick={() => setActiveTab('pending')}
            >
              Pending
            </button>
            <button
              className={`${styles.tab} ${activeTab === 'rejected' ? styles.active : ''}`}
              onClick={() => setActiveTab('rejected')}
            >
              Rejected
            </button>
          </div>
        </div>
        <div className={styles.filterRight}>
          <div className={styles.searchBar}>
            <FiSearch />
            <input
              type="text"
              placeholder="Search testimonials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select
            className={styles.ratingFilter}
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
          <div className={styles.viewToggle}>
            <button
              className={viewMode === 'grid' ? styles.active : ''}
              onClick={() => setViewMode('grid')}
            >
              <FiGrid />
            </button>
            <button
              className={viewMode === 'list' ? styles.active : ''}
              onClick={() => setViewMode('list')}
            >
              <FiList />
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials Grid/List */}
      <div className={`${styles.testimonialsContainer} ${viewMode === 'list' ? styles.listView : styles.gridView}`}>
        {filteredTestimonials.map(testimonial => (
          <div key={testimonial.id} className={styles.testimonialCard}>
            {testimonial.featured && (
              <div className={styles.featuredBadge}>
                <FiAward /> Featured
              </div>
            )}

            <div className={styles.cardHeader}>
              <div className={styles.userInfo}>
                <img src={testimonial.avatar} alt={testimonial.name} className={styles.avatar} />
                <div className={styles.userDetails}>
                  <h3>{testimonial.name}</h3>
                  <p className={styles.position}>
                    {testimonial.position} at {testimonial.company}
                  </p>
                  <div className={styles.rating}>
                    {renderStars(testimonial.rating)}
                    <span className={styles.ratingValue}>{testimonial.rating}.0</span>
                  </div>
                </div>
              </div>
              <div className={styles.cardActions}>
                <button
                  className={`${styles.actionBtn} ${testimonial.featured ? styles.featured : ''}`}
                  onClick={() => toggleFeatured(testimonial.id)}
                  title={testimonial.featured ? 'Remove from featured' : 'Add to featured'}
                >
                  <FiStar />
                </button>
                <button className={styles.actionBtn} onClick={() => openModal('view', testimonial)}>
                  <FiEye />
                </button>
                <button className={styles.actionBtn}>
                  <FiMoreVertical />
                </button>
              </div>
            </div>

            <div className={styles.cardBody}>
              <h4 className={styles.testimonialTitle}>{testimonial.title}</h4>
              <p className={styles.testimonialText}>{testimonial.testimonial}</p>
            </div>

            <div className={styles.cardFooter}>
              <div className={styles.footerLeft}>
                <span className={styles.projectType}>
                  <FiGrid /> {testimonial.projectType}
                </span>
                <span className={styles.date}>
                  <FiCalendar /> {new Date(testimonial.date).toLocaleDateString()}
                </span>
                <span className={styles.likes}>
                  <FiThumbsUp /> {testimonial.likes} likes
                </span>
              </div>
              <div className={styles.footerRight}>
                <span className={`${styles.statusBadge} ${getStatusBadge(testimonial.status).class}`}>
                  {getStatusBadge(testimonial.status).icon}
                  {getStatusBadge(testimonial.status).label}
                </span>
              </div>
            </div>

            {testimonial.status === 'pending' && (
              <div className={styles.cardActions}>
                <button
                  className={styles.approveBtn}
                  onClick={() => openModal('approve', testimonial)}
                >
                  <FiCheck /> Approve
                </button>
                <button
                  className={styles.rejectBtn}
                  onClick={() => openModal('reject', testimonial)}
                >
                  <FiX /> Reject
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredTestimonials.length === 0 && (
        <div className={styles.emptyState}>
          <FiMessageSquare />
          <h3>No testimonials found</h3>
          <p>Try adjusting your search or filters</p>
        </div>
      )}

      {/* Modals */}
      {showModal && selectedTestimonial && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            {/* View Modal */}
            {modalType === 'view' && (
              <>
                <div className={styles.modalHeader}>
                  <h2>Testimonial Details</h2>
                  <button className={styles.closeBtn} onClick={closeModal}>
                    <FiX />
                  </button>
                </div>
                <div className={styles.modalBody}>
                  <div className={styles.viewHeader}>
                    <img src={selectedTestimonial.avatar} alt={selectedTestimonial.name} />
                    <div className={styles.viewInfo}>
                      <h3>{selectedTestimonial.name}</h3>
                      <p>{selectedTestimonial.position} at {selectedTestimonial.company}</p>
                      <div className={styles.rating}>
                        {renderStars(selectedTestimonial.rating)}
                        <span>{selectedTestimonial.rating}.0</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.viewContent}>
                    <div className={styles.detailRow}>
                      <FiMail />
                      <span>{selectedTestimonial.email}</span>
                    </div>
                    <div className={styles.detailRow}>
                      <FiCalendar />
                      <span>{new Date(selectedTestimonial.date).toLocaleDateString()}</span>
                    </div>
                    <div className={styles.detailRow}>
                      <FiGrid />
                      <span>{selectedTestimonial.projectType}</span>
                    </div>
                    <div className={styles.testimonialFull}>
                      <h4>{selectedTestimonial.title}</h4>
                      <p>{selectedTestimonial.testimonial}</p>
                    </div>
                  </div>
                </div>
                <div className={styles.modalFooter}>
                  <button className={styles.cancelBtn} onClick={closeModal}>
                    Close
                  </button>
                  {selectedTestimonial.status === 'pending' && (
                    <>
                      <button className={styles.rejectBtn} onClick={handleReject}>
                        <FiX /> Reject
                      </button>
                      <button className={styles.approveBtn} onClick={handleApprove}>
                        <FiCheck /> Approve
                      </button>
                    </>
                  )}
                </div>
              </>
            )}

            {/* Approve Modal */}
            {modalType === 'approve' && (
              <>
                <div className={styles.modalHeader}>
                  <h2>Approve Testimonial</h2>
                  <button className={styles.closeBtn} onClick={closeModal}>
                    <FiX />
                  </button>
                </div>
                <div className={styles.modalBody}>
                  <div className={styles.confirmIcon}>
                    <FiCheckCircle />
                  </div>
                  <h3>Approve this testimonial?</h3>
                  <p>
                    This will make the testimonial from <strong>{selectedTestimonial.name}</strong> visible
                    on your website and marketing materials.
                  </p>
                </div>
                <div className={styles.modalFooter}>
                  <button className={styles.cancelBtn} onClick={closeModal}>
                    Cancel
                  </button>
                  <button className={styles.approveBtn} onClick={handleApprove}>
                    <FiCheck /> Approve
                  </button>
                </div>
              </>
            )}

            {/* Reject Modal */}
            {modalType === 'reject' && (
              <>
                <div className={styles.modalHeader}>
                  <h2>Reject Testimonial</h2>
                  <button className={styles.closeBtn} onClick={closeModal}>
                    <FiX />
                  </button>
                </div>
                <div className={styles.modalBody}>
                  <div className={styles.confirmIcon}>
                    <FiAlertCircle />
                  </div>
                  <h3>Reject this testimonial?</h3>
                  <p>
                    This will mark the testimonial from <strong>{selectedTestimonial.name}</strong> as
                    rejected and it won't be displayed publicly.
                  </p>
                </div>
                <div className={styles.modalFooter}>
                  <button className={styles.cancelBtn} onClick={closeModal}>
                    Cancel
                  </button>
                  <button className={styles.rejectBtn} onClick={handleReject}>
                    <FiX /> Reject
                  </button>
                </div>
              </>
            )}

            {/* Delete Modal */}
            {modalType === 'delete' && (
              <>
                <div className={styles.modalHeader}>
                  <h2>Delete Testimonial</h2>
                  <button className={styles.closeBtn} onClick={closeModal}>
                    <FiX />
                  </button>
                </div>
                <div className={styles.modalBody}>
                  <div className={styles.confirmIcon}>
                    <FiTrash2 />
                  </div>
                  <h3>Delete this testimonial permanently?</h3>
                  <p>
                    This action cannot be undone. The testimonial from{' '}
                    <strong>{selectedTestimonial.name}</strong> will be permanently deleted.
                  </p>
                </div>
                <div className={styles.modalFooter}>
                  <button className={styles.cancelBtn} onClick={closeModal}>
                    Cancel
                  </button>
                  <button className={styles.deleteBtn} onClick={handleDelete}>
                    <FiTrash2 /> Delete
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

export default Testimonials;
