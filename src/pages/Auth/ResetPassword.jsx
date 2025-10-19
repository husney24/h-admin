import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiLock, FiEye, FiEyeOff, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import styles from './Login.module.scss';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      // Success
      console.log('Password reset successful');
      setIsSubmitted(true);
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className={styles.authContainer}>
      {/* Animated SVG Background */}
      <div className={styles.backgroundSvg}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path className={styles.wave1} d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path className={styles.wave2} d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,154.7C960,128,1056,96,1152,106.7C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        
        {/* Floating circles */}
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle3}></div>
      </div>

      <div className={styles.authContent}>
        <div className={styles.authCard}>
          {!isSubmitted ? (
            <>
              {/* Logo/Brand */}
              <div className={styles.brandSection}>
                <div className={styles.logo}>
                  <div className={styles.logoIcon}>H</div>
                </div>
                <h1>Reset Password</h1>
                <p>Enter your new password below</p>
              </div>

              {/* Reset Password Form */}
              <form onSubmit={handleSubmit} className={styles.authForm}>
                {/* Password Field */}
                <div className={styles.formGroup}>
                  <label htmlFor="password">New Password</label>
                  <div className={`${styles.inputWrapper} ${errors.password ? styles.error : ''}`}>
                    <FiLock className={styles.inputIcon} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      placeholder="Create a new password (min 8 characters)"
                      value={formData.password}
                      onChange={handleChange}
                      autoComplete="new-password"
                    />
                    <button
                      type="button"
                      className={styles.togglePassword}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                  {errors.password && <span className={styles.errorText}>{errors.password}</span>}
                </div>

                {/* Confirm Password Field */}
                <div className={styles.formGroup}>
                  <label htmlFor="confirmPassword">Confirm New Password</label>
                  <div className={`${styles.inputWrapper} ${errors.confirmPassword ? styles.error : ''}`}>
                    <FiLock className={styles.inputIcon} />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm your new password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      autoComplete="new-password"
                    />
                    <button
                      type="button"
                      className={styles.togglePassword}
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                  {errors.confirmPassword && <span className={styles.errorText}>{errors.confirmPassword}</span>}
                </div>

                {/* Password Requirements */}
                <div className={styles.passwordRequirements}>
                  <p>Password must:</p>
                  <ul>
                    <li className={formData.password.length >= 8 ? styles.met : ''}>
                      Be at least 8 characters long
                    </li>
                    <li className={/[A-Z]/.test(formData.password) ? styles.met : ''}>
                      Contain at least one uppercase letter
                    </li>
                    <li className={/[0-9]/.test(formData.password) ? styles.met : ''}>
                      Contain at least one number
                    </li>
                  </ul>
                </div>

                {/* Submit Button */}
                <button type="submit" className={styles.submitBtn}>
                  Reset Password
                  <FiArrowRight />
                </button>
              </form>
            </>
          ) : (
            <>
              {/* Success State */}
              <div className={styles.successSection}>
                <div className={`${styles.successIcon} ${styles.checkIcon}`}>
                  <FiCheckCircle />
                </div>
                <h1>Password Reset!</h1>
                <p>
                  Your password has been successfully reset.
                </p>
                <p className={styles.subText}>
                  You will be redirected to the login page in a moment...
                </p>
                <Link to="/login" className={styles.submitBtn}>
                  Go to Login
                  <FiArrowRight />
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
