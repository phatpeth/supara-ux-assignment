import { deepOrange, red, teal } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: teal[500],
    },
    error: {
      main: red[400],
    },
    warning: {
      main: deepOrange[500],
    },
  },
  typography: {
    h1: {
      fontSize: "48px",
    },
    h2: {
      fontSize: "36px",
    },
    h3: {
      fontSize: "24px",
    },
  },
});

export default theme;
