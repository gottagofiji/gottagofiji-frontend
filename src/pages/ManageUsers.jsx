import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("/api/admin/users");
      setUsers(res.data);
    };
    fetchUsers();
  }, []);

  const handlePause = async (id) => {
    await axios.patch(\`/api/admin/users/\${id}/pause\`);
    setUsers(users.map(u => u._id === id ? { ...u, status: "paused" } : u));
  };

  const handleUnpause = async (id) => {
    await axios.patch(\`/api/admin/users/\${id}/unpause\`);
    setUsers(users.map(u => u._id === id ? { ...u, status: "active" } : u));
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Manage Users</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Role</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u._id} className="text-center">
                <td className="py-2 px-4">{u.name}</td>
                <td className="py-2 px-4">{u.email}</td>
                <td className="py-2 px-4 capitalize">{u.role}</td>
                <td className="py-2 px-4">{u.status}</td>
                <td className="py-2 px-4">
                  {u.status === "active" ? (
                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded"
                      onClick={() => handlePause(u._id)}
                    >
                      Pause
                    </button>
                  ) : (
                    <button
                      className="bg-green-600 text-white px-3 py-1 rounded"
                      onClick={() => handleUnpause(u._id)}
                    >
                      Unpause
                    </button>
                  )}
                </td>
              </tr>
            ))}
            {!users.length && (
              <tr>
                <td colSpan="5" className="py-4 text-center text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;