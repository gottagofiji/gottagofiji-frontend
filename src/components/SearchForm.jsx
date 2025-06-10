// SearchForm.jsx - Search form for Rental or Transfer on GOTTAGOFIJI
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = ({ mode }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: "",
    pickupTime: "",
    dropoffDate: "",
    dropoffTime: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/listing/1", { state: { ...formData, mode } });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow">
      <input
        type="text"
        name="pickupLocation"
        placeholder="Pickup Location"
        value={formData.pickupLocation}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="text"
        name="dropoffLocation"
        placeholder="Drop-off Location"
        value={formData.dropoffLocation}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="date"
        name="pickupDate"
        value={formData.pickupDate}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="time"
        name="pickupTime"
        value={formData.pickupTime}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      {mode === "rental" && (
        <>
          <input
            type="date"
            name="dropoffDate"
            value={formData.dropoffDate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="time"
            name="dropoffTime"
            value={formData.dropoffTime}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </>
      )}
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
        Search {mode === "rental" ? "Rental Cars" : "Transfers"}
      </button>
    </form>
  );
};

export default SearchForm;