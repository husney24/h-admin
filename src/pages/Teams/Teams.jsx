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
  FiCalendar,
  FiClock,
  FiCheck,
  FiAlertCircle,
  FiTarget,
  FiTrendingUp,
  FiUserPlus,
  FiUser
} from 'react-icons/fi';
import styles from './Teams.module.scss';

const Teams = () => {
  const [teams, setTeams] = useState([
    {
      id: 1,
      name: 'Design Team',
      description: 'UI/UX and Visual Design',
      lead: 'Sarah Johnson',
      leadAvatar: 'SJ',
      members: 8,
      projects: 12,
      status: 'active',
      created: '2024-01-10',
      productivity: 92,
      department: 'Design'
    },
    {
      id: 2,
      name: 'Development Team',
      description: 'Full-stack Development',
      lead: 'Mike Wilson',
      leadAvatar: 'MW',
      members: 15,
      projects: 24,
      status: 'active',
      created: '2024-01-05',
      productivity: 88,
      department: 'Engineering'
    },
    {
      id: 3,
      name: 'Marketing Team',
      description: 'Digital Marketing & Strategy',
      lead: 'Emily Brown',
      leadAvatar: 'EB',
      members: 6,
      projects: 8,
      status: 'active',
      created: '2024-01-15',
      productivity: 85,
      department: 'Marketing'
    },
    {
      id: 4,
      name: 'QA Team',
      description: 'Quality Assurance & Testing',
      lead: 'David Lee',
      leadAvatar: 'DL',
      members: 5,
      projects: 18,
      status: 'active',
      created: '2024-01-20',
      productivity: 90,
      department: 'Engineering'
    },
    {
      id: 5,
      name: 'Research Team',
      description: 'Product Research & Innovation',
      lead: 'John Doe',
      leadAvatar: 'JD',
      members: 4,
      projects: 3,
      status: 'inactive',
      created: '2024-02-01',
      productivity: 65,
      department: 'Research'
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(''); // 'create', 'edit', 'view', 'delete'
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    lead: '',
    department: 'Engineering',
    status: 'active'
  });

  const departments = ['Engineering', 'Design', 'Marketing', 'Research', 'Sales', 'Support'];
  const statuses = ['active', 'inactive'];

  // Handle Modal Open
  const openModal = (type, team = null) => {
    setModalType(type);
    setSelectedTeam(team);
    if (type === 'edit' && team) {
      setFormData({
        name: team.name,
        description: team.description,
        lead: team.lead,
        department: team.department,
        status: team.status
      });
    } else if (type === 'create') {
      setFormData({
        name: '',
        description: '',
        lead: '',
        department: 'Engineering',
        status: 'active'
      });
    }
    setShowModal(true);
  };

  // Handle Modal Close
  const closeModal = () => {
    setShowModal(false);
    setSelectedTeam(null);
    setModalType('');
  };

  // Handle Form Change
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle Create Team
  const handleCreateTeam = (e) => {
    e.preventDefault();
    const newTeam = {
      id: teams.length + 1,
      ...formData,
      leadAvatar: formData.lead.split(' ').map(n => n[0]).join(''),
      members: 0,
      projects: 0,
      created: new Date().toISOString().split('T')[0],
      productivity: 75
    };
    setTeams([...teams, newTeam]);
    closeModal();
  };

  // Handle Update Team
  const handleUpdateTeam = (e) => {
    e.preventDefault();
    setTeams(teams.map(team => 
      team.id === selectedTeam.id 
        ? { ...team, ...formData, leadAvatar: formData.lead.split(' ').map(n => n[0]).join('') }
        : team
    ));
    closeModal();
  };

  // Handle Delete Team
  const handleDeleteTeam = () => {
    setTeams(teams.filter(team => team.id !== selectedTeam.id));
    closeModal();
  };

  // Filter Teams
  const filteredTeams = teams.filter(team => {
    const matchesSearch = team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          team.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = filterDepartment === 'all' || team.department === filterDepartment;
    const matchesStatus = filterStatus === 'all' || team.status === filterStatus;
    return matchesSearch && matchesDepartment && matchesStatus;
  });

  const getStatusClass = (status) => {
    switch (status) {
      case 'active':
        return styles.statusActive;
      case 'inactive':
        return styles.statusInactive;
      default:
        return '';
    }
  };

  const getDepartmentBadgeClass = (department) => {
    switch (department) {
      case 'Engineering':
        return styles.deptEngineering;
      case 'Design':
        return styles.deptDesign;
      case 'Marketing':
        return styles.deptMarketing;
      case 'Research':
        return styles.deptResearch;
      case 'Sales':
        return styles.deptSales;
      case 'Support':
        return styles.deptSupport;
      default:
        return '';
    }
  };

  const totalMembers = teams.reduce((sum, team) => sum + team.members, 0);
  const totalProjects = teams.reduce((sum, team) => sum + team.projects, 0);
  const avgProductivity = Math.round(teams.reduce((sum, team) => sum + team.productivity, 0) / teams.length);

  return (
    <div className={styles.teams}>
      {/* Page Header */}
      <div className={styles.pageHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.titleSection}>
            <FiUsers className={styles.titleIcon} />
            <div>
              <h1>Team Management</h1>
              <p>Organize and manage your teams efficiently</p>
            </div>
          </div>
        </div>
        <div className={styles.headerRight}>
          <button className={styles.exportBtn}>
            <FiDownload /> Export
          </button>
          <button className={styles.createBtn} onClick={() => openModal('create')}>
            <FiPlus /> Create Team
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
            <p>Total Teams</p>
            <h3>{teams.length}</h3>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiUserPlus />
          </div>
          <div className={styles.statContent}>
            <p>Total Members</p>
            <h3>{totalMembers}</h3>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiTarget />
          </div>
          <div className={styles.statContent}>
            <p>Active Projects</p>
            <h3>{totalProjects}</h3>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiTrendingUp />
          </div>
          <div className={styles.statContent}>
            <p>Avg. Productivity</p>
            <h3>{avgProductivity}%</h3>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className={styles.controls}>
        <div className={styles.searchBar}>
          <FiSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search teams by name or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className={styles.filters}>
          <select
            className={styles.filterSelect}
            value={filterDepartment}
            onChange={(e) => setFilterDepartment(e.target.value)}
          >
            <option value="all">All Departments</option>
            {departments.map(dept => (
              <option key={dept} value={dept}>{dept}</option>
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

      {/* Teams Table */}
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Team Name</th>
              <th>Team Lead</th>
              <th>Department</th>
              <th>Members</th>
              <th>Projects</th>
              <th>Productivity</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTeams.map(team => (
              <tr key={team.id}>
                <td>
                  <div className={styles.teamCell}>
                    <div className={styles.teamInfo}>
                      <p className={styles.teamName}>{team.name}</p>
                      <span className={styles.teamDescription}>{team.description}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={styles.leadCell}>
                    <div className={styles.avatar}>{team.leadAvatar}</div>
                    <span className={styles.leadName}>{team.lead}</span>
                  </div>
                </td>
                <td>
                  <span className={`${styles.deptBadge} ${getDepartmentBadgeClass(team.department)}`}>
                    {team.department}
                  </span>
                </td>
                <td>
                  <span className={styles.memberCount}>
                    <FiUser /> {team.members}
                  </span>
                </td>
                <td>
                  <span className={styles.projectCount}>{team.projects}</span>
                </td>
                <td>
                  <div className={styles.productivityCell}>
                    <div className={styles.progressBar}>
                      <div 
                        className={styles.progressFill} 
                        style={{ width: `${team.productivity}%` }}
                      ></div>
                    </div>
                    <span className={styles.productivityValue}>{team.productivity}%</span>
                  </div>
                </td>
                <td>
                  <span className={`${styles.statusBadge} ${getStatusClass(team.status)}`}>
                    {team.status}
                  </span>
                </td>
                <td>
                  <div className={styles.actions}>
                    <button
                      className={styles.actionBtn}
                      onClick={() => openModal('view', team)}
                      title="View"
                    >
                      <FiEye />
                    </button>
                    <button
                      className={styles.actionBtn}
                      onClick={() => openModal('edit', team)}
                      title="Edit"
                    >
                      <FiEdit />
                    </button>
                    <button
                      className={`${styles.actionBtn} ${styles.deleteBtn}`}
                      onClick={() => openModal('delete', team)}
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

        {filteredTeams.length === 0 && (
          <div className={styles.emptyState}>
            <FiUsers />
            <h3>No teams found</h3>
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
                  <h2>{modalType === 'create' ? 'Create New Team' : 'Edit Team'}</h2>
                  <button className={styles.closeBtn} onClick={closeModal}>
                    <FiX />
                  </button>
                </div>
                <form
                  className={styles.modalBody}
                  onSubmit={modalType === 'create' ? handleCreateTeam : handleUpdateTeam}
                >
                  <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                      <label>Team Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter team name"
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Team Lead *</label>
                      <input
                        type="text"
                        name="lead"
                        value={formData.lead}
                        onChange={handleInputChange}
                        placeholder="Enter team lead name"
                        required
                      />
                    </div>
                    <div className={styles.formGroup} style={{ gridColumn: '1 / -1' }}>
                      <label>Description</label>
                      <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Enter team description"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Department *</label>
                      <select
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                        required
                      >
                        {departments.map(dept => (
                          <option key={dept} value={dept}>{dept}</option>
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
                      {modalType === 'create' ? 'Create Team' : 'Update Team'}
                    </button>
                  </div>
                </form>
              </>
            )}

            {/* View Modal */}
            {modalType === 'view' && selectedTeam && (
              <>
                <div className={styles.modalHeader}>
                  <h2>Team Details</h2>
                  <button className={styles.closeBtn} onClick={closeModal}>
                    <FiX />
                  </button>
                </div>
                <div className={styles.modalBody}>
                  <div className={styles.viewHeader}>
                    <div className={styles.viewAvatar}>{selectedTeam.leadAvatar}</div>
                    <div className={styles.viewInfo}>
                      <h3>{selectedTeam.name}</h3>
                      <p className={styles.viewDescription}>{selectedTeam.description}</p>
                      <div className={styles.viewBadges}>
                        <span className={`${styles.deptBadge} ${getDepartmentBadgeClass(selectedTeam.department)}`}>
                          {selectedTeam.department}
                        </span>
                        <span className={`${styles.statusBadge} ${getStatusClass(selectedTeam.status)}`}>
                          {selectedTeam.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.viewDetails}>
                    <div className={styles.detailRow}>
                      <div className={styles.detailLabel}>
                        <FiUser /> Team Lead
                      </div>
                      <div className={styles.detailValue}>{selectedTeam.lead}</div>
                    </div>
                    <div className={styles.detailRow}>
                      <div className={styles.detailLabel}>
                        <FiUsers /> Team Members
                      </div>
                      <div className={styles.detailValue}>{selectedTeam.members} Members</div>
                    </div>
                    <div className={styles.detailRow}>
                      <div className={styles.detailLabel}>
                        <FiTarget /> Active Projects
                      </div>
                      <div className={styles.detailValue}>{selectedTeam.projects} Projects</div>
                    </div>
                    <div className={styles.detailRow}>
                      <div className={styles.detailLabel}>
                        <FiTrendingUp /> Productivity
                      </div>
                      <div className={styles.detailValue}>{selectedTeam.productivity}%</div>
                    </div>
                    <div className={styles.detailRow}>
                      <div className={styles.detailLabel}>
                        <FiCalendar /> Created Date
                      </div>
                      <div className={styles.detailValue}>{selectedTeam.created}</div>
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
                      openModal('edit', selectedTeam);
                    }}
                  >
                    <FiEdit /> Edit Team
                  </button>
                </div>
              </>
            )}

            {/* Delete Modal */}
            {modalType === 'delete' && selectedTeam && (
              <>
                <div className={styles.modalHeader}>
                  <h2>Delete Team</h2>
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
                      Do you really want to delete <strong>{selectedTeam.name}</strong>?
                      This will affect {selectedTeam.members} team members. This action cannot be undone.
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
                    onClick={handleDeleteTeam}
                  >
                    <FiTrash2 /> Delete Team
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

export default Teams;
