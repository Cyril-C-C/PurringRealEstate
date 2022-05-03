import React from 'react';

const AboutContent = () => {
  return (
    <section className='about-us-main'>
      <section className='row-main' id='row-main'>
        <section className='about-col-main' id='about-coll-main'>
          <h1>
            To Your Exciting{' '}
            <span style={{ color: '#f44336' }}>Realities...</span>
          </h1>
          <p>
            Purring Real Estate, Design and Facilities is a real estate
            partnership company. With sound relationships, partnership and
            executive presence, we have positioned ourselves to accelerating
            developmental excellence in real estate, exterior and interior
            designs, and facility and property management.
            <br />
            <br />
            Our interest and undertakings span across various spaces from
            residential, through commercial, to industrial assets.
            <br />
            <br />
            We proffer sustainable development and support to exciting
            realities.
            <br />
            <br />
            <span style={{ color: '#f44336' }}>Founded</span> ~ 2021.
            <br />
            <br />
            <span style={{ color: '#f44336' }}>Specialties</span> ~ Real Estate,
            Design, Facilities and General Contracts.
          </p>
          <a
            href='https://twitter.com/_Purring_?t=3tbsLvQKm_qYSVL9DBlcbg&s=08'
            target='_blank'
            rel='noreferrer'
            className='hero-btn red-btn-main'
            id='hero-btn red-btn-main'
          >
            EXPLORE MORE
          </a>
        </section>
        <section className='about-col-main' id='about-col-main'>
          <img src='About.jpg' alt='' />
        </section>
      </section>
    </section>
  );
};

export default AboutContent;
