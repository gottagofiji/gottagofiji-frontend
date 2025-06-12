import React from "react";

const FeaturedListings = ({ listings }) => {
  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-bold mb-4">Featured Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {listings && listings.length > 0 ? (
          listings.map((listing, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-md">
              <img src={listing.image} alt={listing.title} className="w-full h-40 object-cover mb-2 rounded" />
              <h3 className="text-lg font-semibold">{listing.title}</h3>
              <p className="text-sm text-gray-600">{listing.description}</p>
              <p className="mt-2 font-bold text-primary">${listing.price} / {listing.unit}</p>
            </div>
          ))
        ) : (
          <p>No featured listings available.</p>
        )}
      </div>
    </div>
  );
};

export default FeaturedListings;