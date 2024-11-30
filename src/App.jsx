// this part for the Set Up MUI Theme (Optional)
// Modify the App.jsx file to include a basic MUI setup:

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import User from "./userPages/User";

const theme = createTheme({
  // padding and margin 0
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  //root padding and margin 0



  palette: {
    primary: {
      //main: "#2196f3", // Blue
      main: "#182847", // Blue
    },
    secondary: {
      main: "#757575", // Gray
    },
    background: {
      default: "#ffffff", // White
      //paper: "#f5f5f5", // Light Gray
      paper: "#D9D9D9", // Light Gray
    },
    text: {
      primary: "#333333", // Dark Gray
      secondary: "#757575", // Gray
    },
  },
  components: {
    // Customize other components as needed
    MuiCssBaseline: {
      
      


    
      defaultProps: {
        sx: {
          fontFamily: 'Roboto',
        },
      },

      styleOverrides: {
        html: {
          margin: 0,
          padding: 0,
        },
       

        body: {
          margin: 0,
          padding: 0,
        },
      },
    },
  },
  
});

function App() {
  return (
    <>
     <CssBaseline />
      <ThemeProvider theme={theme}>
       

        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<User />} />
            {/* <Route path='/admin/*' element={<Admin/>}/> */}
          </Routes>
        </BrowserRouter>

      </ThemeProvider>
    </>
  );
}

export default App;
