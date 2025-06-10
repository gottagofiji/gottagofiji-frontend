import React from "react";
import { Link } from "react-router-dom";

const SupplierDashboard = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Supplier Dashboard</h1>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Manage Listings</h2>
          <p className="text-sm text-gray-600 mb-2">Edit or remove your vehicle or transfer listings.</p>
          <Link to="/edit-listing" className="text-blue-600 underline">Edit Listings</Link>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Add New Listing</h2>
          <p className="text-sm text-gray-600 mb-2">Create a new rental or transfer listing.</p>
          <Link to="/add-listing" className="text-blue-600 underline">Add Listing</Link>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">View Bookings</h2>
          <p className="text-sm text-gray-600 mb-2">See your current and past booking requests.</p>
          <Link to="/supplier-bookings" className="text-blue-600 underline">View Bookings</Link>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Account Status</h2>
          <p className="text-sm text-gray-600 mb-2">Your supplier account status:</p>
          <span className="text-green-600 font-medium">Active</span>
        </div>
      </div>
    </div>
  );
};

export default SupplierDashboard;