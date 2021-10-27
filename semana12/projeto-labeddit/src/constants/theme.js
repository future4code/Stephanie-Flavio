import { createTheme } from '@mui/material/styles';
import { primaryColor, neutraColor } from './colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: 'white'
    },
    text: {
        primary: neutraColor
    }
  },
});
