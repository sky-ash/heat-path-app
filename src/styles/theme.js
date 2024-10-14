// src/styles/theme.js
import { createTheme } from '@mui/material/styles';

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#ff4a4a', // matches your --primary-color
    },
    secondary: {
      main: '#e94141', // matches your --primary-hover
    },
    background: {
      default: '#1b1b1b', // matches your --background-color
    },
    text: {
      primary: '#ffffff', // matches your --text-color
    },
    success: {
      main: '#28a745', // for correct answers
    },
    error: {
      main: '#dc3545', // for incorrect answers
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

export default theme;
