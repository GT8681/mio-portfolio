import React from 'react';

function About() {
  // Array delle competenze per ciclare facilmente nel codice
  const frontendSkills = ["HTML5", "CSS3", "JavaScript (ES6)", "React", "Bootstrap", "Tailwind CSS"];
  const backendSkills = ["Node.js", "Express", "RESTful APIs", "MongoDB / PostgreSQL", "Mongoose"];
  const toolsSkills = ["Git & GitHub", "Postman", "NPM", "Cloudinary", "Render / Vercel"];

  return (
    <section id="about" className="py-5">
      <div className="row row-cols-1 row-cols-md-2 g-5 align-items-center">
        
        {/* COLONNA SINISTRA: Chi Sono */}
        <div className="col">
          <h2 className="display-5 fw-bold text-primary mb-4"> Chi Sono </h2>
          <p className="lead text-secondary">
            Sono un **Full-Stack Web Developer** con una forte propensione alla risoluzione dei problemi e alla creazione di applicazioni web dinamiche e scalabili.
          </p>
          <p className="text-secondary">
            Dopo aver maturato esperienza in contesti lavorativi dinamici e di gestione operativa, ho deciso di canalizzare la mia passione per la tecnologia in un percorso professionale concreto. Ho recentemente completato un **Master intensivo part-time presso Epicode**, dove ho consolidato le mie competenze sia nel frontend che nel backend.
          </p>
          <p className="text-secondary">
            Mi piace sporcarmi le mani con la logica del codice, strutturare database efficienti e dare vita a interfacce utente pulite e responsive. Sono sempre pronto a imparare nuove tecnologie e a mettermi in gioco in contesti stimolanti.
          </p>
        </div>

        {/* COLONNA DESTRA: Tech Stack (Skills) */}
        <div className="col">
          <div className="p-4 bg-dark bg-gradient rounded-4 border border-secondary shadow-sm">
            <h3 className="h4 fw-bold text-light mb-4">Il mio Tech Stack</h3>

            {/* Frontend */}
            <div className="mb-3">
              <h6 className="text-primary text-uppercase fw-bold mb-2" style={{ fontSize: '0.8rem' }}>Frontend</h6>
              <div className="d-flex flex-wrap gap-2">
                {frontendSkills.map((skill, index) => (
                  <span key={index} className="badge bg-secondary bg-opacity-25 text-light border border-secondary px-3 py-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="mb-3">
              <h6 className="text-success text-uppercase fw-bold mb-2" style={{ fontSize: '0.8rem' }}>Backend</h6>
              <div className="d-flex flex-wrap gap-2">
                {backendSkills.map((skill, index) => (
                  <span key={index} className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-50 px-3 py-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h6 className="text-warning text-uppercase fw-bold mb-2" style={{ fontSize: '0.8rem' }}>Strumenti & Servizi</h6>
              <div className="d-flex flex-wrap gap-2">
                {toolsSkills.map((skill, index) => (
                  <span key={index} className="badge bg-warning bg-opacity-10 text-warning border border-warning border-opacity-50 px-3 py-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
