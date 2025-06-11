import React from "react";
import { Routes, Route } from "react-router-dom";

import AddListing from "./pages/AddListing";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import Booking from "./pages/Booking";
import BookingConfirmation from "./pages/BookingConfirmation";
import Confirmation from "./pages/Confirmation";
import EditListing from "./pages/EditListing";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import ManageBookings from "./pages/ManageBookings";
import ManageCommissions from "./pages/ManageCommissions";
import ManageHomepageAds from "./pages/ManageHomepageAds";
import ManageListings from "./pages/ManageListings";
import ManageSuppliers from "./pages/ManageSuppliers";
import ManageUsers from "./pages/ManageUsers";
import NotFound from "./pages/NotFound";
import PaymentConfirmation from "./pages/PaymentConfirmation";
import RevenueReport from "./pages/RevenueReport";
import SupplierBookings from "./pages/SupplierBookings";
import SupplierDashboard from "./pages/SupplierDashboard";
import TermsAndConditions from "./pages/TermsAndConditions";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addlisting" element={<AddListing />} />
      <Route path="/admindashboard" element={<AdminDashboard />} />
      <Route path="/adminlogin" element={<AdminLogin />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/bookingconfirmation" element={<BookingConfirmation />} />
      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/editlisting" element={<EditListing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/listing" element={<Listing />} />
      <Route path="/managebookings" element={<ManageBookings />} />
      <Route path="/managecommissions" element={<ManageCommissions />} />
      <Route path="/managehomepageads" element={<ManageHomepageAds />} />
      <Route path="/managelistings" element={<ManageListings />} />
      <Route path="/managesuppliers" element={<ManageSuppliers />} />
      <Route path="/manageusers" element={<ManageUsers />} />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="/paymentconfirmation" element={<PaymentConfirmation />} />
      <Route path="/revenuereport" element={<RevenueReport />} />
      <Route path="/supplierbookings" element={<SupplierBookings />} />
      <Route path="/supplierdashboard" element={<SupplierDashboard />} />
      <Route path="/termsandconditions" element={<TermsAndConditions />} />
    </Routes>
  );
};

export default AppRoutes;