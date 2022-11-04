import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./Data";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h3>Logo</h3>
          <button className="nav-toggle">
            {" "}
            <FaBars />{" "}
          </button>
        </div>

        <div className="links-container show-container">
          <ul className="links">
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-icons">
          <li></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
