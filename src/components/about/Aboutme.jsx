import React from 'react';
import './about.css'; // Import your existing CSS file for styling

const AboutMe = () => {
    return (
        <section id="about-me" className="aboutMe">
            <div className="container">
                <div className="header">
                    <h2 className="about-title">About Us</h2>
                    <p className="about-subtitle">Empowering Futures Through Innovation</p>
                </div>

                <div className="content">
                    <div className="about-highlight">
                        <h3 className='h33' >What We Do</h3>
                        <p>
                            Welcome to SkillUpward, where we blend academic excellence with real-world experience. We offer cutting-edge virtual internships and comprehensive IT solutions designed to equip you for success in today’s fast-paced digital world.
                        </p>
                    </div>

                    <div className="about-services">
                        <div className="service">
                            <h4>Virtual Internships</h4>
                            <p>
                                Embrace flexibility with our remote internship programs. Gain hands-on experience and mentorship from industry leaders, all from the comfort of your own home.
                            </p>
                        </div>
                        <div className="service">
                            <h4>IT Solutions</h4>
                            <p>
                                From website development to custom applications, our expert team delivers tailor-made IT solutions that drive innovation and growth for businesses of all sizes.
                            </p>
                        </div>
                    </div>

                    <div className="about-vision">
                        <h3>Our Vision</h3>
                        <p>
                            We aim to bridge the gap between academia and industry by partnering with educational institutions and businesses. Our goal is to provide valuable experience and innovative IT solutions that empower both individuals and organizations.
                        </p>
                    </div>

                    <div className="about-commitment">
                        <p>
                            At SkillUpward, we are dedicated to fostering a supportive and inclusive environment. We continuously evolve to meet the needs of our community, ensuring that every participant and client thrives. Join us on this journey and let’s rise to new heights together!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
