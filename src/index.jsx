import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './AppRouter';
import ContextProvider from './Components/utils/global.context'

import { ThemeProvider } from '@mui/material/styles';
import { theme } from './Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <AppRouter/>
      </ContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);


