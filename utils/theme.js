// color design tokens export
import { createTheme } from "@mui/material/styles";

export const colorTokens = {
  grey: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#0A0A0A",
    1000: "#000000",
  },
  primary: {
    500:"#d3401f"
  },
  secondary:{
    500:"#1DEFFF"
  }
};

export const theme = createTheme({
  palette: {
    // palette values for light mode
    primary: {
      main: colorTokens.primary[500],
      light:colorTokens.secondary[500]
    },
    secondary:{
      main: colorTokens.secondary[500],
    },
    neutral: {
      dark: colorTokens.grey[700],
      main: colorTokens.grey[0],
      mediumMain: colorTokens.grey[400],
      medium: colorTokens.grey[300],
      light: colorTokens.grey[50],
    },
    info:{
      main:colorTokens.grey[800]
    },
    background: {
      default: colorTokens.grey[10],
      alt: colorTokens.grey[0],
    },
},
typography: {
fontFamily: ["Poppins", "sans-serif"].join(","),
fontSize: "1rem",
h1: {
fontFamily: ["Poppins", "sans-serif"].join(","),
fontSize: "2.5rem",
},
h2: {
fontFamily: ["Poppins", "sans-serif"].join(","),
fontSize: "2rem",
},
h3: {
fontFamily: ["Poppins", "sans-serif"].join(","),
fontSize: "1.5rem",
},
h4: {
fontFamily: ["Poppins", "sans-serif"].join(","),
fontSize: "1rem",
},
p:{
fontFamily: ["Poppins", "sans-serif"].join(","),
fontSize: "1.125rem",
}
},
});



