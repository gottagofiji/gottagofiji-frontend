
import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageListings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await axios.get("/api/admin/listings");
        setListings(response.data);
      } catch (error) {
        console.error("Error fetching listings:", error);
      }
    };

    fetchListings();
  }, []);

  const handleApprove = async (id) => {
    try {
      await axios.patch(`/api/admin/listings/${id}/approve`);
      setListings(listings.map(l => l._id === id ? { ...l, approved: true } : l));
    } catch (error) {
      console.error("Error approving listing:", error);
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.patch(`/api/admin/listings/${id}/reject`);
      setListings(listings.map(l => l._id === id ? { ...l, approved: false } : l));
    } catch (error) {
      console.error("Error rejecting listing:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Manage Listings</h1>
      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Supplier</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {listings.map((listing) => (
            <tr key={listing._id}>
              <td className="border border-gray-300 px-4 py-2">{listing.title}</td>
              <td className="border border-gray-300 px-4 py-2">{listing.supplierName}</td>
              <td className="border border-gray-300 px-4 py-2">
                {listing.approved ? "Approved" : "Pending"}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {!listing.approved && (
                  <button
                    onClick={() => handleApprove(listing._id)}
                    className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                  >
                    Approve
                  </button>
                )}
                <button
                  onClick={() => handleReject(listing._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageListings;
