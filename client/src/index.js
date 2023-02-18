import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MsgContextProvider } from './context/messageBarContext';
import {AuthContextProvider } from './context/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <MsgContextProvider>
      <App />
    </MsgContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
