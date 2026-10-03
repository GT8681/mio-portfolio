import React, { useState } from 'react';

function Contact() {
  const FORMSPREE_ID = "xnjyrlnb"; 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    error: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ ...status, submitting: true });

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus({ submitted: true, submitting: false, error: false });
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        setTimeout(() => setStatus(prev => ({ ...prev, submitted: false })), 5000);
      } else {
        setStatus({ submitted: false, submitting: false, error: true });
      }
    } catch (err) {
      setStatus({ submitted: false, submitting: false, error: true });
    }
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        
        <div className="text-center mb-5">
          <span className="text-primary text-uppercase fw-bold tracking-widest small d-block mb-2">Contatti</span>
          {/* Rimosso text-light per consentire il colore dinamico del tema */}
          <h2 className="display-4 fw-bold">SCRIVIMI</h2>
          <div className="bg-primary rounded-pill mx-auto mt-2" style={{ width: '60px', height: '4px' }}></div>
        </div>

        <div className="row justify-content-center" data-aos="fade-up">
          <div className="col-12 col-md-8 col-lg-6">
            {/* Sostituito lo stile inline hardcodato con la classe .contact-card-box */}
            <div className="p-4 p-sm-5 rounded-4 border border-secondary border-opacity-25 shadow-lg contact-card-box">
              
              {/* Banner di Successo */}
              {status.submitted && (
                <div className="alert alert-success border-0 bg-success bg-opacity-10 text-success mb-4" role="alert">
                  🚀 Messaggio inviato! Ti risponderò prestissimo sulla tua email.
                </div>
              )}

              {/* Banner di Errore */}
              {status.error && (
                <div className="alert alert-danger border-0 bg-danger bg-opacity-10 text-danger mb-4" role="alert">
                  ❌ Qualcosa è andato storto. Riprova o scrivimi direttamente su LinkedIn.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label contact-label small fw-bold text-uppercase">Nome</label>
                  <input
                    type="text"
                    className="form-control contact-input p-3"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Il tuo nome"
                    required
                    disabled={status.submitting}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label contact-label small fw-bold text-uppercase">Email</label>
                  <input
                    type="email"
                    className="form-control contact-input p-3"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nome@esempio.com"
                    required
                    disabled={status.submitting}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label contact-label small fw-bold text-uppercase">Oggetto</label>
                  <input
                    type="text"
                    className="form-control contact-input p-3"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Richiesta di informazioni"
                    required
                    disabled={status.submitting}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label contact-label small fw-bold text-uppercase">Messaggio</label>
                  <textarea
                    className="form-control contact-input p-3"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Scrivi qui il tuo messaggio..."
                    required
                    disabled={status.submitting}
                  ></textarea>
                </div>

                <div className="d-grid">
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg fw-bold py-3 shadow"
                    disabled={status.submitting}
                  >
                    {status.submitting ? 'Inviando... ⏳' : 'Invia Messaggio'}
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
