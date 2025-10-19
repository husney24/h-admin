import React, { useState } from 'react';
import {
  FiUser,
  FiMail,
  FiPhone,
  FiMapPin,
  FiGlobe,
  FiBriefcase,
  FiCalendar,
  FiEdit,
  FiUpload,
  FiTrash2,
  FiSave,
  FiX,
  FiCheck,
  FiLinkedin,
  FiGithub,
  FiTwitter,
  FiFacebook,
  FiInstagram,
  FiLink,
  FiActivity,
  FiTrendingUp,
  FiClock,
  FiAward,
  FiStar,
  FiUsers,
  FiFolderPlus,
  FiMessageSquare,
  FiSettings
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styles from './Profile.module.scss';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80');
  const [imagePreview, setImagePreview] = useState(null);

  const [profileData, setProfileData] = useState({
    fullName: 'Husney Mobarok',
    email: 'husneymobarok827@gmail.com',
    phone: '+91 1234567890',
    bio: 'Full-stack developer passionate about creating innovative web and mobile applications. Experienced in modern web technologies, building scalable solutions from frontend to backend.',
    location: 'Kolkata, India',
    website: 'https://husney.vercel.app',
    company: 'Husney Solutions',
    position: 'Full Stack Developer',
    joinedDate: 'January 2023',
    timezone: 'UTC+5:30 (IST)',
    language: 'English, Hindi'
  });

  const [socialLinks, setSocialLinks] = useState({
    linktree: 'https://linktr.ee/husney_24',
    linkedin: 'https://www.linkedin.com/in/husney24',
    github: 'https://github.com/husney24',
    twitter: 'https://x.com/husney_24',
    facebook: '',
    instagram: '',
    portfolio: 'https://husney.vercel.app'
  });

  // Stats
  const stats = {
    projects: 24,
    completedTasks: 156,
    totalHours: 1240,
    teamMembers: 12,
    achievements: 8,
    rating: 4.9
  };

  // Recent Activity
  const recentActivity = [
    { id: 1, action: 'Created new project', item: 'E-commerce Platform', time: '2 hours ago', icon: <FiFolderPlus /> },
    { id: 2, action: 'Updated profile settings', item: 'Personal Information', time: '5 hours ago', icon: <FiSettings /> },
    { id: 3, action: 'Sent message to', item: 'Sarah Wilson', time: '1 day ago', icon: <FiMessageSquare /> },
    { id: 4, action: 'Completed project', item: 'Mobile App Development', time: '2 days ago', icon: <FiCheck /> },
    { id: 5, action: 'Invited team member', item: 'John Doe', time: '3 days ago', icon: <FiUsers /> }
  ];

  // Achievements
  const achievements = [
    { id: 1, title: 'Project Master', description: 'Completed 20+ projects', icon: <FiAward />, earned: true },
    { id: 2, title: 'Team Leader', description: 'Managed 10+ team members', icon: <FiUsers />, earned: true },
    { id: 3, title: 'Quick Responder', description: 'Response time < 1 hour', icon: <FiClock />, earned: true },
    { id: 4, title: 'Top Contributor', description: '1000+ commits', icon: <FiTrendingUp />, earned: false }
  ];

  // Skills
  const skills = [
    { name: 'JavaScript', level: 95 },
    { name: 'React.js', level: 92 },
    { name: 'React Native', level: 88 },
    { name: 'Node.js', level: 90 },
    { name: 'Express.js', level: 87 },
    { name: 'MongoDB', level: 85 },
    { name: 'MySQL', level: 82 },
    { name: 'Redux', level: 86 },
    { name: 'Python', level: 80 },
    { name: 'Django', level: 78 },
    { name: 'C', level: 75 }
  ];

  const handleProfileChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handleSocialChange = (e) => {
    setSocialLinks({
      ...socialLinks,
      [e.target.name]: e.target.value
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfile = () => {
    console.log('Profile saved:', profileData);
    setIsEditing(false);
    // Add save logic here
  };

  return (
    <div className={styles.profile}>
      {/* Profile Header */}
      <div className={styles.profileHeader}>
        <div className={styles.coverPhoto}>
          <div className={styles.coverGradient}></div>
        </div>
        
        <div className={styles.profileMain}>
          <div className={styles.profilePicture}>
            <img src={imagePreview || profileImage} alt="Profile" />
            {isEditing && (
              <label className={styles.uploadOverlay}>
                <FiUpload />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: 'none' }}
                />
              </label>
            )}
          </div>

          <div className={styles.profileInfo}>
            <div className={styles.profileTitle}>
              <h1>{profileData.fullName}</h1>
              <p className={styles.position}>{profileData.position} at {profileData.company}</p>
              <div className={styles.profileMeta}>
                <span><FiMapPin /> {profileData.location}</span>
                <span><FiCalendar /> Joined {profileData.joinedDate}</span>
                <span><FiClock /> {profileData.timezone}</span>
              </div>
            </div>

            <div className={styles.profileActions}>
              {!isEditing ? (
                <>
                  <button className={styles.editBtn} onClick={() => setIsEditing(true)}>
                    <FiEdit /> Edit Profile
                  </button>
                  <Link to="/settings" className={styles.settingsBtn}>
                    <FiSettings /> Settings
                  </Link>
                </>
              ) : (
                <>
                  <button className={styles.saveBtn} onClick={handleSaveProfile}>
                    <FiSave /> Save Changes
                  </button>
                  <button className={styles.cancelBtn} onClick={() => setIsEditing(false)}>
                    <FiX /> Cancel
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiFolderPlus />
          </div>
          <div className={styles.statContent}>
            <h3>{stats.projects}</h3>
            <span>Projects</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiCheck />
          </div>
          <div className={styles.statContent}>
            <h3>{stats.completedTasks}</h3>
            <span>Completed Tasks</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiClock />
          </div>
          <div className={styles.statContent}>
            <h3>{stats.totalHours}h</h3>
            <span>Total Hours</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiUsers />
          </div>
          <div className={styles.statContent}>
            <h3>{stats.teamMembers}</h3>
            <span>Team Members</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiAward />
          </div>
          <div className={styles.statContent}>
            <h3>{stats.achievements}</h3>
            <span>Achievements</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiStar />
          </div>
          <div className={styles.statContent}>
            <h3>{stats.rating}</h3>
            <span>Rating</span>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className={styles.contentGrid}>
        {/* Left Column */}
        <div className={styles.leftColumn}>
          {/* About Section */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h2><FiUser /> About</h2>
              {isEditing && (
                <button className={styles.editIconBtn}>
                  <FiEdit />
                </button>
              )}
            </div>
            <div className={styles.cardBody}>
              {isEditing ? (
                <textarea
                  name="bio"
                  value={profileData.bio}
                  onChange={handleProfileChange}
                  rows="4"
                  className={styles.bioInput}
                />
              ) : (
                <p className={styles.bio}>{profileData.bio}</p>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h2><FiMail /> Contact Information</h2>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <FiMail />
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleProfileChange}
                    />
                  ) : (
                    <div>
                      <span className={styles.contactLabel}>Email</span>
                      <span className={styles.contactValue}>{profileData.email}</span>
                    </div>
                  )}
                </div>

                <div className={styles.contactItem}>
                  <FiPhone />
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleProfileChange}
                    />
                  ) : (
                    <div>
                      <span className={styles.contactLabel}>Phone</span>
                      <span className={styles.contactValue}>{profileData.phone}</span>
                    </div>
                  )}
                </div>

                <div className={styles.contactItem}>
                  <FiGlobe />
                  {isEditing ? (
                    <input
                      type="url"
                      name="website"
                      value={profileData.website}
                      onChange={handleProfileChange}
                    />
                  ) : (
                    <div>
                      <span className={styles.contactLabel}>Website</span>
                      <a href={profileData.website} target="_blank" rel="noopener noreferrer" className={styles.contactValue}>
                        {profileData.website}
                      </a>
                    </div>
                  )}
                </div>

                <div className={styles.contactItem}>
                  <FiBriefcase />
                  {isEditing ? (
                    <input
                      type="text"
                      name="company"
                      value={profileData.company}
                      onChange={handleProfileChange}
                    />
                  ) : (
                    <div>
                      <span className={styles.contactLabel}>Company</span>
                      <span className={styles.contactValue}>{profileData.company}</span>
                    </div>
                  )}
                </div>

                <div className={styles.contactItem}>
                  <FiMapPin />
                  {isEditing ? (
                    <input
                      type="text"
                      name="location"
                      value={profileData.location}
                      onChange={handleProfileChange}
                    />
                  ) : (
                    <div>
                      <span className={styles.contactLabel}>Location</span>
                      <span className={styles.contactValue}>{profileData.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h2><FiLink /> Social Links</h2>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.socialLinks}>
                <div className={styles.socialItem}>
                  <FiLink className={styles.linktree} />
                  {isEditing ? (
                    <input
                      type="url"
                      name="linktree"
                      value={socialLinks.linktree}
                      onChange={handleSocialChange}
                      placeholder="Linktree URL"
                    />
                  ) : (
                    socialLinks.linktree && (
                      <a href={socialLinks.linktree} target="_blank" rel="noopener noreferrer">
                        Linktree
                      </a>
                    )
                  )}
                </div>

                <div className={styles.socialItem}>
                  <FiGithub className={styles.github} />
                  {isEditing ? (
                    <input
                      type="url"
                      name="github"
                      value={socialLinks.github}
                      onChange={handleSocialChange}
                      placeholder="GitHub URL"
                    />
                  ) : (
                    socialLinks.github && (
                      <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    )
                  )}
                </div>

                <div className={styles.socialItem}>
                  <FiLinkedin className={styles.linkedin} />
                  {isEditing ? (
                    <input
                      type="url"
                      name="linkedin"
                      value={socialLinks.linkedin}
                      onChange={handleSocialChange}
                      placeholder="LinkedIn URL"
                    />
                  ) : (
                    socialLinks.linkedin && (
                      <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                        LinkedIn
                      </a>
                    )
                  )}
                </div>

                <div className={styles.socialItem}>
                  <FiTwitter className={styles.twitter} />
                  {isEditing ? (
                    <input
                      type="url"
                      name="twitter"
                      value={socialLinks.twitter}
                      onChange={handleSocialChange}
                      placeholder="X (Twitter) URL"
                    />
                  ) : (
                    socialLinks.twitter && (
                      <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                        X (Twitter)
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h2><FiActivity /> Skills & Expertise</h2>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.skillsList}>
                {skills.map((skill, index) => (
                  <div key={index} className={styles.skillItem}>
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    <div className={styles.skillBar}>
                      <div 
                        className={styles.skillProgress} 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.rightColumn}>
          {/* Recent Activity */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h2><FiActivity /> Recent Activity</h2>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.activityList}>
                {recentActivity.map(activity => (
                  <div key={activity.id} className={styles.activityItem}>
                    <div className={styles.activityIcon}>
                      {activity.icon}
                    </div>
                    <div className={styles.activityContent}>
                      <p>
                        <span className={styles.activityAction}>{activity.action}</span>
                        {' '}
                        <strong>{activity.item}</strong>
                      </p>
                      <span className={styles.activityTime}>{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h2><FiAward /> Achievements</h2>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.achievementsList}>
                {achievements.map(achievement => (
                  <div 
                    key={achievement.id} 
                    className={`${styles.achievementItem} ${achievement.earned ? styles.earned : styles.locked}`}
                  >
                    <div className={styles.achievementIcon}>
                      {achievement.icon}
                    </div>
                    <div className={styles.achievementContent}>
                      <h4>{achievement.title}</h4>
                      <p>{achievement.description}</p>
                    </div>
                    {achievement.earned && (
                      <div className={styles.earnedBadge}>
                        <FiCheck />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
