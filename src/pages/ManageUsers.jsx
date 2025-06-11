
import React, { useEffect, useState } from "react";
import axios from "axios";

function ManageUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/api/admin/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  const handlePause = async (id) => {
    await axios.patch(`/api/admin/users/${id}/pause`);
    setUsers(users.map(u => u._id === id ? { ...u, status: "paused" } : u));
  };

  return (
    <div>
      <h2>Manage Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.status}
            <button onClick={() => handlePause(user._id)}>Pause</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ManageUsers;
