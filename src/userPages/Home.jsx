import React, { useEffect, useState } from "react";
import axios from "axios";
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
  LinearProgress,
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogContent,
  IconButton,
  DialogActions,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import SlideShow from "../components/SlideShow";
import CardC from "../components/Card";
import { X } from "@mui/icons-material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import API_ENDPOINTS from "../../apiConfig";

const slides = [
  // "./src/images/charity-photo.jpeg",
  "https://images.unsplash.com/photo-1618620864043-896c2d11c7fc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  "https://img.freepik.com/free-photo/faith-christian-concept-spiritual-prayer-hands-sun-shine_1150-9112.jpg?t=st=1733002045~exp=1733005645~hmac=1b8a29204afc2beb8dd2f837aa9c1ccab06c877a68225dd8ab078e62c7d9b501&w=996",
  "https://images.unsplash.com/photo-1500206329404-5057e0aefa48?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // "https://images.unsplash.com/photo-1546450334-5a84ac3a1f0e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  // "https://images.unsplash.com/photo-1554702781-ce40d39ae66a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://img.freepik.com/free-photo/teenage-girl-with-praying-sunny-nature_1150-7219.jpg?t=st=1733002105~exp=1733005705~hmac=0935642d7530423949a41caeac137d455c9fc1ca93c4b4302c142bf7ad68537f&w=996",
];

const lang = {
  AboutUs: "حولنا",
  AboutUsDesc1:
    "امل هي منصة مخصصة لمساعدة الأفراد المثقلين بالديون والذين يواجهون خطر السجن. تهدف خدمتنا الرئيسية إلى جمع التبرعات لسداد هذه الديون وضمان إطلاق سراح المحتاجين. نحن نؤمن بفرص الحياة الثانية وبقوة الدعم المجتمعي في تغيير الأرواح. من خلال الشفافية والثقة والإدارة الفعالة للتبرعات، نبني جسراً بين من يرغبون في العطاء ومن هم في أمس الحاجة إليه. انضموا إلينا في مهمتنا لنشر الأمل والكرامة والحرية للأفراد والعائلات في مجتمعنا.",
  AboutUsDesc2:
    "من خلال الشفافية والثقة والإدارة الفعالة للتبرعات، نبني جسراً بين من يرغبون في العطاء ومن هم في أمس الحاجة إليه. انضموا إلينا في مهمتنا لنشر الأمل والكرامة والحرية للأفراد والعائلات في مجتمعنا.",
  FeaturedCases: "من فرص التبرع",
  ViewAllCases: "عرض جميع التبرعات",
};

