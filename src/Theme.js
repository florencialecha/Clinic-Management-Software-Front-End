import common from '@mui/material/colors/common';
import { createTheme } from '@mui/material/styles';

const whiteDh = '#F9F1F3'
const redDh = "#EB174B";
const greyDh = '#4A4C4F';
const blackDh ='#1A2E35';

export const theme = createTheme({

  palette: {

    mode: 'dark',
    common: {
      white: whiteDh,
      black: blackDh,
    },
    primary: {
      main: greyDh,
    },
    secondary: {
      main: redDh,
    },
    contrastThreshold: 4,
    tonalOffset: 0.5,
  },

  typography: {
    styleOverrides: {
      root: {
        fontWeight: 200,
        color: common.black,
      },
    },
    h3: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 600,
    },
    subtitle1: {
      fontWeight: 400,
    }
  },

  components: {
    
    MuiButton: {
      variants: [
        {
          props: {variant: 'red-btn'},
          style: {
            backgroundColor: redDh,
            color: whiteDh,
            fullWidth: true,
            ':hover': {
              bgcolor: greyDh,
            }
          },
        }
      ]
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: common.white,
        }
      }
    },

}});

