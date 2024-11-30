import React, { useState } from 'react'
import { Container, Typography, Grid, Card, CardContent, CardActions, Button, LinearProgress, Box, Pagination,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
 } from '@mui/material'

 import ShareIcon from '@mui/icons-material/Share'
 import ContentCopyIcon from '@mui/icons-material/ContentCopy'
 

// This is a mock data array. In a real application, you would fetch this data from your API.
const mockCases = [
  { id: 1, name: 'John Doe', amount: 5000, raised: 2500 },
  { id: 2, name: 'Jane Smith', amount: 7500, raised: 3000 },
  { id: 3, name: 'Bob Johnson', amount: 3000, raised: 1000 },
  { id: 4, name: 'Alice Walker', amount: 4000, raised: 1500 },
  { id: 5, name: 'David Miller', amount: 6000, raised: 2000 },
  { id: 6, name: 'Emily Jones', amount: 8000, raised: 3500 },
  { id: 7, name: 'Charles Brown', amount: 2000, raised: 800 },
  { id: 8, name: 'Sarah Lee', amount: 9000, raised: 4000 },
  { id: 9, name: 'William Davis', amount: 10000, raised: 5000 },
  { id: 10, name: 'Olivia Garcia', amount: 12000, raised: 6000 },
  { id: 11, name: 'Noah Williams', amount: 15000, raised: 7500 },
  { id: 12, name: 'Sophia Hernandez', amount: 18000, raised: 9000 },
  { id: 13, name: 'James Moore', amount: 3000, raised: 1000 },
  { id: 14, name: 'Isabella Wilson', amount: 4000, raised: 1500 },
  { id: 15, name: 'Michael Taylor', amount: 6000, raised: 2000 },
  { id: 15, name: 'Michael Taylor', amount: 6000, raised: 2000 },
  { id: 15, name: 'Michael Taylor', amount: 6000, raised: 2000 },
  { id: 15, name: 'Michael Taylor', amount: 6000, raised: 2000 },
  { id: 15, name: 'Michael Taylor', amount: 6000, raised: 2000 },
 
];

const lang={
  Name:"",
  Btn:"تبرع"
}

// text size 
// const textSizes = {
//   h1: { fontSize: '3rem' },
//   h2: { fontSize: '2.5rem' },
//   h3: { fontSize: '2rem' },
//   h4: { fontSize: '1.5rem' },
//   h5: { fontSize: '1.2rem' },
//   h6: { fontSize: '1rem' },
//   body1: { fontSize: '1.1rem' },
//   body2: { fontSize: '1rem' },
//   subtitle1: { fontSize: '1.3rem' },
//   subtitle2: { fontSize: '1.1rem' },
// };


function Cases() {
  const [currentPage, setCurrentPage] = useState(1);
  const casesPerPage = 12; // Number of cases per page

  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  
  const handleShareClick = (case_) => {
    setSelectedCase(case_);
    setShareDialogOpen(true);
  };

  const handleShareClose = () => {
    setShareDialogOpen(false);
  };

  const copyShareLink = () => {
    if (selectedCase) {
      // In a real app, this would be your actual case detail URL
      const shareLink = `https://yourapp.com/cases/${selectedCase.id}`;
      navigator.clipboard.writeText(shareLink);
      // Optionally, show a snackbar or toast to confirm copying
    }
  };

  const indexOfLastCase = currentPage * casesPerPage;
  const indexOfFirstCase = indexOfLastCase - casesPerPage;
  const currentCases = mockCases.slice(indexOfFirstCase, indexOfLastCase);

// return (
//   <Container maxWidth="lg" sx={{ my: 6 }}>
//     <Typography variant="h4" component="h1" gutterBottom color="primary">
//       Current Cases
//     </Typography>

//     <Grid container spacing={4}>
//       {currentCases.map((case_) => (
//         <Grid item key={case_.id} xs={12} sm={6} md={4}>
//           <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
//             <CardContent sx={{ flexGrow: 1 }}>
//               <Typography gutterBottom variant="h5" component="div" color="primary">
//                 {case_.name}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Amount Needed: ${case_.amount}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 Amount Raised: ${case_.raised}
//               </Typography>
//               <Box sx={{ mt: 2 }}>
//                 <LinearProgress variant="determinate" value={(case_.raised / case_.amount) * 100} color="primary" />
//                 <Typography variant="body2" color="text.secondary" align="right">
//                   {((case_.raised / case_.amount) * 100).toFixed(0)}%
//                 </Typography>
//               </Box>
//             </CardContent>
//             <CardActions>
//   <Button size="small" variant="contained" color="primary">
//     Donate
//   </Button>
//   <Button size="small" variant="outlined" color="secondary">
//     Learn More
//   </Button>
// </CardActions>
// </Card>
//       </Grid>
//     ))}
//   </Grid>

//   <Pagination
//     color="primary"
//     count={Math.ceil(mockCases.length / casesPerPage)}
//     page={currentPage}
//     onChange={handlePageChange}
//     showFirstButton
//     showLastButton
//     sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}

//   />
// </Container>
// );

return (
<Container maxWidth="lg" sx={{ my: 6 }}>
<Typography variant="h4" component="h1" gutterBottom color="primary">
  Current Cases
</Typography>

<Grid container spacing={4}>
  {currentCases.map((case_) => (
    <Grid item key={case_.id} xs={12} sm={6} md={4}>
      <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div" color="primary">
            {case_.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Amount Needed: JD {case_.amount}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Amount Raised: JD {case_.raised}
          </Typography>
          <Box sx={{ mt: 2 }}>
            <LinearProgress 
              variant="determinate" 
              value={(case_.raised / case_.amount) * 100} 
              color="primary" 
            />
            <Typography variant="body2" color="text.secondary" align="right">
              {((case_.raised / case_.amount) * 100).toFixed(0)}%
            </Typography>
          </Box>
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-between' }}>
          <Box>
            <Button size="small" variant="contained" color="primary" href={`/donate/${case_.id}`}
>
              {lang.Btn}
            </Button>
            {/* <Button size="small" variant="outlined" color="secondary">
              Learn More
            </Button> */}
          </Box>
          <IconButton 
            color="primary" 
            onClick={() => handleShareClick(case_)}
            aria-label="share"
          >
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  ))}
</Grid>

{/* Share Dialog */}
<Dialog
  open={shareDialogOpen}
  onClose={handleShareClose}
  aria-labelledby="share-dialog-title"
>
  <DialogTitle id="share-dialog-title">Share Case</DialogTitle>
  <DialogContent>
    <DialogContentText>
      Share this case with others
    </DialogContentText>
    <TextField
      autoFocus
      margin="dense"
      id="share-link"
      label="Share Link"
      type="text"
      fullWidth
      variant="outlined"
      value={selectedCase ? `https://yourapp.com/cases/${selectedCase.id}` : ''}
      InputProps={{
        endAdornment: (
          <IconButton onClick={copyShareLink}>
            <ContentCopyIcon />
          </IconButton>
        ),
      }}
    />
  </DialogContent>
  <DialogActions>
    <Button onClick={handleShareClose} color="primary">
      Close
    </Button>
  </DialogActions>
</Dialog>

<Pagination
  color="primary"
  count={Math.ceil(mockCases.length / casesPerPage)}
  page={currentPage}
  onChange={handlePageChange}
  showFirstButton
  showLastButton
  sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}
/>
</Container>
);
}


export default Cases

