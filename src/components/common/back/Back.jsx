import React from "react"
import { useLocation } from "react-router-dom"

const Back = ({ title }) => {
  const location = useLocation()

  return (
    <>
      <div className='back'>
        <div style={{ fontSize: "30px" }} className="backt" >{title}</div>
      </div>
      <div className='margin'></div>
    </>
  )
}

export default Back
