import { createTheme } from '@mui/material/styles';

const redDh = "#EB174B";
const whiteDh = '#f3f2f5';
const blackDh ='#1A2E35';

export const theme = createTheme({

  palette: {
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
      main: redDh,
    },
    contrastThreshold: 4,
    tonalOffset: 0.5,
  },

  typography: {
    h3: {
      fontWeight: 500,
    },
  }
});

