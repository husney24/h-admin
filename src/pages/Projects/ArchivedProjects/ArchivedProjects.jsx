import React, { useState } from 'react';
import {
  FiArchive,
  FiSearch,
  FiTrash2,
  FiEye,
  FiX,
  FiCalendar,
  FiUser,
  FiDollarSign,
  FiAlertCircle,
  FiGlobe,
  FiSmartphone,
  FiServer,
  FiShoppingCart,
  FiLayout,
  FiUsers,
  FiCloud,
  FiCheckCircle,
  FiRotateCcw
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styles from './ArchivedProjects.module.scss';

const ArchivedProjects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'Corporate Website Redesign',
      client: 'BrandCo',
      category: 'Web',
      status: 'completed',
      priority: 'low',
      progress: 100,
      budget: '$25,000',
      spent: '$24,500',
      startDate: '2023-12-01',
      completedDate: '2024-01-30',
      archivedDate: '2024-02-05',
      team: ['Sarah Johnson', 'Mike Wilson'],
      description: 'Modern corporate website with CMS integration and responsive design.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      tags: ['Next.js', 'Tailwind', 'Strapi']
    },
    {
      id: 2,
      name: 'API Integration Platform',
      client: 'TechHub',
      category: 'Backend',
      status: 'completed',
      priority: 'high',
      progress: 100,
      budget: '$35,000',
      spent: '$34,200',
      startDate: '2023-11-15',
      completedDate: '2024-01-15',
      archivedDate: '2024-01-20',
      team: ['John Doe', 'David Lee'],
      description: 'RESTful API platform with third-party integrations and comprehensive documentation.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      tags: ['Node.js', 'Express', 'PostgreSQL', 'Redis']
    },
    {
      id: 3,
      name: 'Mobile Fitness App',
      client: 'HealthCo',
      category: 'Mobile',
      status: 'completed',
      priority: 'medium',
      progress: 100,
      budget: '$42,000',
      spent: '$41,500',
      startDate: '2023-10-01',
      completedDate: '2023-12-20',
      archivedDate: '2024-01-05',
      team: ['Emily Brown', 'Sarah Johnson'],
      description: 'Comprehensive fitness tracking app with workout plans and nutrition tracking.',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
      tags: ['React Native', 'Firebase', 'HealthKit']
    },
    {
      id: 4,
      name: 'Restaurant POS System',
      client: 'FoodVentures',
      category: 'E-commerce',
      status: 'completed',
      priority: 'high',
      progress: 100,
      budget: '$38,000',
      spent: '$37,800',
      startDate: '2023-09-15',
      completedDate: '2023-11-30',
      archivedDate: '2023-12-10',
      team: ['John Doe', 'Mike Wilson', 'David Lee'],
      description: 'Point of sale system with inventory management and online ordering integration.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
      tags: ['React', 'Node.js', 'Square API']
    },
    {
      id: 5,
      name: 'Brand Identity Package',
      client: 'NewStartup Inc.',
      category: 'Design',
      status: 'completed',
      priority: 'medium',
      progress: 100,
      budget: '$18,000',
      spent: '$17,500',
      startDate: '2023-11-01',
      completedDate: '2023-12-15',
      archivedDate: '2023-12-20',
      team: ['Sarah Johnson'],
      description: 'Complete brand identity including logo, color palette, typography, and brand guidelines.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
      tags: ['Adobe Illustrator', 'Photoshop', 'Branding']
    },
    {
      id: 6,
      name: 'Legacy System Migration',
      client: 'OldTech Corp',
      category: 'Cloud',
      status: 'completed',
      priority: 'urgent',
      progress: 100,
      budget: '$95,000',
      spent: '$92,000',
      startDate: '2023-08-01',
      completedDate: '2023-11-10',
      archivedDate: '2023-11-15',
      team: ['John Doe', 'Emily Brown', 'David Lee', 'Mike Wilson'],
      description: 'Migration of legacy on-premise systems to modern cloud infrastructure.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      tags: ['AWS', 'Migration', 'DevOps']
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const categories = ['Web', 'Mobile', 'Backend', 'Cloud', 'Design', 'E-commerce'];

  const openModal = (type, project = null) => {
    setModalType(type);
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
    setModalType('');
  };

  const handleRestoreProject = () => {
    // In a real app, this would move the project back to active
    setProjects(projects.filter(p => p.id !== selectedProject.id));
    closeModal();
  };

  const handleDeleteProject = () => {
    setProjects(projects.filter(p => p.id !== selectedProject.id));
    closeModal();
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.client.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'all' || project.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Web': return <FiGlobe />;
      case 'Mobile': return <FiSmartphone />;
      case 'Backend': return <FiServer />;
      case 'Cloud': return <FiCloud />;
      case 'Design': return <FiLayout />;
      case 'E-commerce': return <FiShoppingCart />;
      default: return <FiArchive />;
    }
  };

  const calculateDaysArchived = (archivedDate) => {
    const today = new Date();
    const archived = new Date(archivedDate);
    const diffTime = Math.abs(today - archived);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className={styles.archivedProjects}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.titleSection}>
            <FiArchive className={styles.titleIcon} />
            <div>
              <h1>Archived Projects</h1>
              <p>View and manage completed or archived projects</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiArchive />
          </div>
          <div className={styles.statContent}>
            <p>Archived Projects</p>
            <h3>{projects.length}</h3>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiCheckCircle />
          </div>
          <div className={styles.statContent}>
            <p>Completed Successfully</p>
            <h3>{projects.filter(p => p.status === 'completed').length}</h3>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiDollarSign />
          </div>
          <div className={styles.statContent}>
            <p>Total Revenue</p>
            <h3>$247K</h3>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiUsers />
          </div>
          <div className={styles.statContent}>
            <p>Total Clients</p>
            <h3>{new Set(projects.map(p => p.client)).size}</h3>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        <div className={styles.searchBar}>
          <FiSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search archived projects..."
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
        </div>
      </div>

      {/* Projects Grid */}
      <div className={styles.projectsGrid}>
        {filteredProjects.map(project => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.projectImage}>
              <img src={project.image} alt={project.name} />
              <div className={styles.imageOverlay}>
                <button className={styles.overlayBtn} onClick={() => openModal('view', project)}>
                  <FiEye /> View
                </button>
                <button className={styles.overlayBtn} onClick={() => openModal('restore', project)}>
                  <FiRotateCcw /> Restore
                </button>
              </div>
              <div className={styles.categoryBadge}>
                {getCategoryIcon(project.category)}
                {project.category}
              </div>
              <div className={styles.archivedBadge}>
                <FiArchive /> Archived
              </div>
            </div>
            <div className={styles.projectContent}>
              <div className={styles.projectHeader}>
                <h3>{project.name}</h3>
                <span className={styles.statusBadge}>
                  <FiCheckCircle /> Completed
                </span>
              </div>
              <p className={styles.client}>
                <FiUser /> {project.client}
              </p>
              <p className={styles.description}>{project.description}</p>
              
              <div className={styles.projectMeta}>
                <div className={styles.metaItem}>
                  <FiCalendar />
                  <span>Completed: {project.completedDate}</span>
                </div>
                <div className={styles.metaItem}>
                  <FiArchive />
                  <span>Archived {calculateDaysArchived(project.archivedDate)} days ago</span>
                </div>
              </div>

              <div className={styles.projectFooter}>
                <div className={styles.budget}>
                  <FiDollarSign />
                  <span>{project.spent} / {project.budget}</span>
                </div>
                <div className={styles.teamCount}>
                  <FiUsers />
                  <span>{project.team.length} members</span>
                </div>
              </div>

              <div className={styles.tags}>
                {project.tags.map((tag, idx) => (
                  <span key={idx} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
            <div className={styles.cardActions}>
              <button onClick={() => openModal('view', project)}>
                <FiEye />
              </button>
              <button onClick={() => openModal('restore', project)} className={styles.restoreBtn}>
                <FiRotateCcw />
              </button>
              <button onClick={() => openModal('delete', project)} className={styles.deleteBtn}>
                <FiTrash2 />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className={styles.emptyState}>
          <FiArchive />
          <h3>No archived projects found</h3>
          <p>Completed or archived projects will appear here</p>
        </div>
      )}

      {/* Modals */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            {modalType === 'view' && selectedProject && (
              <>
                <div className={styles.modalHeader}>
                  <h2>Project Details</h2>
                  <button className={styles.closeBtn} onClick={closeModal}>
                    <FiX />
                  </button>
                </div>
                <div className={styles.modalBody}>
                  <div className={styles.viewImage}>
                    <img src={selectedProject.image} alt={selectedProject.name} />
                  </div>
                  <div className={styles.viewContent}>
                    <div className={styles.viewHeader}>
                      <h3>{selectedProject.name}</h3>
                      <div className={styles.viewBadges}>
                        <span className={`${styles.categoryBadge} ${styles.large}`}>
                          {getCategoryIcon(selectedProject.category)} {selectedProject.category}
                        </span>
                        <span className={styles.statusBadge}>
                          <FiCheckCircle /> Completed
                        </span>
                      </div>
                    </div>
                    <p className={styles.viewDescription}>{selectedProject.description}</p>
                    
                    <div className={styles.viewDetails}>
                      <div className={styles.detailRow}>
                        <div className={styles.detailLabel}>
                          <FiUser /> Client
                        </div>
                        <div className={styles.detailValue}>{selectedProject.client}</div>
                      </div>
                      <div className={styles.detailRow}>
                        <div className={styles.detailLabel}>
                          <FiDollarSign /> Budget
                        </div>
                        <div className={styles.detailValue}>
                          {selectedProject.spent} / {selectedProject.budget}
                        </div>
                      </div>
                      <div className={styles.detailRow}>
                        <div className={styles.detailLabel}>
                          <FiCalendar /> Start Date
                        </div>
                        <div className={styles.detailValue}>{selectedProject.startDate}</div>
                      </div>
                      <div className={styles.detailRow}>
                        <div className={styles.detailLabel}>
                          <FiCheckCircle /> Completed Date
                        </div>
                        <div className={styles.detailValue}>{selectedProject.completedDate}</div>
                      </div>
                      <div className={styles.detailRow}>
                        <div className={styles.detailLabel}>
                          <FiArchive /> Archived Date
                        </div>
                        <div className={styles.detailValue}>{selectedProject.archivedDate}</div>
                      </div>
                      <div className={styles.detailRow}>
                        <div className={styles.detailLabel}>
                          <FiUsers /> Team
                        </div>
                        <div className={styles.detailValue}>
                          {selectedProject.team.join(', ')}
                        </div>
                      </div>
                    </div>

                    <div className={styles.viewTags}>
                      <h4>Technologies</h4>
                      <div className={styles.tags}>
                        {selectedProject.tags.map((tag, idx) => (
                          <span key={idx} className={styles.tag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.modalFooter}>
                  <button className={styles.cancelBtn} onClick={closeModal}>
                    Close
                  </button>
                  <button 
                    className={styles.restoreBtn}
                    onClick={() => {
                      closeModal();
                      openModal('restore', selectedProject);
                    }}
                  >
                    <FiRotateCcw /> Restore Project
                  </button>
                </div>
              </>
            )}

            {modalType === 'restore' && selectedProject && (
              <>
                <div className={styles.modalHeader}>
                  <h2>Restore Project</h2>
                  <button className={styles.closeBtn} onClick={closeModal}>
                    <FiX />
                  </button>
                </div>
                <div className={styles.modalBody}>
                  <div className={styles.confirmContent}>
                    <div className={styles.confirmIcon}>
                      <FiRotateCcw />
                    </div>
                    <h3>Restore this project?</h3>
                    <p>
                      Are you sure you want to restore <strong>{selectedProject.name}</strong>?
                      This will move the project back to the active projects list.
                    </p>
                  </div>
                </div>
                <div className={styles.modalFooter}>
                  <button className={styles.cancelBtn} onClick={closeModal}>
                    Cancel
                  </button>
                  <button className={styles.restoreConfirmBtn} onClick={handleRestoreProject}>
                    <FiRotateCcw /> Restore Project
                  </button>
                </div>
              </>
            )}

            {modalType === 'delete' && selectedProject && (
              <>
                <div className={styles.modalHeader}>
                  <h2>Delete Project</h2>
                  <button className={styles.closeBtn} onClick={closeModal}>
                    <FiX />
                  </button>
                </div>
                <div className={styles.modalBody}>
                  <div className={styles.deleteConfirm}>
                    <div className={styles.deleteIcon}>
                      <FiAlertCircle />
                    </div>
                    <h3>Permanently delete?</h3>
                    <p>
                      Are you sure you want to permanently delete <strong>{selectedProject.name}</strong>?
                      This action cannot be undone and all project data will be lost forever.
                    </p>
                  </div>
                </div>
                <div className={styles.modalFooter}>
                  <button className={styles.cancelBtn} onClick={closeModal}>
                    Cancel
                  </button>
                  <button className={styles.deleteConfirmBtn} onClick={handleDeleteProject}>
                    <FiTrash2 /> Delete Permanently
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

export default ArchivedProjects;
