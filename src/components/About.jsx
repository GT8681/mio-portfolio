import React from 'react';
// 1. Importiamo le icone dedicate da ogni pacchetto specifico di react-icons
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBootstrap, FaNodeJs, FaGitAlt, FaNpm } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiPostman, SiCloudinary, SiVercel } from 'react-icons/si';

function About() {
  // Trasformiamo gli array in oggetti che contengono sia il nome sia l'icona React corrispondente
  const frontendSkills = [
    { name: "HTML5", icon: <FaHtml5 className="text-danger me-1" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-info me-1" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-warning me-1" /> },
    { name: "React", icon: <FaReact className="text-info me-1" /> },
    { name: "Bootstrap", icon: <FaBootstrap style={{ color: '#7952b3' }} className="me-1" /> }
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs className="text-success me-1" /> },
    { name: "Express", icon: <SiExpress className="text-light me-1" /> },
    { name: "RESTful APIs", icon: <span className="font-monospace text-success me-1" style={{ fontSize: '0.8rem' }}>⚙️</span> },
    { name: "MongoDB", icon: <SiMongodb className="text-success me-1" /> },
    { name: "Mongoose", icon: <SiMongodb className="text-danger me-1" /> } // Usa MongoDB o altra icona affine
  ];

  const toolsSkills = [
    { name: "Git & GitHub", icon: <FaGitAlt className="text-danger me-1" /> },
    { name: "Postman", icon: <SiPostman style={{ color: '#FF6C37' }} className="me-1" /> },
    { name: "NPM", icon: <FaNpm className="text-danger me-1" /> },
    { name: "Cloudinary", icon: <SiCloudinary className="text-info me-1" /> },
    { name: "Render / Vercel", icon: <SiVercel className="text-light me-1" /> }
  ];

  return (
    <section id="about" className="py-5">
      {/* AGGIUNTO: Un container di Bootstrap per assicurare i giusti margini laterali */}
      <div className="container"> 
        <div className="row row-cols-1 row-cols-md-2 g-5 align-items-center">
          
          {/* COLONNA SINISTRA: Chi Sono */}
          <div className="col" data-aos="fade-right">
            <h2 className="display-5 fw-bold text-primary mb-4">Chi Sono</h2>
            <p className="lead text-secondary">
              Sono un **Full-Stack Web Developer** con una forte propensione alla risoluzione dei problemi e alla creazione di applicazioni web dinamiche e scalabili.
            </p>
            <p className="text-secondary">
              Dopo aver maturato esperienza in contesti lavorativi dinamici e di gestione operativa, ho deciso di canalizzare la mia passione per la tecnologia in un percorso professionale concreto. Ho recentemente completato un **Master intensivo presso Epicode**, dove ho consolidato le mie competenze sia nel frontend che nel backend.
            </p>
            <p className="text-secondary">
              Mi piace sporcarmi le mani con la logica del codice, strutturare database efficienti e dare vita a interfacce utente pulite e responsive. Sono sempre pronto a imparare nuove tecnologie e a mettermi in gioco in contesti stimolanti.
            </p>
          </div>

          {/* COLONNA DESTRA: Tech Stack (Skills con Icone) */}
          <div className="col" data-aos="fade-left">
            <div className="p-4 bg-dark bg-gradient rounded-4 border border-secondary border-opacity-25 shadow-lg"
                 style={{ background: 'linear-gradient(145deg, #161b22 0%, #0f141c 100%)' }}>
              <h3 className="h4 fw-bold text-light mb-4">Il mio Tech Stack</h3>

              {/* Frontend */}
              <div className="mb-4">
                <h6 className="text-primary text-uppercase fw-bold mb-2" style={{ fontSize: '0.8rem', trackingWidest: '0.1rem' }}>Frontend</h6>
                <div className="d-flex flex-wrap gap-2">
                  {frontendSkills.map((skill, index) => (
                    <span key={index} className="badge bg-secondary bg-opacity-10 text-light border border-secondary border-opacity-50 px-3 py-2 d-flex align-items-center shadow-sm">
                      {skill.icon}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="mb-4">
                <h6 className="text-success text-uppercase fw-bold mb-2" style={{ fontSize: '0.8rem', trackingWidest: '0.1rem' }}>Backend</h6>
                <div className="d-flex flex-wrap gap-2">
                  {backendSkills.map((skill, index) => (
                    <span key={index} className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-40 px-3 py-2 d-flex align-items-center shadow-sm">
                      {skill.icon}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h6 className="text-warning text-uppercase fw-bold mb-2" style={{ fontSize: '0.8rem', trackingWidest: '0.1rem' }}>Strumenti & Servizi</h6>
                <div className="d-flex flex-wrap gap-2">
                  {toolsSkills.map((skill, index) => (
                    <span key={index} className="badge bg-warning bg-opacity-10 text-warning border border-warning border-opacity-40 px-3 py-2 d-flex align-items-center shadow-sm">
                      {skill.icon}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
