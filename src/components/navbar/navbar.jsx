import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import './navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li>Home</li>
        <li>Projects</li>
        <li>About me</li>
      </ul>
    </nav>
  );
}

export default Navbar;
