import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import './header.css';

function Header() {
  return (
    <header className='header'>
      <div className='header-content'>
        <Link to='/' className='logo'>
          Nina Okumura
        </Link>
      </div>

      <Navbar />
    </header>
  );
}

export default Header;
