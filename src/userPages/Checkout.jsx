// import React, { useState } from 'react';
// import {
//   Container,
//   Typography,
//   Box,
//   Grid,
//   TextField,
//   Button,
//   Paper,
//   Stepper,
//   Step,
//   StepLabel,
//   FormControl,
//   FormControlLabel,
//   Radio,
//   RadioGroup,
//   Divider,
// } from '@mui/material';

// function Checkout() {
//   const [activeStep, setActiveStep] = useState(0);
//   const [donationAmount, setDonationAmount] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState('');
//   const [personalInfo, setPersonalInfo] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//   });

//   const steps = [
//     'تفاصيل التبرع',
//     'المعلومات الشخصية',
//     'الدفع',
//     'التأكيد'
//   ];

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handlePersonalInfoChange = (e) => {
//     const { name, value } = e.target;
//     setPersonalInfo(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const renderStepContent = (step) => {
//     switch (step) {
//       case 0:
//         return (
//           <Box sx={{ p: 3 }}>
//             <Typography variant="h6" gutterBottom>
//               تفاصيل التبرع
//             </Typography>
//             <Grid container spacing={3}>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="المبلغ"
//                   type="number"
//                   variant="outlined"
//                   value={donationAmount}
//                   onChange={(e) => setDonationAmount(e.target.value)}
//                   placeholder="أدخل مبلغ التبرع"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 {/* <FormControl component="fieldset"> */}
//                   {/* <Typography>طريقة التبرع</Typography> */}
//                   {/* <RadioGroup
//                     row
//                     value={paymentMethod}
//                     onChange={(e) => setPaymentMethod(e.target.value)}
//                   >
//                     <FormControlLabel 
//                       value="onetime" 
//                       control={<Radio />} 
//                       label="تبرع لمرة واحدة" 
//                     />
//                     <FormControlLabel 
//                       value="monthly" 
//                       control={<Radio />} 
//                       label="تبرع شهري" 
//                     />
//                   </RadioGroup> */}
//                 {/* </FormControl> */}
//               </Grid>
//             </Grid>
//           </Box>
//         );
//       case 1:
//         return (
//           <Box sx={{ p: 3 }}>
//             <Typography variant="h6" gutterBottom>
//               المعلومات الشخصية
//             </Typography>
//             <Grid container spacing={3}>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="الاسم الكامل"
//                   name="fullName"
//                   value={personalInfo.fullName}
//                   onChange={handlePersonalInfoChange}
//                   variant="outlined"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="البريد الإلكتروني"
//                   name="email"
//                   type="email"
//                   value={personalInfo.email}
//                   onChange={handlePersonalInfoChange}
//                   variant="outlined"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="رقم الهاتف"
//                   name="phone"
//                   type="tel"
//                   value={personalInfo.phone}
//                   onChange={handlePersonalInfoChange}
//                   variant="outlined"
//                 />
//               </Grid>
//             </Grid>
//           </Box>
//         );
//       case 2:
//         return (
//           <Box sx={{ p: 3 }}>
//             <Typography variant="h6" gutterBottom>
//               طريقة الدفع
//             </Typography>
//             <Grid container spacing={3}>
//               <Grid item xs={12}>
//                 <FormControl component="fieldset" fullWidth>
//                   <Typography>اختر طريقة الدفع</Typography>
//                   <RadioGroup>
//                     <FormControlLabel 
//                       value="credit" 
//                       control={<Radio />} 
//                       label="بطاقة الائتمان" 
//                     />
//                     <FormControlLabel 
//                       value="bank" 
//                       control={<Radio />} 
//                       label="التحويل البنكي" 
//                     />
//                     <FormControlLabel 
//                       value="apple" 
//                       control={<Radio />} 
//                       label="Apple Pay" 
//                     />
//                   </RadioGroup>
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="رقم البطاقة"
//                   variant="outlined"
//                   type="text"
//                   inputProps={{ maxLength: 16 }}
//                 />
//               </Grid>
//               <Grid item xs={6}>
//                 <TextField
//                   fullWidth
//                   label="تاريخ الانتهاء"
//                   variant="outlined"
//                   placeholder="MM/YY"
//                 />
//               </Grid>
//               <Grid item xs={6}>
//                 <TextField
//                   fullWidth
//                   label="CVV"
//                   variant="outlined"
//                   type="password"
//                   inputProps={{ maxLength: 3 }}
//                 />
//               </Grid>
//             </Grid>
//           </Box>
//         );
//       case 3:
//         return (
//           <Box sx={{ p: 3, textAlign: 'center' }}>
//             <Typography variant="h5" gutterBottom>
//               شكراً على تبرعك
//             </Typography>
//             <Typography variant="body1" gutterBottom>
//               لقد تمت عملية التبرع بنجاح
//             </Typography>
//             <Box sx={{ mt: 3 }}>
//               <Typography variant="subtitle1">
//                 تفاصيل التبرع:
//               </Typography>
//               <Typography>
//                 المبلغ: {donationAmount} ريال
//               </Typography>
//               <Typography>
//                 طريقة التبرع: {paymentMethod === 'onetime' ? 'تبرع لمرة واحدة' : 'تبرع شهري'}
//               </Typography>
//               <Typography>
//                 الاسم: {personalInfo.fullName}
//               </Typography>
//             </Box>
//           </Box>
//         );
//       default:
//         return 'Unknown step';
//     }
//   };

//   return (
//     <Container maxWidth="md" sx={{ my: 6, direction: 'rtl' }}>
//       <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
//         <Stepper activeStep={activeStep} alternativeLabel>
//           {steps.map((label) => (
//             <Step key={label}>
//               <StepLabel>{label}</StepLabel>
//             </Step>
//           ))}
//         </Stepper>

//         {/* Step Content */}
//         <Box sx={{ mt: 3, mb: 2 }}>
//           {renderStepContent(activeStep)}
//         </Box>

//         {/* Navigation Buttons */}
//         <Divider sx={{ my: 2 }} />
//         <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//           {activeStep !== 0 && (
//             <Button 
//               variant="outlined" 
//               onClick={handleBack}
//             >
//               {"رجوع"}
//             </Button>
//           )}
//           <Button 
//             variant="contained" 
//             color="primary" 
//             onClick={handleNext}
//           >
//             {activeStep === steps.length - 1 ? 'اكتمال' : 'التالي'}
//           </Button>
//         </Box>
//       </Paper>
//     </Container>
//   );
// }

// export default Checkout;


// import React, { useState } from 'react';
// import { 
//   PayPalScriptProvider, 
//   PayPalButtons 
// } from "@paypal/react-paypal-js";
// import {
//   Container,
//   Typography,
//   Box,
//   Grid,
//   TextField,
//   Paper,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogContentText,
//   DialogActions,
//   Button
// } from '@mui/material';

// function PayPalCheckout() {
//   const [donationAmount, setDonationAmount] = useState('');
//   const [openSuccessDialog, setOpenSuccessDialog] = useState(false);
//   const [paymentDetails, setPaymentDetails] = useState(null);

//   // PayPal Sandbox Configuration
//   const initialOptions = {
//     clientId: "YOUR_PAYPAL_SANDBOX_CLIENT_ID", // Replace with your actual Sandbox Client ID
//     currency: "USD",
//     intent: "capture",
//   };

//   const createOrder = (data, actions) => {
//     return actions.order.create({
//       purchase_units: [
//         {
//           amount: {
//             value: donationAmount
//           },
//           description: "Donation to Amal Organization"
//         }
//       ]
//     });
//   };

//   const onApprove = (data, actions) => {
//     return actions.order.capture().then((details) => {
//       // Save payment details and show success dialog
//       setPaymentDetails(details);
//       setOpenSuccessDialog(true);
//     });
//   };

//   const handleCloseSuccessDialog = () => {
//     setOpenSuccessDialog(false);
//     // Reset donation amount
//     setDonationAmount('');
//   };

//   return (
//     <Container maxWidth="md" sx={{ my: 6, direction: 'rtl' }}>
//       <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
//         <Typography variant="h5" gutterBottom align="center">
//           {"التبرع عبر PayPal"}
//         </Typography>

//         <Grid container spacing={3}>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               label="مبلغ التبرع"
//               type="number"
//               variant="outlined"
//               value={donationAmount}
//               onChange={(e) => setDonationAmount(e.target.value)}
//               placeholder="أدخل مبلغ التبرع"
//               InputProps={{
//                 endAdornment: <Typography variant="body2">دولار أمريكي</Typography>
//               }}
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <PayPalScriptProvider options={initialOptions}>
//               <PayPalButtons
//                 disabled={!donationAmount}
//                 style={{ 
//                   layout: "vertical",
//                   color:  "blue",
//                   shape:  "rect",
//                   label:  "paypal"
//                 }}
//                 createOrder={createOrder}
//                 onApprove={onApprove}
//                 onError={(err) => {
//                   console.error("PayPal Checkout Error", err);
//                   alert("حدث خطأ أثناء عملية الدفع");
//                 }}
//               />
//             </PayPalScriptProvider>
//           </Grid>
//         </Grid>

//         {/* Success Dialog */}
//         <Dialog
//           open={openSuccessDialog}
//           onClose={handleCloseSuccessDialog}
//         >
//           <DialogTitle>{"تم التبرع بنجاح"}</DialogTitle>
//           <DialogContent>
//             <DialogContentText>
//               شكراً لتبرعك! 
//               {paymentDetails && (
//                 <>
//                   <Typography>
//                     رقم الطلب: {paymentDetails.id}
//                   </Typography>
//                   <Typography>
//                     المبلغ: {paymentDetails.purchase_units[0].amount.value} دولار
//                   </Typography>
//                 </>
//               )}
//             </DialogContentText>
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleCloseSuccessDialog} color="primary">
//               إغلاق
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </Paper>
//     </Container>
//   );
// }

