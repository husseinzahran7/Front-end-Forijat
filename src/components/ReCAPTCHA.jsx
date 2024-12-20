import { Container } from '@mui/material';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

function MyReCaptcha() {
    const [verified, setVerified] = useState(false);
  
    const handleCaptchaChange = (value) => {
      // Handle the verified state
      setVerified(true);
      // You can also send the value to your server for verification
      console.log('Verified:', value);
    };
  
    return (
      <Container>
      <ReCAPTCHA
        sitekey="6LeW-Y8qAAAAAKxIgGGGOM1YD0ja6pTh0myHWNVn"
        onChange={handleCaptchaChange}
      />
      </Container>
    );
  }
  
  export default MyReCaptcha;