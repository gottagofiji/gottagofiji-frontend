// Booking.jsx - Handles booking logic and pricing summary
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Booking = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const {
    pickupLocation,
    dropoffLocation,
    pickupDate,
    pickupTime,
    dropoffDate,
    dropoffTime,
    mode
  } = state || {};

  const baseRate = mode === "rental" ? 85 : 130;
  const numDays =
    mode === "rental"
      ? Math.max(
          1,
          Math.ceil(
            (new Date(`${dropoffDate}T${dropoffTime}`) -
              new Date(`${pickupDate}T${pickupTime}`)) /
              (1000 * 60 * 60 * 24)
          )
        )
      : 1;

  const total = baseRate * numDays;
  const deposit = total * 0.15;

  const handleConfirm = () => {
    if (!acceptedTerms) {
      alert("You must accept the terms and conditions.");
      return;
    }
    navigate("/confirmation/1", {
      state: { total, deposit, pickupLocation, dropoffLocation, mode }
    });
  };

  return (
    <div className="mt-20 px-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Booking Summary</h1>

      <ul className="text-sm text-gray-700 mb-4">
        <li>Pickup: {pickupLocation} @ {pickupDate} {pickupTime}</li>
        <li>Drop-off: {dropoffLocation} {mode === "rental" ? `@ ${dropoffDate} ${dropoffTime}` : ""}</li>
      </ul>

      <p className="mb-2">Base rate: ${baseRate} {mode === "rental" ? "per day" : "flat"}</p>
      {mode === "rental" && <p className="mb-2">Days: {numDays}</p>}
      <p className="font-semibold">Total: ${total.toFixed(2)}</p>
      <p className="text-blue-600">Deposit (15%): ${deposit.toFixed(2)}</p>

      <div className="mt-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            checked={acceptedTerms}
            onChange={() => setAcceptedTerms(!acceptedTerms)}
          />
          I accept the Terms and Conditions.
        </label>
      </div>

      <button
        onClick={handleConfirm}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50"
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default Booking;