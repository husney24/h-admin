import React, { useState } from 'react';
import {
  FiFileText,
  FiPlus,
  FiSearch,
  FiFilter,
  FiEdit,
  FiTrash2,
  FiEye,
  FiClock,
  FiCalendar,
  FiUser,
  FiTag,
  FiMoreVertical,
  FiCheckCircle,
  FiAlertCircle,
  FiGrid,
  FiList,
  FiTrendingUp,
  FiMessageSquare,
  FiHeart,
  FiShare2,
  FiImage,
  FiSave,
  FiX
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styles from './Blog.module.scss';

const Blog = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  
  const [newPost, setNewPost] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: 'Development',
    tags: [],
    status: 'draft',
    featured: false,
    featuredImage: ''
  });
  
  const [imagePreview, setImagePreview] = useState(null);

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with React 19: New Features and Updates',
      slug: 'getting-started-react-19',
      excerpt: 'Explore the latest features in React 19 including server components, improved hooks, and performance optimizations.',
      content: 'Full blog content here...',
      author: 'Husney',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      category: 'Development',
      tags: ['React', 'JavaScript', 'Frontend'],
      status: 'published',
      featured: true,
      featuredImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
      publishedDate: '2025-10-15',
      views: 1245,
      likes: 89,
      comments: 23,
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'Building Scalable Microservices with Node.js',
      slug: 'building-scalable-microservices-nodejs',
      excerpt: 'Learn how to design and implement microservices architecture using Node.js, Docker, and Kubernetes.',
      content: 'Full blog content here...',
      author: 'Husney',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      category: 'Backend',
      tags: ['Node.js', 'Microservices', 'Docker'],
      status: 'published',
      featured: false,
      featuredImage: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80',
      publishedDate: '2025-10-12',
      views: 892,
      likes: 67,
      comments: 15,
      readTime: '12 min read'
    },
    {
      id: 3,
      title: 'The Complete Guide to UI/UX Design Principles',
      slug: 'complete-guide-ui-ux-design',
      excerpt: 'Master the fundamentals of UI/UX design with practical examples and best practices for creating user-friendly interfaces.',
      content: 'Full blog content here...',
      author: 'Husney',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      category: 'Design',
      tags: ['UI/UX', 'Design', 'User Experience'],
      status: 'draft',
      featured: false,
      featuredImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
      publishedDate: null,
      views: 0,
      likes: 0,
      comments: 0,
      readTime: '10 min read'
    },
    {
      id: 4,
      title: 'Cloud Infrastructure Best Practices for Startups',
      slug: 'cloud-infrastructure-best-practices',
      excerpt: 'Essential cloud infrastructure strategies to help your startup scale efficiently while managing costs.',
      content: 'Full blog content here...',
      author: 'Husney',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      category: 'Cloud',
      tags: ['AWS', 'Cloud', 'DevOps'],
      status: 'published',
      featured: true,
      featuredImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
      publishedDate: '2025-10-10',
      views: 2103,
      likes: 145,
      comments: 34,
      readTime: '15 min read'
    },
    {
      id: 5,
      title: 'Mastering TypeScript: Advanced Types and Patterns',
      slug: 'mastering-typescript-advanced-types',
      excerpt: 'Deep dive into TypeScript advanced types, generics, and design patterns for enterprise applications.',
      content: 'Full blog content here...',
      author: 'Husney',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      category: 'Development',
      tags: ['TypeScript', 'JavaScript', 'Programming'],
      status: 'scheduled',
      featured: false,
      featuredImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80',
      publishedDate: '2025-10-20',
      views: 0,
      likes: 0,
      comments: 0,
      readTime: '11 min read'
    },
    {
      id: 6,
      title: 'API Security: Protecting Your REST APIs',
      slug: 'api-security-protecting-rest-apis',
      excerpt: 'Comprehensive guide to securing REST APIs with authentication, authorization, and best security practices.',
      content: 'Full blog content here...',
      author: 'Husney',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      category: 'Security',
      tags: ['Security', 'API', 'Backend'],
      status: 'published',
      featured: false,
      featuredImage: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80',
      publishedDate: '2025-10-08',
      views: 756,
      likes: 54,
      comments: 12,
      readTime: '9 min read'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', count: blogPosts.length },
    { id: 'development', name: 'Development', count: 2 },
    { id: 'backend', name: 'Backend', count: 1 },
    { id: 'design', name: 'Design', count: 1 },
    { id: 'cloud', name: 'Cloud', count: 1 },
    { id: 'security', name: 'Security', count: 1 }
  ];

  const stats = {
    total: blogPosts.length,
    published: blogPosts.filter(p => p.status === 'published').length,
    drafts: blogPosts.filter(p => p.status === 'draft').length,
    scheduled: blogPosts.filter(p => p.status === 'scheduled').length,
    totalViews: blogPosts.reduce((sum, post) => sum + post.views, 0),
    totalLikes: blogPosts.reduce((sum, post) => sum + post.likes, 0)
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           post.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesTab = activeTab === 'all' || post.status === activeTab;
    
    return matchesSearch && matchesCategory && matchesTab;
  });

  const getStatusBadge = (status) => {
    const badges = {
      published: { color: '#10b981', text: 'Published', icon: <FiCheckCircle /> },
      draft: { color: '#f59e0b', text: 'Draft', icon: <FiEdit /> },
      scheduled: { color: '#3b82f6', text: 'Scheduled', icon: <FiClock /> }
    };
    return badges[status] || badges.draft;
  };

  const handleDeletePost = (postId) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      console.log('Delete post:', postId);
      // Add delete logic here
    }
  };

  const handleCreatePost = (e) => {
    e.preventDefault();
    console.log('Creating post:', newPost);
    // Add create post logic here
    setShowCreateModal(false);
    setImagePreview(null);
    setNewPost({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      category: 'Development',
      tags: [],
      status: 'draft',
      featured: false,
      featuredImage: ''
    });
  };

  const handleNewPostChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewPost(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }
      
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setNewPost(prev => ({
          ...prev,
          featuredImage: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    setNewPost(prev => ({
      ...prev,
      featuredImage: ''
    }));
  };

  const handleTagInput = (e) => {
    if (e.key === 'Enter' && e.target.value.trim()) {
      e.preventDefault();
      const newTag = e.target.value.trim();
      if (!newPost.tags.includes(newTag)) {
        setNewPost(prev => ({
          ...prev,
          tags: [...prev.tags, newTag]
        }));
      }
      e.target.value = '';
    }
  };

  const removeTag = (tagToRemove) => {
    setNewPost(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  return (
    <div className={styles.blog}>
      {/* Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerContent}>
          <div className={styles.headerText}>
            <div className={styles.iconBadge}>
              <FiFileText />
            </div>
            <div>
              <h1>Blog Management</h1>
              <p>Create, manage, and publish blog posts</p>
            </div>
          </div>
          <button className={styles.createBtn} onClick={() => setShowCreateModal(true)}>
            <FiPlus /> Create New Post
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiFileText />
          </div>
          <div className={styles.statContent}>
            <span className={styles.statLabel}>Total Posts</span>
            <span className={styles.statValue}>{stats.total}</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiCheckCircle />
          </div>
          <div className={styles.statContent}>
            <span className={styles.statLabel}>Published</span>
            <span className={styles.statValue}>{stats.published}</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiEdit />
          </div>
          <div className={styles.statContent}>
            <span className={styles.statLabel}>Drafts</span>
            <span className={styles.statValue}>{stats.drafts}</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiClock />
          </div>
          <div className={styles.statContent}>
            <span className={styles.statLabel}>Scheduled</span>
            <span className={styles.statValue}>{stats.scheduled}</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiEye />
          </div>
          <div className={styles.statContent}>
            <span className={styles.statLabel}>Total Views</span>
            <span className={styles.statValue}>{stats.totalViews.toLocaleString()}</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiHeart />
          </div>
          <div className={styles.statContent}>
            <span className={styles.statLabel}>Total Likes</span>
            <span className={styles.statValue}>{stats.totalLikes}</span>
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
              All Posts
            </button>
            <button
              className={`${styles.tab} ${activeTab === 'published' ? styles.active : ''}`}
              onClick={() => setActiveTab('published')}
            >
              Published
            </button>
            <button
              className={`${styles.tab} ${activeTab === 'draft' ? styles.active : ''}`}
              onClick={() => setActiveTab('draft')}
            >
              Drafts
            </button>
            <button
              className={`${styles.tab} ${activeTab === 'scheduled' ? styles.active : ''}`}
              onClick={() => setActiveTab('scheduled')}
            >
              Scheduled
            </button>
          </div>
        </div>
        <div className={styles.filterRight}>
          <div className={styles.searchBar}>
            <FiSearch />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select
            className={styles.categoryFilter}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>
                {cat.name} ({cat.count})
              </option>
            ))}
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

      {/* Blog Posts Grid/List */}
      <div className={`${styles.postsContainer} ${viewMode === 'list' ? styles.listView : styles.gridView}`}>
        {filteredPosts.map(post => (
          <div key={post.id} className={styles.postCard}>
            {post.featured && <div className={styles.featuredBadge}>Featured</div>}
            
            <div className={styles.postImage}>
              <img src={post.featuredImage} alt={post.title} />
              <div className={styles.imageOverlay}>
                <button className={styles.overlayBtn}>
                  <FiEye /> Preview
                </button>
              </div>
            </div>

            <div className={styles.postContent}>
              <div className={styles.postHeader}>
                <div className={styles.postMeta}>
                  <span className={styles.category}>
                    <FiTag /> {post.category}
                  </span>
                  <span className={styles.readTime}>
                    <FiClock /> {post.readTime}
                  </span>
                </div>
                <div className={styles.postActions}>
                  <button className={styles.actionBtn}>
                    <FiEdit />
                  </button>
                  <button className={styles.actionBtn} onClick={() => handleDeletePost(post.id)}>
                    <FiTrash2 />
                  </button>
                </div>
              </div>

              <h3 className={styles.postTitle}>{post.title}</h3>
              <p className={styles.postExcerpt}>{post.excerpt}</p>

              <div className={styles.postTags}>
                {post.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>{tag}</span>
                ))}
              </div>

              <div className={styles.postFooter}>
                <div className={styles.postAuthor}>
                  <img src={post.authorAvatar} alt={post.author} />
                  <div>
                    <span className={styles.authorName}>{post.author}</span>
                    <span className={styles.postDate}>
                      {post.publishedDate ? new Date(post.publishedDate).toLocaleDateString() : 'Not published'}
                    </span>
                  </div>
                </div>

                <div className={styles.postStats}>
                  <span><FiEye /> {post.views}</span>
                  <span><FiHeart /> {post.likes}</span>
                  <span><FiMessageSquare /> {post.comments}</span>
                </div>
              </div>

              <div className={styles.postStatus}>
                <span
                  className={styles.statusBadge}
                  style={{ backgroundColor: `${getStatusBadge(post.status).color}20`, color: getStatusBadge(post.status).color }}
                >
                  {getStatusBadge(post.status).icon}
                  {getStatusBadge(post.status).text}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className={styles.emptyState}>
          <FiFileText />
          <h3>No blog posts found</h3>
          <p>Try adjusting your search or filters</p>
        </div>
      )}

      {/* Create Post Modal */}
      {showCreateModal && (
        <div className={styles.modalOverlay} onClick={() => setShowCreateModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>Create New Blog Post</h2>
              <button className={styles.closeBtn} onClick={() => setShowCreateModal(false)}>
                <FiX />
              </button>
            </div>

            <form onSubmit={handleCreatePost} className={styles.modalBody}>
              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label>Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={newPost.title}
                    onChange={handleNewPostChange}
                    placeholder="Enter post title..."
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Slug</label>
                  <input
                    type="text"
                    name="slug"
                    value={newPost.slug}
                    onChange={handleNewPostChange}
                    placeholder="post-url-slug"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Featured Image URL</label>
                  <div className={styles.imageInput}>
                    <input
                      type="url"
                      name="featuredImage"
                      value={newPost.featuredImage}
                      onChange={handleNewPostChange}
                      placeholder="https://example.com/image.jpg"
                    />
                    <input
                      type="file"
                      id="imageUpload"
                      accept="image/*"
                      onChange={handleImageUpload}
                      style={{ display: 'none' }}
                    />
                    <button 
                      type="button" 
                      className={styles.uploadBtn}
                      onClick={() => document.getElementById('imageUpload').click()}
                    >
                      <FiImage /> Upload
                    </button>
                  </div>
                  {imagePreview && (
                    <div className={styles.imagePreview}>
                      <img src={imagePreview} alt="Preview" />
                      <button 
                        type="button" 
                        className={styles.removeImageBtn}
                        onClick={removeImage}
                      >
                        <FiTrash2 /> Remove
                      </button>
                    </div>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label>Category *</label>
                  <select
                    name="category"
                    value={newPost.category}
                    onChange={handleNewPostChange}
                    required
                  >
                    <option value="Development">Development</option>
                    <option value="Backend">Backend</option>
                    <option value="Design">Design</option>
                    <option value="Cloud">Cloud</option>
                    <option value="Security">Security</option>
                    <option value="DevOps">DevOps</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label>Status</label>
                  <select
                    name="status"
                    value={newPost.status}
                    onChange={handleNewPostChange}
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                    <option value="scheduled">Scheduled</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      name="featured"
                      checked={newPost.featured}
                      onChange={handleNewPostChange}
                    />
                    <span>Featured Post</span>
                  </label>
                </div>

                <div className={styles.formGroup} style={{ gridColumn: '1 / -1' }}>
                  <label>Excerpt *</label>
                  <textarea
                    name="excerpt"
                    value={newPost.excerpt}
                    onChange={handleNewPostChange}
                    placeholder="Brief description of the post..."
                    rows="3"
                    required
                  ></textarea>
                </div>

                <div className={styles.formGroup} style={{ gridColumn: '1 / -1' }}>
                  <label>Content *</label>
                  <textarea
                    name="content"
                    value={newPost.content}
                    onChange={handleNewPostChange}
                    placeholder="Write your blog post content here..."
                    rows="8"
                    required
                  ></textarea>
                </div>

                <div className={styles.formGroup} style={{ gridColumn: '1 / -1' }}>
                  <label>Tags</label>
                  <input
                    type="text"
                    placeholder="Type and press Enter to add tags..."
                    onKeyDown={handleTagInput}
                  />
                  {newPost.tags.length > 0 && (
                    <div className={styles.tagsDisplay}>
                      {newPost.tags.map((tag, index) => (
                        <span key={index} className={styles.tagChip}>
                          {tag}
                          <button type="button" onClick={() => removeTag(tag)}>
                            <FiX />
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className={styles.modalFooter}>
                <button type="button" className={styles.cancelBtn} onClick={() => setShowCreateModal(false)}>
                  Cancel
                </button>
                <button type="submit" className={styles.submitBtn}>
                  <FiSave /> Create Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
