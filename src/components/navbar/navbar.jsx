import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li>
          <Link to='/blog'>Blog</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact me</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
