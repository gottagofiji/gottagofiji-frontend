import React, { useEffect, useState } from "react";
import axios from "axios";

const HomepageAds = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const res = await axios.get("/api/ads/homepage");
        setAds(res.data);
      } catch (error) {
        console.error("Failed to load homepage ads", error);
      }
    };
    fetchAds();
  }, []);

  if (!ads.length) return null;

  return (
    <div className="my-6">
      {ads.map((ad) => (
        <div
          key={ad._id}
          className="bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-lg shadow-md p-4 mb-4 mx-4 text-center"
        >
          <h3 className="text-lg font-bold mb-2">{ad.title}</h3>
          <p className="text-sm">{ad.description}</p>
        </div>
      ))}
    </div>
  );
};

export default HomepageAds;