import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import styles from './Login.module.scss';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      // Success
      console.log('Password reset email sent to:', email);
      setIsSubmitted(true);
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors({});
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
                <h1>Forgot Password?</h1>
                <p>No worries, we'll send you reset instructions</p>
              </div>

              {/* Forgot Password Form */}
              <form onSubmit={handleSubmit} className={styles.authForm}>
                {/* Email Field */}
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <div className={`${styles.inputWrapper} ${errors.email ? styles.error : ''}`}>
                    <FiMail className={styles.inputIcon} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={handleChange}
                      autoComplete="email"
                    />
                  </div>
                  {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                </div>

                {/* Submit Button */}
                <button type="submit" className={styles.submitBtn}>
                  Send Reset Link
                  <FiArrowRight />
                </button>
              </form>

              {/* Back to Login Link */}
              <div className={styles.authFooter}>
                <Link to="/login" className={styles.backLink}>
                  <FiArrowLeft />
                  Back to Login
                </Link>
              </div>
            </>
          ) : (
            <>
              {/* Success State */}
              <div className={styles.successSection}>
                <div className={styles.successIcon}>
                  <FiMail />
                </div>
                <h1>Check Your Email</h1>
                <p>
                  We've sent a password reset link to <strong>{email}</strong>
                </p>
                <p className={styles.subText}>
                  Didn't receive the email? Check your spam folder or
                </p>
                <button 
                  className={styles.resendBtn}
                  onClick={() => {
                    console.log('Resending email to:', email);
                  }}
                >
                  Resend Email
                </button>
                <div className={styles.authFooter}>
                  <Link to="/login" className={styles.backLink}>
                    <FiArrowLeft />
                    Back to Login
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
