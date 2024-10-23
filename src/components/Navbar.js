import React from "react";
import  './Navbar.css';


export default function Navbar() {
    return (
        <nav className="navbar">
      <a href="#profile">Profile</a>
      <a href="#skills">Ministry-Journey</a>
      <a href="comm&eng">DailyUpdates</a>
      <a href="#portfolio">Gallery</a>
      <a href="#contact">Contact</a>
    </nav>
    );
}