import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  Container,
  Divider,
  Grid,
  IconButton,
  LinearProgress,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
const info = [{ text: " الزيارات 551 زيارة", image: "../src/images/icon-eye.svg" },
{ text: " آخر عملية تبرع قبل 2 دقيقة", image: "../src/images/icon-hand.svg" },
{ text: " عدد عمليات التبرع 200 عملية", image: "../src/images/icon-last-donation.svg" },
]
const DonationPage = () => {
  return (
    <Container maxWidth="xl" sx={{ my: 2 }}>
      <Box sx={{ p: 4, my: 4, direction: "rtl", }}>
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
        <Box sx={{ display: "flex", justifyContent: "space-between", }}>
          <Box sx={{ display: "flex", width: "100%",maxHeight:"350px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "600px",
                border: "1px solid #ddd",
                borderRadius: "20px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                mx: 2
              }}
            >
              {/* top part */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "linear-gradient(to left, #182847, #009DDC)",
                  width: "600px",
                  height: "200px",
                  borderRadius: "20px 20px 0 0",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    minWidth: "300px",
                  }}
                >
                  <Box
                    sx={{
                      width: "90%",
                      height: "100px",
                      bgcolor: "white",
                      p: 2,
                      borderRadius: "5px",
                      alignContent: "center",
                    }}
                  >
                    <Typography textAlign="center">{"Story"}</Typography>
                  </Box>
                  <Box
                    sx={{
                      width: "90%",
                      height: "30px",
                      bgcolor: "white",
                      p: 2,
                      borderRadius: "0 0 5px 5px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      m: 0,
                      background:
                        "linear-gradient(to right, rgba(24, 40, 71, 0.3), rgba(0, 157, 220, 0.3))",
                    }}
                  >
                    <Typography textAlign="center" color="white">
                      {/* {"Invoice number: "}  */}
                      {"رقم الفاتورة: "}
                      {"122458"}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              {/* bottom part */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "100%",
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
                <Box sx={{ position: "relative", display: "inline-flex" }}>
                  <CircularProgress variant="determinate" value={90} />
                  <Box
                    sx={{
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      position: "absolute",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="caption"
                      component="div"
                      sx={{ color: "text.secondary" }}
                    >
                      {`${Math.round(90)}%`}
                    </Typography>
                  </Box>
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
                    {/* {"Collected"} */}
                    {"تم جمعها"}
                  </Typography>
                  <Typography
                    variant="caption"
                    component="div"
                    sx={{ color: "text.secondary" }}
                  >
                    {`${Math.round(90)}%`}
                  </Typography>
                </Box>
              </Box>
              <CardActions
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
              </CardActions>
            </Box>
            <Box sx={{ width: "50%" }}>
              <Card sx={{ width: { xl: "100%" }, maxHeight: "200px" }}>
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
                    <Grid item xs={12} sm={6} md={3}>
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
                    <Grid item xs={12} sm={6} md={3}>
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
                    <Grid item xs={12} sm={6} md={3}>
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
                    <Grid item xs={12} sm={6} md={3}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        placeholder="مبلغ آخر"
                        InputProps={{
                          endAdornment: (
                            <Button variant="contained" color="primary" sx={{ ml: 1 }}>
                              {"تبرع"}
                            </Button>
                          ),
                        }}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
                <Divider />
                {/* total visited number */}

                <Box sx={{ mx: 2, my: 1 }}>

                  <Button variant="contained" color="primary" sx={{ width: "100%", }}>
                    {"تبرع"}
                  </Button>

                </Box>


              </Card>
              <Grid container spacing={2} sx={{ px: 2, py: 1 }}>
                {
                  info.map((item) => (
                    <Grid

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