import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Pricing from './components/Pricing';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Pricing />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;