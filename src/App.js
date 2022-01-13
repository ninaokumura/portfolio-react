// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import AboutMe from './Pages/AboutMe';
import ContactMe from './Pages/ContactMe';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <main className='main'>
          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/blog' element={<Blog />} /> */}
            <Route path='/projects' element={<Projects />} />
            <Route path='/about' element={<AboutMe />} />
            <Route path='/contact' element={<ContactMe />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
