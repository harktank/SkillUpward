import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO SkillUpward' title='Best Online Education Expertise' />
            <p className="slogan">SkillUpward: Where elevation meets innovation for success.</p>
            <div className='button'>
              <a href='https://example.com/get-started' target='_blank' rel='noopener noreferrer'>
                <button className='primary-btn'>
                  GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                </button>
              </a>
              <br />
              <br />
              {/* <a href='https://example.com/view-course' target='_blank' rel='noopener noreferrer'>
                <button>
                  VIEW COURSE - Upcoming <i className='fa fa-long-arrow-alt-right'></i>
                </button>
              </a> */}
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
