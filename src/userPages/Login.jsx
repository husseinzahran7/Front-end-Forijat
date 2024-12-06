// import React, { useState } from "react";
// import {
//   Container,
//   Typography,
//   TextField,
//   Button,
//   Box,
//   Link,
//   Paper,
//   InputAdornment,
//   IconButton,
//   CircularProgress,
//   // IconButton,
//   // InputAdornment,
// } from "@mui/material";
// import { Link as RouterLink } from "react-router-dom";
// import LoginIcon from '@mui/icons-material/Login';
// // import MyReCaptcha from "../components/ReCAPTCHA";
// import { Visibility, VisibilityOff } from "@mui/icons-material";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [password, setPassword] = useState("");

//   // State to track reCAPTCHA verification
//   // const [verified, setVerified] = useState(false);
//   const [formData, setFormData] = useState({});

//   const [isLoading, setIsLoading] = useState(false);

//   const handleClickShowPassword = () => setShowPassword((show) => !show);
//   // const handleMouseDownPassword = (event) => {
//   //   event.preventDefault();
//   // };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setIsLoading(true);

//     try {
//       localStorage.setItem('user', JSON.stringify(response.data));

//     setTimeout(() => {
//       setIsLoading(false);
//       // Handle successful login or display error messages
//     }, 2000);
//     // TODO: Implement login logic
//     console.log("Login attempt with:", { email, password });
//     } catch (error) {
//       console.error("Login failed:", error);
//       alert("Login failed. Please check your email and password.");

//     }

//   };

//   return (
//     <Container component="main" maxWidth="xs">
//       {/* Your main content goes here */}

//       <Paper
//         elevation={3}
//         sx={{
//           mt: 8,
//           p: 4,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           // boxShadow:
//           //   "0px 4px 10px rgba(0, 0, 0, 0.1), 0px 0px 0px 2px rgba(0, 0, 0, 0.1)", // Add inner shadow
//           boxShadow: `0 0 0 2px linear-gradient(to right, #182847, #009DDC), 0 4px 10px rgba(0, 0, 0, 0.1)`,
//           // borderColor: `linear-gradient(to right, #182847, #009DDC)`,
//           // borderRadius: "10px",
//           // borderWidth: "6px", // Adjust border width as needed
//           // borderStyle: "solid", // Use 'solid' for a solid border
//         }}
//       >
//         <LoginIcon sx={{ fontSize: "48px" }} />

//         <Typography component="h1" variant="h5" color="primary">
//           تسجيل الدخول في منصة امل
//         </Typography>

//         <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             // label="كلمة المرور"
//             // dir='rtl'
//             type={showPassword ? "text" : "password"}
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <IconButton
//                     aria-label="toggle password visibility"
//                     onClick={handleClickShowPassword}
//                     edge="end"
//                   >
//                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                   </IconButton>
//                 </InputAdornment>

//               ),
//             }}

//             id="password"
//             autoComplete="current-password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {/* add the reCAPTCHA */}
//           {/* <MyReCaptcha /> */}

//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             disabled={isLoading || !email || !password}
//             sx={{ mt: 3, mb: 2 }}
//           >
//             {isLoading ? <CircularProgress size={24} />  : "تسجيل الدخول"}

//           </Button>
//           <Box sx={{ textAlign: "center" }}>
//             <Link
//               component={RouterLink}
//               to="/forgotpassword"
//               variant="body2"
//               color="secondary"
//             >
//               {"هل نسيت كلمة المرور؟"}
//             </Link>
//           </Box>
//           <Box sx={{ textAlign: "center" }}>
//             <Link
//               component={RouterLink}
//               to="/signup"
//               variant="body2"
//               color="secondary"
//             >
//               {/* {"Don't have an account? Sign Up"} */}
//               {/* rewrite it in arabic */}
//               {"لا يوجد حساب؟ سجل الآن"}
//             </Link>
//           </Box>
//         </Box>
//       </Paper>
//     </Container>
//   );
// }

// export default Login;

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
      // Simulated authentication (replace with actual backend call)
      if (email === "admin@example.com" && password === "password123") {
        const userData = {
          email: email,
          token: generateToken(),
          timestamp: Date.now(),
        };

        // Store user data in local storage
        localStorage.setItem("user", JSON.stringify(userData));

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Navigate to home or dashboard and reload

        navigate("/");
        window.location.reload();
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (error) {
      setError(error.message);
      setOpenSnackbar(true);
      setIsLoading(false);
    }
  };

  // Simple token generation function
  const generateToken = () => {
    return (
      Math.random().toString(36).substr(2) +
      Math.random().toString(36).substr(2)
    );
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
