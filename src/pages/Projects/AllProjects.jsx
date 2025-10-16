import React, { useState } from 'react';
import {
  FiFolder,
  FiPlus,
  FiSearch,
  FiFilter,
  FiDownload,
  FiEdit,
  FiTrash2,
  FiEye,
  FiMoreVertical,
  FiX,
  FiCalendar,
  FiUser,
  FiDollarSign,
  FiClock,
  FiCheckCircle,
  FiAlertCircle,
  FiImage,
  FiUpload,
  FiGlobe,
  FiSmartphone,
  FiServer,
  FiShoppingCart,
  FiLayout,
  FiTrendingUp,
  FiUsers,
  FiActivity
} from 'react-icons/fi';
import styles from './AllProjects.module.scss';

const AllProjects = () => {
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
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe']
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
      tags: ['React Native', 'Firebase', 'TypeScript']
    },
    {
      id: 3,
      name: 'Corporate Website Redesign',
      client: 'BrandCo',
      category: 'Web',
      status: 'completed',
      priority: 'low',
      progress: 100,
      budget: '$25,000',
      spent: '$24,500',
      startDate: '2023-12-01',
      dueDate: '2024-01-30',
      team: ['Sarah Johnson', 'Mike Wilson'],
      description: 'Modern corporate website with CMS integration and responsive design.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      tags: ['Next.js', 'Tailwind', 'Strapi']
    },
    {
      id: 4,
      name: 'Cloud Migration Service',
      client: 'DataSystems Ltd',
      category: 'Cloud',
      status: 'pending',
      priority: 'high',
      progress: 20,
      budget: '$80,000',
      spent: '$16,000',
      startDate: '2024-02-01',
      dueDate: '2024-05-01',
      team: ['John Doe', 'Emily Brown', 'David Lee', 'Mike Wilson'],
      description: 'Complete cloud infrastructure migration from on-premise to AWS with zero downtime.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      tags: ['AWS', 'Docker', 'Kubernetes', 'Terraform']
    },
    {
      id: 5,
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
      tags: ['Figma', 'Adobe XD', 'User Research']
    },
    {
      id: 6,
      name: 'API Integration Platform',
      client: 'TechHub',
      category: 'Backend',
      status: 'completed',
      priority: 'high',
      progress: 100,
      budget: '$35,000',
      spent: '$34,200',
      startDate: '2023-11-15',
      dueDate: '2024-01-15',
      team: ['John Doe', 'David Lee'],
      description: 'RESTful API platform with third-party integrations and comprehensive documentation.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      tags: ['Node.js', 'Express', 'PostgreSQL', 'Redis']
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    client: '',
    category: 'Web',
    status: 'pending',
    priority: 'medium',
    budget: '',
    startDate: '',
    dueDate: '',
    description: '',
    image: '',
    tags: ''
  });

  const categories = ['Web', 'Mobile', 'Backend', 'Cloud', 'Design', 'E-commerce'];
  const statuses = ['pending', 'in-progress', 'completed', 'on-hold', 'cancelled'];
  const priorities = ['low', 'medium', 'high', 'urgent'];

  // Handle Modal
  const openModal = (type, project = null) => {
    setModalType(type);
    setSelectedProject(project);
    if (type === 'edit' && project) {
      setFormData({
        name: project.name,
        client: project.client,
        category: project.category,
        status: project.status,
        priority: project.priority,
        budget: project.budget,
        startDate: project.startDate,
        dueDate: project.dueDate,
        description: project.description,
        image: project.image,
        tags: project.tags.join(', ')
      });
      setImagePreview(project.image);
    } else if (type === 'create') {
      setFormData({
        name: '',
        client: '',
        category: 'Web',
        status: 'pending',
        priority: 'medium',
        budget: '',
        startDate: '',
        dueDate: '',
        description: '',
        image: '',
        tags: ''
      });
      setImagePreview(null);
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
    setModalType('');
    setImagePreview(null);
  };

  // Handle Form
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      image: value
    });
    setImagePreview(value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData({
          ...formData,
          image: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreateProject = (e) => {
    e.preventDefault();
    const newProject = {
      id: projects.length + 1,
      ...formData,
      progress: 0,
      spent: '$0',
      team: [],
      tags: formData.tags.split(',').map(tag => tag.trim())
    };
    setProjects([newProject, ...projects]);
    closeModal();
  };

  const handleUpdateProject = (e) => {
    e.preventDefault();
    setProjects(projects.map(project =>
      project.id === selectedProject.id
        ? { ...project, ...formData, tags: formData.tags.split(',').map(tag => tag.trim()) }
        : project
    ));
    closeModal();
  };

  const handleDeleteProject = () => {
    setProjects(projects.filter(project => project.id !== selectedProject.id));
    closeModal();
  };

  // Filters
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.client.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'all' || project.category === filterCategory;
    const matchesStatus = filterStatus === 'all' || project.status === filterStatus;
    const matchesPriority = filterPriority === 'all' || project.priority === filterPriority;
    return matchesSearch && matchesCategory && matchesStatus && matchesPriority;
  });

  // Helper Functions
  const getStatusClass = (status) => {
    switch (status) {
      case 'completed': return styles.statusCompleted;
      case 'in-progress': return styles.statusInProgress;
      case 'pending': return styles.statusPending;
      case 'on-hold': return styles.statusOnHold;
      case 'cancelled': return styles.statusCancelled;
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
      case 'Cloud': return <FiActivity />;
      case 'Design': return <FiLayout />;
      case 'E-commerce': return <FiShoppingCart />;
      default: return <FiFolder />;
    }
  };

  const calculateBudgetPercentage = (budget, spent) => {
    const budgetNum = parseFloat(budget.replace(/[$,]/g, ''));
    const spentNum = parseFloat(spent.replace(/[$,]/g, ''));
    return Math.round((spentNum / budgetNum) * 100);
  };

  return (
    <div className={styles.allProjects}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.titleSection}>
            <FiFolder className={styles.titleIcon} />
            <div>
              <h1>All Projects</h1>
              <p>Manage and track all your projects in one place</p>
            </div>
          </div>
        </div>
        <div className={styles.headerRight}>
          <button className={styles.exportBtn}>
            <FiDownload /> Export
          </button>
          <button className={styles.createBtn} onClick={() => openModal('create')}>
            <FiPlus /> New Project
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiFolder />
          </div>
          <div className={styles.statContent}>
            <p>Total Projects</p>
            <h3>{projects.length}</h3>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiTrendingUp />
          </div>
          <div className={styles.statContent}>
            <p>In Progress</p>
            <h3>{projects.filter(p => p.status === 'in-progress').length}</h3>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiCheckCircle />
          </div>
          <div className={styles.statContent}>
            <p>Completed</p>
            <h3>{projects.filter(p => p.status === 'completed').length}</h3>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiDollarSign />
          </div>
          <div className={styles.statContent}>
            <p>Total Budget</p>
            <h3>$260K</h3>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        <div className={styles.searchBar}>
          <FiSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search projects..."
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
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All Status</option>
            {statuses.map(status => (
              <option key={status} value={status}>
                {status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </option>
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
            <FiFolder />
          </button>
        </div>
      </div>

      {/* Projects Grid/List */}
      {viewMode === 'grid' ? (
        <div className={styles.projectsGrid}>
          {filteredProjects.map(project => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.name} />
                <div className={styles.imageOverlay}>
                  <button className={styles.overlayBtn} onClick={() => openModal('view', project)}>
                    <FiEye /> View
                  </button>
                  <button className={styles.overlayBtn} onClick={() => openModal('edit', project)}>
                    <FiEdit /> Edit
                  </button>
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
                      {project.status.replace('-', ' ')}
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
                <div className={styles.progress}>
                  <div className={styles.progressHeader}>
                    <span>Progress</span>
                    <strong>{project.progress}%</strong>
                  </div>
                  <div className={styles.progressBar}>
                    <div
                      className={styles.progressFill}
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className={styles.projectFooter}>
                  <div className={styles.budget}>
                    <FiDollarSign />
                    <span>{project.spent} / {project.budget}</span>
                  </div>
                  <div className={styles.deadline}>
                    <FiCalendar />
                    <span>{project.dueDate}</span>
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
                <button onClick={() => openModal('edit', project)}>
                  <FiEdit />
                </button>
                <button onClick={() => openModal('delete', project)} className={styles.deleteBtn}>
                  <FiTrash2 />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.projectsList}>
          {filteredProjects.map(project => (
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
                      {project.status.replace('-', ' ')}
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
                </div>
                <div className={styles.progress}>
                  <div className={styles.progressHeader}>
                    <span>Progress</span>
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
                <button onClick={() => openModal('edit', project)}>
                  <FiEdit />
                </button>
                <button onClick={() => openModal('delete', project)} className={styles.deleteBtn}>
                  <FiTrash2 />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {filteredProjects.length === 0 && (
        <div className={styles.emptyState}>
          <FiFolder />
          <h3>No projects found</h3>
          <p>Try adjusting your search or filters</p>
        </div>
      )}

      {/* Modals */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={`${styles.modal} ${modalType === 'view' ? styles.viewModal : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Create/Edit Modal */}
            {(modalType === 'create' || modalType === 'edit') && (
              <>
                <div className={styles.modalHeader}>
                  <h2>{modalType === 'create' ? 'Create New Project' : 'Edit Project'}</h2>
                  <button className={styles.closeBtn} onClick={closeModal}>
                    <FiX />
                  </button>
                </div>
                <form
                  className={styles.modalBody}
                  onSubmit={modalType === 'create' ? handleCreateProject : handleUpdateProject}
                >
                  {/* Image Upload Section */}
                  <div className={styles.imageUploadSection}>
                    <label>Project Image</label>
                    <div className={styles.imageUpload}>
                      {imagePreview ? (
                        <div className={styles.imagePreviewContainer}>
                          <img src={imagePreview} alt="Preview" className={styles.imagePreview} />
                          <button
                            type="button"
                            className={styles.removeImage}
                            onClick={() => {
                              setImagePreview(null);
                              setFormData({ ...formData, image: '' });
                            }}
                          >
                            <FiX />
                          </button>
                        </div>
                      ) : (
                        <div className={styles.uploadPlaceholder}>
                          <FiImage />
                          <p>Upload or enter image URL</p>
                        </div>
                      )}
                    </div>
                    <div className={styles.imageInputs}>
                      <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleImageChange}
                        placeholder="Enter image URL"
                      />
                      <label className={styles.uploadBtn}>
                        <FiUpload /> Upload
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          style={{ display: 'none' }}
                        />
                      </label>
                    </div>
                  </div>

                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label>Project Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter project name"
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Client *</label>
                      <input
                        type="text"
                        name="client"
                        value={formData.client}
                        onChange={handleInputChange}
                        placeholder="Enter client name"
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Category *</label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                      >
                        {categories.map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    </div>
                    <div className={styles.formGroup}>
                      <label>Status *</label>
                      <select
                        name="status"
                        value={formData.status}
                        onChange={handleInputChange}
                        required
                      >
                        {statuses.map(status => (
                          <option key={status} value={status}>
                            {status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className={styles.formGroup}>
                      <label>Priority *</label>
                      <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleInputChange}
                        required
                      >
                        {priorities.map(priority => (
                          <option key={priority} value={priority}>
                            {priority.charAt(0).toUpperCase() + priority.slice(1)}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className={styles.formGroup}>
                      <label>Budget *</label>
                      <input
                        type="text"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        placeholder="e.g., $50,000"
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Start Date *</label>
                      <input
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Due Date *</label>
                      <input
                        type="date"
                        name="dueDate"
                        value={formData.dueDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                      <label>Description *</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Enter project description"
                        rows="4"
                        required
                      />
                    </div>
                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                      <label>Tags (comma separated)</label>
                      <input
                        type="text"
                        name="tags"
                        value={formData.tags}
                        onChange={handleInputChange}
                        placeholder="e.g., React, Node.js, MongoDB"
                      />
                    </div>
                  </div>
                  <div className={styles.modalFooter}>
                    <button type="button" className={styles.cancelBtn} onClick={closeModal}>
                      Cancel
                    </button>
                    <button type="submit" className={styles.submitBtn}>
                      {modalType === 'create' ? 'Create Project' : 'Update Project'}
                    </button>
                  </div>
                </form>
              </>
            )}

            {/* View Modal */}
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
                          {selectedProject.status.replace('-', ' ')}
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
                  <button
                    className={styles.submitBtn}
                    onClick={() => {
                      closeModal();
                      openModal('edit', selectedProject);
                    }}
                  >
                    <FiEdit /> Edit Project
                  </button>
                </div>
              </>
            )}

            {/* Delete Modal */}
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
                    <h3>Are you sure?</h3>
                    <p>
                      Do you really want to delete <strong>{selectedProject.name}</strong>?
                      This action cannot be undone and all project data will be permanently removed.
                    </p>
                  </div>
                </div>
                <div className={styles.modalFooter}>
                  <button className={styles.cancelBtn} onClick={closeModal}>
                    Cancel
                  </button>
                  <button className={styles.deleteConfirmBtn} onClick={handleDeleteProject}>
                    <FiTrash2 /> Delete Project
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

export default AllProjects;