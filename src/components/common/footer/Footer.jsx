import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>

      <footer>
        <div className='container '>
          <div className='box logo mt-6'>
            <h1>SkillUpward</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>Elevate. Innovate. Succeed</p>
            <div className='social-icons'>
              <i className='fab fa-facebook-f icon'></i>
              <i className='fab fa-twitter icon'></i>
              <i className='fab fa-instagram icon'></i>
            </div>
          </div>


          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                Panvel, Navi Mumbai - 410206
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +91 9137657756
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                www.SkillUpward.in
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2024 All rights reserved by SkillUpward
        </p>
      </div>
    </>
  );
}

export default Footer;
