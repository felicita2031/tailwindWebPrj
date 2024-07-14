import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS dosyasını ekleyin

import './index.css'; // Tailwind CSS dosyasını ekliyoruz

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);