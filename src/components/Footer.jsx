import React from "react";
import { Box, Container, Typography, Link, Grid } from "@mui/material";

function Footer() {
  return (
    <>
      <Box
        component="footer"
        sx={{ bgcolor: "primary.main", color: "white", py: 0, mt: "auto" }}
      >
        <Box sx={{ backgroundColor: "secondary.main", py: 1, mt: "auto" }} />
        <Box
          component="footer"
          sx={{ bgcolor: "primary.main", color: "white", py: 4, mt: "auto" }}
        >
          <Container
            maxWidth="lg"
            display="flex"
            // justifyContent="space-between"
           
            // alignItems="center"
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6}>
                <Typography variant="body2" align="center">
                  {/* © {new Date().getFullYear()} AMAL Platform. All rights
                  reserved. */}
                  {"© 2024 منصة أمل. جميع الحقوق محفوظة."}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <Typography variant="body2" align="center">
                  {/* <Link color="inherit" href="/about" sx={{textDecoration: 'none'}}>
                  About
                </Link>
                {' | '} */}
                  <Link
                    color="inherit"
                    href="/privacy"
                    sx={{ textDecoration: "none" }}
                  >
                    {/* Privacy Policy */}
                    {"سياسة الخصوصية"}
                  </Link>
                  {" | "}
                  <Link
                    color="inherit"
                    href="/TermsOfService"
                    sx={{ textDecoration: "none" }}
                  >
                    {/* Terms of Service */}
                    {"شروط الخدمة"}

                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
