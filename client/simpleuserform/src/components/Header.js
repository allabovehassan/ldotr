import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={headerStyle}>
      <nav>
        <ul style={navListStyle}>
          <li style={navItemStyle}>
            <Link to="/">Home</Link>
          </li>
          <li style={navItemStyle}>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// Inline styles for the header
const headerStyle = {
  background: "#007bff",
  color: "#fff",
  padding: "10px 20px"
};

const navListStyle = {
  listStyle: "none",
  display: "flex",
  gap: "15px"
};

const navItemStyle = {
  textDecoration: "none",
  color: "#fff"
};

export default Header;
