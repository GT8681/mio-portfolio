import React from 'react';

function Hero() {
  return (
    <section 
      id="hero" 
      className="d-flex align-items-center justify-content-center min-vh-100 bg-dark text-light position-relative overflow-hidden"
      style={{
        background: 'radial-gradient(circle at top right, #1e1b4b 0%, #0f172a 100%)' // Gradiente radiale profondo
      }}
    >
      {/* Sfondo decorativo tech sfocato */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-opacity-10 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(13, 110, 253, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(13, 110, 253, 0.03) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}></div>

      <div className="container px-4 z-1">
        <div className="row align-items-center g-5">
          
          {/* COLONNA SINISTRA: Testi & Pulsanti */}
          <div className="col-12 col-lg-6 text-center text-lg-start">
            <span className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 px-3 py-2 rounded-pill uppercase fw-bold mb-3 tracking-wider" style={{ fontSize: '0.8rem' }}>
              ⚡ Open to Work
            </span>
            
            <h1 className="display-1 fw-black tracking-tight mb-3" style={{ fontSize: 'calc(2rem + 2.5vw)' }}>
              Ciao, sono <br className="d-none d-lg-block" />
              <span className="text-transparent bg-clip-text bg-gradient text-primary" style={{ backgroundImage: 'linear-gradient(45deg, #0d6efd, #0dcaf0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Gianni Toscano
              </span>
            </h1>
            
            <h2 className="h4 text-secondary fw-light mb-4" style={{ lineHeight: '1.6' }}>
              Un <strong className="text-light fw-semibold">Full-Stack Web Developer</strong> specializzato nella costruzione di applicazioni robuste, logiche scalabili e interfacce utente fluide.
            </h2>

            {/* Pulsanti Call To Action */}
            <div className="d-grid gap-3 d-sm-flex justify-content-center justify-content-lg-start mb-4">
              <a href="#projects" className="btn btn-primary btn-lg px-4 py-3 fw-bold shadow border-0 link-transition" style={{ transition: 'all 0.3s' }}>
                Esplora Progetti
              </a>
              <a href="#contact" className="btn btn-outline-light btn-lg px-4 py-3 fw-bold">
                Contattami
              </a>
            </div>

            {/* Social Link minimali ed eleganti */}
            <div className="d-flex justify-content-center justify-content-lg-start gap-4 pt-2">
              <a 
                href="https://github.com/GT8681" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-secondary text-primary-hover text-decoration-none d-flex align-items-center gap-2 small fw-bold uppercase tracking-wider link-transition"
              >
                <span>💻</span> GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/gianni-toscano/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-secondary text-primary-hover text-decoration-none d-flex align-items-center gap-2 small fw-bold uppercase tracking-wider link-transition"
              >
                <span>💼</span> LinkedIn
              </a>
            </div>
          </div>

          {/* COLONNA DESTRA: L'elemento WOW (Il finto Editor di Codice) */}
          <div className="col-12 col-lg-6 d-none d-md-block">
            <div className="card border-secondary border-opacity-50 shadow-lg rounded-4 overflow-hidden bg-black bg-opacity-40 backdrop-blur" style={{ backdropFilter: 'blur(10px)' }}>
              {/* Barra superiore dell'editor */}
              <div className="card-header bg-dark bg-opacity-60 border-bottom border-secondary border-opacity-50 d-flex align-items-center px-3 py-2">
                <div className="d-flex gap-2">
                  <span className="bg-danger rounded-circle" style={{ width: '12px', height: '12px', display: 'block' }}></span>
                  <span className="bg-warning rounded-circle" style={{ width: '12px', height: '12px', display: 'block' }}></span>
                  <span className="bg-success rounded-circle" style={{ width: '12px', height: '12px', display: 'block' }}></span>
                </div>
                <small className="text-secondary mx-auto font-monospace" style={{ fontSize: '0.8rem' }}>developer.js</small>
              </div>
              
              {/* Contenuto del codice */}
              <div className="card-body p-4 font-monospace" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                <p className="mb-1"><span className="text-danger">const</span> <span className="text-primary">developer</span> = &#123;</p>
                <p className="mb-1" style={{ paddingLeft: '20px' }}><span className="text-light">name:</span> <span className="text-warning">'Gianni Toscano'</span>,</p>
                <p className="mb-1" style={{ paddingLeft: '20px' }}><span className="text-light">role:</span> <span className="text-warning">'Full-Stack Web Developer'</span>,</p>
                <p className="mb-1" style={{ paddingLeft: '20px' }}><span className="text-light">education:</span> <span className="text-warning">'Epicode Graduate'</span>,</p>
                <p className="mb-1" style={{ paddingLeft: '20px' }}><span className="text-light">stack:</span> <span className="text-info">[</span></p>
                <p className="mb-1" style={{ paddingLeft: '40px' }}><span className="text-warning">'React'</span>, <span className="text-warning">'Node.js'</span>, <span className="text-warning">'Express'</span>,</p>
                <p className="mb-1" style={{ paddingLeft: '40px' }}><span className="text-warning">'MongoDB'</span>, <span className="text-warning">'Bootstrap'</span></p>
                <p className="mb-1" style={{ paddingLeft: '20px' }}><span className="text-info">]</span>,</p>
                <p className="mb-1" style={{ paddingLeft: '20px' }}><span className="text-light">passion:</span> <span className="text-warning">'Building impactful dynamic apps'</span></p>
                <p className="mb-0">&#125;;</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Indicatore di Scroll */}
      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3 d-none d-lg-block text-secondary opacity-50">
        <div className="text-center" style={{ fontSize: '1.2rem', animation: 'bounce 2s infinite' }}>↓</div>
      </div>
    </section>
  );
}

export default Hero;
