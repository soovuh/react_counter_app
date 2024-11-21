import React, { useState, useEffect } from "react";
import { User } from "../types/user";
import styles from "../styles/main.module.css"

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
    <div className={styles.userDataWrapper}>
      {loading ? (
        <p className={styles.loading}>Loading user data...</p>
      ) : user ? (
        <div>
          <h3 className={styles.userDataName}>{user.name}</h3>
          <p className={styles.userDataText}>Email: {user.email}</p>
          <p className={styles.userDataText}>Phone: {user.phone}</p>
          <p className={styles.userDataText}>Website: {user.website}</p>
        </div>
      ) : (
        <p className={styles.noData}>No user data available.</p>
      )}
    </div>
  );
};

export default UserData;
