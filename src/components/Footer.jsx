import React, { useState } from 'react';

function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      // Qui in futuro potrai collegare un servizio come Mailchimp o Formspree
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 4000); // Nasconde il messaggio dopo 4 secondi
    }
  };

  return (
    <footer className="bg-black text-light pt-5 pb-3 border-top border-secondary border-opacity-25 mt-auto">
      <div className="container">
        <div className="row g-4 mb-4">
          
          {/* COLONNA 1: Brand & Descrizione */}
          <div className="col-12 col-md-4">
            <h5 className="fw-bold font-monospace text-primary mb-3">Gianni Toscano </h5>
            <p className="text-secondary small" style={{ lineHeight: '1.6' }}>
              Full-Stack Web Developer focalizzato sulla creazione di applicazioni web moderne, performanti e scalabili. Graduato Epicode.
            </p>
          </div>

          {/* COLONNA 2: Link Rapidi */}
          <div className="col-6 col-md-2">
            <h6 className="text-uppercase fw-bold text-light small tracking-wider mb-3">Navigazione</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li><a href="#hero" className="text-secondary text-primary-hover text-decoration-none transition">Home</a></li>
              <li><a href="#about" className="text-secondary text-primary-hover text-decoration-none transition">Chi Sono</a></li>
              <li><a href="#projects" className="text-secondary text-primary-hover text-decoration-none transition">Progetti</a></li>
              <li><a href="#contact" className="text-secondary text-primary-hover text-decoration-none transition">Contatti</a></li>
            </ul>
          </div>

          {/* COLONNA 3: Social & Info */}
          <div className="col-6 col-md-2">
            <h6 className="text-uppercase fw-bold text-light small tracking-wider mb-3">Social</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li>
                <a href="https://github.com/GT8681" target="_blank" rel="noopener noreferrer" className="text-secondary text-primary-hover text-decoration-none transition">
                  📁 GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/gianni-toscano/" target="_blank" rel="noopener noreferrer" className="text-secondary text-primary-hover text-decoration-none transition">
                  💼 LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* COLONNA 4: Input Newsletter WOW */}
          <div className="col-12 col-md-4">
            <h6 className="text-uppercase fw-bold text-light small tracking-wider mb-3">Newsletter Tech</h6>
            <p className="text-secondary small mb-3">Rimani aggiornato sui miei ultimi progetti e approfondimenti sullo sviluppo web.</p>
            
            <form onSubmit={handleNewsletterSubmit} className="position-relative">
              <div className="input-group mb-2">
                <input
                  type="email"
                  className="form-control bg-dark bg-opacity-50 border-secondary border-opacity-50 text-light p-2 small font-monospace"
                  placeholder="Inserisci la tua email"
                  aria-label="Email per newsletter"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                />
                <button className="btn btn-primary px-3 fw-bold btn-sm" type="submit">
                  Iscriviti
                </button>
              </div>

              {/* Feedback iscrizione avvenuta */}
              {subscribed && (
                <span className="text-success small position-absolute start-0 bottom-0 translate-y-100 pt-1 font-monospace" style={{ fontSize: '0.8rem' }}>
                  ✓ Iscrizione simulata con successo!
                </span>
              )}
            </form>
          </div>

        </div>

        {/* Riga inferiore del Copyright */}
        <div className="row border-top border-secondary border-opacity-10 pt-3 mt-4">
          <div className="col-12 col-md-6 text-center text-md-start mb-2 mb-md-0">
            <p className="text-muted small mb-0">
              &copy; {new Date().getFullYear()} Gianni Toscano. Tutti i diritti riservati.
            </p>
          </div>
          <div className="col-12 col-md-6 text-center text-md-end">
            <p className="text-muted small mb-0">
              Built with <span className="text-primary">React</span> & <span className="text-info">Bootstrap</span>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
