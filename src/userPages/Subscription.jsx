// create a page that will have subscription  for the app but still under developingimport React, { useState } from 'react';
import {
    Container,
    Typography,
    Box,
    TextField,
    Button,
    Paper,
  } from '@mui/material';
import { useState } from 'react';
  
  function ComingSoonPage() {
    const [email, setEmail] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle email submission, e.g., send to a backend or analytics tool
      
      console.log('Email submitted:', email);
    };
  
    return (
      <Container maxWidth="sm" sx={{ my: 10,
       direction: 'rtl',
       textAlign: 'center',
       justifyContent: 'center',
       alignItems: 'center',
       display: 'flex',
       flexDirection: 'column',
    
        }}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {/* {"Coming Soon: Premium Subscription"} */}
          {"قريبًا: اشتراك شهري"}
        </Typography>
        <Typography variant="body1" gutterBottom>
         {/* {" We're excited to announce that we're working on a premium subscription plan to enhance your app experience."} */}
         {"يسعدنا أن نعلن أننا نعمل على خطة اشتراك مميزة لتعزيز صدقتك و التزامك في موعد محدد."}
        </Typography>
        <Typography variant="body1" gutterBottom>
         {/* {" Stay tuned for exclusive features, priority support, and more!"} */}
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            // label="Your Email"
            label="البريد الإلكتروني"
            type="email"
            margin="normal"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{bgcolor:'white' }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 ,fontWeight: 'bold',fontSize: '16px', }}>
            {/* {"Sign Up for Updates"} */}
            {"اشترك لتحديثات"}
          </Button>
        </Box>
        </Paper>
      </Container>
    );
  }
  
  export default ComingSoonPage;