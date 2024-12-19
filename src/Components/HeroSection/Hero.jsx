import { Box, Button } from "@mui/material";
import React from "react";
import HeroImg from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <Box sx={{ position: "relative", width: "100%", height: "100vh" }}>
      <img
        src={HeroImg}
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "white",
          display: "flex",           // Flexbox for centering
          flexDirection: "column",   // Stack items vertically
          justifyContent: "center",  // Center content vertically
          alignItems: "center",      // Center content horizontally
          gap: "20px",               // Space between the title and button
          px: 2,                     // Add padding on the x-axis for smaller screens
          textAlign: { xs: "center", sm: "center", md: "left" }, // Text alignment for different screen sizes
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem", // Default font size for larger screens
            fontWeight: 700,
            lineHeight: 1.2,
            marginBottom: "20px",
            // Adjust font size for smaller screens
            fontSize: "2.5rem",
            '@media (max-width: 600px)': {
              fontSize: "1.8rem",  // Smaller font size for small screens
            },
          }}
        >
          We will provide the best{" "}
          <span style={{ color: "#d32f2f" }}>Industrial</span> service
        </h1>

        <Button
          color="inherit"
          sx={{
            fontSize: { xs: "10px", sm: "12px", md: "14px" }, // Font size changes based on screen size
            fontWeight: 600,
            fontFamily: "Poppins",
            textTransform: "none",
            bgcolor: "#ff7043",
            color: "white",
            padding: "10px 20px",
            width: "auto",  // Adjust width as needed
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "8px",  // Adding rounded corners
            '&:hover': {
              bgcolor: "#e64a19", // Hover effect for button
            }
          }}
        >
          Learn more →
        </Button>
      </Box>
    </Box>
  );
};

export default Hero;
