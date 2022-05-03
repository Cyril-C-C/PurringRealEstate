import React from 'react';

const WorksContent = () => {
  return (
    <section className='about-us-main'>
      <section className='row-main' id='row-main'>
        <section className='about-col-main' id='about-coll-main'>
          <h1>
            We Provide The Experience{' '}
            <span style={{ color: '#f44336' }}>You Deserve</span>
          </h1>
          <p>
            We have established unique and strong relationships with our
            associates and partners towards excellence and sound delivery.
            <br />
            <br />
            Bespoke, yet simplified designs give great feeling of satisfaction
            and homeliness. Our designs speak volume works put in to making it
            happen.
            <br />
            <br />
            Consistency and great timing shape how we build our culture and
            practices. We have targets, through which we meet by best strategies
            and intelligences.
            <br />
            <br />
            <span style={{ color: '#f44336' }}>Founded</span> ~ 2021.
            <br />
            <br />
            <span style={{ color: '#f44336' }}>Specialties</span> ~ Real Estate,
            Interior and Exterior Designs, Facility and Property Management,
            General Contracts and Technology Services.
          </p>
          <a
            href='https://www.linkedin.com/company/purringre'
            target='_blank'
            rel='noreferrer'
            className='hero-btn red-btn-main'
            id='hero-btn red-btn-main'
          >
            EXPLORE MORE
          </a>
        </section>
        <section className='about-col-main' id='about-col-main'>
          <img src='Works.jpg' alt='' />
        </section>
      </section>
    </section>
  );
};

export default WorksContent;
