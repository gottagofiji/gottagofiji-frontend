// Listing.jsx - Displays search results for Rental or Transfer
import React from "react";
import { useLocation } from "react-router-dom";

const mockListings = [
  {
    id: 1,
    name: "Toyota Yaris 2020",
    type: "rental",
    pricePerDay: 85,
    rating: 4.6,
    transmission: "Automatic",
    seats: 5
  },
  {
    id: 2,
    name: "Nadi Airport Transfer - SUV",
    type: "transfer",
    priceFlat: 130,
    rating: 4.8,
    transmission: "Automatic",
    seats: 4
  }
];

const Listing = () => {
  const { state } = useLocation();
  const { mode } = state || { mode: "rental" };

  const listings = mockListings.filter((item) => item.type === mode);

  return (
    <div className="mt-20 px-4">
      <h1 className="text-2xl font-semibold mb-4">
        {mode === "rental" ? "Available Rental Cars" : "Available Transfers"}
      </h1>

      {listings.map((item) => (
        <div key={item.id} className="border rounded-lg p-4 mb-4 shadow-sm">
          <h2 className="text-lg font-medium">{item.name}</h2>
          <p className="text-sm text-gray-600">Seats: {item.seats} | {item.transmission}</p>
          <p className="mt-2 font-semibold">
            {mode === "rental" ? `$${item.pricePerDay}/day` : `$${item.priceFlat} flat`}
          </p>
          <p className="text-sm text-yellow-500">Rating: {item.rating} ★</p>
          <button className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded">
            Book Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Listing;