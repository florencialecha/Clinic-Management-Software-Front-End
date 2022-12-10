import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './AppRouter';
import ContextProvider from './Components/utils/global.context'

import CssBaseline from '@mui/material/CssBaseline';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <CssBaseline>
        <ContextProvider>
          <AppRouter/>
        </ContextProvider>
      </CssBaseline>
  </React.StrictMode>
);


