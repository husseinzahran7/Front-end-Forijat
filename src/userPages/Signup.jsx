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
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import axios from "axios";
import API_ENDPOINTS from "../../apiConfig";

function Signup() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    age: "",
    gender: "M",
    address: "",
    socialStatus: "أعزب",
    nationality: "JOR"
  });


  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = () => {
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid email address");
      return false;
    }

    // Password validation
    if (formData.password !== formData.password2) {
      setErrorMessage("Passwords do not match");
      return false;
    }

    if (formData.password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long");
      return false;
    }

    // Age validation
    const age = parseInt(formData.age);
    if (isNaN(age) || age < 18 || age > 120) {
      setErrorMessage("Please enter a valid age (18-120)");
      return false;
    }

    // Phone number validation - Allowing international format
    const phoneRegex = /^\+?[1-9]\d{7,14}$/;
    if (!phoneRegex.test(formData.phoneNumber)) {
      setErrorMessage("Please enter a valid phone number");
      return false;
    }

    return true;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setErrorMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      // Prepare API data - removing password2 and ensuring correct types
      const apiData = {
        email: formData.email,
        password: formData.password,
        password2: formData.password2,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formData.phoneNumber,
        // age: parseInt(formData.age),
        age: formData.age,
        gender: formData.gender,
        address: formData.address,
        socialStatus: "أعزب",
        nationality: "JOR"
      };

      // Log the exact data being sent
      console.log('Sending data to API:', apiData);
      
      const response = await axios.post(API_ENDPOINTS.register,
        {
          
            "email": formData.email,
            "password": formData.password,
            "password2": formData.password2,
            "firstName": formData.firstName,
            "lastName": formData.lastName,
            "phoneNumber": formData.phoneNumber,
            "age":formData.age,
            "gender": formData.gender,
            "address": formData.address,
            "socialStatus": "أعزب",
            "nationality": formData.nationality
        
          
        }
        );
      
      if (response.data) {
        console.log('Registration successful:', response.data);
        navigate('/login');
      }
    } catch (error) {
      console.error("Registration error:", error);
      // console.error("Error response:", error.response?.data);
      
      // More detailed error message
      // setErrorMessage(
      //   error.response?.data?.message || 
      //   error.response?.data?.error || 
      //   error.response?.data ||
      //   "Failed to create account. Please try again."
      // );
    } finally {
      setIsLoading(false);
    }
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
        }}
      >
        <LoginIcon sx={{ fontSize: "48px" }} />
        <Typography component="h1" variant="h5" sx={{ mb: 3 }} color="primary">
          {"انشاء حساب في منصة امل"}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="firstName"
            // label="First Name"
            label="اسم الأول"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="lastName"
            // label="Last Name"
            label="اسم العائلة"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="email"
            // label="Email Address"
            label="البريد الإلكتروني"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            error={!!errorMessage && errorMessage.includes("email")}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            // label="Password"
            label="كلمة المرور"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            error={!!errorMessage && errorMessage.includes("Password")}
            // helperText="Password must be at least 8 characters long"
            helperText="يجب أن تكون كلمة المرور 8 أحرف أو أكثر"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password2"
            // label="Confirm Password"
            label="تأكيد كلمة المرور"
            type="password"
            value={formData.password2}
            onChange={handleInputChange}
            error={!!errorMessage && errorMessage.includes("Password")}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="age"
            // label="Age"
            label="العمر"
            type="number"
            inputProps={{ min: 18, max: 120 }}
            value={formData.age}
            onChange={handleInputChange}
            error={!!errorMessage && errorMessage.includes("age")}
          />
          
          <FormControl component="fieldset" margin="normal" fullWidth dir="rtl">
            <Typography variant="body1" component="label" sx={{ mb: 1 }}>
              {/* Gender: */}
              {"جنسك:"}
            </Typography>
            <RadioGroup
              row
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <FormControlLabel value="M" control={<Radio />} 
              // label="Male"
              label="ذكر"
               />
              <FormControlLabel value="F" control={<Radio />} 
              // label="Female"
              label="أنثى"
               />
            </RadioGroup>
          </FormControl>

          <TextField
            margin="normal"
            required
            fullWidth
            name="phoneNumber"
            // label="Phone Number"
            label="رقم الهاتف"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            error={!!errorMessage && errorMessage.includes("phone")}
            // helperText="Enter a valid phone number (e.g., +962XXXXXXXXX)"
            helperText="أدخل رقم الهاتف صالح (مثال: +962XXXXXXXXX)"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="address"
            // label="Address"
            label="العنوان"
            value={formData.address}
            onChange={handleInputChange}
          />

          {errorMessage && (
            <Typography color="error" sx={{ mt: 2 }}>
              {errorMessage}
            </Typography>
          )}
            
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isLoading || !Object.values(formData).every(Boolean)}
          >
            {isLoading ? <CircularProgress size={24} /> : "انشاء حساب"}
          </Button>

          <Box sx={{ textAlign: "center" }}>
            <Link
              component={RouterLink}
              to="/login"
              variant="body2"
              color="secondary"
            >
              {"لديك حساب بالفعل؟ سجل الدخول"}
            </Link>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default Signup;