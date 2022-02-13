import React from 'react';

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './info.css';

function Info() {
  return (
    <div className='grid-container'>
      <div className='avatar'>
        <img className='info-img' src='/images/me.jpg' alt='avatar' />
      </div>

      <div className='info-container'>
        <h3 className='info-title'>Hi, I am Nina!</h3>
        <p className='info-text'>
          I am a self-taught web developer with a passion to learn more about
          Web Design and accessibility. I believe that software development can
          be a powerful tool to help improving other people's lives by being
          accessible and inclusive and am very excited to be in this career
          path.
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
