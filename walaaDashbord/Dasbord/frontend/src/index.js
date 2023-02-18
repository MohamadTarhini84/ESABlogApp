import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AdminsContextProvider } from './context/AdminContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AdminsContextProvider>
      <App />
     </AdminsContextProvider>
  </React.StrictMode>
);




