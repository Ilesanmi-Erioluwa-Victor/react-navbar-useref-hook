import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./Data";

const Navbar = () => {
  const [showList, setShowList] = useState(false);
  const linksRefContainer = useRef();
  const linksRef = useRef();

  useEffect(() => {}, [showList]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h3>Logo</h3>
          <button className="nav-toggle" onClick={() => setShowList(!showList)}>
            {" "}
            <FaBars />{" "}
          </button>
        </div>

        <div className="links-container" ref={linksRefContainer}>
          <ul className="links" ref={linksRef}>
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
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;

            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
