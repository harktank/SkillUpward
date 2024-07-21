import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            {/* <Heading subtitle='WELCOME TO SkillUpward' title='Best Online Education Expertise' /> */}
            <p className="her">Welcome To SkillUpward</p>
            <br />
            <br />
            <p className="her1">Best Online Education Expertise</p>
            <br />
            <br />

            <p className="slogan">SkillUpward: Where elevation meets   innovation for success.</p>

          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  );
}

export default Hero;
