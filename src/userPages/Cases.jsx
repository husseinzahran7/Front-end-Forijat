import React, { useState } from 'react'
import {
  Container, Typography, Grid, Card, CardContent, CardActions, Button, LinearProgress, Box, Pagination,
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
import CardC from '../components/Card';

// This is a mock data array. In a real application, you would fetch this data from your API.
const mockCases = [
  { id: 1, name: 'John Doe', amount: 5000, raised: 2500, invoiceNumber: '10001', story: "John's inspiring journey to overcome challenges." },
  { id: 2, name: 'Jane Smith', amount: 7500, raised: 3000, invoiceNumber: '10002', story: "Jane is striving to build a better future for her family." },
  { id: 3, name: 'Bob Johnson', amount: 3000, raised: 1000, invoiceNumber: '10003', story: "Bob needs support for his small business dream." },
  { id: 4, name: 'Alice Walker', amount: 4000, raised: 1500, invoiceNumber: '10004', story: "Alice seeks assistance to cover unexpected medical expenses." },
  { id: 5, name: 'David Miller', amount: 6000, raised: 2000, invoiceNumber: '10005', story: "David is working to rebuild his life after a natural disaster." },
  { id: 6, name: 'Emily Jones', amount: 8000, raised: 3500, invoiceNumber: '10006', story: "Emily is pursuing higher education with limited resources." },
  { id: 7, name: 'Charles Brown', amount: 2000, raised: 800, invoiceNumber: '10007', story: "Charles needs funds to support his child's education." },
  { id: 8, name: 'Sarah Lee', amount: 9000, raised: 4000, invoiceNumber: '10008', story: "Sarah is on a mission to provide clean water to her community." },
  { id: 9, name: 'William Davis', amount: 10000, raised: 5000, invoiceNumber: '10009', story: "William is raising funds to open a community library." },
  { id: 10, name: 'Olivia Garcia', amount: 12000, raised: 6000, invoiceNumber: '10010', story: "Olivia needs help to expand her charity organization." },
  { id: 11, name: 'Noah Williams', amount: 15000, raised: 7500, invoiceNumber: '10011', story: "Noah is striving to create job opportunities in his town." },
  { id: 12, name: 'Sophia Hernandez', amount: 18000, raised: 9000, invoiceNumber: '10012', story: "Sophia is raising funds for a life-changing surgery." },
  { id: 13, name: 'James Moore', amount: 3000, raised: 1000, invoiceNumber: '10013', story: "James is an artist seeking support for his upcoming exhibition." },
  { id: 14, name: 'Isabella Wilson', amount: 4000, raised: 1500, invoiceNumber: '10014', story: "Isabella aims to provide free tutoring for underprivileged children." },
  { id: 15, name: 'Michael Taylor', amount: 6000, raised: 2000, invoiceNumber: '10015', story: "Michael is working towards developing eco-friendly housing." },
  { id: 16, name: 'Michael Taylor', amount: 6000, raised: 2000, invoiceNumber: '10016', story: "Michael is dedicated to bringing renewable energy solutions." },
  { id: 17, name: 'Michael Taylor', amount: 6000, raised: 2000, invoiceNumber: '10017', story: "Michael's project focuses on providing affordable healthcare." },
  { id: 18, name: 'Michael Taylor', amount: 6000, raised: 2000, invoiceNumber: '10018', story: "Michael is raising funds for his tech innovation startup." },
  { id: 19, name: 'Michael Taylor', amount: 6000, raised: 2000, invoiceNumber: '10019', story: "Michael is spearheading a local initiative for food security." }
];

const lang = {
  Name: "",
  Btn: "تبرع"
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
      const shareLink = `https://Amal.com/cases/${selectedCase.id}`;
      navigator.clipboard.writeText(shareLink);
      // Optionally, show a snackbar or toast to confirm copying
    }
  };

  const indexOfLastCase = currentPage * casesPerPage;
  const indexOfFirstCase = indexOfLastCase - casesPerPage;
  const currentCases = mockCases.slice(indexOfFirstCase, indexOfLastCase);


  return (
    <Container maxWidth="lg" sx={{ my: 6 }}>
      <Typography variant="h4" component="h1" gutterBottom color="primary">
        Current Cases
      </Typography>

      <Grid container spacing={4}>
        {/* <CardC/> */}
        {currentCases.map((case_) => (
          <Grid item key={case_.id} xs={12} sm={6} md={6} lg={4} container justifyContent="center" >
            <CardC id={case_.id} Story={ case_.story} totalAmount={case_.amount} raisedAmount={case_.raised} InvioceNumber={case_.invoiceNumber} handleShareClick={handleShareClick} case_={case_}/>
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
            value={selectedCase ? `https://Amal.com/cases/${selectedCase.id}` : ''}
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

