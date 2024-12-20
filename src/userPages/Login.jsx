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
  Alert,
  Snackbar,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";
import API_ENDPOINTS from "../../apiConfig";

function Login() {
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await axios.post(
        API_ENDPOINTS.login,
        {
          email: email,
          password: password,
        },
        // {
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // }
      );

      // Handle successful login
    const userData = {
      email: email,
      token: response.data.token, // Assuming the backend returns a token
      timestamp: Date.now(),
    };

    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/");
    window.location.reload();


    }catch (error) {
      // Handle login errors
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(error.response.data.detail || "Login failed");
      } else if (error.request) {
        // The request was made but no response was received
        setError("No response from server");
      } else {
        // Something happened in setting up the request that triggered an Error
        setError("Error processing login");
      }
      setOpenSnackbar(true);
      setIsLoading(false);
    }
  }; 
 

  // Handle Snackbar close
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        elevation={3}
        sx={{
          mt: 8,
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: `0 0 0 2px linear-gradient(to right, #182847, #009DDC), 0 4px 10px rgba(0, 0, 0, 0.1)`,
        }}
      >
        <LoginIcon sx={{ fontSize: "48px", color: "primary.main" }} />

        <Typography
          component="h1"
          variant="h5"
          color="primary"
          sx={{ mt: 2, mb: 2 }}
        >
          {"تسجيل الدخول في منصة امل"}
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 1, width: "100%" }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="البريد الإلكتروني"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // dir="rtl"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="كلمة المرور"
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
            // dir="rtl"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={isLoading || !email || !password}
            sx={{ mt: 3, mb: 2 }}
          >
            {isLoading ? <CircularProgress size={24} /> : "تسجيل الدخول"}
          </Button>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link
              component={RouterLink}
              to="/forgotpassword"
              variant="body2"
              color="secondary"
            >
              {"هل نسيت كلمة المرور؟"}
            </Link>
          </Box>
          <Box sx={{ textAlign: "center", mt: 1 }}>
            <Link
              component={RouterLink}
              to="/signup"
              variant="body2"
              color="secondary"
            >
              {"لا يوجد حساب؟ سجل الآن"}
            </Link>
          </Box>
        </Box>
      </Paper>

      {/* Snackbar for Error Messages */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="error"
          sx={{ width: "100%" }}
        >
          {error}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Login;
