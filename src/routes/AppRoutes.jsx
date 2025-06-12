
import React from "react";
import { Routes, Route } from "react-router-dom";

// General Pages
import Home from "../pages/Home";
import TermsAndConditions from "../pages/TermsAndConditions";
import NotFound from "../pages/NotFound";
import SearchForm from "../pages/SearchForm";
import Listing from "../pages/Listing";
import Booking from "../pages/Booking";
import BookingConfirmation from "../pages/BookingConfirmation";
import Confirmation from "../pages/Confirmation";
import PaymentConfirmation from "../pages/PaymentConfirmation";

// Admin Pages
import AdminLogin from "../pages/AdminLogin";
import AdminDashboard from "../pages/AdminDashboard";
import ManageUsers from "../pages/ManageUsers";
import ManageSuppliers from "../pages/ManageSuppliers";
import ManageListings from "../pages/ManageListings";
import ManageBookings from "../pages/ManageBookings";
import ManageCommissions from "../pages/ManageCommissions";
import ManageHomepageAds from "../pages/ManageHomepageAds";
import RevenueReport from "../pages/RevenueReport";

// Supplier Pages
import SupplierDashboard from "../pages/SupplierDashboard";
import SupplierBookings from "../pages/SupplierBookings";
import AddListing from "../pages/AddListing";
import EditListing from "../pages/EditListing";

// Ads/Featured
import FeaturedListings from "../pages/FeaturedListings";
import HomepageAds from "../pages/HomepageAds";

// Route Protection
import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<SearchForm />} />
      <Route path="/listing/:id" element={<Listing />} />
      <Route path="/booking/:id" element={<Booking />} />
      <Route path="/booking-confirmation" element={<BookingConfirmation />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/payment-confirmation" element={<PaymentConfirmation />} />
      <Route path="/terms" element={<TermsAndConditions />} />

      {/* Admin */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/admin/users" element={<ManageUsers />} />
      <Route path="/admin/suppliers" element={<ManageSuppliers />} />
      <Route path="/admin/listings" element={<ManageListings />} />
      <Route path="/admin/bookings" element={<ManageBookings />} />
      <Route path="/admin/commissions" element={<ManageCommissions />} />
      <Route path="/admin/homepage-ads" element={<ManageHomepageAds />} />
      <Route path="/admin/revenue" element={<RevenueReport />} />

      {/* Supplier */}
      <Route
        path="/supplier/dashboard"
        element={
          <ProtectedRoute role="supplier">
            <SupplierDashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/supplier/bookings" element={<SupplierBookings />} />
      <Route path="/supplier/add-listing" element={<AddListing />} />
      <Route path="/supplier/edit-listing/:id" element={<EditListing />} />

      {/* Extras */}
      <Route path="/featured" element={<FeaturedListings />} />
      <Route path="/ads" element={<HomepageAds />} />

      {/* Catch all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
