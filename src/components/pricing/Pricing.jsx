import React from "react"
import Back from "../common/back/Back"

import "./price.css"
import Faq from "./Faq"
import ProcessCard from "./PriceCard"
import styled from "styled-components";


const Pricing = () => {
  const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), 
              linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 97%, 0 100%);
  @media (max-width: 768px) {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 40% 99%, 0 100%);
  }
`;
  return (
    <>

      {/* <Back title='Choose The Right Plan' /> */}
      <br />
      <br />
      <section className='price paddin'>
        <div className='container grid'>

          <ProcessCard />
        </div>
      </section>
      <Faq />

    </>
  )
}

export default Pricing
