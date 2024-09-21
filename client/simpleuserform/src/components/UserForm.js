import React, { useState } from "react";

const UserForm = ({ onUserAdded }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email, age };

    fetch(
      "http://localhost:3001/users/addUsersScript",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ users: [newUser] }) // Send as an array
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("User added:", data);
        onUserAdded(); // Refresh the user list
        // Reset form fields
        setName("");
        setEmail("");
        setAge("");
      })
      .catch((error) =>
        console.error("Error adding user:", error)
      );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
