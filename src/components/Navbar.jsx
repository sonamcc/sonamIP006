// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://media.licdn.com/dms/image/v2/C510BAQFWe4plZd5Nfw/company-logo_200_200/company-logo_200_200/0/1630566553019?e=2147483647&v=beta&t=BPEg8OhiKkDBLJdBUfPAdE7m5YkmzYC9VNgP5aUqjnY" alt="Universos Logo" />
        <h2>Vivekanand Education Society Institute Of Technology</h2>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/teachers">Teachers</Link></li> {/* Changed to Link for routing */}
        <li><Link to="/about">About Us</Link></li> {/* Changed to Link for routing */}
      </ul>
    </nav>
  );
};

export default Navbar;