function Home() {
  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);
  const [caseDate, setCaseDate] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [invoiceNumber, setInvoiceNumber] = useState("");

  useEffect(() => {
    // Define an async function for the API request
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(API_ENDPOINTS.getAllCases);
        setCaseDate(response.data.results); // Update state with response data
        console.log(caseDate);
      } catch (err) {
        setError(err.message); // Handle error
        console.log(err.message);
        console.log("err.message");
      } finally {
        setLoading(false);
      }
    };

    fetchData(); // Call the fetch function
  }, []);

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

  // for the pop up

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // for filter

  // used for ShareLink
  const pathLink = window.location.href;

  const copyShareLink = () => {
    if (selectedCase) {
      // Change this when deploy with your URL

      // In a real app, this would be your actual case detail URL
      // const shareLink = `https://Amal.com/cases/${selectedCase.id}`;
      const shareLink = `${pathLink}donate/${selectedCase.invoice_number}`;
      navigator.clipboard.writeText(shareLink);
      // Optionally, show a snackbar or toast to confirm copying
    }
  };
  return (
    <Box>
      {/* Banner Section */}

      <Box
        sx={{
          // bgcolor: 'primary.main',
          color: "white",
          pt: { xs: 3, md: 4 },
          // py: 3,
          textAlign: "center",
        }}
      >
        <Box>
          <SlideShow slides={slides} />
        </Box>
      </Box>

      {/* Quote Section */}
      <Box
        sx={{
          bgcolor: "primary.main",
          py: 12,
        }}
      >
        <Container maxWidth="md">
          <img
            src="https://ehsan.sa/assets/images/homepage/lntnalo-ayah.svg"
            alt="Quote Image"
            style={{
              maxWidth: "100%",
              height: "auto",
              display: "block",
              margin: "0 auto",
            }}
          />
        </Container>
      </Box>

      {/* Service Description */}
      <Container maxWidth="md" sx={{ py: 8, direction: "rtl" }}>
        <Typography variant="h3" gutterBottom color="primary" dir="rtl">
          {/* About Our Service */}
          {lang.AboutUs}
        </Typography>
        <Typography variant="body1" paragraph fontSize={20} dir="rtl">
          {/* AMAL is a platform dedicated to helping individuals burdened by debt and facing imprisonment.
          Our key service, Forijat, aims to collect donations to pay off these debts and secure the release of those in need.
          We believe in second chances and the power of community support to transform lives. */}
          {lang.AboutUsDesc1}
        </Typography>
        <Typography variant="body1" paragraph fontSize={20} dir="rtl">
          {/* Through transparency, trust, and efficient management of donations, we create a bridge between those willing to give
          and those in desperate need. Join us in our mission to bring hope, dignity, and freedom to individuals and families
          across our community. */}
          {lang.AboutUsDesc2}
        </Typography>
      </Container>

      {/* Featured Cases Section */}
      <Box sx={{ bgcolor: "background.paper", py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" gutterBottom color="primary" align="center">
            {/* Featured Cases */}
            {lang.FeaturedCases}
          </Typography>

          <Grid container spacing={4}>
            {caseDate.slice(0, 3).map((case_) => {
              return (
                <Grid
                  item
                  key={case_.id}
                  xs={12}
                  sm={6}
                  md={6}
                  lg={4}
                  container
                  justifyContent="center"
                >
                  <CardC
                    id={case_.id}
                    Story={case_.description}
                    totalAmount={case_.total_amount}
                    raisedAmount={case_.paid_amount}
                    remainingAmount={case_.remaining_amount}
                    InvioceNumber={case_.invoice_number}
                    handleShareClick={handleShareClick}
                    case_={case_}
                  />
                </Grid>
              );
            })}
          </Grid>

          {/* Share Dialog */}
          <Dialog
            open={shareDialogOpen}
            onClose={handleShareClose}
            aria-labelledby="share-dialog-title"
            dir="rtl"
          >
            <DialogTitle id="share-dialog-title">
              {/* {"Share Case"} */}
              {"مشاركة حالة"}
            </DialogTitle>
            <DialogContent
            // dir='rtl'
            >
              <DialogContentText>
                {/* {"Share this case with others"} */}
                {"شارك الحالة مع الاخرين."}
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="share-link"
                // label="Share Link"
                label="رابط المشاركة"
                dir="ltr"
                type="text"
                fullWidth
                variant="outlined"
                // here
                value={
                  selectedCase
                    ? `${pathLink}donate/${selectedCase.invoice_number}`
                    : ""
                }
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
                {"اغلاق"}
              </Button>
            </DialogActions>
          </Dialog>

          <Box
            sx={{
              textAlign: "center",
              mt: 4,
              //
            }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              component={RouterLink}
              to="/cases"
              sx={{ fontWeight: "800", fontSize: "1.1rem" }}
            >
              {/* View All Cases */}
              {lang.ViewAllCases}
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Contact Us Section */}
      <Container maxWidth="md" sx={{ py: 8, direction: "rtl" }}>
        <Typography variant="h3" gutterBottom color="primary">
          {/* {"Contact Us"} */}
          {"تواصل معنا"}
        </Typography>
        <Typography variant="body1" paragraph>
          {/* {"Have questions or need assistance? We're here to help. Reach out to us using the form below."} */}
          {
            "لديك أسئلة أو تحتاج إلى مساعدة؟ نحن هنا لمساعدتك. تواصل معنا باستخدام النموذج أدناه."
          }
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="name"
                // label="Your Name"
                label="الاسم"
                name="name"
                autoComplete="name"
                // dir="rtl" // Set direction to RTL
                // InputLabelProps={{
                //   style: { textAlign: 'right' },
                // }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="email"
                // label="Email Address"
                label="البريد الالكتروني"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="message"
                // label="Your Message"
                label="رسالتك"
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
            {/* {"Send Message"} */}
            {"إرسال الرسالة"}
          </Button>
        </Box>
      </Container>
      {/* Quote Section 2 */}
      <Box
        sx={{
          bgcolor: "background.paper",
          py: 12,
        }}
      >
        <Container maxWidth="md">
          <img
            src="https://ehsan.sa/assets/images/homepage/ahseno-ayah.svg"
            alt="Quote Image"
            style={{
              maxWidth: "100%",
              height: "auto",
              display: "block",
              margin: "0 auto",
            }}
          />
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
