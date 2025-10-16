import React, { useState } from 'react';
import {
  FiUsers,
  FiPlus,
  FiSearch,
  FiFilter,
  FiDownload,
  FiEdit,
  FiTrash2,
  FiEye,
  FiMoreVertical,
  FiX,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCalendar,
  FiShield,
  FiCheck,
  FiAlertCircle
} from 'react-icons/fi';
import styles from './UserManagement.module.scss';

const UserManagement = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+1 234 567 8900',
      role: 'Admin',
      status: 'active',
      avatar: 'JD',
      joinedDate: '2024-01-15',
      lastActive: '2 hours ago',
      projects: 12,
      location: 'New York, USA'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      phone: '+1 234 567 8901',
      role: 'Developer',
      status: 'active',
      avatar: 'SJ',
      joinedDate: '2024-01-10',
      lastActive: '5 hours ago',
      projects: 8,
      location: 'London, UK'
    },
    {
      id: 3,
      name: 'Mike Wilson',
      email: 'mike.w@example.com',
      phone: '+1 234 567 8902',
      role: 'Designer',
      status: 'inactive',
      avatar: 'MW',
      joinedDate: '2024-01-05',
      lastActive: '2 days ago',
      projects: 5,
      location: 'Toronto, Canada'
    },
    {
      id: 4,
      name: 'Emily Brown',
      email: 'emily.b@example.com',
      phone: '+1 234 567 8903',
      role: 'Manager',
      status: 'active',
      avatar: 'EB',
      joinedDate: '2024-01-20',
      lastActive: '1 hour ago',
      projects: 15,
      location: 'Sydney, Australia'
    },
    {
      id: 5,
      name: 'David Lee',
      email: 'david.l@example.com',
      phone: '+1 234 567 8904',
      role: 'Developer',
      status: 'pending',
      avatar: 'DL',
      joinedDate: '2024-01-25',
      lastActive: 'Never',
      projects: 0,
      location: 'Singapore'
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(''); // 'create', 'edit', 'view', 'delete'
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Developer',
    status: 'active',
    location: ''
  });

  const roles = ['Admin', 'Manager', 'Developer', 'Designer', 'Client'];
  const statuses = ['active', 'inactive', 'pending'];

  // Handle Modal Open
  const openModal = (type, user = null) => {
    setModalType(type);
    setSelectedUser(user);
    if (type === 'edit' && user) {
      setFormData({
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        status: user.status,
        location: user.location
      });
    } else if (type === 'create') {
      setFormData({
        name: '',
        email: '',
        phone: '',
        role: 'Developer',
        status: 'active',
        location: ''
      });
    }
    setShowModal(true);
  };

  // Handle Modal Close
  const closeModal = () => {
    setShowModal(false);
    setSelectedUser(null);
    setModalType('');
  };

  // Handle Form Change
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle Create User
  const handleCreateUser = (e) => {
    e.preventDefault();
    const newUser = {
      id: users.length + 1,
      ...formData,
      avatar: formData.name.split(' ').map(n => n[0]).join(''),
      joinedDate: new Date().toISOString().split('T')[0],
      lastActive: 'Just now',
      projects: 0
    };
    setUsers([...users, newUser]);
    closeModal();
  };

  // Handle Update User
  const handleUpdateUser = (e) => {
    e.preventDefault();
    setUsers(users.map(user => 
      user.id === selectedUser.id 
        ? { ...user, ...formData }
        : user
    ));
    closeModal();
  };

  // Handle Delete User
  const handleDeleteUser = () => {
    setUsers(users.filter(user => user.id !== selectedUser.id));
    closeModal();
  };

  // Filter Users
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    const matchesStatus = filterStatus === 'all' || user.status === filterStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const getStatusClass = (status) => {
    switch (status) {
      case 'active':
        return styles.statusActive;
      case 'inactive':
        return styles.statusInactive;
      case 'pending':
        return styles.statusPending;
      default:
        return '';
    }
  };

  const getRoleBadgeClass = (role) => {
    switch (role) {
      case 'Admin':
        return styles.roleAdmin;
      case 'Manager':
        return styles.roleManager;
      case 'Developer':
        return styles.roleDeveloper;
      case 'Designer':
        return styles.roleDesigner;
      case 'Client':
        return styles.roleClient;
      default:
        return '';
    }
  };

  return (
    <div className={styles.userManagement}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.titleSection}>
            <FiUsers className={styles.titleIcon} />
            <div>
              <h1>User Management</h1>
              <p>Manage and organize your team members</p>
            </div>
          </div>
        </div>
        <div className={styles.headerRight}>
          <button className={styles.exportBtn}>
            <FiDownload /> Export
          </button>
          <button className={styles.createBtn} onClick={() => openModal('create')}>
            <FiPlus /> Add User
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiUsers />
          </div>
          <div className={styles.statContent}>
            <p>Total Users</p>
            <h3>{users.length}</h3>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiCheck />
          </div>
          <div className={styles.statContent}>
            <p>Active Users</p>
            <h3>{users.filter(u => u.status === 'active').length}</h3>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiAlertCircle />
          </div>
          <div className={styles.statContent}>
            <p>Pending</p>
            <h3>{users.filter(u => u.status === 'pending').length}</h3>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiShield />
          </div>
          <div className={styles.statContent}>
            <p>Admins</p>
            <h3>{users.filter(u => u.role === 'Admin').length}</h3>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className={styles.controls}>
        <div className={styles.searchBar}>
          <FiSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search users by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className={styles.filters}>
          <select
            className={styles.filterSelect}
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
          >
            <option value="all">All Roles</option>
            {roles.map(role => (
              <option key={role} value={role}>{role}</option>
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
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Users Table */}
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>User</th>
              <th>Contact</th>
              <th>Role</th>
              <th>Status</th>
              <th>Projects</th>
              <th>Last Active</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user.id}>
                <td>
                  <div className={styles.userCell}>
                    <div className={styles.avatar}>{user.avatar}</div>
                    <div className={styles.userInfo}>
                      <p className={styles.userName}>{user.name}</p>
                      <span className={styles.userLocation}>
                        <FiMapPin /> {user.location}
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.contactCell}>
                    <span className={styles.email}>
                      <FiMail /> {user.email}
                    </span>
                    <span className={styles.phone}>
                      <FiPhone /> {user.phone}
                    </span>
                  </div>
                </td>
                <td>
                  <span className={`${styles.roleBadge} ${getRoleBadgeClass(user.role)}`}>
                    {user.role}
                  </span>
                </td>
                <td>
                  <span className={`${styles.statusBadge} ${getStatusClass(user.status)}`}>
                    {user.status}
                  </span>
                </td>
                <td>
                  <span className={styles.projectCount}>{user.projects}</span>
                </td>
                <td>
                  <span className={styles.lastActive}>{user.lastActive}</span>
                </td>
                <td>
                  <div className={styles.actions}>
                    <button
                      className={styles.actionBtn}
                      onClick={() => openModal('view', user)}
                      title="View"
                    >
                      <FiEye />
                    </button>
                    <button
                      className={styles.actionBtn}
                      onClick={() => openModal('edit', user)}
                      title="Edit"
                    >
                      <FiEdit />
                    </button>
                    <button
                      className={`${styles.actionBtn} ${styles.deleteBtn}`}
                      onClick={() => openModal('delete', user)}
                      title="Delete"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredUsers.length === 0 && (
          <div className={styles.emptyState}>
            <FiUsers />
            <h3>No users found</h3>
            <p>Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      {/* Modals */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Create/Edit Modal */}
            {(modalType === 'create' || modalType === 'edit') && (
              <>
                <div className={styles.modalHeader}>
                  <h2>{modalType === 'create' ? 'Add New User' : 'Edit User'}</h2>
                  <button className={styles.closeBtn} onClick={closeModal}>
                    <FiX />
                  </button>
                </div>
                <form
                  className={styles.modalBody}
                  onSubmit={modalType === 'create' ? handleCreateUser : handleUpdateUser}
                >
                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter full name"
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter email address"
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Enter phone number"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Location</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="Enter location"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Role *</label>
                      <select
                        name="role"
                                                value={formData.role}
                        onChange={handleInputChange}
                        required
                      >
                        {roles.map(role => (
                          <option key={role} value={role}>{role}</option>
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
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className={styles.modalFooter}>
                    <button
                      type="button"
                      className={styles.cancelBtn}
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button type="submit" className={styles.submitBtn}>
                      {modalType === 'create' ? 'Create User' : 'Update User'}
                    </button>
                  </div>
                </form>
              </>
            )}

            {/* View Modal */}
            {modalType === 'view' && selectedUser && (
              <>
                <div className={styles.modalHeader}>
                  <h2>User Details</h2>
                  <button className={styles.closeBtn} onClick={closeModal}>
                    <FiX />
                  </button>
                </div>
                <div className={styles.modalBody}>
                  <div className={styles.viewHeader}>
                    <div className={styles.viewAvatar}>{selectedUser.avatar}</div>
                    <div className={styles.viewInfo}>
                      <h3>{selectedUser.name}</h3>
                      <span className={`${styles.roleBadge} ${getRoleBadgeClass(selectedUser.role)}`}>
                        {selectedUser.role}
                      </span>
                      <span className={`${styles.statusBadge} ${getStatusClass(selectedUser.status)}`}>
                        {selectedUser.status}
                      </span>
                    </div>
                  </div>
                  <div className={styles.viewDetails}>
                    <div className={styles.detailRow}>
                      <div className={styles.detailLabel}>
                        <FiMail /> Email
                      </div>
                      <div className={styles.detailValue}>{selectedUser.email}</div>
                    </div>
                    <div className={styles.detailRow}>
                      <div className={styles.detailLabel}>
                        <FiPhone /> Phone
                      </div>
                      <div className={styles.detailValue}>{selectedUser.phone}</div>
                    </div>
                    <div className={styles.detailRow}>
                      <div className={styles.detailLabel}>
                        <FiMapPin /> Location
                      </div>
                      <div className={styles.detailValue}>{selectedUser.location}</div>
                    </div>
                    <div className={styles.detailRow}>
                      <div className={styles.detailLabel}>
                        <FiCalendar /> Joined Date
                      </div>
                      <div className={styles.detailValue}>{selectedUser.joinedDate}</div>
                    </div>
                    <div className={styles.detailRow}>
                      <div className={styles.detailLabel}>
                        <FiUsers /> Projects
                      </div>
                      <div className={styles.detailValue}>{selectedUser.projects} Projects</div>
                    </div>
                    <div className={styles.detailRow}>
                      <div className={styles.detailLabel}>
                        <FiShield /> Last Active
                      </div>
                      <div className={styles.detailValue}>{selectedUser.lastActive}</div>
                    </div>
                  </div>
                </div>
                <div className={styles.modalFooter}>
                  <button
                    className={styles.cancelBtn}
                    onClick={closeModal}
                  >
                    Close
                  </button>
                  <button
                    className={styles.submitBtn}
                    onClick={() => {
                      closeModal();
                      openModal('edit', selectedUser);
                    }}
                  >
                    <FiEdit /> Edit User
                  </button>
                </div>
              </>
            )}

            {/* Delete Modal */}
            {modalType === 'delete' && selectedUser && (
              <>
                <div className={styles.modalHeader}>
                  <h2>Delete User</h2>
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
                      Do you really want to delete <strong>{selectedUser.name}</strong>?
                      This action cannot be undone.
                    </p>
                  </div>
                </div>
                <div className={styles.modalFooter}>
                  <button
                    className={styles.cancelBtn}
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    className={styles.deleteConfirmBtn}
                    onClick={handleDeleteUser}
                  >
                    <FiTrash2 /> Delete User
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

export default UserManagement;