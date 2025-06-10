import React, { useEffect, useState } from "react";
import axios from "axios";

const FeaturedListings = () => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await axios.get("/api/listings/featured");
        setFeatured(res.data);
      } catch (error) {
        console.error("Error fetching featured listings:", error);
      }
    };
    fetchFeatured();
  }, []);

  if (featured.length === 0) return null;

  return (
    <div className="my-6">
      <h2 className="text-xl font-semibold mb-4 px-4">🌟 Featured Listings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {featured.map((item) => (
          <div key={item._id} className="border rounded-xl p-4 shadow-md bg-white">
            <img src={item.image} alt={item.model} className="rounded-lg mb-2 h-40 w-full object-cover" />
            <div className="font-bold">{item.model}</div>
            <div className="text-sm text-gray-500">{item.location}</div>
            <div className="text-blue-600 font-semibold">${item.price}/day</div>
            <div className="text-sm text-green-600 mt-1">⭐ {item.rating} · {item.supplierName}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedListings;