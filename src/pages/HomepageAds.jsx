import React from "react";

const HomepageAds = ({ ads }) => {
  return (
    <section className="px-4 py-6 bg-yellow-50">
      <h2 className="text-xl font-bold mb-4">Promotional Ads</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ads && ads.length > 0 ? (
          ads.map((ad, index) => (
            <div key={index} className="p-4 border border-yellow-300 rounded-lg bg-white shadow-sm">
              <img src={ad.image} alt={ad.title} className="w-full h-32 object-cover mb-2 rounded" />
              <h3 className="font-semibold">{ad.title}</h3>
              <p className="text-sm">{ad.subtitle}</p>
            </div>
          ))
        ) : (
          <p>No ads available.</p>
        )}
      </div>
    </section>
  );
};

export default HomepageAds;