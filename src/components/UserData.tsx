import React, { useState, useEffect } from "react";
import { User } from "../types/user";

interface UserDataProps {
  counter: number;
}

const UserData: React.FC<UserDataProps> = ({ counter }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchUserData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${counter}`);
      const data: User = await response.json();
      setUser(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [counter]);

  return (
    <div>
      {loading ? (
        <p>Loading user data...</p>
      ) : user ? (
        <div>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
};

export default UserData;