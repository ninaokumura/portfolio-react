import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import './header.css';

function Header() {
  return (
    <header className='header'>
      <h3 className='logo'>
        <Link to='/'>Nina Okumura</Link>
      </h3>

      <Navbar />
    </header>
  );
}

export default Header;
