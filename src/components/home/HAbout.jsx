import React from "react"
import OnlineCourses from "../allcourses/OnlineCourses"
import Heading from "../common/heading/Heading"
import "../allcourses/courses.css"
import { coursesCard } from "../../dummydata"

const HAbout = () => {
  return (
    <>
      <section className='homeAbout'>
       <OnlineCourses />
        <div className='container'>

          
        </div>
        
      </section>
    </>
  )
}

export default HAbout
