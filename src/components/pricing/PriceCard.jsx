import React from "react";
import { process } from "../../dummydata";

const ProcessCard = () => {
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
