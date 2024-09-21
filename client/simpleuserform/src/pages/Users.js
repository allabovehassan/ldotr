import React, { useEffect, useState } from "react";
import UserForm from "../components/UserForm";
import UsersTable from "../components/UsersTable";

const Users = () => {
  const [users, setUsers] = useState([]);

  // Function to fetch users from the backend
  const fetchUsers = () => {
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setUsers(data.data || []); // Update state with user data
        }
      })
      .catch((error) =>
        console.error("Error fetching users:", error)
      );
  };

  // UseEffect to fetch users when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User Management</h2>
      <UserForm onUserAdded={fetchUsers} />{" "}
      {/* Pass the fetchUsers function */}
      <UsersTable users={users} />{" "}
      {/* Pass the users array to the UsersTable */}
    </div>
  );
};

export default Users;
