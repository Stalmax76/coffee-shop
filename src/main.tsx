import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App.tsx';
import '@styles/_tokens.css';
import '@styles/index.scss';

const rootElement = document.getElementById('root') as HTMLElement;
createRoot(rootElement).render(
   <StrictMode>
      <App />
   </StrictMode>,
);
