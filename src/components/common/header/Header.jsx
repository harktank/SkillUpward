import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            {/* <li>
              <Link to=''>Elevate</Link>
            </li>
            <li>
              <Link to=''>Innovate </Link>
            </li>

            <li>
              <Link to=''>Succeed</Link>
            </li> */}
            <li>
              <Link to=''>Contact</Link>
            </li>
            <li>
              <Link to=''>Pricing - Upcoming</Link>
            </li>
            <li>
              <Link to=''>Our Courses- Upcoming</Link>
            </li>
          </ul>
          <div className='start'>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScvb-pxBomubgdOEWGKA8cQCpE-eVNz18pQJInXtQSNdbK0iw/viewform?usp=sf_link">
              <div className='button  ' style={{ color: "white" }}>GET Internship</div>
            </a>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
          </button>

        </nav>
      </header>
    </>
  )
}

export default Header
