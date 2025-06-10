import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/admin/login", { email, password });
      localStorage.setItem("adminToken", res.data.token);
      navigate("/admin-dashboard");
    } catch (err) {
      setError("Invalid login credentials");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg p-6 rounded w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">Admin Login</h1>
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-1">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm mb-1">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;