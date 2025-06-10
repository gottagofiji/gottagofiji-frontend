import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageHomepageAds = () => {
  const [ads, setAds] = useState([]);
  const [newAd, setNewAd] = useState({ title: "", imageUrl: "", link: "" });

  useEffect(() => {
    const fetchAds = async () => {
      const res = await axios.get("/api/admin/homepage-ads");
      setAds(res.data);
    };
    fetchAds();
  }, []);

  const handleAddAd = async () => {
    if (!newAd.title || !newAd.imageUrl || !newAd.link) return;
    const res = await axios.post("/api/admin/homepage-ads", newAd);
    setAds([...ads, res.data]);
    setNewAd({ title: "", imageUrl: "", link: "" });
  };

  const handleRemoveAd = async (id) => {
    await axios.delete(`/api/admin/homepage-ads/${id}`);
    setAds(ads.filter((ad) => ad._id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-4">Manage Homepage Ads</h1>

      <div className="bg-white p-4 shadow rounded mb-6">
        <h2 className="text-lg font-semibold mb-2">Add New Ad</h2>
        <input
          type="text"
          placeholder="Title"
          value={newAd.title}
          onChange={(e) => setNewAd({ ...newAd, title: e.target.value })}
          className="border p-2 w-full mb-2"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newAd.imageUrl}
          onChange={(e) => setNewAd({ ...newAd, imageUrl: e.target.value })}
          className="border p-2 w-full mb-2"
        />
        <input
          type="text"
          placeholder="Link URL"
          value={newAd.link}
          onChange={(e) => setNewAd({ ...newAd, link: e.target.value })}
          className="border p-2 w-full mb-2"
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleAddAd}
        >
          Add Ad
        </button>
      </div>

      <div className="bg-white p-4 shadow rounded">
        <h2 className="text-lg font-semibold mb-4">Current Ads</h2>
        <ul className="space-y-3">
          {ads.map((ad) => (
            <li
              key={ad._id}
              className="flex justify-between items-center border-b pb-2"
            >
              <span>
                <strong>{ad.title}</strong> - <a href={ad.link}>{ad.link}</a>
              </span>
              <button
                onClick={() => handleRemoveAd(ad._id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </li>
          ))}
          {!ads.length && <p className="text-gray-500">No ads found.</p>}
        </ul>
      </div>
    </div>
  );
};

export default ManageHomepageAds;