import React from "react"
import Heading from "../common/heading/Heading"
import "./about.css"
import { homeAbout } from "../../dummydata"
import Awrapper from "./Awrapper"
import AboutMe from "./Aboutme"

const AboutCard = () => {
  return (
    <>
      <div id="about">

        <section id="about" className='aboutHome'>
          <div className='container flexSB'>

            <div className='right row'>
              {/* <Heading subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' /> */}
              <p className="intern">LEARN ANYTHING</p>
              <p className="intern1">Benefits About Online Learning Expertise</p>
              <div className='items'>
                {homeAbout.map((val) => {
                  return (
                    <div className='item flexSB'>
                      <div className='img'>
                        <img src={val.cover} alt='' />
                      </div>
                      <div className='text'>
                        <h2>{val.title}</h2>
                        <p>{val.desc}</p>
                      </div>
                    </div>
                  )
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
  )
}

export default AboutCard
