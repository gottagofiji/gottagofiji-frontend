// Confirmation.jsx - Displays final confirmation after booking
import React from "react";
import { useLocation, Link } from "react-router-dom";

const Confirmation = () => {
  const { state } = useLocation();
  const {
    total,
    deposit,
    pickupLocation,
    dropoffLocation,
    mode
  } = state || {};

  return (
    <div className="mt-20 px-4 max-w-xl mx-auto text-center">
      <h1 className="text-2xl font-bold text-green-600 mb-4">Booking Confirmed!</h1>
      <p className="text-gray-700 mb-4">
        Thank you for booking with <span className="font-semibold">GOTTAGOFIJI</span>.
      </p>

      <div className="bg-gray-100 rounded-lg p-4 text-left">
        <h2 className="text-lg font-semibold mb-2">Booking Details</h2>
        <p><strong>Pickup:</strong> {pickupLocation}</p>
        <p><strong>Drop-off:</strong> {dropoffLocation}</p>
        <p><strong>Mode:</strong> {mode === "rental" ? "Rental Car" : "Transfer"}</p>
        <p><strong>Total Price:</strong> ${total?.toFixed(2)}</p>
        <p><strong>Deposit Paid:</strong> ${deposit?.toFixed(2)}</p>
      </div>

      <div className="mt-6">
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Confirmation;