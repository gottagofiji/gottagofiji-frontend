
import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageSuppliers = () => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    const fetchSuppliers = async () => {
      const response = await axios.get("/api/admin/suppliers");
      setSuppliers(response.data);
    };
    fetchSuppliers();
  }, []);

  const handleToggle = async (id, isActive) => {
    await axios.patch(`/api/admin/supplier/${id}/status`, { active: !isActive });
    setSuppliers((prev) =>
      prev.map((s) => (s._id === id ? { ...s, active: !isActive } : s))
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Suppliers</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Toggle</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
            <tr key={supplier._id}>
              <td className="py-2 px-4 border-b">{supplier.name}</td>
              <td className="py-2 px-4 border-b">{supplier.email}</td>
              <td className="py-2 px-4 border-b">
                {supplier.active ? "Active" : "Inactive"}
              </td>
              <td className="py-2 px-4 border-b">
                <button
                  className="bg-blue-500 text-white px-4 py-1 rounded"
                  onClick={() => handleToggle(supplier._id, supplier.active)}
                >
                  Toggle
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageSuppliers;
