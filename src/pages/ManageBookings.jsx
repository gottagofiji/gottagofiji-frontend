import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const res = await axios.get("/api/admin/bookings");
      setBookings(res.data);
    };
    fetchBookings();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Manage Bookings</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4">User</th>
              <th className="py-2 px-4">Supplier</th>
              <th className="py-2 px-4">Pickup</th>
              <th className="py-2 px-4">Dropoff</th>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Amount</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b._id} className="text-center">
                <td className="py-2 px-4">{b.user?.name || "N/A"}</td>
                <td className="py-2 px-4">{b.supplier?.name || "N/A"}</td>
                <td className="py-2 px-4">{b.pickupLocation}</td>
                <td className="py-2 px-4">{b.dropoffLocation}</td>
                <td className="py-2 px-4">{new Date(b.pickupDate).toLocaleDateString()}</td>
                <td className="py-2 px-4">${b.totalAmount?.toFixed(2)}</td>
                <td className="py-2 px-4 capitalize">{b.status}</td>
              </tr>
            ))}
            {!bookings.length && (
              <tr>
                <td colSpan="7" className="py-4 text-center text-gray-500">
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBookings;