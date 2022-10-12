import React from 'react';
import ReactDOM from 'react-dom/client';
import AppFunction from './AppFunction';
import AppClass from './AppClass';
import App from './components/App';

import 'bootstrap/dist/css/bootstrap.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
