import React from "react";

const UsersTable = ({ users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3">No users found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UsersTable;
