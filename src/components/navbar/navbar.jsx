import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        {/* <li>
          <Link to='/'>Home</Link>
        </li> */}
        <li>
          <Link to='/projects'>MY PROJECTS</Link>
        </li>
        <li>
          <Link to='/about'>ABOUT ME</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
