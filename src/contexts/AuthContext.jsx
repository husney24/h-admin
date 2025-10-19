import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in on mount
  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    const storedUser = localStorage.getItem('user');
    
    if (storedAuth === 'true' && storedUser) {
      setIsAuthenticated(true);
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password, rememberMe = false) => {
    // Demo login - in production, this would be an API call
    if (email && password) {
      const userData = {
        email: email,
        name: email.split('@')[0],
        role: 'Admin',
        avatar: null
      };
      
      setIsAuthenticated(true);
      setUser(userData);
      
      // Store in localStorage
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify(userData));
      
      if (rememberMe) {
        localStorage.setItem('rememberMe', 'true');
      }
      
      return { success: true };
    }
    
    return { success: false, error: 'Invalid credentials' };
  };

  const signup = (name, email, password) => {
    // Demo signup - in production, this would be an API call
    if (name && email && password) {
      const userData = {
        email: email,
        name: name,
        role: 'User',
        avatar: null
      };
      
      setIsAuthenticated(true);
      setUser(userData);
      
      // Store in localStorage
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify(userData));
      
      return { success: true };
    }
    
    return { success: false, error: 'Invalid data' };
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    
    // Clear localStorage
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    localStorage.removeItem('rememberMe');
  };

  const value = {
    isAuthenticated,
    user,
    loading,
    login,
    signup,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
