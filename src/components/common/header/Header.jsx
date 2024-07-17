import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";

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
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/courses' onClick={handleClick}>Internships</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/pricing'>Pricing - Upcoming</Link>
            </li>
            <li>
              <Link to='/courses'>Our Courses - Upcoming</Link>
            </li>
          </ul>
          <div className='start'>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScvb-pxBomubgdOEWGKA8cQCpE-eVNz18pQJInXtQSNdbK0iw/viewform?usp=sf_link">
              <div className='button' style={{ color: "white" }}>GET Internship</div>
            </a>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
