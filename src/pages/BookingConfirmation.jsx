import React from "react";
import { useLocation } from "react-router-dom";

const BookingConfirmation = () => {
  const location = useLocation();
  const { vehicleName, pickupLocation, dropoffLocation, pickupDate, dropoffDate, supplierName } = location.state || {};

  return (
    <div className="max-w-2xl mx-auto p-6 text-center">
      <h1 className="text-2xl font-bold mb-4 text-green-600">Booking Confirmed!</h1>

      <div className="bg-white shadow-md rounded p-4 mb-6">
        <p className="text-sm text-gray-600">Vehicle:</p>
        <p className="font-medium mb-2">{vehicleName}</p>

        <p className="text-sm text-gray-600">Pickup:</p>
        <p className="font-medium mb-2">{pickupLocation} — {pickupDate}</p>

        <p className="text-sm text-gray-600">Drop-off:</p>
        <p className="font-medium mb-2">{dropoffLocation} — {dropoffDate}</p>

        <p className="text-sm text-gray-600">Supplier:</p>
        <p className="font-medium">{supplierName}</p>
      </div>

      <p className="text-gray-700 mb-4">
        Please check your email for full booking details and receipt.
      </p>

      <button
        onClick={() => window.print()}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Print Confirmation
      </button>
    </div>
  );
};

export default BookingConfirmation;