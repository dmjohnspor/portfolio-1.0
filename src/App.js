import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe/index';
import Portfolio from './components/Portfolio/index';
import Footer from './components/Footer';
import Divider from './components/Divider';

function App() {
  return (
    <>
      <Navbar />
      <Home id="home" />
      <Divider />
      <AboutMe id="about" />
      <Divider />
      <Portfolio id="portfolio" />
      <Footer />
    </>
  );
}

export default App;
