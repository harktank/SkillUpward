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
        <div className="social">
          <i className="fab fa-facebook-f icon"></i>
          <i className="fab fa-instagram icon"></i>
          <i className="fab fa-twitter icon"></i>
          <i className="fab fa-youtube icon"></i>
        </div>
      </div>
    </section>
  );
};

export default Head;
