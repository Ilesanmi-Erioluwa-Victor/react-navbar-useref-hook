import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./Data";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header"></div>
        <div className="links-container show-container"></div>
      </div>
    </nav>
  );
};

export default Navbar;
