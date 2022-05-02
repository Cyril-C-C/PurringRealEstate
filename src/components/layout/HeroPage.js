import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const HeroPage = () => {
  return (
    <Fragment>
      <section className='text-box' id='text-box'>
        <h1>
          Accelerating Excellence{' '}
          <span style={{ color: '#f44336' }}>with Trust</span>
        </h1>
        <p>
          Accelerating developmental excellence in real estate, exterior -
          interior designs, and facility and property management.
        </p>
        <Link to='/About' className='hero-btn' id='hero-btn'>
          Visit Us To Know More
        </Link>
      </section>
    </Fragment>
  );
};

export default HeroPage;
