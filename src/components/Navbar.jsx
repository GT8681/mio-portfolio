import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top border-bottom border-secondary">
      <div className="container">
        {/* Logo / Brand */}
        <a className="navbar-brand fw-bold text-primary" href="#hero">
         
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
          <ul className="navbar-nav ms-auto text-center">
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
          </ul>
          
          {/* Bottone Call to Action opzionale (es. CV) */}
          <div className="d-flex justify-content-center ms-lg-3 mt-3 mt-lg-0">
            <a 
              href="/Gianni_Toscano_CV.pdf" 
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
