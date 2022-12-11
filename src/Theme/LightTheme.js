import { createTheme } from '@mui/material/styles';

const redDh = "#EB174B";
const whiteDh = '#f3f2f5';
const blackDh ='#1A2E35';

export const LightTheme = createTheme({

  palette: {
    mode: 'light',
    common: {
      red: redDh,
      white: whiteDh,
      black: blackDh,
    },
    primary: {
      main: whiteDh,
    },
    secondary: {
      main: redDh,
    },
    info: {
      main: blackDh,
    },
    contrastThreshold: 4,
    tonalOffset: 0.5,
  },

  typography: {
    logo: {
      fontSize: 18,
      fontWeight: 600,
      
    },
    navbarLink: {
      fontSize: 14,
      fontWeight: 600,
    },
    h3: {
      fontWeight: 500,
    },
    subtitle: {
      fontWeight: 600,
      fontSize: 20,
    },
  }

});

