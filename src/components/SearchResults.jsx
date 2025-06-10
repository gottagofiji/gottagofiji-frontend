import React from "react";
import ListingCard from "./ListingCard";

const SearchResults = ({ listings }) => {
  if (!listings || listings.length === 0) return <p className="px-4">No listings found.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 my-6">
      {listings.map((listing) => (
        <ListingCard key={listing._id} listing={listing} />
      ))}
    </div>
  );
};

export default SearchResults;