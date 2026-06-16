import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Importa il CSS di Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Importa il JS di Bootstrap (serve per far funzionare il menu a hamburger su mobile)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './index.css'
import App from './App.jsx'
import './App.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
