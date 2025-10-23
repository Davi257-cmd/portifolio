import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Organizations from './components/Organizations';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Technologies />
      <Organizations />
      <Certifications />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;