import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-bg">
        <div className="container">
          <div className="box logo mt-4">
            <h1>SkillUpward</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>Elevate. Innovate. Succeed</p>
            <div className="social-icons">
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f icon"></i></a>
  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter icon"></i></a>
  <a href="https://www.linkedin.com/company/skill-upward" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin icon"></i></a>
  <a href="https://www.instagram.com/skillupward?igsh=MWZmNDl3aDYxajE5MQ==" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram icon"></i></a>
</div>
          </div>

          <div className="box last">
            <ul>
              <li>
                <i className="fa fa-map"></i>
                Navi Mumbai , 400706
              </li>
              <li>
                <i className="fa fa-phone-alt"></i>
                +91 9137657756
              </li>
              <li>
                <i className="fa fa-paper-plane"></i>
                skillupward.in@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <p>
          Copyright ©2024 All rights reserved by SkillUpward
        </p>
      </div>
    </>
  );
};

export default Footer;
