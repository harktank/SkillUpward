import React, { useEffect } from "react";
import "./courses.css";
import { online } from "../../dummydata";

const OnlineCourses = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".helo");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = Array.from(items).indexOf(entry.target);

        if (entry.isIntersecting) {
          if (index % 2 === 0) {
            entry.target.classList.add("fade-in-left1");
            entry.target.classList.remove("fade-in-right1");
          } else {
            entry.target.classList.add("fade-in-right1");
            entry.target.classList.remove("fade-in-left1");
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
      <section className='online'>
        <div className='container'>
          <p className="intern">Our Internship</p>
          <p className="intern1">Computers & Information Technology Section</p>
          <br />
          <div className='content grid3'>
            {online.map((val, index) => (
              <div className='box helo' key={index}>
                <div className='img'>
                  <img src={val.cover} alt="Course Cover" />
                  <img src={val.hoverCover} alt='Hover Cover' className='show' />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
                <br />
                <br />
                <br />
                <a className="aaa" href={val.link} target="_blank" rel="noreferrer">
                  <div className="lili">{val.buttonName}</div>
                </a>
                <br />
                <br />
              </div>
            ))}
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
    </>
  );
}

export default OnlineCourses;
