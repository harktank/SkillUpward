// AboutMe.js

import React from 'react';
import Heading from '../common/heading/Heading';
import './about.css'; // Import your existing CSS file for styling

const AboutMe = () => {
    return (
        <section id="about-me" className="aboutMe">
            <div className="container">
                {/* <Heading subtitle="About Us" /> */}
                <p style={{ color: "#0b9cd7", fontSize: "25px", fontWeight: 600 }}>ABOUT US</p>

                <div className="content">
                    <p>
                        Welcome to SkillUpward, your gateway to a brighter future through meaningful internships. Founded with a vision to bridge the gap between academic learning and professional experience, we are dedicated to providing students with hands-on opportunities that enhance their skills and prepare them for the competitive job market.
                    </p>
                    <p>
                        At SkillUpward, our mission is to empower students by offering high-quality internships that foster professional growth and development. We aim to create a nurturing environment where interns can gain practical experience, receive mentorship from industry experts, and build a strong foundation for their careers.
                    </p>
                    <p>
                        Our long-term vision is to collaborate with colleges and educational institutions to expand our reach and impact. By partnering with academia, we strive to integrate real-world experience with academic knowledge, ensuring that our interns are well-equipped to meet the demands of today's dynamic workforce.
                    </p>
                    <div className="offerings">
                        <h3>What We Offer</h3>
                        <ol>
                            <li>• Diverse Internship Opportunities: We provide internships in various domains, including Full-Stack Web Development, Data Science, Digital Marketing, and more.</li>
                            <br />
                            <li>• Mentorship and Guidance: Our interns receive personalized mentorship from experienced professionals, helping them navigate their career paths.</li>
                            <br />
                            <li>• Hands-on Experience: Interns at SkillUpward work on real projects, gaining practical skills and insights that are highly valued by employers.</li>
                        </ol>
                    </div>

                    <p>
                        SkillUpward is committed to maintaining a supportive and inclusive environment where every intern can thrive. We believe in continuous improvement and innovation, constantly evolving to meet the needs of our interns and partners. Join us at SkillUpward and take the first step towards a successful and fulfilling career. Together, let's rise to new heights!
                    </p>
                </div>
            </div>
        </section >
    );
};

export default AboutMe;
