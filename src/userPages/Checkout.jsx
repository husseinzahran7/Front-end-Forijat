import React, { useEffect, useState } from "react";
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
} from "@mui/material";
import Paypal from "../components/PayPal";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import API_ENDPOINTS from "../../apiConfig";

function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const [donationAmount, setDonationAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [user, setUser] = useState(null);
  const [creditInfo, setCreditInfo] = useState({
    creditNumber: "",
    expiryDate: "",
    CCV: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [caseDate, setCaseDate] = useState([]);
  const [lastPart, setLastPart] = useState("");

  const location = useLocation();
  const { invoice_number, amount } = location.state || {}; // Extract the state data

  useEffect(() => {
    // display user
    const storedUserData = localStorage.getItem("user");
    // console.log(storedUserData.user);
    if (storedUserData) {
      try {
        const parsedData = JSON.parse(storedUserData);
        setUser(parsedData.user); // Extract the user property
      } catch (err) {
        console.error("Error parsing user data:", err);
      }
    }

    setDonationAmount(amount);
  }, [invoice_number, amount]);

  const handlecreditInfoChange = (e) => {
    const { name, value } = e.target;

    if (name === "creditNumber") {
      // Allow only numbers
      const numericValue = value
        .replace(/\D/g, "")
        .replace(/(\d{4})(?=\d)/g, "$1 ")
        .trim(); // Remove non-numeric characters
      //const formattedValue = numericValue.replace(/(\d{4})(?=\d)/g, '$1 ');
      console.log(numericValue);
      setCreditInfo((prev) => ({
        ...prev,
        [name]: numericValue,
      }));
    } else if (name === "CCV") {
      // Allow only numeric values for CCV (max 3 digits)
      const numericValue = value.replace(/\D/g, "").slice(0, 3); // Restrict to 3 digits
      setCreditInfo((prev) => ({
        ...prev,
        [name]: numericValue,
      }));
    } else if (name === "expiryDate") {
      // Validate and format expiry date as MM/YY
      const formattedValue = value
        .replace(/\D/g, "") // Remove non-numeric characters
        .slice(0, 4) // Limit to 4 characters (MMYY)
        .replace(/(\d{2})(\d{1,2})/, "$1/$2"); // Format as MM/YY
      setCreditInfo((prev) => ({
        ...prev,
        [name]: formattedValue,
      }));
    } else {
      // For other fields, allow the input as is
      setCreditInfo((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const steps = ["تفاصيل التبرع", "المعلومات الشخصية", "الدفع", "التأكيد"];

  const navigate = useNavigate();

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (!user) {
    return <Typography>Loading user data...</Typography>;
  }

  const validateCreditInfo = () => {
    const newErrors = {};
    const cardNumberRegex = /^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/; // Matches 16 digits with optional spaces
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/; // Matches MM/YY format
    const ccvRegex = /^\d{3}$/;

    if (!cardNumberRegex.test(creditInfo.creditNumber)) {
      console.log(creditInfo.creditNumber);
      console.log(cardNumberRegex);
      console.log(cardNumberRegex.test(creditInfo.creditNumber));
      newErrors.creditNumber = "يجب أن يكون رقم البطاقة مكونًا من 16 رقمًا.";
    }

    if (!expiryDateRegex.test(creditInfo.expiryDate)) {
      newErrors.expiryDate = "تاريخ الانتهاء يجب أن يكون بالشكل MM/YY.";
    } else {
      const [month, year] = creditInfo.expiryDate.split("/").map(Number);
      const currentDate = new Date();
      const currentYear = parseInt(
        currentDate.getFullYear().toString().slice(2),
        10
      ); // Last 2 digits
      const currentMonth = currentDate.getMonth() + 1;

      if (
        year < currentYear ||
        (year === currentYear && month < currentMonth)
      ) {
        newErrors.expiryDate = "تاريخ الانتهاء لا يمكن أن يكون في الماضي.";
      }
    }

    if (!ccvRegex.test(creditInfo.CCV)) {
      newErrors.CCV = "CVV يجب أن يكون مكونًا من 3 أرقام.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleNext = () => {
    if (activeStep === 2 && !paymentMethod)
      return alert("يرجى اختيار طريقة الدفع");

    if (
      activeStep === 2 &&
      paymentMethod === "credit" &&
      !validateCreditInfo()
    ) {
      return;
    }

    if (activeStep === steps.length - 1) {
      submitPayment();
      navigate("/"); // Navigate to home or success page
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  if (!invoice_number) {
    // move to cases page
    navigate("/Cases");
    return;
  }

  const submitPayment = async () => {
    // Send the donation data to the server
    setLoading(true);
    setError(null);
    setNotFound(false);
    const paymentData = {
      invoice_number: invoice_number,
      amount: donationAmount,
      paymentProvider: paymentMethod,
      donorEmail: user.email,
      donorName: `${user.firstName} ${user.lastName}`,
    };

  

    try {
      console.log(paymentData);
      const response = await axios.post(
        API_ENDPOINTS.donationApi,
        paymentData,
      );
      console.log(response);

      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(err.message); // Handle error
      console.log(err.message);
      // console.log("err.message");
      setLoading(false);
    } finally {
      setLoading(false);
      setNotFound(true);
    }
  };
  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              {"تفاصيل التبرع"}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {`رقم الفاتورة: ${invoice_number}`}
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="المبلغ"
                  type="number"
                  variant="outlined"
                  // value={donationAmount==""?amount:donationAmount}
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  placeholder="أدخل مبلغ التبرع"
                />
              </Grid>
            </Grid>
            {/* <Paypal /> */}
          </Box>
        );
      case 1:
        return (
          <Box
            sx={{
              p: 3,
              //  direction: "rtl"
            }}
          >
            <Typography variant="h6" gutterBottom>
              المعلومات الشخصية
            </Typography>

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="الاسم الكامل"
                  name="fullName"
                  //value={personalInfo.fullName}
                  value={user.firstName + " " + user.lastName || ""}
                  //onChange={handlePersonalInfoChange}
                  variant="outlined"
                  disabled={true}
                  sx={{
                    direction: "ltr",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="البريد الإلكتروني"
                  name="email"
                  type="email"
                  value={user.email || ""}
                  onChange={handlePersonalInfoChange}
                  variant="outlined"
                  disabled={true}
                  sx={{
                    direction: "ltr",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="رقم الهاتف"
                  name="phone"
                  type="tel"
                  value={user.phoneNumber || ""}
                  onChange={handlePersonalInfoChange}
                  variant="outlined"
                  disabled={true}
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
                    required
                  >
                    <FormControlLabel
                      value="credit"
                      control={<Radio />}
                      label="بطاقة الائتمان"
                      required
                    />

                    <FormControlLabel
                      value="paypal"
                      control={<Radio />}
                      label="PayPal"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              {paymentMethod === "credit" && (
                <>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="رقم البطاقة"
                      variant="outlined"
                      type="text"
                      required
                      name="creditNumber"
                      //value={creditInfo.creditNumber.replace(/(\d{4})(?=\d)/g, '$1 ')}
                      value={creditInfo.creditNumber}
                      onChange={handlecreditInfoChange}
                      inputProps={{ maxLength: 19 }}
                      error={!!errors.creditNumber}
                      helperText={errors.creditNumber}
                      dir="ltr"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="تاريخ الانتهاء"
                      variant="outlined"
                      placeholder="MM/YY"
                      name="expiryDate"
                      value={creditInfo.expiryDate}
                      onChange={handlecreditInfoChange}
                      error={!!errors.expiryDate}
                      helperText={errors.expiryDate}
                      dir="ltr"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="CVV"
                      variant="outlined"
                      type="password"
                      required
                      inputProps={{ maxLength: 3 }}
                      name="CCV"
                      value={creditInfo.CCV}
                      onChange={handlecreditInfoChange}
                      error={!!errors.CCV}
                      helperText={errors.CCV}
                      dir="ltr"
                    />
                  </Grid>
                </>
              )}
              {paymentMethod === "paypal" && (
                <Grid item xs={12}>
                  <Typography variant="body2">
                    سيتم توجيهك إلى PayPal لإتمام عملية الدفع
                  </Typography>
                  <Box sx={{ mt: 2, textAlign: "center" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        // In a real-world scenario, this would integrate with PayPal's SDK
                        alert("سيتم توجيهك إلى PayPal");
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
          <Box sx={{ p: 3, textAlign: "center" }}>
            <Typography variant="h5" gutterBottom>
              شكراً على تبرعك
            </Typography>
            <Typography variant="body1" gutterBottom>
              لقد تمت عملية التبرع بنجاح
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle1">تفاصيل التبرع:</Typography>
              <Typography>رقم الفاتورة: {invoice_number}</Typography>
              <Typography>المبلغ: {donationAmount} د.أ</Typography>
              <Typography>
                طريقة الدفع:{" "}
                {paymentMethod === "credit"
                  ? "بطاقة الائتمان"
                  : paymentMethod === "bank"
                  ? "التحويل البنكي"
                  : paymentMethod === "apple"
                  ? "Apple Pay"
                  : paymentMethod === "paypal"
                  ? "PayPal"
                  : "غير محدد"}
              </Typography>
              <Typography>
                الاسم: {user.firstName + " " + user.lastName}
              </Typography>
            </Box>
          </Box>
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <Container maxWidth="md" sx={{ my: 6, direction: "rtl" }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          sx={{ mb: 2, direction: "ltr" }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {/* Step Content */}
        <Box sx={{ mt: 3, mb: 2 }}>{renderStepContent(activeStep)}</Box>

        {/* Navigation Buttons */}
        <Divider sx={{ my: 2 }} />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="outlined"
            onClick={handleBack}
            sx={{
              visibility: activeStep !== 0 ? "visible" : "hidden",
            }}
          >
            {"رجوع"}
          </Button>
          <Button variant="contained" color="primary" onClick={handleNext}>
            {activeStep === steps.length - 1 ? "اكتمال" : "التالي"}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Checkout;
