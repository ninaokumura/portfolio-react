import React from 'react';

import Timeline from '../components/timeline/timeline';

function AboutMe() {
  return (
    <div>
      <div className='about-me'>
        <h3>Hi, I am Nina!</h3>
        <p style={{ fontSize: '1.5rem' }}>
          I was born and raised in Brazil in a beautiful city called Angra dos
          Reis. I moved to New Zealand in 2017....
        </p>
      </div>
      <h3>My learning Journey</h3>
      <Timeline />
    </div>
  );
}

export default AboutMe;
