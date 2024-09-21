import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Header from "./components/Header"; // Ensure this file exists as per previous instructions
import Home from "./pages/Home"; // You should have this page
import Users from "./pages/Users";

function App() {
  return (
    <Router>
      <div>
        <Header /> {/* Add the Header here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
