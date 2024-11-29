import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, Container } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'

const navItems = [
  { title: 'Home', path: '/' },
  { title: 'Cases', path: '/cases' },
  { title: 'Donate', path: '/donate' },
  { title: 'Dashboard', path: '/dashboard' },
]

const names={
    ar:{
        logoName:'امل'
    },

    en:{
        logoName:'AMAL'
    }
}


function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 ,color: 'primary.main' }}>
        {names.en.logoName}
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} component={RouterLink} to={item.path}>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <>
      <AppBar position="fixed" color="primary" elevation={0}>
        <Toolbar
           sx={{
                justifyContent:'space-between'

           }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* <Container></Container> */}
          <Box>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{ flexGrow: 1, color: 'white', textDecoration: 'none',
             fontFamily: 'Roboto',
             fontSize: '2rem',
             
                 
             fontWeight: 'bold',
             ml:1,
             mr:1,
                display: { 
                    xs: 'none', 
                    sm: 'block',
                    // maxWidth:'auto',
                    textAlign:'left'
                     
                } }}
          >
            {names.en.logoName}
          </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, }}>
            {navItems.map((item) => (
              <Button key={item.title} component={RouterLink} to={item.path} sx={{ color: 'white' }}>
                {item.title}
              </Button>
            ))}
          </Box>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button color="inherit" component={RouterLink} to="/login" sx={{ color: 'white' }}>
              Login
            </Button>
            <Button color="inherit" component={RouterLink} to="/signup" sx={{ color: 'white', bgcolor: 'secondary.main' }}>
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  )
}

export default Navbar

