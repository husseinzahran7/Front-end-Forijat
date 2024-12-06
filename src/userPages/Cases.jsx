import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  LinearProgress,
  Box,
  Pagination,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  useTheme,
  ListItem,
  ListItemText,
  List,
  Paper,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";

import ShareIcon from "@mui/icons-material/Share";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CardC from "../components/Card";
import InfoIcon from "@mui/icons-material/Info";
import TuneIcon from "@mui/icons-material/Tune";
import GavelIcon from "@mui/icons-material/Gavel";
import CloseIcon from '@mui/icons-material/Close';

// This is a mock data array. In a real application, you would fetch this data from your API.
const mockCases = [
  {
    id: 1,
    name: "John Doe",
    amount: 5000,
    raised: 2500,
    invoiceNumber: "10001",
    story: "John's inspiring journey to overcome challenges.",
  },
  {
    id: 2,
    name: "Jane Smith",
    amount: 7500,
    raised: 3000,
    invoiceNumber: "10002",
    story: "Jane is striving to build a better future for her family.",
  },
  {
    id: 3,
    name: "Bob Johnson",
    amount: 3000,
    raised: 1000,
    invoiceNumber: "10003",
    story: "Bob needs support for his small business dream.",
  },
  {
    id: 4,
    name: "Alice Walker",
    amount: 4000,
    raised: 1500,
    invoiceNumber: "10004",
    story: "Alice seeks assistance to cover unexpected medical expenses.",
  },
  {
    id: 5,
    name: "David Miller",
    amount: 6000,
    raised: 2000,
    invoiceNumber: "10005",
    story: "David is working to rebuild his life after a natural disaster.",
  },
  {
    id: 6,
    name: "Emily Jones",
    amount: 8000,
    raised: 3500,
    invoiceNumber: "10006",
    story: "Emily is pursuing higher education with limited resources.",
  },
  {
    id: 7,
    name: "Charles Brown",
    amount: 2000,
    raised: 800,
    invoiceNumber: "10007",
    story: "Charles needs funds to support his child's education.",
  },
  {
    id: 8,
    name: "Sarah Lee",
    amount: 9000,
    raised: 4000,
    invoiceNumber: "10008",
    story: "Sarah is on a mission to provide clean water to her community.",
  },
  {
    id: 9,
    name: "William Davis",
    amount: 10000,
    raised: 5000,
    invoiceNumber: "10009",
    story: "William is raising funds to open a community library.",
  },
  {
    id: 10,
    name: "Olivia Garcia",
    amount: 12000,
    raised: 6000,
    invoiceNumber: "10010",
    story: "Olivia needs help to expand her charity organization.",
  },
  {
    id: 11,
    name: "Noah Williams",
    amount: 15000,
    raised: 7500,
    invoiceNumber: "10011",
    story: "Noah is striving to create job opportunities in his town.",
  },
  {
    id: 12,
    name: "Sophia Hernandez",
    amount: 18000,
    raised: 9000,
    invoiceNumber: "10012",
    story: "Sophia is raising funds for a life-changing surgery.",
  },
  {
    id: 13,
    name: "James Moore",
    amount: 3000,
    raised: 1000,
    invoiceNumber: "10013",
    story: "James is an artist seeking support for his upcoming exhibition.",
  },
  {
    id: 14,
    name: "Isabella Wilson",
    amount: 4000,
    raised: 1500,
    invoiceNumber: "10014",
    story:
      "Isabella aims to provide free tutoring for underprivileged children.",
  },
  {
    id: 15,
    name: "Michael Taylor",
    amount: 6000,
    raised: 2000,
    invoiceNumber: "10015",
    story: "Michael is working towards developing eco-friendly housing.",
  },
  {
    id: 16,
    name: "Michael Taylor",
    amount: 6000,
    raised: 2000,
    invoiceNumber: "10016",
    story: "Michael is dedicated to bringing renewable energy solutions.",
  },
  {
    id: 17,
    name: "Michael Taylor",
    amount: 6000,
    raised: 2000,
    invoiceNumber: "10017",
    story: "Michael's project focuses on providing affordable healthcare.",
  },
  {
    id: 18,
    name: "Michael Taylor",
    amount: 6000,
    raised: 2000,
    invoiceNumber: "10018",
    story: "Michael is raising funds for his tech innovation startup.",
  },
  {
    id: 19,
    name: "Michael Taylor",
    amount: 6000,
    raised: 2000,
    invoiceNumber: "10019",
    story: "Michael is spearheading a local initiative for food security.",
  },
];

