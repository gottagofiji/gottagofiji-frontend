import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageSuppliers = () => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    const fetchSuppliers = async () => {
      const res = await axios.get("/api/admin/suppliers");
      setSuppliers(res.data);
    };
    fetchSuppliers();
  }, []);

  const handleToggle = async (id, isActive) => {
    await axios.patch(\`/api/admin/supplier/\${id}/status\`, { active: !isActive });
    setSuppliers((prev) =>
      prev.map((s) => (s._id === id ? { ...s, active: !isActive } : s))
    );
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Manage Suppliers</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Role</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier) => (
              <tr key={supplier._id} className="text-center">
                <td className="py-2 px-4">{supplier.name}</td>
                <td className="py-2 px-4">{supplier.email}</td>
                <td className="py-2 px-4 capitalize">{supplier.role}</td>
                <td className="py-2 px-4">
                  {supplier.active ? "Active" : "Paused"}
                </td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleToggle(supplier._id, supplier.active)}
                    className={`px-3 py-1 rounded text-white ${
                      supplier.active ? "bg-red-500" : "bg-green-600"
                    }`}
                  >
                    {supplier.active ? "Pause" : "Activate"}
                  </button>
                </td>
              </tr>
            ))}
            {!suppliers.length && (
              <tr>
                <td colSpan="5" className="py-4 text-center text-gray-500">
                  No suppliers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageSuppliers;