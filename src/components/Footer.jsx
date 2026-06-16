import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-secondary py-4 border-top border-secondary mt-5">
      <div className="container">
        <div className="row align-items-center justify-content-between flex-column flex-sm-row gap-3">
          
          {/* Copyright e Crediti */}
          <div className="col text-center text-sm-start">
            <p className="mb-0 small font-monospace">
              &copy; {currentYear} <span className="text-light fw-semibold">Toscano Gianni</span>. Realizzato in React e Bootstrap.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
