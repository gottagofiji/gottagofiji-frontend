import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageCommissions = () => {
  const [commissions, setCommissions] = useState({
    global: 10,
    rental: 10,
    transfer: 10,
    overrides: [],
  });

  const [supplierOverride, setSupplierOverride] = useState({ supplierId: "", rate: "" });

  useEffect(() => {
    const fetchCommissions = async () => {
      const res = await axios.get("/api/admin/commissions");
      setCommissions(res.data);
    };
    fetchCommissions();
  }, []);

  const handleChange = (e) => {
    setCommissions({ ...commissions, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    await axios.put("/api/admin/commissions", commissions);
    alert("Commission rates updated");
  };

  const handleAddOverride = async () => {
    const { supplierId, rate } = supplierOverride;
    if (!supplierId || !rate) return;
    const res = await axios.post("/api/admin/commissions/override", { supplierId, rate });
    setCommissions({ ...commissions, overrides: [...commissions.overrides, res.data] });
    setSupplierOverride({ supplierId: "", rate: "" });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-4">Manage Commissions</h1>

      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-lg font-semibold mb-3">Global Settings</h2>
        <label className="block mb-2">Global Commission Rate (%):</label>
        <input
          type="number"
          name="global"
          value={commissions.global}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
        />

        <label className="block mb-2">Rental Car Commission Rate (%):</label>
        <input
          type="number"
          name="rental"
          value={commissions.rental}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
        />

        <label className="block mb-2">Transfer Commission Rate (%):</label>
        <input
          type="number"
          name="transfer"
          value={commissions.transfer}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
        />

        <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 rounded">
          Save Commission Settings
        </button>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-3">Supplier Overrides</h2>
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="Supplier ID"
            value={supplierOverride.supplierId}
            onChange={(e) => setSupplierOverride({ ...supplierOverride, supplierId: e.target.value })}
            className="border p-2 w-full"
          />
          <input
            type="number"
            placeholder="Rate %"
            value={supplierOverride.rate}
            onChange={(e) => setSupplierOverride({ ...supplierOverride, rate: e.target.value })}
            className="border p-2 w-32"
          />
          <button onClick={handleAddOverride} className="bg-green-600 text-white px-4 py-2 rounded">
            Add
          </button>
        </div>

        <ul>
          {commissions.overrides.map((override, i) => (
            <li key={i} className="mb-2">
              Supplier: {override.supplierId} - Rate: {override.rate}%
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ManageCommissions;