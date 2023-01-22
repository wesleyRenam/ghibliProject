import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import FilmsProvider from './context/FilmsProvider';
import LoginProvider from './context/LoginProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <LoginProvider>
      <FilmsProvider>
        <App />
      </FilmsProvider>
    </LoginProvider>
  </BrowserRouter>,
);
