// // // create simple user profile to display what is in the registration
// // import React, { useEffect, useState } from "react";
// // import {
// //   Container,
// //   Typography,
// //   Box,
// //   Paper,
// //   List,
// //   ListItem,
// //   ListItemText,
// // } from "@mui/material";

// // function Profile() {
// //   const [userData, setUserData] = useState(null);

// //   useEffect(() => {
// //     const storedUser = localStorage.getItem("user");
// //     if (storedUser) {
// //       setUserData(JSON.parse(storedUser));
// //     }
// //   }, []);

// //   if (!userData) {
// //     return <Container>Loading...</Container>;
// //   }

// //   return (
// //     <Container maxWidth="sm" sx={{ my: 10, direction: "rtl" }}>
// //       <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
// //         <Typography variant="h4" component="h1" gutterBottom>
// //           {"الملف الشخصي"}
// //         </Typography>
// //         <List
// //           dense
// //           // display from rtl
// //           sx={{
// //             direction: "rtl",
// //             ".MuiListItem-root": {
// //               textAlign: "right",
// //             },
// //           }}
// //         >
// //           <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
// //             <ListItemText
// //               primary="البريد الإلكتروني"
// //               secondary={userData.email}
// //             />
// //           </ListItem>
// //           <ListItem>
// //             <ListItemText primary="الاسم" secondary={userData.name} />
// //           </ListItem>
          
// //           {/* Add other user data fields as needed */}
// //         </List>
// //       </Paper>
// //     </Container>
// //   );
// // }

// // export default Profile;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   Container,
//   Typography,
//   Box,
//   Paper,
//   List,
//   ListItem,
//   ListItemText,
//   CircularProgress,
//   Alert,
// } from "@mui/material";
// import API_ENDPOINTS from "../../apiConfig";
// import User from "./User";

// function Profile() {
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
 
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {

//       const storedUserData = JSON.parse(storedUser);
//       setUserData(storedUserData.user); // Extract the user property
//       console.log(storedUserData.user);
     
//     }

    
//   }, []);

//   if (!userData) {
//   if (loading) {
//     return (
//       <Container maxWidth="sm" sx={{ my: 10, direction: "rtl", textAlign: "center" }}>
//         <CircularProgress />
//         <Typography sx={{ mt: 2 }}>جارٍ تحميل الملف الشخصي...</Typography>
//       </Container>
//     );
//   }

//   if (error) {
//     return (
//       <Container maxWidth="sm" sx={{ my: 10, direction: "rtl", textAlign: "center" }}>
//         <Alert severity="error">{error}</Alert>
//       </Container>
//     );
//   }

//   return (
//     <Container maxWidth="sm" sx={{ my: 10, direction: "rtl" }}>
//       <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
//         <Typography variant="h4" component="h1" gutterBottom>
//           {"الملف الشخصي"}
//         </Typography>
//         <List
//           dense
//           sx={{
//             direction: "rtl",
//             ".MuiListItem-root": {
//               textAlign: "right",
//             },
//           }}
//         >
//           <ListItem>
//             <ListItemText primary="البريد الإلكتروني" secondary={""+userData.email} />
//           </ListItem>
//           <ListItem>
//             <ListItemText primary="الاسم الأول" secondary={userData.firstName} />
//           </ListItem>
//           <ListItem>
//             <ListItemText primary="الاسم الأخير" secondary={userData.lastName} />
//           </ListItem>
//           <ListItem>
//             <ListItemText primary="رقم الهاتف" secondary={userData.phoneNumber} />
//           </ListItem>
//           <ListItem>
//             <ListItemText
//               primary="هل المستخدم متبرع؟"
//               secondary={userData.isDonor ? "نعم" : "لا"}
//             />
//           </ListItem>
//         </List>
//       </Paper>
//     </Container>
//   );
// }
// }

// export default Profile;

import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Alert,
} from "@mui/material";

function Profile() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const storedUserData = JSON.parse(storedUser);
      setUserData(storedUserData.user);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <Container maxWidth="sm" sx={{ my: 10, direction: "rtl", textAlign: "center" }}>
        <CircularProgress />
        <Typography sx={{ mt: 2 }}>جارٍ تحميل الملف الشخصي...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="sm" sx={{ my: 10, direction: "rtl", textAlign: "center" }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  if (!userData) {
    return (
      <Container maxWidth="sm" sx={{ my: 10, direction: "rtl", textAlign: "center" }}>
        <Alert severity="error">لا يمكن تحميل بيانات المستخدم</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ my: 10, direction: "rtl" }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom textAlign="center">
          الملف الشخصي
        </Typography>
        <List
          dense
          sx={{
            direction: "rtl",
            ".MuiListItem-root": {
              textAlign: "right",
              borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
              "&:last-child": {
                borderBottom: "none"
              }
            },
          }}
        >
          <ListItem>
            <ListItemText primary="البريد الإلكتروني" secondary={userData.email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="الاسم الأول" secondary={userData.firstName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="الاسم الأخير" secondary={userData.lastName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="رقم الهاتف" secondary={userData.phoneNumber} />
          </ListItem>
          <ListItem>
            <ListItemText primary="العمر" secondary={userData.age} />
          </ListItem>
          <ListItem>
            <ListItemText primary="الجنس" secondary={userData.gender === 'M' ? 'ذكر' : 'أنثى'} />
          </ListItem>
          <ListItem>
            <ListItemText primary="العنوان" secondary={userData.address} />
          </ListItem>
          <ListItem>
            <ListItemText primary="الحالة الاجتماعية" secondary={userData.socialStatus} />
          </ListItem>
          <ListItem>
            <ListItemText primary="الجنسية" secondary={userData.nationality} />
          </ListItem>
          {/* <ListItem>
            <ListItemText primary="حالة التبرع" secondary={userData.donationStats || 'غير متوفر'} />
          </ListItem> */}
          {/* <ListItem>
            <ListItemText primary="إجمالي التبرعات" secondary={userData.totalDonated || 'غير متوفر'} />
          </ListItem> */}
          {/* <ListItem>
            <ListItemText primary="التبرعات الأخيرة" secondary={userData.recentDonations || 'غير متوفر'} />
          </ListItem> */}
          <ListItem>
            <ListItemText 
              primary="حالة المتبرع" 
              secondary={userData.isDonor ? 'متبرع' : 'غير متبرع'} 
            />
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
}

export default Profile;