import React, { useEffect, useState } from 'react';
import axios from 'axios';
import User from '../UserDetails/Users';

const URL = "http://localhost:5000/users";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchHandler = async () => {
      try {
        const res = await axios.get(URL);
        setUsers(res.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchHandler();
  }, []);

  return (
    <div>
      <h1>User Details Display Page</h1>
      {users.map((user, index) => (
        <div key={index}>
          <User user={user} />
        </div>
      ))}
    </div>
  );
};

export default Users;
