import React, { useEffect, useState } from "react";
import axios from "axios";

const SupplierBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get("/api/supplier/bookings", {
      headers: {
        Authorization: `Bearer YOUR_AUTH_TOKEN`
      }
    })
    .then(res => setBookings(res.data))
    .catch(err => console.error("Failed to fetch bookings", err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Bookings</h1>

      {bookings.length === 0 ? (
        <p className="text-gray-600">No bookings yet.</p>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{booking.vehicleName}</p>
                  <p className="text-sm text-gray-600">
                    {booking.pickupDate} at {booking.pickupTime} → {booking.dropoffDate} at {booking.dropoffTime}
                  </p>
                  <p className="text-sm text-gray-600">Customer: {booking.customerName}</p>
                </div>
                <div>
                  <span className="px-3 py-1 rounded text-white text-sm font-medium bg-green-500">
                    {booking.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SupplierBookings;