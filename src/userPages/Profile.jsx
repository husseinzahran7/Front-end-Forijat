// create simple user profile to display what is in the registration
import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

function Profile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  if (!userData) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container maxWidth="sm" sx={{ my: 10, direction: "rtl" }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {"الملف الشخصي"}
        </Typography>
        <List
          dense
          // display from rtl
          sx={{
            direction: "rtl",
            ".MuiListItem-root": {
              textAlign: "right",
            },
          }}
        >
          <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
            <ListItemText
              primary="البريد الإلكتروني"
              secondary={userData.email}
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="الاسم" secondary={userData.name} />
          </ListItem>
          {/* <ListItem>
            <ListItemText primary="الرقم الهاتف" secondary={userData.phone} />
          </ListItem>
          <ListItem>
            <ListItemText primary="العنوان" secondary={userData.address} />
          </ListItem>
          <ListItem>
            <ListItemText primary="المدينة" secondary={userData.city} />
          </ListItem> */}
          {/* Add other user data fields as needed */}
        </List>
      </Paper>
    </Container>
  );
}

export default Profile;
