import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AdminsContextProvider } from './context/AdminContext';
import { AuthContextProvider } from './context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      
       <AdminsContextProvider>
       
         <App />
         
       </AdminsContextProvider>
     </AuthContextProvider>
  </React.StrictMode>
);




