import React from "react"
import Back from "../common/back/Back"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"
import styled from "styled-components";


const CourseHome = () => {
  const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), 
              linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 97%, 0 100%);
  @media (max-width: 768px) {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 60% 99.5%, 0 100%);
  }
`;
  return (
    <>
      <Wrapper>
        <div id="course-home">
          {/* <Back title='Explore Courses' /> */}
          <br />
          <br />
          <br />
          <OnlineCourses />

          {/* <CoursesCard /> */}

        </div>
      </Wrapper>
    </>
  )
}

export default CourseHome
