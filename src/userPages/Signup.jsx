// import React, { useState } from "react";
// import {
//   Container,
//   Typography,
//   TextField,
//   Button,
//   Box,
//   Link,
//   Paper,
//   CircularProgress,
//   FormControl,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
// } from "@mui/material";
// import { Link as RouterLink, useNavigate } from "react-router-dom";
// import MyReCaptcha from "../components/ReCAPTCHA";
// import LoginIcon from "@mui/icons-material/Login";
// import axios from "axios";
// import API_ENDPOINTS from "../../apiConfig";

// function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState(""); // State for error message

//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   // reCAPTCHA
//   // const [verified, setVerified] = useState(false);

//   const [formData, setFormData] = useState({
//     // age: "",
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     password2: "",
//     age: "",
//     gender: "",
//     phoneNumber: "",
//     address: "",
//     socialStatus: "أعزب",
//     nationality: "KSA",
//   });

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//     setErrorMessage(""); // Clear error on password change
//   };

//   const handleConfirmPasswordChange = (event) => {
//     setConfirmPassword(event.target.value);
//     // Validate password match
//     if (event.target.value !== password) {
//       setErrorMessage("Passwords do not match.");
//     } else {
//       setErrorMessage(""); // Clear error on match
//     }
//   };

//   // Function to handle input changes for email
//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);

//     // Basic email validation using regular expression
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(event.target.value)) {
//       setErrorMessage("Please enter a valid email address.");
//     } else {
//       setErrorMessage(""); // Clear error on valid email
//     }
//   };

//   // Function to handle input changes for age

//   const handleInputChange = (event) => {
//     // Validate input to only allow numbers
//     const newAge = event.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters

//     setFormData({ ...formData, age: newAge });
//   };

//   // Function to handle input changes for gender
//   const handleInputChangeGender = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//     setErrorMessage("");
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // if (!validateForm()) {
//     //   return;
//     // }

//     setIsLoading(true);

//     // TODO: Implement signup logic

//     // Check if reCAPTCHA is verified before submitting the form
//     // if (verified) {
//     // Submit the form data
//     // console.log("Form submitted:", formData);
//     // } else {
//     // alert("Please verify the reCAPTCHA");
//     // }
//     setTimeout(() => {
//       setIsLoading(false);
//       // Handle successful login or display error messages
//     }, 2000);

//     console.log("Signup attempt with:", { name, email, password });
//     try {
//       // Example API call structure
//       const response = await axios.post(API_ENDPOINTS.register, formData);

//       if (response.data) {
//         // Handle successful registration
//         console.log("Registration successful:", response.data);
//         // Optionally store the token
//         // localStorage.setItem('token', response.data.token);
//         // Redirect to login page
//         navigate("/login");
//       }

//       // Handle successful signup
//     } catch (error) {
//       setErrorMessage("Failed to create account. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <Container component="main" maxWidth="xs">
//       <Paper
//         elevation={3}
//         sx={{
//           my: 8,
//           p: 4,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",

//           boxShadow: `0 0 0 2px linear-gradient(to right, #182847, #009DDC), 0 4px 10px rgba(0, 0, 0, 0.1)`,
//         }}
//       >
//         <LoginIcon sx={{ fontSize: "48px" }} />
//         <Typography component="h1" variant="h5" color="primary">
//           {/* Sign up for AMAL */}
//           {" انشاء حساب في منصة امل"}
//         </Typography>
//         <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
//           {/* <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="name"
//             label="Full Name"
//             name="name"
//             autoComplete="name"
//             autoFocus
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           /> */}
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="firstName"
//             label="First Name"
//             value={formData.firstName}
//             onChange={handleInputChangeGender}
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="lastName"
//             label="Last Name"
//             value={formData.lastName}
//             onChange={handleInputChangeGender}
//           />

