import React from 'react';

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './info.css';

function Info() {
  return (
    <div className='grid-container'>
      <div className='pattern-dots-md gray-dark'>
        <img className='info-img' src='/images/me.jpg' />
      </div>

      <div className='info-container'>
        <h3 className='info-title'>Hi, I am Nina!</h3>
        <p className='info-text'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
          voluptates quisquam unde praesentium sunt magnam alias, eaque nam odit
          dolore natus, optio doloribus sint reprehenderit quis odio facilis
          corporis neque. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Dolores velit modi, non optio tempora quidem. Ea eos unde quas
          hic labore neque, error dolores velit distinctio. Excepturi facilis
          tempore ratione.
        </p>
        <span className='info-icon'>
          <a href='https://www.linkedin.com/in/nina-7b4377221/'>
            <FaLinkedin />
          </a>
          <a href='https://github.com/ninaokumura'>
            <FaGithub />
          </a>
        </span>
      </div>
    </div>
  );
}

export default Info;
