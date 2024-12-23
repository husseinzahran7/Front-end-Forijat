import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  MenuItem,
  Menu,
} from "@mui/material";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import { Gradient } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

const navItems = [
  { title: "الرئيسية ", path: "/", selected: false }, // Home in Arabic
  { title: "الحالات ", path: "/cases", selected: false }, // Cases in Arabic
  { title: "التبرع ", path: "/subscription", selected: false }, // Donate in Arabic
  // { title: "لوحة التحكم", path: "/dashboard", selected: false }, // Dashboard in Arabic
];

const names = {
  ar: {
    logoName: "امل",
    login: "تسجيل الدخول",
    signup: "تسجيل ",
  },

  en: {
    logoName: "AMAL",
  },
};

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  //
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  navItems.forEach((item) => {
    item.selected = item.path === location.pathname;
  });

  // Check login status on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setIsLoggedIn(true);
      setUserEmail(userData.email);
    }
  }, []);

  // Update selected nav items
  navItems.forEach((item) => {
    item.selected = item.path === location.pathname;
  });

  const handleUserMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserEmail("");
    setAnchorEl(null);
    navigate("/"); // Redirect to home page
  };

  const handleProfileClick = () => {
    navigate("/profile");
    handleUserMenuClose();
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", direction: "rtl" }}
    >
      <Typography
        variant="h6"
        sx={{
          my: 2,
          color: "primary.main",
          fontFamily: "Roboto",
          fontSize: "1.6rem",
          fontWeight: "bold",
        }}
      >
        {names.ar.logoName}
      </Typography>

      {/* add button close the drawer */}

      <IconButton
        onClick={handleDrawerToggle}
        sx={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          color: "primary.main",
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.title}
            component={RouterLink}
            to={item.path}
            selected={location.pathname === item.path}
            onClick={() => {
              navItems.forEach((i) => (i.selected = false));
              item.selected = true;
            }}
            sx={{
              backgroundColor: item.selected ? "primary.main" : "transparent",
              color: item.selected ? "white" : "text.primary",
              textAlign: "right",
            }}
          >
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        color="primary"
        elevation={6}
        sx={{ direction: "rtl" }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                flexGrow: 1,
                color: "white",
                textDecoration: "none",
                fontFamily: "Roboto",
                fontSize: "2rem",
                fontWeight: "bold",
                ml: 1,
                mr: 1,
                display: {
                  xs: "none",
                  sm: "block",
                  textAlign: "left",
                },
              }}
            >
              {names.ar.logoName}
            </Typography>
          </Box>
          <Box sx={{ direction: "rtl", display: { xs: "none", md: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.title}
                component={RouterLink}
                to={item.path}
                sx={{
                  color: "white",
                  fontSize: "1.4rem",
                  fontWeight: "bold",
                  mx: 3,
                  display: {
                    xs: "none",
                    sm: "inline",
                    textAlign: "left",
                  },

                  borderBottom: item.selected ? "solid 4px white" : "none",
                  // add shadow when selected
                  // boxShadow: item.selected ? '0px 2px 10px rgba(0, 0, 0, 0.2)' : 'none',
                  //  on hover add shadow
                  "&:hover": {
                    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
                    borderBottom: "solid 4px white",
                    // add transaction
                    transition: "box-shadow 0.2s ease, border-bottom 0.2s ease",
                  },
                }}
              >
                {item.title}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            {/* display avatar */}
            {isLoggedIn ? (
              <>
                <IconButton
                  color="inherit"
                  onClick={handleUserMenuOpen}
                  sx={{
                    color: "white",
                    fontSize: "1.5rem",
                  }}
                >
                  <AccountCircleIcon sx={{ fontSize: "2rem" }} />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleUserMenuClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <MenuItem onClick={handleProfileClick}>
                    <AccountCircleIcon sx={{ mr: 1 }} />
                    {" الملف الشخصي"}
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <LogoutIcon sx={{ mr: 1 }} /> {names.ar.logout}
                    {" تسجيل الخروج"}
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Button
                color="inherit"
                component={RouterLink}
                to="/login"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  bgcolor: "secondary.main",
                }}
              >
                {names.ar.login}
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },

          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default Navbar;
