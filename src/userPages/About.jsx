// create about page
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function About() {
  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom color="primary">
        About Us
      </Typography>
      <Box>
        <Typography variant="body1" paragraph>
          This is the about page.  You can add your company's mission, vision, and values here.  Include information about your team and what makes your organization unique.  Consider adding high-quality images or videos to enhance the visual appeal.
        </Typography>
        <Typography variant="body1" paragraph>
          Remember to keep the content concise and engaging. Use strong calls to action to encourage visitors to learn more or contact you.
        </Typography>
      </Box>
    </Container>
  );
}

export default About;
