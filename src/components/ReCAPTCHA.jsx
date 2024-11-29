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
      <ReCAPTCHA
        sitekey="YOUR_SITE_KEY"
        onChange={handleCaptchaChange}
      />
    );
  }
  
  export default MyReCaptcha;