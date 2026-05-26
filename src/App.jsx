import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Academics from './components/Academics';
import Facilities from './components/Facilities';
import Toppers from './components/Toppers';
import Gallery from './components/Gallery';
import Admissions from './components/Admissions';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-850 antialiased selection:bg-school-100 selection:text-school-900">
      <Navbar />
      <Hero />
      <About />
      <Toppers />
      <Academics />
      <Facilities />
      <Gallery />
      <Admissions />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
