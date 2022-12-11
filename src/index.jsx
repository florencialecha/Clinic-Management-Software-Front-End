import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './AppRouter';
import ContextProvider from './Components/utils/global.context'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ContextProvider>
      <AppRouter/>
    </ContextProvider>
  </React.StrictMode>
);


