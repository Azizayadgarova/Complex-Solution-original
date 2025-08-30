import { Navigate } from 'react-router-dom';
import React from 'react';

const ProtectedRoute = ({ children }) => {
  const isAdminActive = localStorage.getItem('adminActive') === 'true';

  if (!isAdminActive) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default ProtectedRoute;
