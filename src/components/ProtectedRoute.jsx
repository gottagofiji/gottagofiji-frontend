
import React from "react";
import { Navigate } from "react-router-dom";

// Example usage:
// <ProtectedRoute role="admin"> <AdminDashboard /> </ProtectedRoute>

const ProtectedRoute = ({ role, children }) => {
  const user = JSON.parse(localStorage.getItem("user")); // or replace with auth context

  if (!user || user.role !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
