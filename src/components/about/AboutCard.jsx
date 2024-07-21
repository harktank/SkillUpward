import React, { useEffect } from "react";
import Heading from "../common/heading/Heading";
import "./about.css";
import { homeAbout } from "../../dummydata";
import Awrapper from "./Awrapper";
import AboutMe from "./Aboutme";

const AboutCard = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".item");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = Array.from(items).indexOf(entry.target);

        if (entry.isIntersecting) {
          if (index % 2 === 0) {
            entry.target.classList.add("fade-in-left");
            entry.target.classList.remove("fade-in-right");
          } else {
            entry.target.classList.add("fade-in-right");
            entry.target.classList.remove("fade-in-left");
          }

          // Once the element has been animated, unobserve it
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });

    items.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      items.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <>
      <div id="about">
        <section id="about" className="aboutHome">
          <div className="container flexSB">
            <div className="right row">
              <p className="intern">LEARN ANYTHING</p>
              <p className="intern1">Benefits About Online Learning Expertise</p>
              <div className="items">
                {homeAbout.map((val, index) => {
                  return (
                    <div className="item flexSB" key={index}>
                      <div className="img">
                        <img src={val.cover} alt="" />
                      </div>
                      <div className="text">
                        <h2>{val.title}</h2>
                        <p>{val.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
      <br />
      <br />
      <Awrapper />
      <AboutMe />
    </>
  );
};

export default AboutCard;
