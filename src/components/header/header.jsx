import React from 'react';
import Navbar from '../navbar/navbar';
import './header.css';

function Header() {
  return (
    <header className='header'>
      <h3 className='logo'>Nina Okumura</h3>

      <Navbar />
    </header>
  );
}

export default Header;