//           {/* email */}
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             value={formData.email}
//             onChange={handleInputChangeGender}
//             error={!!errorMessage} // Set error if error message exists
//             helperText={errorMessage} // Display error message
//           />
//           {/* password */}
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="new-password"
//             value={formData.password}
//             onChange={handleInputChangeGender}
//             error={!!errorMessage} // Set error if error message exists
//             helperText={errorMessage} // Display error message
//           />
//           {/* confirm password */}
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="password2"
//             label="Confirm Password"
//             type="password"
//             value={formData.password2}
//             onChange={handleInputChangeGender}
//             error={!!errorMessage && errorMessage.includes("Password")}
//           />
//           {/* <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="confirmPassword"
//             label="Confirm Password"
//             type="password"
//             id="confirmPassword2"
//             autoComplete="new-password"
//             value={formData.password2}
//             onChange={handleInputChangeGender}
//             error={!!errorMessage} // Set error if error message exists
//             helperText={errorMessage} // Display error message
//           /> */}
//           {/* age */}
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="age"
//             label="Age"
//             type="number"
//             id="age"
//             autoComplete="age"
//             value={formData.age}
//             onChange={handleInputChangeGender} // Use the custom handler
//             error={formData.age.length > 0 && isNaN(formData.age)} // Set error if non-numeric
//             helperText={
//               formData.age.length > 0 && isNaN(formData.age)
//                 ? "Please enter a valid number for age"
//                 : ""
//             } // Display error message
//           />
//           {/* gender radio button */}
//           {/* <Box
//             sx={{
//               display: "flex",
//               flexDirection: "row",
//               alignItems: "center",
//               mt: 2,
//             }}
//           >
//             <Typography variant="body1" component="label" htmlFor="gender">
//               Gender:
//             </Typography>
//             <Box sx={{ ml: 1 }}>
//               <input type="radio" id="male" value="male" name="gender" />
//               <label htmlFor="male">Male</label>
//             </Box>
//             <Box sx={{ ml: 2 }}>
//               <input type="radio" id="female" value="female" name="gender" />
//               <label htmlFor="female">Female</label>
//             </Box>
//           </Box> */}
//           <FormControl component="fieldset" margin="normal" fullWidth>
//             <Typography variant="body1" component="label">
//               Gender:
//             </Typography>
//             <RadioGroup
//               row
//               name="gender"
//               value={formData.gender}
//               onChange={handleInputChangeGender}
//             >
//               <FormControlLabel value="M" control={<Radio />} label="Male" />
//               <FormControlLabel value="F" control={<Radio />} label="Female" />
//             </RadioGroup>
//           </FormControl>

//           {/* phone number */}
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="phoneNumber"
//             label="Phone Number"
//             type="text"
//             id="phoneNumber"
//             autoComplete="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleInputChangeGender}
//             error={!!errorMessage && errorMessage.includes("phone")}
//           />
//           {/* address */}
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="address"
//             label="Address"
//             type="text"
//             id="address"
//             autoComplete="address"
//             onChange={handleInputChangeGender}
//             value={formData.address}
//           />

//           {errorMessage && (
//             <Typography color="error" sx={{ mt: 2 }}>
//               {errorMessage}
//             </Typography>
//           )}

//           <MyReCaptcha />

//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2 }}
//             disabled={
//               isLoading ||
//               !password ||
//               !confirmPassword ||
//               !email ||
//               !name ||
//               !formData.age
//             }
//             onClick={handleSubmit}
//           >
//             {isLoading ? <CircularProgress size={24} /> : "انشاء حساب"}
//           </Button>
//           <Box sx={{ textAlign: "center" }}>
//             <Link
//               component={RouterLink}
//               to="/login"
//               variant="body2"
//               color="secondary"
//             >
//               {/* {"Already have an account? Log In"} */}
//               {"لديك حساب بالفعل؟ سجل الدخول"}
//             </Link>
//           </Box>
//         </Box>
//       </Paper>
//     </Container>
//   );
// }

// export default Signup;

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
import MyReCaptcha from "../components/ReCAPTCHA";
import LoginIcon from "@mui/icons-material/Login";
import axios from "axios";
import API_ENDPOINTS from "../../apiConfig";

function Signup() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
    age: "",
    gender: "M",
    phoneNumber: "",
    address: "",
    socialStatus: "أعزب",
    nationality: "الأردن"
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

    // Phone number validation
    const phoneRegex = /^\+?1?\d{9,15}$/;
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
      const response = await axios.post(API_ENDPOINTS.register, formData);
      
      if (response.data) {
        // Handle successful registration
        console.log("Registration successful:", response.data);
        // Optionally store the token
        // localStorage.setItem('token', response.data.token);
        // Redirect to login page
        navigate('/login');
      }
    } catch (error) {
      console.error("Registration error:", error);
      setErrorMessage(
        error.response?.data?.message || 
        "Failed to create account. Please try again."
      );
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
        <Typography component="h1" variant="h5" color="primary">
          انشاء حساب في منصة امل
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="firstName"
            label="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="lastName"
            label="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email Address"
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
            label="Password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            error={!!errorMessage && errorMessage.includes("Password")}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password2"
            label="Confirm Password"
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
            label="Age"
            type="number"
            value={formData.age}
            onChange={handleInputChange}
            error={!!errorMessage && errorMessage.includes("age")}
          />
          
          <FormControl component="fieldset" margin="normal" fullWidth>
            <Typography variant="body1" component="label">
              Gender:
            </Typography>
            <RadioGroup
              row
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <FormControlLabel value="M" control={<Radio />} label="Male" />
              <FormControlLabel value="F" control={<Radio />} label="Female" />
            </RadioGroup>
          </FormControl>

          <TextField
            margin="normal"
            required
            fullWidth
            name="phoneNumber"
            label="Phone Number"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            error={!!errorMessage && errorMessage.includes("phone")}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="address"
            label="Address"
            value={formData.address}
            onChange={handleInputChange}
          />

          {errorMessage && (
            <Typography color="error" sx={{ mt: 2 }}>
              {errorMessage}
            </Typography>
          )}

          <MyReCaptcha />
            
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
              لديك حساب بالفعل؟ سجل الدخول
            </Link>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default Signup;