import React from "react";
import "./heading.css"; // Import the CSS file

const Heading = ({ subtitle, title }) => {
  return (
    <div id="heading" className="heading-container">
      <h3>{subtitle}</h3>
      <h1 className="title">{title}</h1>
    </div>
  );
};

export default Heading;
