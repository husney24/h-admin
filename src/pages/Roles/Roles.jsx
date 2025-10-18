import React, { useState } from 'react';
import {
  FiShield,
  FiPlus,
  FiSearch,
  FiEdit,
  FiTrash2,
  FiEye,
  FiX,
  FiCheck,
  FiAlertCircle,
  FiUsers,
  FiLock,
  FiUnlock,
  FiKey,
  FiSettings,
  FiCopy
} from 'react-icons/fi';
import styles from './Roles.module.scss';

const Roles = () => {
  const [roles, setRoles] = useState([
    {
      id: 1,
      name: 'Super Admin',
      description: 'Full system access with all permissions',
      users: 2,
      color: '#e74c3c',
      isSystem: true,
      createdDate: '2024-01-01',
      permissions: {
        users: { view: true, create: true, edit: true, delete: true },
        teams: { view: true, create: true, edit: true, delete: true },
        projects: { view: true, create: true, edit: true, delete: true },
        services: { view: true, create: true, edit: true, delete: true },
        content: { view: true, create: true, edit: true, delete: true },
        settings: { view: true, create: true, edit: true, delete: true },
        roles: { view: true, create: true, edit: true, delete: true },
        reports: { view: true, create: true, edit: true, delete: true }
      }
    },
    {
      id: 2,
      name: 'Admin',
      description: 'Administrative access with most permissions',
      users: 5,
      color: '#9b59b6',
      isSystem: true,
      createdDate: '2024-01-01',
      permissions: {
        users: { view: true, create: true, edit: true, delete: false },
        teams: { view: true, create: true, edit: true, delete: false },
        projects: { view: true, create: true, edit: true, delete: true },
        services: { view: true, create: true, edit: true, delete: false },
        content: { view: true, create: true, edit: true, delete: true },
        settings: { view: true, create: false, edit: true, delete: false },
        roles: { view: true, create: false, edit: false, delete: false },
        reports: { view: true, create: true, edit: true, delete: false }
      }
    },
    {
      id: 3,
      name: 'Manager',
      description: 'Manage teams and projects',
      users: 8,
      color: '#3498db',
      isSystem: false,
      createdDate: '2024-01-10',
      permissions: {
        users: { view: true, create: false, edit: false, delete: false },
        teams: { view: true, create: true, edit: true, delete: false },
        projects: { view: true, create: true, edit: true, delete: false },
        services: { view: true, create: false, edit: true, delete: false },
        content: { view: true, create: true, edit: true, delete: false },
        settings: { view: true, create: false, edit: false, delete: false },
        roles: { view: true, create: false, edit: false, delete: false },
        reports: { view: true, create: true, edit: false, delete: false }
      }
    },
    {
      id: 4,
      name: 'Developer',
      description: 'Development and technical access',
      users: 15,
      color: '#2ecc71',
      isSystem: false,
      createdDate: '2024-01-15',
      permissions: {
        users: { view: true, create: false, edit: false, delete: false },
        teams: { view: true, create: false, edit: false, delete: false },
        projects: { view: true, create: false, edit: true, delete: false },
        services: { view: true, create: false, edit: true, delete: false },
        content: { view: true, create: true, edit: true, delete: false },
        settings: { view: false, create: false, edit: false, delete: false },
        roles: { view: false, create: false, edit: false, delete: false },
        reports: { view: true, create: false, edit: false, delete: false }
      }
    },
    {
      id: 5,
      name: 'Designer',
      description: 'Design and content management',
      users: 6,
      color: '#f39c12',
      isSystem: false,
      createdDate: '2024-01-20',
      permissions: {
        users: { view: true, create: false, edit: false, delete: false },
        teams: { view: true, create: false, edit: false, delete: false },
        projects: { view: true, create: false, edit: true, delete: false },
        services: { view: true, create: false, edit: false, delete: false },
        content: { view: true, create: true, edit: true, delete: true },
        settings: { view: false, create: false, edit: false, delete: false },
        roles: { view: false, create: false, edit: false, delete: false },
        reports: { view: true, create: false, edit: false, delete: false }
      }
    },
    {
      id: 6,
      name: 'Client',
      description: 'Limited access for clients',
      users: 12,
      color: '#95a5a6',
      isSystem: false,
      createdDate: '2024-02-01',
      permissions: {
        users: { view: false, create: false, edit: false, delete: false },
        teams: { view: false, create: false, edit: false, delete: false },
        projects: { view: true, create: false, edit: false, delete: false },
        services: { view: true, create: false, edit: false, delete: false },
        content: { view: true, create: false, edit: false, delete: false },
        settings: { view: false, create: false, edit: false, delete: false },
        roles: { view: false, create: false, edit: false, delete: false },
        reports: { view: false, create: false, edit: false, delete: false }
      }
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(''); // 'create', 'edit', 'view', 'delete', 'duplicate'
  const [selectedRole, setSelectedRole] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    color: '#3498db',
    permissions: {
      users: { view: false, create: false, edit: false, delete: false },
      teams: { view: false, create: false, edit: false, delete: false },
      projects: { view: false, create: false, edit: false, delete: false },
      services: { view: false, create: false, edit: false, delete: false },
      content: { view: false, create: false, edit: false, delete: false },
      settings: { view: false, create: false, edit: false, delete: false },
      roles: { view: false, create: false, edit: false, delete: false },
      reports: { view: false, create: false, edit: false, delete: false }
    }
  });

  const permissionModules = [
    { key: 'users', label: 'User Management', icon: <FiUsers /> },
    { key: 'teams', label: 'Team Management', icon: <FiUsers /> },
    { key: 'projects', label: 'Projects', icon: <FiSettings /> },
    { key: 'services', label: 'Services', icon: <FiSettings /> },
    { key: 'content', label: 'Content Management', icon: <FiSettings /> },
    { key: 'settings', label: 'System Settings', icon: <FiSettings /> },
    { key: 'roles', label: 'Roles & Permissions', icon: <FiShield /> },
    { key: 'reports', label: 'Reports & Analytics', icon: <FiSettings /> }
  ];

  const permissionActions = ['view', 'create', 'edit', 'delete'];

  // Handle Modal Open
  const openModal = (type, role = null) => {
    setModalType(type);
    setSelectedRole(role);
    if (type === 'edit' && role) {
      setFormData({
        name: role.name,
        description: role.description,
        color: role.color,
        permissions: JSON.parse(JSON.stringify(role.permissions))
      });
    } else if (type === 'duplicate' && role) {
      setFormData({
        name: `${role.name} (Copy)`,
        description: role.description,
        color: role.color,
        permissions: JSON.parse(JSON.stringify(role.permissions))
      });
      setModalType('create');
    } else if (type === 'create') {
      setFormData({
        name: '',
        description: '',
        color: '#3498db',
        permissions: {
          users: { view: false, create: false, edit: false, delete: false },
          teams: { view: false, create: false, edit: false, delete: false },
          projects: { view: false, create: false, edit: false, delete: false },
          services: { view: false, create: false, edit: false, delete: false },
          content: { view: false, create: false, edit: false, delete: false },
          settings: { view: false, create: false, edit: false, delete: false },
          roles: { view: false, create: false, edit: false, delete: false },
          reports: { view: false, create: false, edit: false, delete: false }
        }
      });
    }
    setShowModal(true);
  };

  // Handle Modal Close
  const closeModal = () => {
    setShowModal(false);
    setSelectedRole(null);
    setModalType('');
  };

  // Handle Form Change
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle Permission Change
  const handlePermissionChange = (module, action) => {
    setFormData({
      ...formData,
      permissions: {
        ...formData.permissions,
        [module]: {
          ...formData.permissions[module],
          [action]: !formData.permissions[module][action]
        }
      }
    });
  };

  // Toggle all permissions for a module
  const toggleModulePermissions = (module) => {
    const allEnabled = permissionActions.every(action => formData.permissions[module][action]);
    const newPermissions = {};
    permissionActions.forEach(action => {
      newPermissions[action] = !allEnabled;
    });
    setFormData({
      ...formData,
      permissions: {
        ...formData.permissions,
        [module]: newPermissions
      }
    });
  };

  // Handle Create Role
  const handleCreateRole = (e) => {
    e.preventDefault();
    const newRole = {
      id: roles.length + 1,
      ...formData,
      users: 0,
      isSystem: false,
      createdDate: new Date().toISOString().split('T')[0]
    };
    setRoles([...roles, newRole]);
    closeModal();
  };

  // Handle Update Role
  const handleUpdateRole = (e) => {
    e.preventDefault();
    setRoles(roles.map(role => 
      role.id === selectedRole.id 
        ? { ...role, ...formData }
        : role
    ));
    closeModal();
  };

  // Handle Delete Role
  const handleDeleteRole = () => {
    setRoles(roles.filter(role => role.id !== selectedRole.id));
    closeModal();
  };

  // Filter Roles
  const filteredRoles = roles.filter(role =>
    role.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    role.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Count permissions
  const countPermissions = (permissions) => {
    let count = 0;
    Object.values(permissions).forEach(module => {
      Object.values(module).forEach(enabled => {
        if (enabled) count++;
      });
    });
    return count;
  };

  const totalRoles = roles.length;
  const totalUsers = roles.reduce((sum, role) => sum + role.users, 0);
  const customRoles = roles.filter(r => !r.isSystem).length;
  const systemRoles = roles.filter(r => r.isSystem).length;

  return (
    <div className={styles.roles}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.titleSection}>
            <FiShield className={styles.titleIcon} />
            <div>
              <h1>Roles & Permissions</h1>
              <p>Manage user roles and access control</p>
            </div>
          </div>
        </div>
        <div className={styles.headerRight}>
          <button className={styles.createBtn} onClick={() => openModal('create')}>
            <FiPlus /> Create Role
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiShield />
          </div>
          <div className={styles.statContent}>
            <p>Total Roles</p>
            <h3>{totalRoles}</h3>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiUsers />
          </div>
          <div className={styles.statContent}>
            <p>Assigned Users</p>
            <h3>{totalUsers}</h3>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiKey />
          </div>
          <div className={styles.statContent}>
            <p>Custom Roles</p>
            <h3>{customRoles}</h3>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiLock />
          </div>
          <div className={styles.statContent}>
            <p>System Roles</p>
            <h3>{systemRoles}</h3>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className={styles.controls}>
        <div className={styles.searchBar}>
          <FiSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search roles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Roles Grid */}
      <div className={styles.rolesGrid}>
        {filteredRoles.map(role => (
          <div key={role.id} className={styles.roleCard}>
            <div className={styles.roleHeader}>
              <div className={styles.roleIcon} style={{ background: role.color }}>
                <FiShield />
              </div>
              <div className={styles.roleInfo}>
                <h3>{role.name}</h3>
                <p>{role.description}</p>
              </div>
              {role.isSystem && (
                <span className={styles.systemBadge}>
                  <FiLock /> System
                </span>
              )}
            </div>

            <div className={styles.roleStats}>
              <div className={styles.roleStat}>
                <FiUsers />
                <span>{role.users} users</span>
              </div>
              <div className={styles.roleStat}>
                <FiKey />
                <span>{countPermissions(role.permissions)} permissions</span>
              </div>
            </div>

            <div className={styles.permissionPreview}>
              <h4>Key Permissions</h4>
              <div className={styles.permissionTags}>
                {Object.entries(role.permissions).map(([module, perms]) => {
                  const enabledPerms = Object.entries(perms).filter(([, enabled]) => enabled);
                  if (enabledPerms.length === 0) return null;
                  return (
                    <span key={module} className={styles.permissionTag}>
                      {module}: {enabledPerms.map(([action]) => action).join(', ')}
                    </span>
                  );
                }).filter(Boolean).slice(0, 3)}
              </div>
            </div>

            <div className={styles.roleActions}>
              <button
                className={styles.actionBtn}
                onClick={() => openModal('view', role)}
                title="View Details"
              >
                <FiEye /> View
              </button>
              <button
                className={styles.actionBtn}
                onClick={() => openModal('duplicate', role)}
                title="Duplicate"
              >
                <FiCopy /> Duplicate
              </button>
              {!role.isSystem && (
                <>
                  <button
                    className={styles.actionBtn}
                    onClick={() => openModal('edit', role)}
                    title="Edit"
                  >
                    <FiEdit /> Edit
                  </button>
                  <button
                    className={`${styles.actionBtn} ${styles.deleteBtn}`}
                    onClick={() => openModal('delete', role)}
                    title="Delete"
                  >
                    <FiTrash2 /> Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredRoles.length === 0 && (
        <div className={styles.emptyState}>
          <FiShield />
          <h3>No roles found</h3>
          <p>Try adjusting your search</p>
        </div>
      )}

      {/* Modals */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={`${styles.modal} ${(modalType === 'create' || modalType === 'edit') ? styles.largeModal : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Create/Edit Modal */}
            {(modalType === 'create' || modalType === 'edit') && (
              <>
                <div className={styles.modalHeader}>
                  <h2>{modalType === 'create' ? 'Create New Role' : 'Edit Role'}</h2>
                  <button className={styles.closeBtn} onClick={closeModal}>
                    <FiX />
                  </button>
                </div>
                <form
                  className={styles.modalBody}
                  onSubmit={modalType === 'create' ? handleCreateRole : handleUpdateRole}
                >
                  <div className={styles.formSection}>
                    <h3>Basic Information</h3>
                    <div className={styles.formGrid}>
                      <div className={styles.formGroup}>
                        <label>Role Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter role name"
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label>Color</label>
                        <input
                          type="color"
                          name="color"
                          value={formData.color}
                          onChange={handleInputChange}
                          className={styles.colorInput}
                        />
                      </div>
                      <div className={styles.formGroup} style={{ gridColumn: '1 / -1' }}>
                        <label>Description</label>
                        <textarea
                          name="description"
                          value={formData.description}
                          onChange={handleInputChange}
                          placeholder="Enter role description"
                          rows="3"
                        />
                      </div>
                    </div>
                  </div>

                  <div className={styles.formSection}>
                    <h3>Permissions</h3>
                    <div className={styles.permissionsTable}>
                      <div className={styles.permissionsHeader}>
                        <div className={styles.moduleColumn}>Module</div>
                        {permissionActions.map(action => (
                          <div key={action} className={styles.actionColumn}>
                            {action.charAt(0).toUpperCase() + action.slice(1)}
                          </div>
                        ))}
                      </div>
                      {permissionModules.map(module => (
                        <div key={module.key} className={styles.permissionRow}>
                          <div className={styles.moduleColumn}>
                            <span className={styles.moduleIcon}>{module.icon}</span>
                            <span className={styles.moduleLabel}>{module.label}</span>
                            <button
                              type="button"
                              className={styles.toggleAllBtn}
                              onClick={() => toggleModulePermissions(module.key)}
                              title="Toggle all"
                            >
                              {permissionActions.every(action => formData.permissions[module.key][action]) ? (
                                <FiUnlock />
                              ) : (
                                <FiLock />
                              )}
                            </button>
                          </div>
                          {permissionActions.map(action => (
                            <div key={action} className={styles.actionColumn}>
                              <label className={styles.checkbox}>
                                <input
                                  type="checkbox"
                                  checked={formData.permissions[module.key][action]}
                                  onChange={() => handlePermissionChange(module.key, action)}
                                />
                                <span className={styles.checkmark}>
                                  {formData.permissions[module.key][action] && <FiCheck />}
                                </span>
                              </label>
                            </div>
                          ))}
                        </div>
                      ))}
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
                      {modalType === 'create' ? 'Create Role' : 'Update Role'}
                    </button>
                  </div>
                </form>
              </>
            )}

            {/* View Modal */}
            {modalType === 'view' && selectedRole && (
              <>
                <div className={styles.modalHeader}>
                  <h2>Role Details</h2>
                  <button className={styles.closeBtn} onClick={closeModal}>
                    <FiX />
                  </button>
                </div>
                <div className={styles.modalBody}>
                  <div className={styles.viewHeader}>
                    <div className={styles.viewIcon} style={{ background: selectedRole.color }}>
                      <FiShield />
                    </div>
                    <div className={styles.viewInfo}>
                      <h3>{selectedRole.name}</h3>
                      <p>{selectedRole.description}</p>
                      <div className={styles.viewBadges}>
                        {selectedRole.isSystem && (
                          <span className={styles.systemBadge}>
                            <FiLock /> System Role
                          </span>
                        )}
                        <span className={styles.infoBadge}>
                          <FiUsers /> {selectedRole.users} users
                        </span>
                        <span className={styles.infoBadge}>
                          <FiKey /> {countPermissions(selectedRole.permissions)} permissions
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.viewDetails}>
                    <h4>All Permissions</h4>
                    <div className={styles.permissionsGrid}>
                      {permissionModules.map(module => {
                        const modulePerms = selectedRole.permissions[module.key];
                        const enabledPerms = Object.entries(modulePerms).filter(([, enabled]) => enabled);
                        if (enabledPerms.length === 0) return null;
                        return (
                          <div key={module.key} className={styles.permissionGroup}>
                            <h5>
                              <span className={styles.moduleIcon}>{module.icon}</span>
                              {module.label}
                            </h5>
                            <div className={styles.permissionList}>
                              {enabledPerms.map(([action]) => (
                                <span key={action} className={styles.permissionItem}>
                                  <FiCheck /> {action.charAt(0).toUpperCase() + action.slice(1)}
                                </span>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className={styles.modalFooter}>
                  <button className={styles.cancelBtn} onClick={closeModal}>
                    Close
                  </button>
                  {!selectedRole.isSystem && (
                    <button
                      className={styles.submitBtn}
                      onClick={() => {
                        closeModal();
                        openModal('edit', selectedRole);
                      }}
                    >
                      <FiEdit /> Edit Role
                    </button>
                  )}
                </div>
              </>
            )}

            {/* Delete Modal */}
            {modalType === 'delete' && selectedRole && (
              <>
                <div className={styles.modalHeader}>
                  <h2>Delete Role</h2>
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
                      Do you really want to delete the role <strong>{selectedRole.name}</strong>?
                      This will affect {selectedRole.users} users. This action cannot be undone.
                    </p>
                  </div>
                </div>
                <div className={styles.modalFooter}>
                  <button className={styles.cancelBtn} onClick={closeModal}>
                    Cancel
                  </button>
                  <button
                    className={styles.deleteConfirmBtn}
                    onClick={handleDeleteRole}
                  >
                    <FiTrash2 /> Delete Role
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

export default Roles;
