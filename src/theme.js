import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0d6759',
      light: '#479586',
      dark: '#003c30'
    },
    secondary: {
      main: '#102c5c',
      light: '#43548a',
      dark: '#000032',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#ffffff',
    },
  },
});

export default theme;