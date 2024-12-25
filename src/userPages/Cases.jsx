import React, { useEffect, useState } from "react";
import axios from "axios";
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
  Alert,
} from "@mui/material";

import ShareIcon from "@mui/icons-material/Share";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CardC from "../components/Card";
import InfoIcon from "@mui/icons-material/Info";
import TuneIcon from "@mui/icons-material/Tune";
import GavelIcon from "@mui/icons-material/Gavel";
import CloseIcon from "@mui/icons-material/Close";
import CircularProgress from "@mui/material/CircularProgress";
import API_ENDPOINTS from "../../apiConfig";

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
const initialFilterValues = {
  jail_location: "",
  nationality: "",
  gender: "",
  social_status: "",
  donation_type: "",
  caseCount: "",
};

function Cases() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState(false);
  const [casesPerPage] = useState(10); // Number of cases per page
  const [totalPages, setTotalPages] = useState(0);
  const theme = useTheme();
  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);
  const [caseDate, setCaseDate] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [filterValues, setFilterValues] = useState(initialFilterValues);
  const [invoiceNumber, setInvoiceNumber] = useState("");


  const currentCases = caseDate; // Use API results directly

  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetchData(); // Call the fetch function
  }, [currentPage, filter]); // Add currentPage as dependency to refetch when page changes

  // Define an async function for the API request
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    setNotFound(false);
    try {
      const response = await axios.get(
        `${API_ENDPOINTS.getAllCases}?page=${currentPage}`
      );
      setCaseDate(response.data.results); // Update state with response data

      // Calculate total pages from API response
      setTotalPages(Math.ceil(response.data.count / casesPerPage)); // Update total pages

      // console.log(caseDate);
      setLoading(false);
    } catch (err) {
      setError(err.message); // Handle error
      console.log(err.message);
      console.log("err.message");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  // const handlePageChange = (event, newPage) => {
  //   setCurrentPage(newPage);
  //   // console.log("here");
  //   // console.log(`newPage value:${newPage}`);
  //   // console.log(`currentPage value:${currentPage}`);

  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
    console.log(`Page changed to: ${newPage}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
  const handleFilterChange = (key, value) => {
    setFilterValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  // Fetch data based on filters
  const fetchFilteredData = async () => {
    setCurrentPage(1); // Reset to first page when applying filters
    setLoading(true);
    setError(null);
    setNotFound(false);
    try {
      const response = await axios.get(API_ENDPOINTS.getAllCases, {
        params: { ...filterValues, page: currentPage },
      });
      setCaseDate(response.data.results);
      setTotalPages(Math.ceil(response.data.count / casesPerPage));
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch data with invoice number or all cases if invoice is empty
  const fetchDataWithInvoice = async () => {
    setLoading(true);
    setError(null);
    setNotFound(false);
    try {
      if (!invoiceNumber) {
        const response = await axios.get(API_ENDPOINTS.getAllCases);
        setCaseDate(response.data.results);
        setTotalPages(Math.ceil(response.data.results.length / casesPerPage));
      } else {
        const response = await axios.get(
          `${API_ENDPOINTS.getCaseById}${invoiceNumber}`
        );

        if (response.data) {
          setCaseDate([response.data]);
          // Should consider the actual count from the API response:
          setTotalPages(Math.ceil(response.data.count / casesPerPage));
        } else {
          setNotFound(true);
          setCaseDate([]);
        }
      }
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setNotFound(true);
        setCaseDate([]);
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };
  const resetFilters = () => {
    setFilterValues(initialFilterValues);
    setCurrentPage(1);
    fetchData();
  };

  // used for ShareLink
  const pathLink = window.location.href;

  const copyShareLink = () => {
    if (selectedCase) {
      // Change this when deploy with your URL
      // In a real app, this would be your actual case detail URL
      // const shareLink = `https://Amal.com/cases/${selectedCase.id}`;
      // const shareLink = `${pathLink}/donate/${selectedCase.invoiceNumber}`;
      // const shareLink = `${pathLink}/donate/${selectedCase.invoice_number}`;
      const shareLink = `http://localhost:5173/donate/${selectedCase.invoice_number}`;

      navigator.clipboard.writeText(shareLink);
      // Optionally, show a snackbar or toast to confirm copying
      return shareLink;
    }
  };

  // Calculate current page's cases
  // const indexOfLastCase = currentPage * casesPerPage;
  // const indexOfFirstCase = indexOfLastCase - casesPerPage;
  // const currentCases = caseDate.slice(indexOfFirstCase, indexOfLastCase);

  const filters = [
    {
      key: "jail_location",
      label: "منطقة السجن",
      options: [
        { display: "الكل", value: "" },
        { display: "عمان", value: "amman" },
        { display: "الزرقاء", value: "zarqa" },
        { display: "إربد", value: "irbid" },
        { display: "العقبة", value: "aqaba" },
        { display: "مأدبا", value: "madaba" },
        { display: "المفرق", value: "mafraq" },
        { display: "السلط", value: "salt" },
        { display: "الكرك", value: "karak" },
        { display: "عجلون", value: "ajloun" },
        { display: "جرش", value: "jerash" },
        { display: "معان", value: "maan" },
        { display: "الطفيلة", value: "tafilah" },
      ],
    },
    {
      key: "nationality",
      label: "الجنسية",
      options: [
        { display: "الكل", value: "" },
        { display: "كويتي", value: "KW" },
        { display: "سعودي", value: "SA" },
        { display: "بحريني", value: "BH" },
        { display: "قطري", value: "QA" },
        { display: "إماراتي", value: "AE" },
        { display: "عماني", value: "OM" },
        { display: "أردني", value: "JO" },
        { display: "مصري", value: "EG" },
        { display: "هندي", value: "IN" },
        { display: "باكستاني", value: "PK" },
        { display: "بنغلادشي", value: "BD" },
        { display: "فلبيني", value: "PH" },
        { display: "أخرى", value: "OT" },
      ],
    },
    {
      key: "gender",
      label: "الجنس",
      options: [
        { display: "الكل", value: "" },
        { display: "ذكر", value: "M" },
        { display: "أنثى", value: "F" },
      ],
    },
    {
      key: "social_status",
      label: "الحالة الإجتماعية",
      options: [
        { display: "الكل", value: "" },
        { display: "أعزب", value: "single" },
        { display: "متزوج", value: "married" },
        { display: "مطلق", value: "divorced" },
        { display: "أرمل", value: "widowed" },
      ],
    },
    {
      key: "donation_type",
      label: "نوع التبرع",
      options: [
        { display: "الكل", value: "" },
        { display: "زكاة", value: "zakat" },
        { display: "صدقة", value: "sadaqah" },
      ],
    },
    {
      key: "caseCount",
      label: "عدد القضايا",
      options: [
        { display: "الكل", value: "" },
        { display: "1", value: "1" },
        { display: "2", value: "2" },
        { display: "3", value: "3" },
        { display: "4", value: "4" },
        { display: "5", value: "5" },
        { display: "5 أو أكثر", value: "5 أو أكثر" },
      ],
    },
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

        {filter ? (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
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
                      <InputLabel id={`${filter.key}-label`}>
                        {filter.label}
                      </InputLabel>
                      <Select
                        labelId={`${filter.key}-label`}
                        id={`${filter.key}-select`}
                        label={filter.label}
                        sx={{ direction: "rtl" }}
                        value={filterValues[filter.key]}
                        onChange={(e) =>
                          handleFilterChange(filter.key, e.target.value)
                        }
                        MenuProps={{
                          PaperProps: {
                            style: {
                              maxHeight: 200, // Set the height for the dropdown
                              overflowY: "auto", // Enable vertical scrolling
                            },
                          },
                        }}
                      >
                        {filter.options.map((option, optionIndex) => (
                          <MenuItem key={optionIndex} value={option.value}>
                            {option.display}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                ))}
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  alignItems: "center",
                  justifyContent: "space-between",
                  px: 2,
                  py: 1,
                }}
              >
                <Button
                  variant="contained"
                  onClick={fetchFilteredData}
                  disabled={loading}
                >
                  {"تصفية"}
                </Button>
                <Button variant="outlined" onClick={resetFilters}>
                  {"مسح الكل"}
                </Button>
              </Box>
            </Box>
          </>
        ) : (
          <>
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
                <Button
                  variant="contained"
                  sx={{ borderRadius: "50px" }}
                  onClick={fetchDataWithInvoice}
                  disabled={loading}
                >
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
                    placeholder="رقم الفاتورة"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        fetchDataWithInvoice(invoiceNumber);
                      }
                    }}
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
          </>
        )}
      </Box>

      {/* Error and Not Found States */}
      {error && (
        <Alert severity="error" sx={{ mb: 4 }}>
          {"حدث خطأ في تحميل البيانات. الرجاء المحاولة مرة أخرى."}
        </Alert>
      )}

      {notFound && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "200px",
            textAlign: "center",
            mb: 4,
          }}
        >
          <Typography variant="h5" color="text.secondary" gutterBottom>
            {"عذراً، لم يتم العثور على الحالة المطلوبة"}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {"الرجاء التحقق من رقم الفاتورة والمحاولة مرة أخرى"}
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            onClick={() => {
              setInvoiceNumber("");
              // fetchDataWithInvoice();
              fetchData();
            }}
          >
            {" العودة إلى جميع الحالات"}
          </Button>
        </Box>
      )}

      {/* Cases Grid */}
      <Grid container spacing={4}>
        {loading && (
          <Grid
            xs={12}
            item
            container
            justifyContent="center"
            alignItems="center"
          >
            <CircularProgress />
          </Grid>
        )}
        {!loading &&
          !error &&
          !notFound &&
          currentCases.map((case_) => (
            <Grid item key={case_.id} xs={12} sm={6} md={6} lg={4} container>
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
            label="رابط المشاركة"
            dir="ltr"
            type="text"
            fullWidth
            variant="outlined"
            value={
              // selectedCase ? `${pathLink}/donate/${selectedCase.invoice_number}` : ""
              selectedCase ? `http://localhost:5173/donate/${selectedCase.invoice_number}` : ""
              
              // here
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

      {/* Pagination - Only show if there are cases and not in error/loading state */}
      {!loading && !error && !notFound && caseDate.length > 0 && (
        <Pagination
          color="primary"
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          showFirstButton
          showLastButton
          sx={{ mt: 4, display: "flex", justifyContent: "center" }}
        />
      )}
    </Container>
  );
}

export default Cases;
