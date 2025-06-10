import React from "react";
import { useLocation } from "react-router-dom";

const PaymentConfirmation = () => {
  const location = useLocation();
  const { bookingId, amount, supplierName } = location.state || {};

  return (
    <div className="max-w-2xl mx-auto p-6 text-center">
      <h1 className="text-2xl font-bold mb-4 text-green-600">Payment Successful!</h1>

      <div className="bg-white shadow-md rounded p-4 mb-6">
        <p className="text-sm text-gray-600">Booking ID:</p>
        <p className="font-medium mb-2">{bookingId}</p>

        <p className="text-sm text-gray-600">Amount Paid (Deposit):</p>
        <p className="font-medium mb-2">${amount}</p>

        <p className="text-sm text-gray-600">Supplier:</p>
        <p className="font-medium">{supplierName}</p>
      </div>

      <p className="text-gray-700 mb-4">
        A confirmation email has been sent. Please pay the remaining balance directly to the supplier upon pickup or transfer.
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

export default PaymentConfirmation;