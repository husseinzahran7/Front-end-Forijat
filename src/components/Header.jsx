import React from 'react'
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

function Header() {
  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img src="/path-to-your-logo.png" alt="AMAL Logo" style={{ height: '40px', marginRight: '10px' }} />
          <Typography variant="h6" component="div" sx={{ color: 'white' }}>
            AMAL
          </Typography>
        </Box>
        <Box>
          <Button color="inherit" component={RouterLink} to="/" sx={{ color: 'white' }}>
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/cases" sx={{ color: 'white' }}>
            Cases
          </Button>
          <Button color="inherit" component={RouterLink} to="/subscription" sx={{ color: 'white' }}>
            Donate
          </Button>
          <Button color="inherit" component={RouterLink} to="/dashboard" sx={{ color: 'white' }}>
            Dashboard
          </Button>
          <Button color="inherit" component={RouterLink} to="/login" sx={{ color: 'white' }}>
            Login
          </Button>
          <Button color="inherit" component={RouterLink} to="/signup" sx={{ color: 'white' }}>
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header

