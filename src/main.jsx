import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/globals.css';
import App from './App';

const container = document.getElementById('app');

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>
);
