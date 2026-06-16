import React from 'react';

function Projects() {
  // I tuoi progetti reali con descrizioni dettagliate e tech stack preciso
  const myProjects = [
    {
      id: 1,
      title: "Piattaforma di Football Scouting",
      subtitle: "Applicazione Full-Stack per la valorizzazione dei talenti",
      description: "Una piattaforma dinamica progettata per permettere ai calciatori emergenti di caricare i propri dati, statistiche e video-evidenze. Il sistema include un'architettura backend robusta per la gestione dei profili e integra servizi cloud per l'ottimizzazione e lo streaming dei contenuti multimediali.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Cloudinary", "Bootstrap"],
      githubLink: "https://github.com/GT8681/capstone-Project", 
      liveLink: "https://capstone-project-puce-sigma.vercel.app/",
      category: "Full-Stack Project"
    },
    {
      id: 2,
      title: "Gestore Tornei con Algoritmo di Calendario",
      subtitle: "Generazione automatica e calcolo classifiche in tempo reale",
      description: "Applicazione web focalizzata sulla logica algoritmica complessa. Dispone di una funzione automatizzata per generare calendari di tornei sportivi basati sul girone all'italiana, aggiornando dinamicamente la classifica generale, i punti e le statistiche dei team a ogni inserimento dei risultati.",
      tech: ["React", "JavaScript (ES6)", "Node.js", "Bootstrap", "CSS3"],
      githubLink: "https://github.com/GT8681/Tournament-Hub", 
      liveLink: "",
      category: "Logic & Frontend"
    }
  ];

  return (
    <section id="projects" className="py-5 position-relative">
      <div className="container">
        
        {/* Intestazione Sezione */}
        <div className="text-center mb-5">
          <span className="text-primary text-uppercase fw-bold tracking-widest small d-block mb-2">Portfolio</span>
          <h2 className="display-4 fw-bold text-light">PROGETTI REALIZZATI</h2>
          <div className="bg-primary rounded-pill mx-auto mt-2" style={{ width: '60px', height: '4px' }}></div>
        </div>

        {/* Lista dei Progetti a Righe Alterne */}
        <div className="d-flex flex-column gap-5 mt-5">
          {myProjects.map((project, index) => {
            // Controlla se la riga è pari o dispari per invertire l'ordine delle colonne su desktop
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={project.id} 
                className="row align-items-center g-4 g-lg-5 p-4 p-lg-5 bg-dark bg-gradient rounded-4 border border-secondary border-opacity-25 shadow-lg"
                style={{ background: 'linear-gradient(145deg, #161b22 0%, #0f141c 100%)' }}
              >
                
                {/* COLONNA TESTO (Usa l'ordine condizionale `order-lg-1` o `order-lg-2`) */}
                <div className={`col-12 col-lg-6 ${isEven ? 'order-lg-1' : 'order-lg-2'}`}>
                  <span className="text-primary font-monospace small fw-bold uppercase tracking-wider mb-2 d-block">
                    {project.category}
                  </span>
                  <h3 className="h2 fw-bold text-light mb-1">{project.title}</h3>
                  <h4 className="h6 text-secondary fw-normal mb-4 italic">{project.subtitle}</h4>
                  
                  <p className="text-secondary mb-4" style={{ lineHeight: '1.7', fontSize: '1rem' }}>
                    {project.description}
                  </p>
                  
                  {/* Badge delle Tecnologie */}
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {project.tech.map((techName, i) => (
                      <span 
                        key={i} 
                        className="badge bg-secondary bg-opacity-10 text-primary border border-primary border-opacity-20 px-3 py-2 font-monospace"
                        style={{ fontSize: '0.8rem' }}
                      >
                        {techName}
                      </span>
                    ))}
                  </div>

                  {/* Pulsanti di Azione */}
                  <div className="d-flex gap-3">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-outline-light px-4 py-2 fw-semibold btn-sm link-transition"
                    >
                      Repository GitHub
                    </a>
                    <a 
                      href={project.liveLink} 
                      className="btn btn-primary px-4 py-2 fw-bold btn-sm shadow-sm"
                    >
                      Demo Live 🚀
                    </a>
                  </div>
                </div>

                {/* COLONNA VISIVA / MOCKUP SCREENSHOT */}
                <div className={`col-12 col-lg-6 ${isEven ? 'order-lg-2' : 'order-lg-1'}`}>
                  <div 
                    className="position-relative overflow-hidden rounded-3 shadow border border-secondary border-opacity-50 card-hover-effect"
                    style={{ aspectRatio: '16/10', background: '#1c2128' }}
                  >
                    {/* Un finto layout interno che simula lo screenshot del sito prima che tu metta le immagini reali */}
                    <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center text-center p-4">
                      <div className="display-4 mb-2 opacity-50">💻</div>
                      <h5 className="text-secondary font-monospace small mb-0">&lt; Preview Img: {project.title} /&gt;</h5>
                      <small className="text-muted mt-1" style={{ fontSize: '0.75rem' }}>Inserisci uno screenshot in seguito</small>
                    </div>
                    
                    {/* Overlay scuro leggero all'hover */}
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-0 hover-overlay transition" style={{ transition: 'all 0.3s', pointerEvents: 'none' }}></div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Projects;
