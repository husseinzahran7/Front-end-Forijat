import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Link,
  Paper,
  CircularProgress,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import MyReCaptcha from "../components/ReCAPTCHA";
import LoginIcon from "@mui/icons-material/Login";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const [isLoading, setIsLoading] = useState(false);


  // reCAPTCHA
  const [verified, setVerified] = useState(false);

  const [formData, setFormData] = useState({
    age: "",
  });

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setErrorMessage(""); // Clear error on password change
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    // Validate password match
    if (event.target.value !== password) {
      setErrorMessage("Passwords do not match.");
    } else {
      setErrorMessage(""); // Clear error on match
    }
  };

  // Function to handle input changes for email
  const handleEmailChange = (event) => {
    setEmail(event.target.value);

    // Basic email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(event.target.value)) {
      setErrorMessage("Please enter a valid email address.");
    } else {
      setErrorMessage(""); // Clear error on valid email
    }
  };

  // Function to handle input changes for age

  const handleInputChange = (event) => {
    // Validate input to only allow numbers
    const newAge = event.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters

    setFormData({ ...formData, age: newAge });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    // TODO: Implement signup logic

    // Check if reCAPTCHA is verified before submitting the form
    if (verified) {
      // Submit the form data
      console.log("Form submitted:", formData);
    } else {
      alert("Please verify the reCAPTCHA");
    }
    setTimeout(() => {
      setIsLoading(false);
      // Handle successful login or display error messages
    }, 2000);

    console.log("Signup attempt with:", { name, email, password });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        elevation={3}
        sx={{
          my: 8,
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          boxShadow: `0 0 0 2px linear-gradient(to right, #182847, #009DDC), 0 4px 10px rgba(0, 0, 0, 0.1)`,
        }}
      >
        <LoginIcon sx={{ fontSize: "48px" }} />
        <Typography component="h1" variant="h5" color="primary">
          {/* Sign up for AMAL */}
         {" انشاء حساب في منصة امل"}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Full Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* email */}
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={handleEmailChange}
            error={!!errorMessage} // Set error if error message exists
            helperText={errorMessage} // Display error message
          />
          {/* password */}
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={password}
            onChange={handlePasswordChange}
            error={!!errorMessage} // Set error if error message exists
            helperText={errorMessage} // Display error message
          />
          {/* confirm password */}
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            error={!!errorMessage} // Set error if error message exists
            helperText={errorMessage} // Display error message
          />
          {/* age */}
          <TextField
            margin="normal"
            required
            fullWidth
            name="age"
            label="Age"
            type="text"
            id="age"
            autoComplete="age"
            value={formData.age}
            onChange={handleInputChange} // Use the custom handler
            error={formData.age.length > 0 && isNaN(formData.age)} // Set error if non-numeric
            helperText={
              formData.age.length > 0 && isNaN(formData.age)
                ? "Please enter a valid number for age"
                : ""
            } // Display error message
          />
          {/* gender radio button */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              mt: 2,
            }}
          >
            <Typography variant="body1" component="label" htmlFor="gender">
              Gender:
            </Typography>
            <Box sx={{ ml: 1 }}>
              <input type="radio" id="male" value="male" name="gender" />
              <label htmlFor="male">Male</label>
            </Box>
            <Box sx={{ ml: 2 }}>
              <input type="radio" id="female" value="female" name="gender" />
              <label htmlFor="female">Female</label>
            </Box>
          </Box>

          {/* phone number */}
          <TextField
            margin="normal"
            required
            fullWidth
            name="phoneNumber"
            label="Phone Number"
            type="text"
            id="phoneNumber"
            autoComplete="phoneNumber"
          />
          {/* address */}
          <TextField
            margin="normal"
            required
            fullWidth
            name="address"
            label="Address"
            type="text"
            id="address"
            autoComplete="address"
          />
          <MyReCaptcha />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isLoading || !password || !confirmPassword || !email || !name || !formData.age}
            onClick={handleSubmit}
          >
            {isLoading ? <CircularProgress size={24} />  : "انشاء حساب"}
            

          </Button>
          <Box sx={{ textAlign: "center" }}>
            <Link
              component={RouterLink}
              to="/login"
              variant="body2"
              color="secondary"
            >
              {/* {"Already have an account? Log In"} */}
              {"لديك حساب بالفعل؟ سجل الدخول"}

            </Link>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default Signup;
