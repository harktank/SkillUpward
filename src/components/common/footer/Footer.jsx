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
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f icon"></i></a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter icon"></i></a>
              <a href="https://www.linkedin.com/company/skill-upward" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin icon"></i></a>
              <a href="https://www.instagram.com/skillupward?igsh=MWZmNDl3aDYxajE5MQ==" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram icon"></i></a>
            </div>
          </div>

          <div className='box about'>
            <h3>About Us</h3>
            <p>
              Welcome to SkillUpward, your gateway to a brighter future through meaningful internships. Founded with a vision to bridge the gap between academic learning and professional experience, we are dedicated to providing students with hands-on opportunities that enhance their skills and prepare them for the competitive job market.
            </p>
            <p>
              At SkillUpward, our mission is to empower students by offering high-quality internships that foster professional growth and development. We aim to create a nurturing environment where interns can gain practical experience, receive mentorship from industry experts, and build a strong foundation for their careers.
            </p>
            <p>
              Our long-term vision is to collaborate with colleges and educational institutions to expand our reach and impact. By partnering with academia, we strive to integrate real-world experience with academic knowledge, ensuring that our interns are well-equipped to meet the demands of today's dynamic workforce.
            </p>
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
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
