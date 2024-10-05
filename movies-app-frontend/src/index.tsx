import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MovieProvider } from './Context/MovieContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <MovieProvider>
    <App />
  </MovieProvider>
);


