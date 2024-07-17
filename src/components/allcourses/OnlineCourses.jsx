import React from "react"
import "./courses.css"
import { online } from "../../dummydata"
import Heading from "../common/heading/Heading"

const OnlineCourses = () => {
  return (
    <>
      <section className='online'>
        <div className='container'>
          {/* <Heading subtitle='Our Internship' title='Computers & Information Technology Section' /> */}
          <p className="intern">Our Internship</p>
          <p className="intern1">Computers & Information Technology Section</p>
          <br />
          <div className='content grid3'>
            {online.map((val) => (
              <div className='box'>
                <div className='img'>
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
                <a href={val.link} target="_blank" rel="noreferrer">
                  <button>Apply Now</button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OnlineCourses