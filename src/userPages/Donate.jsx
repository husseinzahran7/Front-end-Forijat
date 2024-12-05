import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";

const DonationPage = () => {
  return (
    <Box sx={{ p: 4, my: 4, direction: "rtl" }}>
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
      <Card>
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

        <Box sx={{ p: 2 }}>
          <Typography variant="body2">
            {"عدد الحالات: 2,096 | عدد عمليات التبرع: 5,084 زيارة"}
          </Typography>
          <Typography variant="body2">{"وقت التسليم: 10 أيام"}</Typography>
          <Box sx={{ mt: 2 }}>
            <LinearProgress variant="determinate" value={76} />
            <Typography variant="body2" sx={{ mt: 1 }}>
              {"76% من إجمالي المبلغ المستهدف"}
            </Typography>
          </Box>
        </Box>
        <Divider />
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
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default DonationPage;
