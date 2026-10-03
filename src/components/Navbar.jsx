import React from 'react';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  return (
    /* Abbiamo rimosso 'navbar-dark' e 'bg-dark' così la Navbar risponde alle variabili CSS */
    <nav className="navbar navbar-expand-lg sticky-top border-bottom border-secondary">
      <div className="container">
        {/* Logo / Brand */}
        <a className="navbar-brand fw-bold text-primary" href="#hero">
          {/* Il tuo logo/nome qui */}
        </a>

        {/* Hamburger Button per Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Link di Navigazione */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Aggiunta la classe d-flex align-items-center per allineare bene il toggle */}
          <ul className="navbar-nav ms-auto text-center align-items-center gap-2 my-2 my-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#about">Chi Sono</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">Competenze</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Progetti</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contatti</a>
            </li>
            <li className="nav-item">
              {/* Bottone Switch Tema */}
              <ThemeToggle />
            </li>
          </ul>
          
          {/* Bottone Call to Action (CV) */}
          <div className="d-flex justify-content-center ms-lg-3 mt-3 mt-lg-0">
            <a 
              href="CV Toscano Gianni .pdf" 
              className="btn btn-outline-primary btn-sm" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Scarica CV
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;