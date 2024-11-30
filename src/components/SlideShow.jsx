import React, { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";

const SlideShow = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(prevIndex);
  };

  useEffect(() => {
    if (slides.length > 0) {
      const timer = setInterval(() => {
        goToNextSlide();
      }, 5000); // Change slide every 3 seconds

      return () => clearInterval(timer);
    }
  }, [slides]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "95vh", md: "70vh" },
        overflow: "hidden",
      }}
    >
      {slides.map((slide, index) => (
        <Box
          key={index}
          sx={{
            display: index === currentIndex ? "block" : "none",
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          <img
            src={slide}
            alt={`Slide ${index + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "50% 50%",
            }}
          />
          {/* Text Overlay */}
          <Box
            sx={{
              // display: index === currentIndex ? 'block' : 'none',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              bgcolor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h3"
              component="h1"
              sx={{ animation: "fadeIn 1s ease-in-out" }}
            >
              Welcome to AMAL
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                mt: 1,
                animation: "fadeIn2 2s ease-in-out",
              }}
            >
              Empowering freedom through compassion and community support
            </Typography>

            {/* Display navigation dots */}
            <Box
              sx={{
                position: "absolute",
                bottom: 10,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              {slides.map((slide, index) => (
                <span
                  key={index}
                  style={{
                    display: "inline-block",
                    width: "10px",
                    height: "10px",
                    margin: "0 5px",
                    borderRadius: "50%",
                    backgroundColor: currentIndex === index ? "black" : "gray",
                    cursor: "pointer",
                  }}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </Box>

            {/* Button to Donate  */}

            <Button
              variant="contained"
              color="primary"
              size="large"
              // component={RouterLink}
              // to="/donate"
              sx={{
                mt: 2,
                animation: "fadeIn3 3s ease-in-out",
              }}
            >
              Donate Now
            </Button>
          </Box>
        </Box>
      ))}
      {/* Navigation Buttons */}
      <Box
        onClick={goToPreviousSlide}
        sx={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          color: "white",
          fontSize: "24px",
          cursor: "pointer",
          zIndex: 2,
        }}
      >
        &#10094;
      </Box>
      <Box
        onClick={goToNextSlide}
        sx={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          color: "white",
          fontSize: "24px",
          cursor: "pointer",
          zIndex: 2,
        }}
      >
        &#10095;
      </Box>
    </Box>
  );
};

export default SlideShow;
