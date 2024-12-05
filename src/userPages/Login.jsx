import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Link,
  Paper,
  InputAdornment,
  IconButton,
  CircularProgress,
  // IconButton,
  // InputAdornment,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
// import MyReCaptcha from "../components/ReCAPTCHA";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function Login() {
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  // State to track reCAPTCHA verification
  // const [verified, setVerified] = useState(false);
  const [formData, setFormData] = useState({});

  const [isLoading, setIsLoading] = useState(false);


  const handleClickShowPassword = () => setShowPassword((show) => !show);   
  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    // Check if reCAPTCHA is verified before submitting the form
    // if (verified) {
    //   // Submit the form data
    //   console.log("Form submitted:", formData);
    // } else {
    //   alert("Please verify the reCAPTCHA");
    // }

    setTimeout(() => {
      setIsLoading(false);
      // Handle successful login or display error messages
    }, 2000);
    // TODO: Implement login logic
    console.log("Login attempt with:", { email, password });
  };

  return (
    <Container component="main" maxWidth="xs">
      {/* Your main content goes here */}

      <Paper
        elevation={3}
        sx={{
          mt: 8,
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // boxShadow:
          //   "0px 4px 10px rgba(0, 0, 0, 0.1), 0px 0px 0px 2px rgba(0, 0, 0, 0.1)", // Add inner shadow
          boxShadow: `0 0 0 2px linear-gradient(to right, #182847, #009DDC), 0 4px 10px rgba(0, 0, 0, 0.1)`,
          // borderColor: `linear-gradient(to right, #182847, #009DDC)`,
          // borderRadius: "10px",
          // borderWidth: "6px", // Adjust border width as needed
          // borderStyle: "solid", // Use 'solid' for a solid border
        }}
      >
        <LoginIcon sx={{ fontSize: "48px" }} />

        <Typography component="h1" variant="h5" color="primary">
          تسجيل الدخول في منصة امل
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
            // label="كلمة المرور"
            // dir='rtl'
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment> 
      
              ),
            }}
            
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
            disabled={isLoading || !email || !password}
            sx={{ mt: 3, mb: 2 }}
          >
            {isLoading ? <CircularProgress size={24} />  : "تسجيل الدخول"}
            
          </Button>
          <Box sx={{ textAlign: "center" }}>
            <Link
              component={RouterLink}
              to="/forgotpassword"
              variant="body2"
              color="secondary"
            >
              {"هل نسيت كلمة المرور؟"}
            </Link>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Link
              component={RouterLink}
              to="/signup"
              variant="body2"
              color="secondary"
            >
              {/* {"Don't have an account? Sign Up"} */}
              {/* rewrite it in arabic */}
              {"لا يوجد حساب؟ سجل الآن"}
            </Link>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default Login;
