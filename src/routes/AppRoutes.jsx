import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddListing from '../pages/AddListing';
import AdminDashboard from '../pages/AdminDashboard';
import AdminLogin from '../pages/AdminLogin';
import Booking from '../pages/Booking';
import BookingConfirmation from '../pages/BookingConfirmation';
import Confirmation from '../pages/Confirmation';
import EditListing from '../pages/EditListing';
import Home from '../pages/Home';
import Listing from '../pages/Listing';
import ManageBookings from '../pages/ManageBookings';
import ManageCommissions from '../pages/ManageCommissions';
import ManageHomepageAds from '../pages/ManageHomepageAds';
import ManageListings from '../pages/ManageListings';
import ManageSuppliers from '../pages/ManageSuppliers';
import ManageUsers from '../pages/ManageUsers';
import NotFound from '../pages/NotFound';
import PaymentConfirmation from '../pages/PaymentConfirmation';
import RevenueReport from '../pages/RevenueReport';
import SupplierBookings from '../pages/SupplierBookings';
import SupplierDashboard from '../pages/SupplierDashboard';
import TermsAndConditions from '../pages/TermsAndConditions';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking/confirmation" element={<BookingConfirmation />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/manage-users" element={<ManageUsers />} />
        <Route path="/admin/manage-suppliers" element={<ManageSuppliers />} />
        <Route path="/admin/manage-bookings" element={<ManageBookings />} />
        <Route path="/admin/manage-commissions" element={<ManageCommissions />} />
        <Route path="/admin/manage-listings" element={<ManageListings />} />
        <Route path="/admin/manage-ads" element={<ManageHomepageAds />} />
        <Route path="/admin/revenue-report" element={<RevenueReport />} />
        <Route path="/supplier/dashboard" element={<SupplierDashboard />} />
        <Route path="/supplier/bookings" element={<SupplierBookings />} />
        <Route path="/supplier/add-listing" element={<AddListing />} />
        <Route path="/supplier/edit-listing" element={<EditListing />} />
        <Route path="/payment-confirmation" element={<PaymentConfirmation />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
