import React, { useEffect } from 'react';
import { FiCheck, FiX, FiAlertCircle, FiInfo } from 'react-icons/fi';
import styles from './Toast.module.scss';

const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <FiCheck />;
      case 'error':
        return <FiX />;
      case 'warning':
        return <FiAlertCircle />;
      case 'info':
        return <FiInfo />;
      default:
        return <FiCheck />;
    }
  };

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <div className={styles.icon}>{getIcon()}</div>
      <p className={styles.message}>{message}</p>
      <button className={styles.closeBtn} onClick={onClose}>
        <FiX />
      </button>
    </div>
  );
};

export default Toast;