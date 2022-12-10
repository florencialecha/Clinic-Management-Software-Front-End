import { createTheme } from "@mui/material";
import common from '@mui/material/colors/common';

const whiteDh = '#F9F1F3'
const redDh = "#EB174B";
const greyDh = '#4A4C4F';
const blackDh ='#1A2E35';

export const Theme = theme => createTheme({

    palette: {

        mode: theme,

        common: {
            white: whiteDh,
            black: blackDh,
        },
        primary: {
            main: greyDh,
            light: whiteDh,
            dark: blackDh,
        },
        secondary: {
            main: redDh,
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

    },

    
    components: {
    
    MuiButton: {
      variants: [
        {
          props: {variant: 'red-button'},
          style: {
            backgroundColor: redDh,
            color: whiteDh,
            fullWidth: true,
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

    },

})