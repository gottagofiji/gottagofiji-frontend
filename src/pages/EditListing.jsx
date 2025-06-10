import React, { useState } from "react";

const EditListing = () => {
  const [formData, setFormData] = useState({
    type: "rental", // or 'transfer'
    vehicleName: "",
    passengers: "",
    luggage: "",
    pricePerDay: "",
    transmission: "automatic",
    bluetooth: false,
    pickupTime: "",
    dropoffTime: "",
    seasonalRate: false,
    oneWaySurcharge: false,
    unavailableDates: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call backend API to submit the formData
    console.log("Submitting listing:", formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Add / Edit Listing</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow">

        <div>
          <label className="block mb-1 font-medium">Type</label>
          <select name="type" value={formData.type} onChange={handleChange} className="w-full border p-2 rounded">
            <option value="rental">Rental</option>
            <option value="transfer">Transfer</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Vehicle Name</label>
          <input type="text" name="vehicleName" value={formData.vehicleName} onChange={handleChange} className="w-full border p-2 rounded" required />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block mb-1 font-medium">Passengers</label>
            <input type="number" name="passengers" value={formData.passengers} onChange={handleChange} className="w-full border p-2 rounded" />
          </div>
          <div className="flex-1">
            <label className="block mb-1 font-medium">Luggage</label>
            <input type="number" name="luggage" value={formData.luggage} onChange={handleChange} className="w-full border p-2 rounded" />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Price per Day</label>
          <input type="number" name="pricePerDay" value={formData.pricePerDay} onChange={handleChange} className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block mb-1 font-medium">Transmission</label>
          <select name="transmission" value={formData.transmission} onChange={handleChange} className="w-full border p-2 rounded">
            <option value="automatic">Automatic</option>
            <option value="manual">Manual</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <input type="checkbox" name="bluetooth" checked={formData.bluetooth} onChange={handleChange} />
          <label>Bluetooth</label>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block mb-1 font-medium">Pickup Time</label>
            <input type="time" name="pickupTime" value={formData.pickupTime} onChange={handleChange} className="w-full border p-2 rounded" />
          </div>
          <div className="flex-1">
            <label className="block mb-1 font-medium">Dropoff Time</label>
            <input type="time" name="dropoffTime" value={formData.dropoffTime} onChange={handleChange} className="w-full border p-2 rounded" />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <input type="checkbox" name="seasonalRate" checked={formData.seasonalRate} onChange={handleChange} />
          <label>Seasonal Rate</label>
        </div>

        <div className="flex items-center space-x-2">
          <input type="checkbox" name="oneWaySurcharge" checked={formData.oneWaySurcharge} onChange={handleChange} />
          <label>One-way Trip Surcharge</label>
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit Listing</button>
      </form>
    </div>
  );
};

export default EditListing;