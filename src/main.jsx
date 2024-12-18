import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // If applicable

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Ensure 'root' matches your HTML file
);
