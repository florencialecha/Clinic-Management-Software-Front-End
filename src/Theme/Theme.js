import { createTheme } from "@mui/material";
import common from '@mui/material/colors/common';

const whiteDh = '#F8F8F8'
const redDh = '#EB174B';
const blackDh ='#1D1E20';
const greyDh ='#3A3B41';

const lightPalette = {
    primary: {
        main: whiteDh,
    },
    secondary: {
        main: blackDh,
    },
    info: {
        main: redDh,
    }
}

const darkPalette = {
    primary: {
        main: blackDh,
    },
    secondary: {
        main: whiteDh,
    },
    info: {
        main: redDh,
    }
}

export const Theme = theme => createTheme({

    palette: {

        ...(theme === 'light'
            ? lightPalette
            : darkPalette
        ),

        background: {
            default: theme === 'light' ? whiteDh : greyDh
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
                        width: '100%',
                        backgroundColor: redDh,
                        color: whiteDh,
                        ":hover": {
                            backgroundColor: redDh
                        }
                    },
                },
                {
                    props: {variant: 'fullwidth-button'},
                    style: {
                        width: '100%',
                        backgroundColor: redDh,
                        color: whiteDh,
                        ":hover": {
                            backgroundColor: redDh
                        }
                    },
                },
            ]
        },
        
        MuiTable: {
            styleOverrides: {
                root: {
                    backgroundColor: theme === 'light' ? whiteDh : blackDh,
                }
            }
        }

    },

    

})