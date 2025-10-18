import React, { useState } from 'react';
import {
  FiPlusCircle,
  FiImage,
  FiUpload,
  FiX,
  FiSave,
  FiArrowLeft,
  FiGlobe,
  FiSmartphone,
  FiServer,
  FiCloud,
  FiLayout,
  FiShoppingCart,
  FiAlertCircle
} from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import styles from './CreateProject.module.scss';

const CreateProject = () => {
  const navigate = useNavigate();
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
    tags: '',
    team: ''
  });
  const [errors, setErrors] = useState({});

  const categories = ['Web', 'Mobile', 'Backend', 'Cloud', 'Design', 'E-commerce'];
  const statuses = ['pending', 'in-progress', 'on-hold'];
  const priorities = ['low', 'medium', 'high', 'urgent'];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Web': return <FiGlobe />;
      case 'Mobile': return <FiSmartphone />;
      case 'Backend': return <FiServer />;
      case 'Cloud': return <FiCloud />;
      case 'Design': return <FiLayout />;
      case 'E-commerce': return <FiShoppingCart />;
      default: return <FiPlusCircle />;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
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
      if (file.size > 5000000) { // 5MB limit
        setErrors({
          ...errors,
          image: 'Image size should be less than 5MB'
        });
        return;
      }
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

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Project name is required';
    }

    if (!formData.client.trim()) {
      newErrors.client = 'Client name is required';
    }

    if (!formData.budget.trim()) {
      newErrors.budget = 'Budget is required';
    }

    if (!formData.startDate) {
      newErrors.startDate = 'Start date is required';
    }

    if (!formData.dueDate) {
      newErrors.dueDate = 'Due date is required';
    }

    if (formData.startDate && formData.dueDate) {
      const start = new Date(formData.startDate);
      const due = new Date(formData.dueDate);
      if (due <= start) {
        newErrors.dueDate = 'Due date must be after start date';
      }
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.length < 50) {
      newErrors.description = 'Description should be at least 50 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, this would send data to the backend
      console.log('Creating project:', formData);
      // Navigate to projects page
      navigate('/projects');
    }
  };

  const handleSaveDraft = () => {
    // Save as draft without validation
    console.log('Saving draft:', formData);
    // Navigate back
    navigate('/projects');
  };

  return (
    <div className={styles.createProject}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerLeft}>
          <Link to="/projects" className={styles.backButton}>
            <FiArrowLeft /> Back to Projects
          </Link>
          <div className={styles.titleSection}>
            <FiPlusCircle className={styles.titleIcon} />
            <div>
              <h1>Create New Project</h1>
              <p>Fill in the details to create a new project</p>
            </div>
          </div>
        </div>
        <div className={styles.headerRight}>
          <button className={styles.draftBtn} onClick={handleSaveDraft}>
            Save Draft
          </button>
          <button className={styles.createBtn} onClick={handleSubmit}>
            <FiSave /> Create Project
          </button>
        </div>
      </div>

      {/* Form */}
      <form className={styles.projectForm} onSubmit={handleSubmit}>
        <div className={styles.formLayout}>
          {/* Left Column - Main Details */}
          <div className={styles.mainColumn}>
            <div className={styles.formSection}>
              <h3>Project Information</h3>
              
              <div className={styles.formGroup}>
                <label>Project Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter project name"
                  className={errors.name ? styles.error : ''}
                />
                {errors.name && (
                  <span className={styles.errorMessage}>
                    <FiAlertCircle /> {errors.name}
                  </span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label>Client Name *</label>
                <input
                  type="text"
                  name="client"
                  value={formData.client}
                  onChange={handleInputChange}
                  placeholder="Enter client or company name"
                  className={errors.client ? styles.error : ''}
                />
                {errors.client && (
                  <span className={styles.errorMessage}>
                    <FiAlertCircle /> {errors.client}
                  </span>
                )}
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Category *</label>
                  <div className={styles.selectWrapper}>
                    <span className={styles.selectIcon}>
                      {getCategoryIcon(formData.category)}
                    </span>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Status *</label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                  >
                    {statuses.map(status => (
                      <option key={status} value={status}>
                        {status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Priority *</label>
                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
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
                    className={errors.budget ? styles.error : ''}
                  />
                  {errors.budget && (
                    <span className={styles.errorMessage}>
                      <FiAlertCircle /> {errors.budget}
                    </span>
                  )}
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Start Date *</label>
                  <input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    className={errors.startDate ? styles.error : ''}
                  />
                  {errors.startDate && (
                    <span className={styles.errorMessage}>
                      <FiAlertCircle /> {errors.startDate}
                    </span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label>Due Date *</label>
                  <input
                    type="date"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleInputChange}
                    className={errors.dueDate ? styles.error : ''}
                  />
                  {errors.dueDate && (
                    <span className={styles.errorMessage}>
                      <FiAlertCircle /> {errors.dueDate}
                    </span>
                  )}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Project Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Provide a detailed description of the project goals, requirements, and deliverables..."
                  rows="6"
                  className={errors.description ? styles.error : ''}
                />
                <div className={styles.charCount}>
                  {formData.description.length} characters
                  {formData.description.length < 50 && ' (minimum 50)'}
                </div>
                {errors.description && (
                  <span className={styles.errorMessage}>
                    <FiAlertCircle /> {errors.description}
                  </span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label>Technologies & Tags</label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  placeholder="e.g., React, Node.js, MongoDB, AWS (comma separated)"
                />
                <small className={styles.helpText}>
                  Enter technologies, frameworks, or keywords separated by commas
                </small>
              </div>

              <div className={styles.formGroup}>
                <label>Team Members</label>
                <input
                  type="text"
                  name="team"
                  value={formData.team}
                  onChange={handleInputChange}
                  placeholder="e.g., John Doe, Sarah Smith (comma separated)"
                />
                <small className={styles.helpText}>
                  Enter team member names separated by commas
                </small>
              </div>
            </div>
          </div>

          {/* Right Column - Image & Preview */}
          <div className={styles.sideColumn}>
            <div className={styles.formSection}>
              <h3>Project Image</h3>
              
              <div className={styles.imageUploadSection}>
                {imagePreview ? (
                  <div className={styles.imagePreviewContainer}>
                    <img src={imagePreview} alt="Project preview" className={styles.imagePreview} />
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
                    <p>Upload project image</p>
                    <small>PNG, JPG up to 5MB</small>
                  </div>
                )}
              </div>

              <div className={styles.imageInputs}>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleImageChange}
                  placeholder="Or enter image URL"
                />
                <label className={styles.uploadBtn}>
                  <FiUpload /> Upload File
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    style={{ display: 'none' }}
                  />
                </label>
              </div>
              {errors.image && (
                <span className={styles.errorMessage}>
                  <FiAlertCircle /> {errors.image}
                </span>
              )}
            </div>

            {/* Preview Card */}
            <div className={styles.formSection}>
              <h3>Preview</h3>
              <div className={styles.previewCard}>
                {imagePreview && (
                  <div className={styles.previewImage}>
                    <img src={imagePreview} alt="Preview" />
                  </div>
                )}
                <div className={styles.previewContent}>
                  <div className={styles.previewHeader}>
                    <h4>{formData.name || 'Project Name'}</h4>
                    {formData.category && (
                      <span className={styles.categoryBadge}>
                        {getCategoryIcon(formData.category)}
                        {formData.category}
                      </span>
                    )}
                  </div>
                  <p className={styles.previewClient}>
                    {formData.client || 'Client Name'}
                  </p>
                  <p className={styles.previewDescription}>
                    {formData.description || 'Project description will appear here...'}
                  </p>
                  {formData.tags && (
                    <div className={styles.previewTags}>
                      {formData.tags.split(',').map((tag, idx) => (
                        <span key={idx} className={styles.tag}>
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Guidelines */}
            <div className={styles.formSection}>
              <h3>Guidelines</h3>
              <div className={styles.guidelines}>
                <ul>
                  <li>Provide a clear and descriptive project name</li>
                  <li>Include comprehensive project description (min 50 characters)</li>
                  <li>Set realistic timeline and budget</li>
                  <li>Add relevant technologies and team members</li>
                  <li>Upload a representative project image</li>
                  <li>Choose appropriate category and priority</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className={styles.formActions}>
          <Link to="/projects" className={styles.cancelBtn}>
            <FiX /> Cancel
          </Link>
          <div className={styles.actionButtons}>
            <button type="button" className={styles.draftBtn} onClick={handleSaveDraft}>
              Save as Draft
            </button>
            <button type="submit" className={styles.submitBtn}>
              <FiSave /> Create Project
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProject;
