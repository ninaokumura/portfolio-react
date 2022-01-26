import React from 'react';
import { FaHeart } from 'react-icons/fa';
import './footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <span className='footer-text'>
        Made with <FaHeart className='footer-icon' /> by Nina
      </span>
    </footer>
  );
}

export default Footer;
