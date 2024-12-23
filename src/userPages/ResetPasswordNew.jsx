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

export function ResetPasswordNew() {
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { email, code } = location.state || {};

  useEffect(() => {
    if (!email || !code) {
      navigate('/forgot-password');
    }
  }, [email, code, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(null);
  };

  const validateForm = () => {
    if (formData.password.length < 8) {
      setError('يجب أن تتكون كلمة المرور من 8 أحرف على الأقل');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('كلمات المرور غير متطابقة');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsLoading(true);

    try {
      const response = await axios.post(API_ENDPOINTS.resetPassword, {
        email,
        code,
        newPassword: formData.password
      });

      console.log('Password reset response:', response.data);
      navigate('/login', { 
        state: { message: 'تم تغيير كلمة المرور بنجاح. يمكنك الآن تسجيل الدخول.' }
      });

    } catch (error) {
      console.error('Password reset error:', error);
      setError(
        error.response?.data?.message ||
        'حدث خطأ أثناء تغيير كلمة المرور. يرجى المحاولة مرة أخرى.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 12 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom dir="rtl">
          تعيين كلمة مرور جديدة
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="كلمة المرور الجديدة"
            type="password"
            value={formData.password}
            onChange={handleChange}
            disabled={isLoading}
            error={!!error}
            helperText="يجب أن تتكون كلمة المرور من 8 أحرف على الأقل"
            dir="rtl"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="تأكيد كلمة المرور"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            disabled={isLoading}
            error={!!error}
            dir="rtl"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isLoading || !formData.password || !formData.confirmPassword}
          >
            {isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "تغيير كلمة المرور"
            )}
          </Button>
          {error && <Alert severity="error" dir="rtl">{error}</Alert>}
        </form>
      </Paper>
    </Container>
  );
}