import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import AboutCard from "../about/AboutCard";
import HAbout from "./HAbout";
import Hero from "./hero/Hero";
import Hprice from "./Hprice";
import Testimonal from "./testimonal/Testimonal";
import styled from "styled-components";

const Home = () => {
  const Wrapper1 = styled.div`
    background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), 
                linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
    width: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 97%, 0 100%);
    @media (max-width: 768px) {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 20% 99.5%, 0 100%);
    }
  `; const Wrapper2 = styled.div`
    background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), 
                linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
    width: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 80% 96%, 0 100%);
    @media (max-width: 768px) {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 60% 99.5%, 0 100%);
    }
  `; const Wrapper3 = styled.div`
    background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), 
                linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
    width: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 96%, 0 100%);
    @media (max-width: 768px) {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 97.5%, 0 100%);
    }
  `;

  return (
    <>
      <Hero />

      <Wrapper1>
        <AboutCard />
      </Wrapper1>

      <Wrapper2>
        <HAbout />
        <br />
        <br />
        <Testimonal />
      </Wrapper2>

      <Wrapper3>
        <Hprice />
        <div className="faqss">
          <button>
            <Link to="/faq">FAQ</Link>
          </button>
        </div>
        <br />
        <br />
      </Wrapper3>
    </>
  );
};

export default Home;
