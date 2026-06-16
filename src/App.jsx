import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-dark text-light font-monospace min-vh-100 d-flex flex-column justify-content-between">
      {/* 1. Barra di navigazione fissa in alto */}
      <Navbar />

      {/* 2. Hero Section a tutto schermo */}
      <Hero />

      {/* 3. Contenuto principale del Portfolio */}
      <main className="container my-5 flex-grow-1 px-3 px-md-4">
        
        {/* Sezione Chi Siamo e Skills */}
        <About />
        
        {/* Linea di separazione stilizzata */}
        <hr className="text-secondary opacity-25 my-5" />
        
        {/* Sezione dei Progetti */}
        <Projects />
        
        {/* Linea di separazione stilizzata */}
        <hr className="text-secondary opacity-25 my-5" />
        
        {/* Sezione del Form di Contatto */}
        <Contact />
        
      </main>

      {/* 4. Piè di pagina */}
      <Footer />
    </div>
  );
}

export default App;
