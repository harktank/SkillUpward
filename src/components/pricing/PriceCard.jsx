import React, { useEffect } from "react";
import { process } from "../../dummydata";
import "./price.css";

const ProcessCard = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".new");

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
      {process.map((val) => (
        <div className="new shadow" key={val.step}>
          <h4>Step {val.step}: {val.title}</h4>
          <p className="new1">{val.desc}</p>
        </div>
      ))}
    </>
  );
}

export default ProcessCard;