// for the pop up
const eligibilityConditions = [
  "أن يكون المطالب محبوساً بالمملكة (ويستثنى من أفرج عنه مؤقتاً بالأمر الملكي الخاص بجائحة كورونا).",
  "ألا تكون المطالبة ناشئة عن قضية جنائية (ويستثنى من ذلك المطالبات الناشئة عن الحق الخاص في قضايا أخرى).",
  "ألا تكون المطالبة تمثل غرامة مستحقة للدولة.",
  "ألا تكون المطالبة ناشئة عن حادث سير وقع بسبب مخالفة مرورية تعرض السلامة العامة للخطر.",
  "ألا يكون المطالب قد استفاد من خدمة فرجت خلال الفترة الماضية.",
];

const lang = {
  Name: "",
  Btn: "تبرع",
};


function Cases() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState(false);
  const casesPerPage = 12; // Number of cases per page
  const theme = useTheme();
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
      const shareLink = `${pathLink}/donate/${selectedCase.invoiceNumber}`;
      navigator.clipboard.writeText(shareLink);
      // Optionally, show a snackbar or toast to confirm copying
    }
  };

  const indexOfLastCase = currentPage * casesPerPage;
  const indexOfFirstCase = indexOfLastCase - casesPerPage;
  const currentCases = mockCases.slice(indexOfFirstCase, indexOfLastCase);

  const filters = [
    { key: "prisonArea", label: "منطقة السجن", options: ["الكل", "الرياض", "جدة", "مكة", "الدمام"] },
    { key: "nationality", label: "الجنسية", options:  ["الكل", "سعودي", "مصري", "سوري", "لبناني", "فلسطيني", "أردني", "عراقي", "جزائري", "تونسي", "مغربي"] },
    { key: "gender", label: "الجنس", options: ["الكل","ذكر", "أنثى",] },
    { key: "maritalStatus", label: "الحالة الإجتماعية", options: ["الكل","أعزب","متزوج","عزباء","متزوجة","غير متزوجة","مطلقة"] },
    { key: "donationType", label: "نوع التبرع", options: ["الكل","صدقة","زكاة",] },
    { key: "caseCount", label: "عدد القضايا", options: ["الكل","1","2","3","4","5","5 أو أكثر"] },
  ];

  return (
    <Container maxWidth="lg" sx={{ my: 6 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        color="primary"
        sx={{ direction: "rtl" }}
      >
        {/* Current Cases */}
        {"الحالات الحالية"}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)",
          borderRadius: "20px",
          overflow: "hidden",
          mb: 5,
          alignSelf: "center",
        }}
      >
        {/* top */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "linear-gradient(to left, #182847, #009DDC)",
            py: 2,
            px: 2,
          }}
        >
          <Button
            startIcon={<InfoIcon sx={{ color: "primary.main" }} />}
            variant="contained"
            sx={{
              borderRadius: "50px",
              bgcolor: "white",
              color: "primary.main",
              fontWeight: "bold",
              fontSize: "1rem",
            }}
            onClick={handleClickOpen}
          >
            {"شروط الاستحقاق"}
          </Button>

          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
            maxWidth="sm"
            dir="rtl"
            // background color white
            sx={{
              "& .MuiDialog-paper": {
                backgroundColor: "white", // This sets the background color to white
                borderRadius: 3,
              },
            }}
          >
            {/* add icon */}
            {/* gavel icon */}
            <GavelIcon
              sx={{
                fontSize: "48px",
                color: "primary.main",
                mx: "auto",
                my: 2,
              }}
            />

            <DialogTitle
              id="alert-dialog-title"
              sx={{ direction: "rtl", fontWeight: "bold", textAlign: "center" }}
            >
              {"شروط الاستحقاق المعتمدة من اللجنة الإشرافية"}
            </DialogTitle>

            <DialogContent>
              <Paper
                elevation={0}
                sx={{
                  borderRadius: "10px",
                }}
              >
                {eligibilityConditions.map((condition, index) => (
                  <Typography
                    key={index}
                    variant="body1"
                    sx={{
                      p: 2,
                      // m: 1,
                      direction: "rtl",
                      textAlign: "right",
                    }}
                  >
                    • {condition}
                  </Typography>
                ))}
              </Paper>
            </DialogContent>

            <DialogActions>
              <Button
                onClick={handleClose}
                variant="contained"
                color="primary"
                fullWidth
                sx={{ borderRadius: "50px" }}
              >
                {"اغلاق"}
              </Button>
            </DialogActions>
          </Dialog>

          <Box>
            <Typography color="white">
              {
                "فرص التبرع لمن صدر بحقهم حكم بالسجن؛ بسبب الحقوق المالية التي عليهم، للمساهمة في تفريج كربتهم"
              }
            </Typography>
          </Box>
          {/*  Amal logo */}
          <Box
            sx={{
              bgcolor: "white",
              borderRadius: "5px",
              p: 1,
              ml: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                fontWeight: 800,
                minWidth: "60px",
                textAlign: "center",
              }}
            >
              {"امل"}
            </Typography>
          </Box>
        </Box>
        {/* bottom */}


        {filter ? (<>
          <Box sx={{
            display: "flex",
            flexDirection: "column"
          }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
                justifyContent: "space-between",
                py: 1,
                px: 2,
              }}
            >

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  px: 1,
                }}
              >

                <div dir="rtl">
                  <Box>
                    <Typography
                      sx={{
                        fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                        fontWeight: 800,
                        minWidth: "60px",
                        textAlign: "center",
                      }}
                    >
                      {"التصفية"}
                    </Typography>
                  </Box>
                </div>
              </Box>

              <Button
                startIcon={<CloseIcon />}
                variant="contained"
                sx={{ borderRadius: "50px" }}
                onClick={() => setFilter(false)}
              >
                {"إغلاق"}
              </Button>
            </Box>

            <Grid container spacing={4} sx={{ px: 2, py: 1 }}>
              {/* Prison Area Select */}
              {filters.map((filter, index) => (
                <Grid
                  key={index} // Use index or a unique key based on the filter
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={4}
                  container
                  justifyContent="center"
                >
                  <FormControl fullWidth>
                    <InputLabel id={`${filter.key}-label`}>{filter.label}</InputLabel>
                    <Select
                      labelId={`${filter.key}-label`}
                      id={`${filter.key}-select`}
                      label={filter.label}
                      sx={{ direction: "rtl" }} 
                      MenuProps={{
                        PaperProps: {
                          style: {
                            maxHeight: 200,  // Set the height for the dropdown
                            overflowY: 'auto',  // Enable vertical scrolling
                          },
                        },
                      }}
                    >
                      {filter.options.map((option, optionIndex) => (
                        <MenuItem key={optionIndex} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              ))}
              
            </Grid>
            <Box 
            sx={{
              display:"flex",
              flexDirection:"row-reverse",
              alignItems:"center",
              justifyContent:"space-between",
              px:2,
              py:1
            }}
            >
              <Button variant="contained">تصفية</Button>
              <Button variant="outlined">مسح الكل</Button>
            </Box>
          </Box>
        </>) : (<>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
              justifyContent: "space-between",
              py: 1,
              px: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid Gray",
                borderRadius: "5px",
                px: 1,
              }}
            >
              <Button variant="contained" sx={{ borderRadius: "50px" }}>
                {"بحث"}
              </Button>
              <div dir="rtl">
                <TextField
                  id="outlined-basic"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        border: "none", // Remove border
                      },
                    },
                  }}
                  type="number"
                  placeholder="رقم الفاتورة "
                />
              </div>
            </Box>

            <Button
              startIcon={<TuneIcon />}
              variant="contained"
              sx={{ borderRadius: "50px" }}
              onClick={() => setFilter(true)}
            >
              {"تصفية"}
            </Button>
          </Box>
        </>)}

      </Box>

      <Grid container spacing={4}>
        {/* <CardC/> */}
        {currentCases.map((case_) => (
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
              Story={case_.story}
              totalAmount={case_.amount}
              raisedAmount={case_.raised}
              InvioceNumber={case_.invoiceNumber}
              handleShareClick={handleShareClick}
              case_={case_}
            />
          </Grid>
        ))}
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
            value={selectedCase ? `${pathLink}/${selectedCase.invoiceNumber}` : ""}
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

      <Pagination
        color="primary"
        count={Math.ceil(mockCases.length / casesPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        showFirstButton
        showLastButton
        sx={{ mt: 4, display: "flex", justifyContent: "center" }}
      />
    </Container>
  );
}

export default Cases;
