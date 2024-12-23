import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Alert,
  Paper,
  CircularProgress,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import API_ENDPOINTS from '../../apiConfig';

export function ResetPasswordVerification() {
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  useEffect(() => {
    if (!email) {
      navigate('/forgot-password');
    }
  }, [email, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await axios.post(API_ENDPOINTS.verifyResetCode, {
        email,
        code: verificationCode
      });

      console.log('Verification response:', response.data);
      navigate('/reset-password', { 
        state: { 
          email,
          code: verificationCode
        }
      });

    } catch (error) {
      console.error('Verification error:', error);
      setError(
        error.response?.data?.message ||
        'رمز التحقق غير صالح. يرجى المحاولة مرة أخرى.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 12 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom dir="rtl">
          التحقق من الرمز
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }} dir="rtl">
          الرجاء إدخال رمز التحقق الذي تم إرساله إلى بريدك الإلكتروني
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="verificationCode"
            label="رمز التحقق"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            disabled={isLoading}
            error={!!error}
            helperText={error ? error : ''}
            dir="rtl"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isLoading || !verificationCode}
          >
            {isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "تحقق من الرمز"
            )}
          </Button>
          {error && <Alert severity="error" dir="rtl">{error}</Alert>}
        </form>
      </Paper>
    </Container>
  );
}