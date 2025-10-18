import React, { useState } from 'react';
import {
  FiCheckCircle,
  FiPlus,
  FiSearch,
  FiEdit,
  FiTrash2,
  FiEye,
  FiX,
  FiCalendar,
  FiUser,
  FiDollarSign,
  FiClock,
  FiAlertCircle,
  FiGlobe,
  FiSmartphone,
  FiServer,
  FiShoppingCart,
  FiLayout,
  FiTrendingUp,
  FiUsers,
  FiActivity,
  FiCloud
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styles from './ActiveProjects.module.scss';

const ActiveProjects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'E-commerce Platform',
      client: 'TechCorp Inc.',
      category: 'E-commerce',
      status: 'in-progress',
      priority: 'high',
      progress: 75,
      budget: '$45,000',
      spent: '$33,750',
      startDate: '2024-01-15',
      dueDate: '2024-03-15',
      team: ['John Doe', 'Sarah Johnson', 'Mike Wilson'],
      description: 'Full-featured e-commerce platform with payment integration and inventory management.',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      lastUpdate: '2 hours ago',
      completedTasks: 18,
      totalTasks: 24
    },
    {
      id: 2,
      name: 'Mobile Banking App',
      client: 'FinanceHub',
      category: 'Mobile',
      status: 'in-progress',
      priority: 'medium',
      progress: 45,
      budget: '$60,000',
      spent: '$27,000',
      startDate: '2024-01-20',
      dueDate: '2024-04-20',
      team: ['Emily Brown', 'David Lee'],
      description: 'Secure mobile banking application with real-time transactions and biometric authentication.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
      tags: ['React Native', 'Firebase', 'TypeScript'],
      lastUpdate: '5 hours ago',
      completedTasks: 12,
      totalTasks: 28
    },
    {
      id: 3,
      name: 'UI/UX Dashboard Redesign',
      client: 'StartupXYZ',
      category: 'Design',
      status: 'in-progress',
      priority: 'medium',
      progress: 60,
      budget: '$15,000',
      spent: '$9,000',
      startDate: '2024-01-10',
      dueDate: '2024-02-28',
      team: ['Sarah Johnson'],
      description: 'Complete dashboard redesign with modern UI/UX principles and user research.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      tags: ['Figma', 'Adobe XD', 'User Research'],
      lastUpdate: '1 day ago',
      completedTasks: 15,
      totalTasks: 25
    },
    {
      id: 4,
      name: 'Cloud Migration Service',
      client: 'DataSystems Ltd',
      category: 'Cloud',
      status: 'in-progress',
      priority: 'high',
      progress: 30,
      budget: '$80,000',
      spent: '$24,000',
      startDate: '2024-02-01',
      dueDate: '2024-05-01',
      team: ['John Doe', 'Emily Brown', 'David Lee', 'Mike Wilson'],
      description: 'Complete cloud infrastructure migration from on-premise to AWS with zero downtime.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      tags: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      lastUpdate: '3 hours ago',
      completedTasks: 8,
      totalTasks: 30
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');

  const categories = ['Web', 'Mobile', 'Backend', 'Cloud', 'Design', 'E-commerce'];
  const priorities = ['low', 'medium', 'high', 'urgent'];

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

  const handleArchiveProject = () => {
    setProjects(projects.filter(p => p.id !== selectedProject.id));
    closeModal();
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.client.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'all' || project.category === filterCategory;
    const matchesPriority = filterPriority === 'all' || project.priority === filterPriority;
    return matchesSearch && matchesCategory && matchesPriority;
  });

  const getStatusClass = (status) => {
    switch (status) {
      case 'in-progress': return styles.statusInProgress;
      default: return '';
    }
  };

  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'urgent': return styles.priorityUrgent;
      case 'high': return styles.priorityHigh;
      case 'medium': return styles.priorityMedium;
      case 'low': return styles.priorityLow;
      default: return '';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Web': return <FiGlobe />;
      case 'Mobile': return <FiSmartphone />;
      case 'Backend': return <FiServer />;
      case 'Cloud': return <FiCloud />;
      case 'Design': return <FiLayout />;
      case 'E-commerce': return <FiShoppingCart />;
      default: return <FiCheckCircle />;
    }
  };

  const getTimeRemaining = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return { text: `${Math.abs(diffDays)} days overdue`, class: styles.overdue };
    if (diffDays === 0) return { text: 'Due today', class: styles.dueToday };
    if (diffDays <= 7) return { text: `${diffDays} days left`, class: styles.dueSoon };
    return { text: `${diffDays} days left`, class: styles.onTrack };
  };

  const calculateBudgetPercentage = (budget, spent) => {
    const budgetNum = parseFloat(budget.replace(/[$,]/g, ''));
    const spentNum = parseFloat(spent.replace(/[$,]/g, ''));
    return Math.round((spentNum / budgetNum) * 100);
  };

  return (
    <div className={styles.activeProjects}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.titleSection}>
            <FiCheckCircle className={styles.titleIcon} />
            <div>
              <h1>Active Projects</h1>
              <p>Monitor and manage all ongoing projects</p>
            </div>
          </div>
        </div>
        <div className={styles.headerRight}>
          <Link to="/projects/create" className={styles.createBtn}>
            <FiPlus /> New Project
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiCheckCircle />
          </div>
          <div className={styles.statContent}>
            <p>Active Projects</p>
            <h3>{projects.length}</h3>
            <span className={styles.statChange}>
              <FiTrendingUp /> +2 this month
            </span>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiActivity />
          </div>
          <div className={styles.statContent}>
            <p>Avg Progress</p>
            <h3>{Math.round(projects.reduce((sum, p) => sum + p.progress, 0) / projects.length)}%</h3>
            <span className={styles.statChange}>
              <FiTrendingUp /> On track
            </span>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiUsers />
          </div>
          <div className={styles.statContent}>
            <p>Team Members</p>
            <h3>{new Set(projects.flatMap(p => p.team)).size}</h3>
            <span className={styles.statChange}>8 active members</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiDollarSign />
          </div>
          <div className={styles.statContent}>
            <p>Total Budget</p>
            <h3>$200K</h3>
            <span className={styles.statChange}>$93.75K spent</span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        <div className={styles.searchBar}>
          <FiSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search active projects..."
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
            value={filterPriority}
            onChange={(e) => setFilterPriority(e.target.value)}
          >
            <option value="all">All Priorities</option>
            {priorities.map(priority => (
              <option key={priority} value={priority}>
                {priority.charAt(0).toUpperCase() + priority.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.viewToggle}>
          <button
            className={`${styles.viewBtn} ${viewMode === 'grid' ? styles.active : ''}`}
            onClick={() => setViewMode('grid')}
          >
            <FiLayout />
          </button>
          <button
            className={`${styles.viewBtn} ${viewMode === 'list' ? styles.active : ''}`}
            onClick={() => setViewMode('list')}
          >
            <FiCheckCircle />
          </button>
        </div>
      </div>

      {/* Projects Grid/List */}
      {viewMode === 'grid' ? (
        <div className={styles.projectsGrid}>
          {filteredProjects.map(project => {
            const timeRemaining = getTimeRemaining(project.dueDate);
            return (
              <div key={project.id} className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <img src={project.image} alt={project.name} />
                  <div className={styles.imageOverlay}>
                    <button className={styles.overlayBtn} onClick={() => openModal('view', project)}>
                      <FiEye /> View
                    </button>
                    <Link to={`/projects/${project.id}/edit`} className={styles.overlayBtn}>
                      <FiEdit /> Edit
                    </Link>
                  </div>
                  <div className={styles.categoryBadge}>
                    {getCategoryIcon(project.category)}
                    {project.category}
                  </div>
                </div>
                <div className={styles.projectContent}>
                  <div className={styles.projectHeader}>
                    <h3>{project.name}</h3>
                    <div className={styles.badges}>
                      <span className={`${styles.statusBadge} ${getStatusClass(project.status)}`}>
                        In Progress
                      </span>
                      <span className={`${styles.priorityBadge} ${getPriorityClass(project.priority)}`}>
                        {project.priority}
                      </span>
                    </div>
                  </div>
                  <p className={styles.client}>
                    <FiUser /> {project.client}
                  </p>
                  <p className={styles.description}>{project.description}</p>
                  
                  <div className={styles.taskProgress}>
                    <div className={styles.taskHeader}>
                      <span>Tasks: {project.completedTasks}/{project.totalTasks}</span>
                      <span className={styles.taskPercentage}>
                        {Math.round((project.completedTasks / project.totalTasks) * 100)}%
                      </span>
                    </div>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progressFill}
                        style={{ width: `${(project.completedTasks / project.totalTasks) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className={styles.progress}>
                    <div className={styles.progressHeader}>
                      <span>Overall Progress</span>
                      <strong>{project.progress}%</strong>
                    </div>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progressFill}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className={styles.projectMeta}>
                    <div className={styles.metaItem}>
                      <FiClock />
                      <span className={timeRemaining.class}>{timeRemaining.text}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <FiCalendar />
                      <span>Due: {project.dueDate}</span>
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

                  <div className={styles.lastUpdate}>
                    Last updated {project.lastUpdate}
                  </div>
                </div>
                <div className={styles.cardActions}>
                  <button onClick={() => openModal('view', project)}>
                    <FiEye />
                  </button>
                  <Link to={`/projects/${project.id}/edit`}>
                    <FiEdit />
                  </Link>
                  <button onClick={() => openModal('archive', project)} className={styles.archiveBtn}>
                    <FiAlertCircle />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className={styles.projectsList}>
          {filteredProjects.map(project => {
            const timeRemaining = getTimeRemaining(project.dueDate);
            return (
              <div key={project.id} className={styles.projectListItem}>
                <div className={styles.listImage}>
                  <img src={project.image} alt={project.name} />
                </div>
                <div className={styles.listContent}>
                  <div className={styles.listHeader}>
                    <div className={styles.listTitle}>
                      <h3>{project.name}</h3>
                      <p className={styles.client}><FiUser /> {project.client}</p>
                    </div>
                    <div className={styles.listBadges}>
                      <span className={`${styles.categoryBadge} ${styles.small}`}>
                        {getCategoryIcon(project.category)} {project.category}
                      </span>
                      <span className={`${styles.statusBadge} ${getStatusClass(project.status)}`}>
                        In Progress
                      </span>
                      <span className={`${styles.priorityBadge} ${getPriorityClass(project.priority)}`}>
                        {project.priority}
                      </span>
                    </div>
                  </div>
                  <p className={styles.description}>{project.description}</p>
                  <div className={styles.listMeta}>
                    <div className={styles.metaItem}>
                      <FiDollarSign />
                      <span>{project.spent} / {project.budget}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <FiCalendar />
                      <span>{project.startDate} - {project.dueDate}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <FiUsers />
                      <span>{project.team.length} Members</span>
                    </div>
                    <div className={styles.metaItem}>
                      <FiClock />
                      <span className={timeRemaining.class}>{timeRemaining.text}</span>
                    </div>
                  </div>
                  <div className={styles.taskProgress}>
                    <div className={styles.taskHeader}>
                      <span>Tasks: {project.completedTasks}/{project.totalTasks}</span>
                      <span className={styles.taskPercentage}>
                        {Math.round((project.completedTasks / project.totalTasks) * 100)}%
                      </span>
                    </div>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progressFill}
                        style={{ width: `${(project.completedTasks / project.totalTasks) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className={styles.progress}>
                    <div className={styles.progressHeader}>
                      <span>Overall Progress</span>
                      <strong>{project.progress}%</strong>
                    </div>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progressFill}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className={styles.listActions}>
                  <button onClick={() => openModal('view', project)}>
                    <FiEye />
                  </button>
                  <Link to={`/projects/${project.id}/edit`}>
                    <FiEdit />
                  </Link>
                  <button onClick={() => openModal('archive', project)} className={styles.archiveBtn}>
                    <FiAlertCircle />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {filteredProjects.length === 0 && (
        <div className={styles.emptyState}>
          <FiCheckCircle />
          <h3>No active projects found</h3>
          <p>Try adjusting your search or filters, or create a new project</p>
          <Link to="/projects/create" className={styles.createBtn}>
            <FiPlus /> Create New Project
          </Link>
        </div>
      )}

      {/* View/Archive Modals */}
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
                        <span className={`${styles.statusBadge} ${getStatusClass(selectedProject.status)}`}>
                          In Progress
                        </span>
                        <span className={`${styles.priorityBadge} ${getPriorityClass(selectedProject.priority)}`}>
                          {selectedProject.priority}
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
                          <span className={styles.budgetPercent}>
                            ({calculateBudgetPercentage(selectedProject.budget, selectedProject.spent)}% used)
                          </span>
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
                          <FiClock /> Due Date
                        </div>
                        <div className={styles.detailValue}>{selectedProject.dueDate}</div>
                      </div>
                      <div className={styles.detailRow}>
                        <div className={styles.detailLabel}>
                          <FiUsers /> Team Members
                        </div>
                        <div className={styles.detailValue}>
                          {selectedProject.team.length > 0 ? (
                            <div className={styles.teamList}>
                              {selectedProject.team.map((member, idx) => (
                                <span key={idx} className={styles.teamMember}>{member}</span>
                              ))}
                            </div>
                          ) : (
                            'No team assigned'
                          )}
                        </div>
                      </div>
                    </div>

                    <div className={styles.progress}>
                      <div className={styles.progressHeader}>
                        <span>Project Progress</span>
                        <strong>{selectedProject.progress}%</strong>
                      </div>
                      <div className={styles.progressBar}>
                        <div
                          className={styles.progressFill}
                          style={{ width: `${selectedProject.progress}%` }}
                        ></div>
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
                  <Link to={`/projects/${selectedProject.id}/edit`} className={styles.submitBtn}>
                    <FiEdit /> Edit Project
                  </Link>
                </div>
              </>
            )}

            {modalType === 'archive' && selectedProject && (
              <>
                <div className={styles.modalHeader}>
                  <h2>Archive Project</h2>
                  <button className={styles.closeBtn} onClick={closeModal}>
                    <FiX />
                  </button>
                </div>
                <div className={styles.modalBody}>
                  <div className={styles.deleteConfirm}>
                    <div className={styles.deleteIcon}>
                      <FiAlertCircle />
                    </div>
                    <h3>Archive this project?</h3>
                    <p>
                      Are you sure you want to archive <strong>{selectedProject.name}</strong>?
                      You can restore it from archived projects later.
                    </p>
                  </div>
                </div>
                <div className={styles.modalFooter}>
                  <button className={styles.cancelBtn} onClick={closeModal}>
                    Cancel
                  </button>
                  <button className={styles.archiveConfirmBtn} onClick={handleArchiveProject}>
                    Archive Project
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

export default ActiveProjects;
