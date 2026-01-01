
import React from 'react';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';

export default function Home() {
  return (
    <div className="bg-slate-950 min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}