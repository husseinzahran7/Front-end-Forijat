import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  LinearProgress,
  MenuItem,
  TextField,
  Typography,

} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const info = [{ text: " الزيارات 551 زيارة", image: "../src/images/icon-eye.svg" },
{ text: " آخر عملية تبرع قبل 2 دقيقة", image: "../src/images/icon-hand.svg" },
{ text: " عدد عمليات التبرع 200 عملية", image: "../src/images/icon-last-donation.svg" },
]
const DonationPage = () => {
  const [open, setOpen] = useState(false);
  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState(null);
  const case_ = {
    id: 1,
    name: "John Doe",
    amount: 5000,
    raised: 2500,
    invoiceNumber: "10001",
    story: "John's inspiring journey to overcome challenges.",
  };
  const handleShareClick = (case_) => {
    setSelectedCase(case_);
    setShareDialogOpen(true);
  };

  const handleShareClose = () => {
    setShareDialogOpen(false);
  };

  // for the pop up 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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

  return (
    <Container maxWidth="xl" sx={{ my: 2 }}>
      <Box sx={{ p: { s: 1, md: 4 }, my: { xs: 3, md: 1 }, direction: "rtl" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "linear-gradient(to left, #182847, #009DDC)",
            py: 2,
            px: 2,
            borderRadius: "12px",
            mb: 2,
            direction: "rtl",
            textAlign: "right",
            color: "white",
          }}
        >
          <Box>
            <Typography
              color="white"
              sx={{
                fontWeight: "bold",
                fontSize: "1.1rem",
              }}
            >
              {
                "تنويه: حالات المستحقين في فرجت يتم رفعها عبر وزارة الداخلية والتحقق منها عبر وزارة العدل."
              }
            </Typography>
          </Box>
        </Box>

        {/* MR  */}
        {/* display the card here */}
        {/* MR */}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", width: "100%", flexDirection: { xs: 'column', md: "row" }, alignItems: { s: "center", md: "flex-start" } }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                //                width: "600px",
                width: { s: '100%', md: "600px" },
                border: "1px solid #ddd",
                borderRadius: "20px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                mx: 2,
              }}
            >
              {/* top part */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: 'column',
                  width: "100%",
                  height: "66%",
                  pb: 2,
                  borderRadius: "20px 20px 0 0",
                  borderBottom: `2px dashed gray`,
                  borderImage: `repeating-linear-gradient(
                                  to right,
                                  gray 0,
                                  gray 10px, /* Dash size */
                                  transparent 10px, /* Gap starts */
                                  transparent 20px /* Total gap size */
                                )`,
                  borderImageSlice: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    px: 3,
                    py: 3,
                    background: "linear-gradient(to left, #182847, #009DDC)",
                    color: "white",
                    boxSizing: "border-box",
                  }}
                >
                  <Box>
                    <Box>
                      <Typography>
                        {"أمل"}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography>
                        {"رقم الفاتورة: 1920404542"}
                      </Typography>
                    </Box>
                  </Box>
                  <Button
                    sx={{ direction: "ltr", borderRadius: "30px" }}
                    variant="contained"
                    startIcon={<ShareIcon />}
                    size="large"
                    onClick={() => handleShareClick(case_)}
                  >
                    {"مشاركة"}
                  </Button>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    py: 1,
                    px: 3,
                    background: "white",
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: "lightgray",
                      width: "fit-content",
                      p: 1,
                      borderRadius: "4px",
                      my: 1,
                    }}
                  >
                    <Typography>
                      {"عليه حكم منذ : 5 سنوات و 7 أشهر"}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography>
                      {"عليه امر بالتنفيذ وحكم بالسجن عمره 45 عاما متزوج لديه طفل متبقى عليه مبلغ 39212 ريال"}
                    </Typography>
                  </Box>

                </Box>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  m: 1,
                  pl: 2,
                  pr: 3,
                  pt: 1,
                  display: "flex",
                  alignItems: "center", // Vertically align items
                }}
              >
                <LinearProgress
                  variant="determinate"
                  value={90}
                  sx={{
                    height: 20,
                    borderRadius: "4px",
                    width: "90%", // Ensure it takes most of the space
                    transform: "scaleX(-1)",
                  }}
                />
                <Typography
                sx={{mx:"auto"}}
                >{"90%"}</Typography>
              </Box>
              {/* bottom part */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "100%",
                }}
              >

                <Box
                  sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="caption"
                    component="div"
                    sx={{ color: "text.secondary" }}
                  >
                    {/* {"Raised Amount"} */}
                    {"الجنسية"}
                  </Typography>
                  <Typography
                    variant="caption"
                    component="div"
                    sx={{ color: "text.secondary" }}
                  >
                    {"سعودي"}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="caption"
                    component="div"
                    sx={{ color: "text.secondary" }}
                  >
                    {/* {"Raised Amount"} */}
                    {"المبلغ الذي تم جمعه"}
                  </Typography>
                  <Typography
                    variant="caption"
                    component="div"
                    sx={{ color: "text.secondary" }}
                  >
                    {"12,000"}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="caption"
                    component="div"
                    sx={{ color: "text.secondary" }}
                  >
                    {/* {"Raised Amount"} */}
                    {"المنطقة"}
                  </Typography>
                  <Typography
                    variant="caption"
                    component="div"
                    sx={{ color: "text.secondary" }}
                  >
                    {"الرياض"}
                  </Typography>
                </Box>
              </Box>
              {/* <CardActions
                sx={{
                  width: "100%",
                  justifyContent: "space-between",
                  px: 2,
                  borderRadius: "0 0 20px 20px",
                }}
              >
                <IconButton
                  color="primary"
                  onClick={() => handleShareClick(case_)}
                  aria-label="share"
                >
                  <ShareIcon />
                </IconButton>
                <Button
                  size="small"
                  variant="contained"
                  href={`/donate/${2}`}
                  color="primary"
                  sx={{ width: "100%", borderRadius: "50px" }}
                >
                  {"تبرع الان"}
                </Button>
              </CardActions> */}
              {/* <Box 
                sx={{ width: '100%', m: 2 ,px:3}}>
                <LinearProgress variant="determinate" value={90} sx={{ height: 20 ,borderRadius:"4px",transform: 'scaleX(-1)',}}/>

              </Box > */}
            </Box>
            <Box sx={{ width: { s: '100%', md: "50%" } }}>
              <Card sx={{ width: { xl: "100%" }, m: { xs: 2, md: 0 }, borderRadius: "20px" }}>
                {/* <Divider /> */}
                <CardContent
                // sx={{borderRadius: "12px"}}
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "1.8rem",
                      mb: 2,
                    }}
                  >
                    {"مبلغ التبرع"}
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={4} lg={3} >
                      <Button
                        variant="outlined"
                        fullWidth
                        sx={{
                          fontSize: "1.2rem",
                          py: 1,
                        }}
                      >
                        {"10 د.أ"}
                      </Button>
                    </Grid>
                    <Grid item xs={4} lg={3}>
                      <Button
                        variant="outlined"
                        fullWidth
                        sx={{
                          fontSize: "1.2rem",
                          py: 1,
                        }}
                      >
                        {"20 د.أ"}
                      </Button>
                    </Grid>
                    <Grid item xs={4} lg={3}>
                      <Button
                        variant="outlined"
                        fullWidth
                        sx={{
                          fontSize: "1.2rem",
                          py: 1,
                        }}
                      >
                        {"50 د.أ"}
                      </Button>
                    </Grid>
                    <Grid item xs={12} lg={3}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        placeholder="مبلغ آخر"
                        InputProps={{
                          endAdornment: (
                            <Box sx={{ ml: 1 }}>
                              {"د.أ"}
                            </Box>
                          ),
                        }}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />
                {/* total visited number */}

                <Box sx={{ mx: 2, my: 1 }}>

                  <Button variant="contained" color="primary" sx={{ width: "100%", borderRadius: "30px", }}>
                    {"تبرع"}
                  </Button>

                </Box>


              </Card>
              <Grid container spacing={2} sx={{ px: 2, py: 1 }}>
                {
                  info.map((item, index) => (
                    <Grid
                      key={index}
                      item
                      xs={12}

                      container
                      justifyContent="center"
                    >
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border: "1px solid black",
                          px: 2,
                          py: 1,
                          borderRadius: "14px"
                        }}
                      >
                        <img src={item.image} />
                        <Typography>
                          {item.text}
                        </Typography>

                      </Box>
                    </Grid>
                  ))
                }



              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
      <Dialog
        open={shareDialogOpen}
        onClose={handleShareClose}
        aria-labelledby="share-dialog-title"
        dir="rtl"
        sx={{ '& .MuiDialog-paper': { width: '600px', maxWidth: '800px' } }}
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
            value={
              selectedCase ? `${pathLink}/${selectedCase.invoiceNumber}` : ""
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
    </Container>
  );
};

export default DonationPage;


{/* <Box sx={{ p: 2 }}>
          <Typography variant="body2">
            {"عدد الحالات: 2,096 | عدد عمليات التبرع: 5,084 زيارة"}
          </Typography>
          {/* <Typography variant="body2">{"وقت التسليم: 10 أيام"}</Typography> */}
{/* <Box sx={{ mt: 2 }}>
            <LinearProgress variant="determinate" value={76} />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {"76% من إجمالي المبلغ المستهدف"} */}
{/* </Typography> */ }
{/* </Box>
        </Box> */}
{/* <Divider />
        <Box sx={{ p: 2 }}>
          <Typography variant="body2">
            {"عليك بالتبرع وحكم بالسجن عمره 50 عاما متصل لمدة 3 أطفال منتق"}
          </Typography>
          <Typography variant="body2">{"عليه ميزلي 14745 د.أ"}</Typography>
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Typography variant="body2">
            {"الجنسية: سعودي | المبلغ المتبرع به: 14,745 د.أ"}
          </Typography>
          <Typography variant="body2">
            {" الرقم التعريفي: 199948820"}
          </Typography> */}
{/* </Box> */ }