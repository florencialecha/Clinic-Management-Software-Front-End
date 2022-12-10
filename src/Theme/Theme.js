import { createTheme } from "@mui/material";
import common from '@mui/material/colors/common';

const whiteDh = '#F8F8F8'
const redDh = '#EB174B';
const blackDh ='#23363C';

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
                },
            ]
        },

        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: 'secondary',
                }
            }
        },

        MuiIcon: {
            styleOverrides: {
                root: {
                    color: 'secondary',
                }
            }
        }

    },

})