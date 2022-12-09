import { createTheme } from '@mui/material/styles';

export const dashboardTheme = createTheme({
    components: {
        MuiButton: {
          variants: 'contained',
      },
    },
    palette: {
        mode: 'light',
        primary: {
          main: '#f3f2f5',
        },
        secondary: {
          main: '#EB174B',
        },
        info: {
          main: '#1A2E35',
        },
        red: {
          main: '#EB174B',
        },
        white: {
          main: '#f3f2f5',
        },
        black: {
          main:  '#1A2E35',
        },
        contrastThreshold: 4,
        tonalOffset: 0.5,
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(',')
    },
});

