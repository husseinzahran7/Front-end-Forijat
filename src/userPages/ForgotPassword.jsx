import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Alert,
  Paper,
} from '@mui/material';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace this with your actual password reset logic
    // You might send a reset link to the user's email
    // or trigger a backend API to initiate the process.
    const resetPassword = async () => {
      // Simulate a network request
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Check for errors
      if (email === 'invalid@email.com') {
        setError('Invalid email address');
      } else {
        setSuccess(true);
        setError(null);
      }
    };

    resetPassword();
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 12 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3, }}>
      <Typography variant="h4" component="h1" gutterBottom dir='rtl'>
        {/* {"Forgot Password"} */}
        {"هل نسيت كلمة المرور؟"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          // label="Email Address"
          label="البريد الإلكتروني"
          name="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {/* {"Reset Password"} */}
          {"إعادة تعيين كلمة المرور"}
        </Button>
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success" dir='rtl'>
          {/* {"Password reset link sent. Please check your email."} */}
          {"تم إرسال رابط إعادة تعيين كلمة المرور. يرجى التحقق من بريدك الإلكتروني."}
          </Alert>}
      </form>
      </Paper>
    </Container>
  );
}

export default ForgotPassword;