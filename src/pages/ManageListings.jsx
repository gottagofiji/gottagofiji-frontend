import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageListings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      const res = await axios.get("/api/admin/listings");
      setListings(res.data);
    };
    fetchListings();
  }, []);

  const handleApprove = async (id) => {
    await axios.patch(\`/api/admin/listings/\${id}/approve\`);
    setListings(listings.map(l => l._id === id ? { ...l, approved: true } : l));
  };

  const handleDecline = async (id) => {
    await axios.delete(\`/api/admin/listings/\${id}\`);
    setListings(listings.filter(l => l._id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Approve Listings</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4">Title</th>
              <th className="py-2 px-4">Supplier</th>
              <th className="py-2 px-4">Type</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {listings.map((l) => (
              <tr key={l._id} className="text-center">
                <td className="py-2 px-4">{l.title}</td>
                <td className="py-2 px-4">{l.supplier?.name || "N/A"}</td>
                <td className="py-2 px-4 capitalize">{l.type}</td>
                <td className="py-2 px-4">{l.approved ? "Approved" : "Pending"}</td>
                <td className="py-2 px-4">
                  {!l.approved && (
                    <>
                      <button
                        className="bg-green-600 text-white px-3 py-1 rounded mr-2"
                        onClick={() => handleApprove(l._id)}
                      >
                        Approve
                      </button>
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded"
                        onClick={() => handleDecline(l._id)}
                      >
                        Decline
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
            {!listings.length && (
              <tr>
                <td colSpan="5" className="py-4 text-center text-gray-500">
                  No listings pending approval.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageListings;