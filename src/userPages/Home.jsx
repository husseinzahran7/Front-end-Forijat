import React from 'react';
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  TextField,
  LinearProgress
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SlideShow from '../components/SlideShow';
import { Image } from '@mui/icons-material';

// Mock data for featured cases
const featuredCases = [
  { id: 1, name: 'Ahmed Ali', amount: 5000, raised: 2500, story: 'Ahmed needs help to pay off his medical debts.' },
  { id: 2, name: 'Fatima Hassan', amount: 7500, raised: 3000, story: 'Fatima is struggling with legal fees after a wrongful arrest.' },
  { id: 3, name: 'Omar Khalid', amount: 3000, raised: 1000, story: 'Omar needs assistance to clear his business debts and avoid imprisonment.' },
];

const slides = [
  "./src/images/charity-photo.jpeg",
  'https://images.unsplash.com/photo-1587691592099-24045742c181?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

function Home() {
  return (
    <Box>
      {/* Banner Section */}


      <Box
        sx={{
          // bgcolor: 'primary.main',
          color: 'white',
          pt: { xs: 3, md: 4 },
          // py: 3,
          textAlign: 'center'
        }}
      >

        <Box >
          <SlideShow slides={slides} />
        </Box>

      </Box>

      {/* Quote Section */}
      <Box sx={{
        bgcolor: 'primary.main',
        py: 12
      }}>
        <Container maxWidth="md">
          <img src="https://ehsan.sa/assets/images/homepage/lntnalo-ayah.svg" alt="Quote Image" style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }} />
        </Container>
      </Box>

      {/* Service Description */}
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h3" gutterBottom color="primary">
          About Our Service
        </Typography>
        <Typography variant="body1" paragraph>
          AMAL is a platform dedicated to helping individuals burdened by debt and facing imprisonment.
          Our key service, Forijat, aims to collect donations to pay off these debts and secure the release of those in need.
          We believe in second chances and the power of community support to transform lives.
        </Typography>
        <Typography variant="body1" paragraph>
          Through transparency, trust, and efficient management of donations, we create a bridge between those willing to give
          and those in desperate need. Join us in our mission to bring hope, dignity, and freedom to individuals and families
          across our community.
        </Typography>
      </Container>

      {/* Featured Cases Section */}
      <Box sx={{ bgcolor: 'background.paper', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" gutterBottom color="primary" align="center">
            Featured Cases
          </Typography>
          <Grid container spacing={4}>
            {featuredCases.map((case_) => {
              const progress = (case_.raised / case_.amount) * 100;
              return (
                <Grid item key={case_.id} xs={12} sm={6} md={4}>
                  <Card>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {case_.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {case_.story}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Amount Needed: ${case_.amount}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Amount Raised: ${case_.raised}
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        value={progress}
                        sx={{ mt: 2, mb: 1 }}
                      />
                      <Typography variant="body2" color="text.secondary" align="right">
                        {progress.toFixed(0)}%
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary" component={RouterLink} to={`/cases/${case_.id}`}>
                        Learn More
                      </Button>
                      <Button size="small" color="primary" component={RouterLink} to={`/donate/${case_.id}`}>
                        Donate
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button variant="contained" color="primary" component={RouterLink} to="/cases">
              View All Cases
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Contact Us Section */}
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h3" gutterBottom color="primary">
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          Have questions or need assistance? We're here to help. Reach out to us using the form below.
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="name"
                label="Your Name"
                name="name"
                autoComplete="name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="message"
                label="Your Message"
                name="message"
                multiline
                rows={4}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Send Message
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;

