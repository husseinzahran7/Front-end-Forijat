import React from "react";
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
  IconButton,
  useTheme,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import ShareIcon from "@mui/icons-material/Share";
// This is a mock data array. In a real application, you would fetch this data from your API.
const mockCases = [
  { id: 1, name: "John Doe", amount: 5000, raised: 2500 },
  { id: 2, name: "Jane Smith", amount: 7500, raised: 3000 },
  { id: 3, name: "Bob Johnson", amount: 3000, raised: 1000 },
];

function CardC({
  id,
  InvioceNumber,
  Story,
  totalAmount,
  raisedAmount,
  handleShareClick,
  remainingAmount,
  case_,
}) {
  const theme = useTheme();
  const progress = Math.round((raisedAmount / totalAmount) * 100);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "356px",
          border: "1px solid #ddd",
          borderRadius: "20px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
        }}
      >
        {/* top part */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(to left, #182847, #009DDC)",
            width: "356px",
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
              <Typography textAlign="center" 
              // add limit at 100 characters

              variant="h6"
              sx={{
                fontSize: "1rem",
                // fontWeight: 600,
                lineHeight: "1.5rem",
                // color: theme.palette.common.white,
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
              }}

              >{Story}</Typography>
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
              <Typography textAlign="center" color="white" variant="caption"
              sx={{
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 1,
                WebkitBoxOrient: "vertical",
              }}
              >
                {/* {"Invoice number: "}  */}
                {"رقم الفاتورة: "}
                {InvioceNumber}
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
            <CircularProgress variant="determinate" value={progress} />
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
                {`${Math.round(progress)}%`}
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
              {"المبلغ المتبقي"}
            </Typography>
            <Typography
              variant="caption"
              component="div"
              sx={{ color: "text.secondary" }}
            >
              {remainingAmount}
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
              {`${Math.round(progress)}%`}
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
            href={`/donate/${case_.invoice_number}`}
            color="primary"
            sx={{ width: "100%", borderRadius: "50px" }}
          >
            {"تبرع الان"}
          </Button>
        </CardActions>
      </Box>
    </>
  );
}

export default CardC;
