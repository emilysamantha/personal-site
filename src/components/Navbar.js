import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  // Use states
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  // Set functions
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // Use effects
  useEffect(() => {
    showButton();
  }, []);

  // Whenever the window resizes, check if we whould show the button
  window.addEventListener("resize", showButton);

  return (
    <nav className={click ? "navbar active" : "navbar"}>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <a
            href="/personal-site"
            className={
              click
                ? "nav-links white-hover background-purple-hover active"
                : "nav-links purple-hover"
            }
            onClick={closeMobileMenu}
          >
            .is()
          </a>
        </li>
        <li className="nav-item">
          <Link
            to="/personal-site/about"
            className={
              click
                ? "nav-links white-hover background-pink-hover active"
                : "nav-links pink-hover"
            }
            onClick={closeMobileMenu}
          >
            .about()
          </Link>
        </li>
        <li className="nav-item">
          <a
            href="/personal-site/#projects"
            className={
              click
                ? "nav-links white-hover background-green-hover active"
                : "nav-links green-hover"
            }
            onClick={closeMobileMenu}
          >
            .projects()
          </a>
        </li>
        <li className="nav-item">
          <a
            href="mailto:emilyzarry@gmail.com"
            className={
              click
                ? "nav-links white-hover background-blue-hover active"
                : "nav-links blue-hover"
            }
            onClick={closeMobileMenu}
          >
            .email()
          </a>
        </li>
        <li className="nav-item">
          <div className="navbar-icons">
            <a
              href="https://www.linkedin.com/in/emily-samantha-zarry/"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin navbar-icon navy-hover"></i>
            </a>
            <a href="https://github.com/emilysamantha" target="_blank">
              <i class="fa-brands fa-github navbar-icon navy-hover"></i>
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
