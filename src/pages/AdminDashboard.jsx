import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/admin/users" className="dashboard-card">
          Manage Users
        </Link>
        <Link to="/admin/suppliers" className="dashboard-card">
          Manage Suppliers
        </Link>
        <Link to="/admin/bookings" className="dashboard-card">
          View Bookings
        </Link>
        <Link to="/admin/listings" className="dashboard-card">
          Approve Listings
        </Link>
        <Link to="/admin/ads" className="dashboard-card">
          Manage Homepage Ads
        </Link>
        <Link to="/admin/commissions" className="dashboard-card">
          Adjust Commissions
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;