import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOMClient from 'react-dom/client';
import App from './App';

ReactDOMClient.hydrateRoot(
  document.getElementById('root'),
  <BrowserRouter>
    <App {...window.initState} />
  </BrowserRouter>,
);
