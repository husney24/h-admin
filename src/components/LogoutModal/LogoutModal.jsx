import React from 'react';
import { FiAlertCircle, FiX, FiLogOut } from 'react-icons/fi';
import styles from './LogoutModal.module.scss';

const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleLogout = () => {
    onConfirm();
    // Add your logout logic here (clear session, redirect, etc.)
    console.log('User logged out');
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>
          <FiX />
        </button>

        <div className={styles.modalIcon}>
          <FiAlertCircle />
        </div>

        <h2>Confirm Logout</h2>
        <p>Are you sure you want to logout? Any unsaved changes will be lost.</p>

        <div className={styles.modalActions}>
          <button className={styles.cancelBtn} onClick={onClose}>
            Cancel
          </button>
          <button className={styles.logoutBtn} onClick={handleLogout}>
            <FiLogOut /> Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
