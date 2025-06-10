import React from "react";

const ListingCard = ({ listing }) => {
  return (
    <div className="relative border rounded-lg shadow p-4 bg-white">
      {listing.isFeatured && (
        <div className="absolute top-2 right-2 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded shadow">
          ★ FEATURED
        </div>
      )}
      <img src={listing.image} alt={listing.model} className="rounded mb-2 w-full h-40 object-cover" />
      <div className="font-semibold">{listing.model}</div>
      <div className="text-sm text-gray-500">{listing.location}</div>
      <div className="text-blue-600 font-bold">${listing.price}/day</div>
      <div className="text-sm text-green-600">⭐ {listing.rating} · {listing.supplierName}</div>
    </div>
  );
};

export default ListingCard;