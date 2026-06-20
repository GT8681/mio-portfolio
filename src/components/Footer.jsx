import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-secondary py-4 border-top border-secondary mt-5">
      <div className="container">
        <div className=" d-flex row align-items-center justify-content-between flex-column flex-sm-row gap-3">

          {/* Copyright e Crediti */}
          <div className="col text-center text-sm-start">
            <p className="mb-0 small font-monospace">
              &copy; {currentYear} <span className="text-light fw-semibold">Toscano Gianni</span>. Realizzato in React e Bootstrap.
            </p>
          </div>
          {/* Form di Iscrizione alla Newsletter (non funzionale, solo estetico) */}

          <div className='d-flex flex-column mt-4 mt-sm-0 col-sm-6 col-md-4 align-items-center align-items-sm-end'>
            <div>
              <h3>Voi iscriverti alla Newletter</h3>
            </div>
            <div className='d-flex gap-3 align-items-center '>
              <input type="email" className='rounded-4 p-3' />

              <input type="button" value="INVIA" className='btn btn-danger p-3 rounded-3' />

            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
