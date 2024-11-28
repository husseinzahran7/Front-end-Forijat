// this part for the Set Up MUI Theme (Optional)
// Modify the App.jsx file to include a basic MUI setup:

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import User from "./userPages/User";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3", // Blue
    },
    secondary: {
      main: "#757575", // Gray
    },
    background: {
      default: "#ffffff", // White
      paper: "#f5f5f5", // Light Gray
    },
    text: {
      primary: "#333333", // Dark Gray
      secondary: "#757575", // Gray
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <CssBaseline /> */}

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
