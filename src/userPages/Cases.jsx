import React from 'react'
import { Container, Typography, Grid, Card, CardContent, CardActions, Button, LinearProgress, Box } from '@mui/material'

// This is a mock data array. In a real application, you would fetch this data from your API.
const mockCases = [
  { id: 1, name: 'John Doe', amount: 5000, raised: 2500 },
  { id: 2, name: 'Jane Smith', amount: 7500, raised: 3000 },
  { id: 3, name: 'Bob Johnson', amount: 3000, raised: 1000 },
  { id: 3, name: 'Bob Johnson', amount: 3000, raised: 1000 },
  { id: 3, name: 'Bob Johnson', amount: 3000, raised: 1000 },
  { id: 3, name: 'Bob Johnson', amount: 3000, raised: 1000 },
  { id: 3, name: 'Bob Johnson', amount: 3000, raised: 1000 },
  { id: 3, name: 'Bob Johnson', amount: 3000, raised: 1000 },
  { id: 3, name: 'Bob Johnson', amount: 3000, raised: 1000 },
]

function Cases() {
  return (
    <Container maxWidth="md" sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom color="primary">
        Current Cases
      </Typography>
      
      <Grid container spacing={4}>
        {mockCases.map((case_) => {
          const progress = (case_.raised / case_.amount) * 100
          return (
            <Grid item key={case_.id} xs={12} sm={6} md={4}>
              <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div" color="primary">
                    {case_.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Amount Needed: ${case_.amount}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Amount Raised: ${case_.raised}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <LinearProgress variant="determinate" value={progress} color="primary" />
                    <Typography variant="body2" color="text.secondary" align="right">
                      {progress.toFixed(0)}%
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="contained" color="primary">
                    Donate
                  </Button>
                  <Button size="small" variant="outlined" color="secondary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}

export default Cases

