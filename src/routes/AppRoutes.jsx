import React from "react";
import { Routes, Route } from "react-router-dom";
import AddListing from "../pages/AddListing.jsx";
import AdminDashboard from "../pages/AdminDashboard.jsx";
import AdminLogin from "../pages/AdminLogin.jsx";
import Booking from "../pages/Booking.jsx";
import BookingConfirmation from "../pages/BookingConfirmation.jsx";
import Confirmation from "../pages/Confirmation.jsx";
import EditListing from "../pages/EditListing.jsx";
import Home from "../pages/Home.jsx";
import Listing from "../pages/Listing.jsx";
import ManageBookings from "../pages/ManageBookings.jsx";
import ManageCommissions from "../pages/ManageCommissions.jsx";
import ManageHomepageAds from "../pages/ManageHomepageAds.jsx";
import ManageListings from "../pages/ManageListings.jsx";
import ManageSuppliers from "../pages/ManageSuppliers.jsx";
import ManageUsers from "../pages/ManageUsers.jsx";
import NotFound from "../pages/NotFound.jsx";
import PaymentConfirmation from "../pages/PaymentConfirmation.jsx";
import RevenueReport from "../pages/RevenueReport.jsx";
import SupplierBookings from "../pages/SupplierBookings.jsx";
import SupplierDashboard from "../pages/SupplierDashboard.jsx";
import TermsAndConditions from "../pages/TermsAndConditions.jsx";

const AppRoutes = () => {
    return (
        <Routes>
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
