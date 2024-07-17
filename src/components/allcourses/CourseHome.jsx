import React from "react"
import Back from "../common/back/Back"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"

const CourseHome = () => {
  return (
    <>
      <div id="course-home">
        <Back title='Explore Courses' />
        <OnlineCourses />
        <CoursesCard />
       
      </div>
    </>
  )
}

export default CourseHome
