import React, { useState } from 'react';

function Contact() {
  // Stato per gestire i dati del form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Stato per gestire il feedback visivo dell'invio
  const [isSent, setIsSent] = useState(false);

  // Funzione per aggiornare lo stato quando l'utente scrive
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Funzione che gestisce l'invio del form
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Qui andrà la logica di invio (es. fetch verso il tuo backend Node.js o servizio esterno)
    console.log("Dati inviati con successo:", formData);
    
    // Mostriamo un messaggio di successo temporaneo
    setIsSent(true);
    
    // Resettiamo il form
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Nascondiamo il messaggio dopo 5 secondi
    setTimeout(() => setIsSent(false), 5000);
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        
        {/* Intestazione Sezione */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-primary">CONTTATAMI</h2>
          <p className="text-secondary lead">Hai un progetto in mente o vuoi fare due chiacchiere? Scrivimi pure!</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="p-4 p-sm-5 bg-dark bg-gradient rounded-4 border border-secondary shadow-sm">
              
              {/* Messaggio di successo */}
              {isSent && (
                <div className="alert alert-success border-0 bg-success bg-opacity-10 text-success mb-4" role="alert">
                  🚀 Messaggio inviato con successo! Ti risponderò il prima possibile.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Campo Nome */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label text-light small fw-bold text-uppercase">Nome</label>
                  <input
                    type="text"
                    className="form-control bg-secondary bg-opacity-10 border-secondary text-light p-3 focus-primary"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Il tuo nome"
                    required
                  />
                </div>

                {/* Campo Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label text-light small fw-bold text-uppercase">Email</label>
                  <input
                    type="email"
                    className="form-control bg-secondary bg-opacity-10 border-secondary text-light p-3"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nome@esempio.com"
                    required
                  />
                </div>

                {/* Campo Oggetto */}
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label text-light small fw-bold text-uppercase">Oggetto</label>
                  <input
                    type="text"
                    className="form-control bg-secondary bg-opacity-10 border-secondary text-light p-3"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Richiesta di informazioni"
                    required
                  />
                </div>

                {/* Campo Messaggio */}
                <div className="mb-4">
                  <label htmlFor="message" className="form-label text-light small fw-bold text-uppercase">Messaggio</label>
                  <textarea
                    className="form-control bg-secondary bg-opacity-10 border-secondary text-light p-3"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Scrivi qui il tuo messaggio..."
                    required
                  ></textarea>
                </div>

                {/* Bottone di Invio */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg fw-bold py-3 shadow-sm">
                    Invia Messaggio
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
