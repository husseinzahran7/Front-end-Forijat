import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Link, Paper } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import MyReCaptcha from '../components/ReCAPTCHA';



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State to track reCAPTCHA verification
  const [verified, setVerified] = useState(false);
  const [formData, setFormData] = useState({});


  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if reCAPTCHA is verified before submitting the form
    if (verified) {
      // Submit the form data
      console.log('Form submitted:', formData);
    } else {
      alert('Please verify the reCAPTCHA');
    }

    // TODO: Implement login logic
    console.log('Login attempt with:', { email, password });
  };

  return (
    
    <Container component="main" 
    maxWidth="xs" 
    sx={{
      // backgroundImage: `url(https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=600)`
    }}>

<Container>
      {/* <img src='https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=600'style={{width: '100%', height: 'auto'}} alt='background'/> */}
      {/* <img src='https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=600'style={{width: '100%', height: 'auto', objectFit: 'none',}} alt='background'/> */}

    </Container>
 

{/* <Container
  component="main"
  maxWidth="xs"
  sx={{
    backgroundImage: `url(https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=600)`,
    backgroundSize: 'cover', // Adjust background size as needed
  }} */}
   {/* alt="Background image of a beautiful landscape" // Replace with a descriptive alt text */}
{/* > */}
  {/* Your main content goes here */}


      <Paper elevation={3} sx={{ mt: 8, p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
        <LoginIcon  sx={{ fontSize: '48px' }}/>

        <Typography component="h1" variant="h4" color="primary">
          Log in to AMAL
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* add the reCAPTCHA */}
          {/* <MyReCaptcha /> */}


          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
          <Box sx={{ textAlign: 'center' }}>
            <Link component={RouterLink} to="/signup" variant="body2" color="secondary">
              {"Don't have an account? Sign Up"}
            </Link>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default Login;

