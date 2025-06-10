import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Listing from "./pages/Listing";
import Booking from "./pages/Booking";
import Confirmation from "./pages/Confirmation";
import BookingConfirmation from "./pages/BookingConfirmation";
import PaymentConfirmation from "./pages/PaymentConfirmation";
import SupplierDashboard from "./pages/SupplierDashboard";
import EditListing from "./pages/EditListing";
import AddListing from "./pages/AddListing";
import SupplierBookings from "./pages/SupplierBookings";
import TermsAndConditions from "./pages/TermsAndConditions";
import NotFound from "./pages/NotFound";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ManageUsers from "./pages/ManageUsers";
import ManageSuppliers from "./pages/ManageSuppliers";
import ManageListings from "./pages/ManageListings";
import ManageBookings from "./pages/ManageBookings";
import ManageHomepageAds from "./pages/ManageHomepageAds";
import ManageCommissions from "./pages/ManageCommissions";
import RevenueReport from "./pages/RevenueReport";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
        <Route path="/payment-confirmation" element={<PaymentConfirmation />} />
        <Route path="/terms" element={<TermsAndConditions />} />

        {/* Supplier Portal */}
        <Route path="/supplier-dashboard" element={<SupplierDashboard />} />
        <Route path="/edit-listing" element={<EditListing />} />
        <Route path="/add-listing" element={<AddListing />} />
        <Route path="/supplier-bookings" element={<SupplierBookings />} />

        {/* Admin Portal */}
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin/manage-users" element={<ManageUsers />} />
        <Route path="/admin/manage-suppliers" element={<ManageSuppliers />} />
        <Route path="/admin/manage-listings" element={<ManageListings />} />
        <Route path="/admin/manage-bookings" element={<ManageBookings />} />
        <Route path="/admin/manage-homepage-ads" element={<ManageHomepageAds />} />
        <Route path="/admin/manage-commissions" element={<ManageCommissions />} />
        <Route path="/admin/revenue-report" element={<RevenueReport />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;