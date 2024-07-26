import React from "react";
import "./contact.css";
import styled from "styled-components";


const Contact = () => {
  const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), 
              linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 97%, 0 100%);
  @media (max-width: 768px) {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 40% 99%, 0 100%);
  }
`;
  // Google Maps URL for Navi Mumbai without API key
  const mapUrl = 'https://www.google.com/maps/embed/v1/place?q=Navi+Mumbai,+Maharashtra,+India&zoom=14';

  return (
    <>
      <Wrapper>


        {/* <Back title='Contact us' /> */}
        <br />
        <br />
        <section className='contacts padding'>
          <div className='container shadow flexSB'>
            {/* <div className='left row'>
            <iframe
              src={mapUrl}
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div> */}
            <div className='right row'>
              <h1>Contact Us</h1>
              <p>We're open for any suggestion or just to have a chat</p>

              <div className='items grid4'>
                <div className='box'>
                  <h4>ADDRESS:</h4>
                  <p>Vishwaniketan Institute of Management Entrepreneurship and Engineering Technology</p>
                </div>
                <div className='box'>
                  <h4>EMAIL:</h4>
                  <p>skillupward.in@gmail.com</p>
                </div>
                <div className='box'>
                  <h4>PHONE:</h4>
                  <p>+919137657756</p>
                </div>
              </div>

              {/* Uncomment and use this form if needed */}
              {/* 
            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10' placeholder='Create a message here...'></textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>
            */}

              <h3>Follow us here</h3>
              <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
            </div>
          </div>
        </section>
        <br />
        <br />
      </Wrapper>
    </>
  );
};

export default Contact;
