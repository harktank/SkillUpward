import React from "react"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <p className="her">WELCOME TO SkillUpward</p>
            <br />
            <br />
            <p className="her1">Best Online Education Expertise</p>
            <br />
            <br />
            <br />
            <p className="slogan">SkillUpward: Where elevation meets innovation for success.</p>
            <div className='button'>
              <a href='https://docs.google.com/forms/d/e/1FAIpQLScvb-pxBomubgdOEWGKA8cQCpE-eVNz18pQJInXtQSNdbK0iw/viewform?usp=sf_link' target='_blank' rel='noopener noreferrer'>
                <button className='primary-btn'>
                  GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                </button>
              </a>
              <br />
              <br />
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
