import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App';
import Header from './components/Header/Header';

const root = createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div>
    <Header />
    <App />
  </div>
);
