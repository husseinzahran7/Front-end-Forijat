
import React from 'react'
import { Box, Container } from '@mui/material'
import Navbar from './Navbar'
import Footer from './Footer'

function Layout({ children }) {
  return (
    <>
    
    <Box

    sx={{mt:4,mb:0, display: 'flex', flexDirection: 'column', minHeight: '100vh',minWidth: '80vw', 
    // border: '1px solid red'
     }}>
    <Navbar />

      {/* <Container component="main" sx={{ mt: 0, mb: 0, p: 0,m:0, flex: 1}}maxWidth={false}> */}
        {children}
      {/* </Container> */}
      
      <Footer />
    </Box>
    </>
  )
}

export default Layout

