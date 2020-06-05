import React from 'react';
import { ToastProvider } from 'react-toast-notifications';

import './App.css';
import Routes from './routes';

function App() {
  return (
    <ToastProvider>
      <Routes />
    </ToastProvider>
  );
}

export default App;
