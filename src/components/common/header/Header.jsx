import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../../assets/logo.jpg"; // Adjust the path as needed
import msmeLogo from "../../../assets/download.png"; // Add the path to your MSME logo image

import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(false); // Close mobile nav if open
    // Scroll to the CourseHome section
    const courseHomeSection = document.getElementById("course-home");
    if (courseHomeSection) {
      courseHomeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="msmeSection">
        <img src={msmeLogo} alt="MSME Logo" className="msmeLogo" />
        <div className="msmeText">
          <h2>MSME Registered Company: SkillUpward</h2>
          <span>Registration No: UDYAM-MH-33-0492334</span>
        </div>
      </div>

      <header>
        <nav className="flexSB">
          <div className="logoContainer">
            <img src={logo} alt="SkillUpward Logo" />
            <div className="logo">
              <h1>SkillUpward</h1>
              <span>Elevate | Innovate | Succeed</span>
            </div>
          </div>
          <ul className={`flexSB ${click ? 'mobile-nav open' : 'mobile-nav'}`} onClick={() => setClick(false)}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {/* <li>
              <Link to="/about">Projects</Link>
            </li> */}
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/courses" onClick={handleClick}>Internships</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/process">Process</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
          <div className="start">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScvb-pxBomubgdOEWGKA8cQCpE-eVNz18pQJInXtQSNdbK0iw/viewform?usp=sf_link">
              <div style={{ color: "white" }}>GET Internship</div>
            </a>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? <IoClose /> : <TiThMenu />}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
