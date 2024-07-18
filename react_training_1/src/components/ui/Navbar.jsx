import React from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import  './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <BootstrapNavbar className="custom-navbar">
      <Nav className="mr-auto">
        <Link to="/gallery">Gallery</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/contactus">Contact Us</Link>
      </Nav>
    </BootstrapNavbar>
  );
};

export default Navbar;
