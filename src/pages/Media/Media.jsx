import React, { useState } from 'react';
import {
  FiImage,
  FiUpload,
  FiSearch,
  FiFilter,
  FiGrid,
  FiList,
  FiTrash2,
  FiDownload,
  FiEdit,
  FiX,
  FiFile,
  FiFilm,
  FiMusic,
  FiFileText,
  FiCheck,
  FiCopy,
  FiExternalLink,
  FiFolder,
  FiPlus
} from 'react-icons/fi';
import styles from './Media.module.scss';

const Media = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState([]);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [currentMedia, setCurrentMedia] = useState(null);
  const [uploadFiles, setUploadFiles] = useState([]);

  // Sample media data
  const mediaItems = [
    {
      id: 1,
      name: 'project-screenshot.png',
      type: 'image',
      size: '2.4 MB',
      dimensions: '1920x1080',
      uploadDate: '2024-10-15',
      url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
      usedIn: ['Blog Post: React Best Practices', 'Project: E-commerce'],
      alt: 'Project screenshot'
    },
    {
      id: 2,
      name: 'team-photo.jpg',
      type: 'image',
      size: '3.1 MB',
      dimensions: '2400x1600',
      uploadDate: '2024-10-14',
      url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
      usedIn: ['About Page', 'Blog Post: Our Team'],
      alt: 'Team photo'
    },
    {
      id: 3,
      name: 'demo-video.mp4',
      type: 'video',
      size: '15.7 MB',
      dimensions: '1280x720',
      uploadDate: '2024-10-13',
      url: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800',
      usedIn: ['Homepage Hero', 'Services Page'],
      alt: 'Demo video thumbnail'
    },
    {
      id: 4,
      name: 'background-pattern.svg',
      type: 'image',
      size: '156 KB',
      dimensions: '800x600',
      uploadDate: '2024-10-12',
      url: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
      usedIn: ['All Pages Background'],
      alt: 'Background pattern'
    },
    {
      id: 5,
      name: 'product-image-1.jpg',
      type: 'image',
      size: '1.8 MB',
      dimensions: '1600x1200',
      uploadDate: '2024-10-11',
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      usedIn: ['Product Gallery'],
      alt: 'Product image'
    },
    {
      id: 6,
      name: 'presentation.pdf',
      type: 'document',
      size: '4.2 MB',
      dimensions: 'N/A',
      uploadDate: '2024-10-10',
      url: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800',
      usedIn: ['Downloads Section'],
      alt: 'PDF document'
    },
    {
      id: 7,
      name: 'logo-animation.gif',
      type: 'image',
      size: '890 KB',
      dimensions: '500x500',
      uploadDate: '2024-10-09',
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      usedIn: ['Loading Screen'],
      alt: 'Logo animation'
    },
    {
      id: 8,
      name: 'background-music.mp3',
      type: 'audio',
      size: '5.6 MB',
      dimensions: 'N/A',
      uploadDate: '2024-10-08',
      url: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800',
      usedIn: ['Video Background'],
      alt: 'Audio file'
    },
    {
      id: 9,
      name: 'hero-banner.jpg',
      type: 'image',
      size: '3.8 MB',
      dimensions: '2560x1440',
      uploadDate: '2024-10-07',
      url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
      usedIn: ['Homepage Hero'],
      alt: 'Hero banner'
    },
    {
      id: 10,
      name: 'icon-set.zip',
      type: 'archive',
      size: '2.1 MB',
      dimensions: 'N/A',
      uploadDate: '2024-10-06',
      url: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800',
      usedIn: ['Design Assets'],
      alt: 'Archive file'
    },
    {
      id: 11,
      name: 'testimonial-photo.jpg',
      type: 'image',
      size: '1.2 MB',
      dimensions: '800x800',
      uploadDate: '2024-10-05',
      url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
      usedIn: ['Testimonials Section'],
      alt: 'Testimonial photo'
    },
    {
      id: 12,
      name: 'portfolio-showcase.png',
      type: 'image',
      size: '2.9 MB',
      dimensions: '1920x1200',
      uploadDate: '2024-10-04',
      url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
      usedIn: ['Portfolio Page'],
      alt: 'Portfolio showcase'
    }
  ];

  // Filter media
  const filteredMedia = mediaItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'all' || item.type === activeFilter;
    return matchesSearch && matchesFilter;
  });

  // Get stats
  const stats = {
    total: mediaItems.length,
    images: mediaItems.filter(m => m.type === 'image').length,
    videos: mediaItems.filter(m => m.type === 'video').length,
    documents: mediaItems.filter(m => m.type === 'document').length,
    totalSize: '42.8 MB'
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadFiles(files);
  };

  const handleUploadSubmit = () => {
    console.log('Uploading files:', uploadFiles);
    setShowUploadModal(false);
    setUploadFiles([]);
  };

  const toggleSelectMedia = (id) => {
    setSelectedMedia(prev =>
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  const handleMediaClick = (media) => {
    setCurrentMedia(media);
    setShowDetailsModal(true);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('URL copied to clipboard!');
  };

  const getFileIcon = (type) => {
    switch (type) {
      case 'image': return <FiImage />;
      case 'video': return <FiFilm />;
      case 'audio': return <FiMusic />;
      case 'document': return <FiFileText />;
      default: return <FiFile />;
    }
  };

  return (
    <div className={styles.mediaPage}>
      {/* Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.iconBadge}>
            <FiImage />
          </div>
          <div>
            <h1>Media Library</h1>
            <p>Manage your images, videos, and documents</p>
          </div>
        </div>
        <button 
          className={styles.uploadBtn}
          onClick={() => setShowUploadModal(true)}
        >
          <FiUpload /> Upload Files
        </button>
      </div>

      {/* Stats */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiFolder />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statValue}>{stats.total}</span>
            <span className={styles.statLabel}>Total Files</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiImage />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statValue}>{stats.images}</span>
            <span className={styles.statLabel}>Images</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiFilm />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statValue}>{stats.videos}</span>
            <span className={styles.statLabel}>Videos</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiFileText />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statValue}>{stats.documents}</span>
            <span className={styles.statLabel}>Documents</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiFile />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statValue}>{stats.totalSize}</span>
            <span className={styles.statLabel}>Storage Used</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className={styles.filterSection}>
        <div className={styles.filterTabs}>
          <button
            className={activeFilter === 'all' ? styles.active : ''}
            onClick={() => setActiveFilter('all')}
          >
            All Files
          </button>
          <button
            className={activeFilter === 'image' ? styles.active : ''}
            onClick={() => setActiveFilter('image')}
          >
            <FiImage /> Images
          </button>
          <button
            className={activeFilter === 'video' ? styles.active : ''}
            onClick={() => setActiveFilter('video')}
          >
            <FiFilm /> Videos
          </button>
          <button
            className={activeFilter === 'document' ? styles.active : ''}
            onClick={() => setActiveFilter('document')}
          >
            <FiFileText /> Documents
          </button>
        </div>

        <div className={styles.filterActions}>
          <div className={styles.searchBar}>
            <FiSearch />
            <input
              type="text"
              placeholder="Search files..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
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

      {/* Selected Actions */}
      {selectedMedia.length > 0 && (
        <div className={styles.selectedActions}>
          <span>{selectedMedia.length} file(s) selected</span>
          <div className={styles.actionButtons}>
            <button className={styles.downloadBtn}>
              <FiDownload /> Download
            </button>
            <button className={styles.deleteBtn}>
              <FiTrash2 /> Delete
            </button>
          </div>
        </div>
      )}

      {/* Media Grid/List */}
      <div className={`${styles.mediaContainer} ${viewMode === 'list' ? styles.listView : styles.gridView}`}>
        {filteredMedia.map(media => (
          <div 
            key={media.id} 
            className={`${styles.mediaCard} ${selectedMedia.includes(media.id) ? styles.selected : ''}`}
          >
            <div className={styles.mediaCheckbox}>
              <input
                type="checkbox"
                checked={selectedMedia.includes(media.id)}
                onChange={() => toggleSelectMedia(media.id)}
              />
            </div>
            <div 
              className={styles.mediaPreview}
              onClick={() => handleMediaClick(media)}
            >
              {media.type === 'image' || media.type === 'video' ? (
                <img src={media.url} alt={media.alt} />
              ) : (
                <div className={styles.fileIcon}>
                  {getFileIcon(media.type)}
                </div>
              )}
              <div className={styles.mediaOverlay}>
                <button className={styles.viewBtn}>
                  <FiExternalLink /> View
                </button>
              </div>
            </div>
            <div className={styles.mediaInfo}>
              <h3>{media.name}</h3>
              <div className={styles.mediaMeta}>
                <span>{media.size}</span>
                {media.dimensions !== 'N/A' && (
                  <>
                    <span>•</span>
                    <span>{media.dimensions}</span>
                  </>
                )}
              </div>
              <div className={styles.mediaActions}>
                <button onClick={() => handleMediaClick(media)}>
                  <FiEdit />
                </button>
                <button onClick={() => copyToClipboard(media.url)}>
                  <FiCopy />
                </button>
                <button>
                  <FiDownload />
                </button>
                <button className={styles.deleteAction}>
                  <FiTrash2 />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredMedia.length === 0 && (
        <div className={styles.emptyState}>
          <FiImage />
          <h3>No files found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      )}

      {/* Upload Modal */}
      {showUploadModal && (
        <div className={styles.modalOverlay} onClick={() => setShowUploadModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>Upload Files</h2>
              <button onClick={() => setShowUploadModal(false)}>
                <FiX />
              </button>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.uploadArea}>
                <input
                  type="file"
                  id="fileUpload"
                  multiple
                  onChange={handleFileUpload}
                  style={{ display: 'none' }}
                />
                <label htmlFor="fileUpload" className={styles.uploadLabel}>
                  <FiUpload />
                  <h3>Drop files here or click to upload</h3>
                  <p>Support for images, videos, documents, and more</p>
                </label>
              </div>
              {uploadFiles.length > 0 && (
                <div className={styles.uploadList}>
                  <h4>{uploadFiles.length} file(s) ready to upload</h4>
                  {uploadFiles.map((file, index) => (
                    <div key={index} className={styles.uploadItem}>
                      <FiFile />
                      <span>{file.name}</span>
                      <span className={styles.fileSize}>
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className={styles.modalFooter}>
              <button 
                className={styles.cancelBtn}
                onClick={() => setShowUploadModal(false)}
              >
                Cancel
              </button>
              <button 
                className={styles.submitBtn}
                onClick={handleUploadSubmit}
                disabled={uploadFiles.length === 0}
              >
                <FiUpload /> Upload {uploadFiles.length > 0 && `(${uploadFiles.length})`}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Details Modal */}
      {showDetailsModal && currentMedia && (
        <div className={styles.modalOverlay} onClick={() => setShowDetailsModal(false)}>
          <div className={styles.detailsModal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>Media Details</h2>
              <button onClick={() => setShowDetailsModal(false)}>
                <FiX />
              </button>
            </div>
            <div className={styles.detailsBody}>
              <div className={styles.detailsPreview}>
                {currentMedia.type === 'image' || currentMedia.type === 'video' ? (
                  <img src={currentMedia.url} alt={currentMedia.alt} />
                ) : (
                  <div className={styles.detailsFileIcon}>
                    {getFileIcon(currentMedia.type)}
                  </div>
                )}
              </div>
              <div className={styles.detailsInfo}>
                <div className={styles.detailsGroup}>
                  <label>File Name</label>
                  <p>{currentMedia.name}</p>
                </div>
                <div className={styles.detailsGroup}>
                  <label>File Size</label>
                  <p>{currentMedia.size}</p>
                </div>
                <div className={styles.detailsGroup}>
                  <label>Dimensions</label>
                  <p>{currentMedia.dimensions}</p>
                </div>
                <div className={styles.detailsGroup}>
                  <label>Upload Date</label>
                  <p>{currentMedia.uploadDate}</p>
                </div>
                <div className={styles.detailsGroup}>
                  <label>File URL</label>
                  <div className={styles.urlField}>
                    <input type="text" value={currentMedia.url} readOnly />
                    <button onClick={() => copyToClipboard(currentMedia.url)}>
                      <FiCopy />
                    </button>
                  </div>
                </div>
                <div className={styles.detailsGroup}>
                  <label>Used In</label>
                  <div className={styles.usageList}>
                    {currentMedia.usedIn.map((usage, index) => (
                      <span key={index} className={styles.usageTag}>{usage}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button className={styles.downloadBtn}>
                <FiDownload /> Download
              </button>
              <button className={styles.deleteBtn}>
                <FiTrash2 /> Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Media;
