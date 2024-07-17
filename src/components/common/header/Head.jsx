import React from "react";
import logo from "../../../assets/logo.jpg"; // Adjust the path as needed

const Head = () => {
  return (
    <section className="head">
      <div className="container flexSB">
        <div className="logoContainer">
          <img
            style={{ width: "100px", height: "100px", marginRight: "20px" }}
            src={logo}
            alt="SkillUpward Logo"
          />
          <div className="logo">
            <h1>SkillUpward</h1>
            <span>Elevate | Innovate | Succeed</span>
          </div>
        </div>
        <div className="social-icons">
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f icon"></i></a>
  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter icon"></i></a>
  <a href="https://www.linkedin.com/company/skill-upward" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin icon"></i></a>
  <a href="https://www.instagram.com/skillupward?igsh=MWZmNDl3aDYxajE5MQ==" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram icon"></i></a>
</div>
      </div>
    </section>
  );
};

export default Head;
