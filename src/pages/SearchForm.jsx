import React, { useState } from "react";

const SearchForm = () => {
  const [formData, setFormData] = useState({
    type: "rental",
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: "",
    dropoffDate: "",
    pickupTime: "",
    dropoffTime: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search submitted:", formData);
  };

  return (
    <form onSubmit={handleSearch} className="p-4 max-w-lg mx-auto bg-white shadow rounded-md">
      <div className="flex space-x-2 mb-4">
        <button type="button" onClick={() => setFormData({ ...formData, type: 'rental' })} className={`flex-1 py-2 rounded ${formData.type === 'rental' ? 'bg-green-500 text-white' : 'bg-gray-100'}`}>Rental</button>
        <button type="button" onClick={() => setFormData({ ...formData, type: 'transfer' })} className={`flex-1 py-2 rounded ${formData.type === 'transfer' ? 'bg-green-500 text-white' : 'bg-gray-100'}`}>Transfer</button>
      </div>

      <input type="text" name="pickupLocation" placeholder="Pickup Location" value={formData.pickupLocation} onChange={handleChange} className="w-full mb-2 p-2 border rounded" />

      {formData.type === "rental" && (
        <>
          <input type="text" name="dropoffLocation" placeholder="Drop-off Location" value={formData.dropoffLocation} onChange={handleChange} className="w-full mb-2 p-2 border rounded" />
          <input type="date" name="pickupDate" value={formData.pickupDate} onChange={handleChange} className="w-full mb-2 p-2 border rounded" />
          <input type="time" name="pickupTime" value={formData.pickupTime} onChange={handleChange} className="w-full mb-2 p-2 border rounded" />
          <input type="date" name="dropoffDate" value={formData.dropoffDate} onChange={handleChange} className="w-full mb-2 p-2 border rounded" />
          <input type="time" name="dropoffTime" value={formData.dropoffTime} onChange={handleChange} className="w-full mb-2 p-2 border rounded" />
        </>
      )}

      {formData.type === "transfer" && (
        <>
          <input type="date" name="pickupDate" value={formData.pickupDate} onChange={handleChange} className="w-full mb-2 p-2 border rounded" />
          <input type="time" name="pickupTime" value={formData.pickupTime} onChange={handleChange} className="w-full mb-2 p-2 border rounded" />
        </>
      )}

      <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">Search</button>
    </form>
  );
};

export default SearchForm;