// export default PayPalCheckout;



import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Paper,
  Stepper,
  Step,
  StepLabel,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Divider,
} from '@mui/material';

function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const [donationAmount, setDonationAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  const steps = [
    'تفاصيل التبرع',
    'المعلومات الشخصية',
    'الدفع',
    'التأكيد'
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              تفاصيل التبرع
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="المبلغ"
                  type="number"
                  variant="outlined"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  placeholder="أدخل مبلغ التبرع"
                />
              </Grid>
            </Grid>
          </Box>
        );
      case 1:
        return (
          <Box sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              المعلومات الشخصية
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="الاسم الكامل"
                  name="fullName"
                  value={personalInfo.fullName}
                  onChange={handlePersonalInfoChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="البريد الإلكتروني"
                  name="email"
                  type="email"
                  value={personalInfo.email}
                  onChange={handlePersonalInfoChange}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="رقم الهاتف"
                  name="phone"
                  type="tel"
                  value={personalInfo.phone}
                  onChange={handlePersonalInfoChange}
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Box>
        );
      case 2:
        return (
          <Box sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              طريقة الدفع
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControl component="fieldset" fullWidth>
                  <Typography>اختر طريقة الدفع</Typography>
                  <RadioGroup
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  >
                    <FormControlLabel 
                      value="credit" 
                      control={<Radio />} 
                      label="بطاقة الائتمان" 
                    />
                    <FormControlLabel 
                      value="bank" 
                      control={<Radio />} 
                      label="التحويل البنكي" 
                    />
                    <FormControlLabel 
                      value="apple" 
                      control={<Radio />} 
                      label="Apple Pay" 
                    />
                    <FormControlLabel 
                      value="paypal" 
                      control={<Radio />} 
                      label="PayPal" 
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              {paymentMethod === 'credit' && (
                <>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="رقم البطاقة"
                      variant="outlined"
                      type="text"
                      inputProps={{ maxLength: 16 }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="تاريخ الانتهاء"
                      variant="outlined"
                      placeholder="MM/YY"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="CVV"
                      variant="outlined"
                      type="password"
                      inputProps={{ maxLength: 3 }}
                    />
                  </Grid>
                </>
              )}
              {paymentMethod === 'paypal' && (
                <Grid item xs={12}>
                  <Typography variant="body2">
                    سيتم توجيهك إلى PayPal لإتمام عملية الدفع
                  </Typography>
                  <Box sx={{ mt: 2, textAlign: 'center' }}>
                    <Button 
                      variant="contained" 
                      color="primary"
                      onClick={() => {
                        // In a real-world scenario, this would integrate with PayPal's SDK
                        alert('سيتم توجيهك إلى PayPal');
                      }}
                    >
                      الانتقال إلى PayPal
                    </Button>
                  </Box>
                </Grid>
              )}
            </Grid>
          </Box>
        );
      case 3:
        return (
          <Box sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h5" gutterBottom>
              شكراً على تبرعك
            </Typography>
            <Typography variant="body1" gutterBottom>
              لقد تمت عملية التبرع بنجاح
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle1">
                تفاصيل التبرع:
              </Typography>
              <Typography>
                المبلغ: {donationAmount} ريال
              </Typography>
              <Typography>
                طريقة الدفع: {
                  paymentMethod === 'credit' ? 'بطاقة الائتمان' :
                  paymentMethod === 'bank' ? 'التحويل البنكي' :
                  paymentMethod === 'apple' ? 'Apple Pay' :
                  paymentMethod === 'paypal' ? 'PayPal' : 'غير محدد'
                }
              </Typography>
              <Typography>
                الاسم: {personalInfo.fullName}
              </Typography>
            </Box>
          </Box>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <Container maxWidth="md" sx={{ my: 6, direction: 'rtl' }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {/* Step Content */}
        <Box sx={{ mt: 3, mb: 2 }}>
          {renderStepContent(activeStep)}
        </Box>

        {/* Navigation Buttons */}
        <Divider sx={{ my: 2 }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {activeStep !== 0 && (
            <Button 
              variant="outlined" 
              onClick={handleBack}
            >
              {"رجوع"}
            </Button>
          )}
          <Button 
            variant="contained" 
            color="primary" 
            onClick={handleNext}
          >
            {activeStep === steps.length - 1 ? 'اكتمال' : 'التالي'}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Checkout;