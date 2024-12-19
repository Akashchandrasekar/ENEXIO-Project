import React from "react";
import { Box, Grid, Typography, Divider } from "@mui/material";

function WinningAwards() {
  return (
    <Box sx={{ backgroundColor: "#222", color: "#fff", py: 6, px: 4 }}>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        spacing={4}
        sx={{ maxWidth: "1200px", mx: "auto" }}
      >
        {/* Left Section: Title and Description */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 1,
            }}
          >
            Winning <span style={{ color: "#f77c00" }}>awards ----</span>{" "}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#aaa",
              lineHeight: 1.8,
              mt: 2,
            }}
          >
            You will find yourself working in a true partnership that results in
            an incredible experience, and an end product that is the best.
          </Typography>
        </Grid>

        {/* Right Section: Awards */}
        <Grid
          item
          xs={12} // Stacks vertically on smaller screens
          md={6}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" }, // Center on small screens, align right on larger screens
            alignItems: "center",
            gap: 4,
            mt: { xs: 3, md: 0 }, // Add margin top on smaller screens to separate from the top content
          }}
        >
          {/* First Award Image */}
          <Box
            component="img"
            src="https://marketplace.canva.com/EAFlVDzb7sA/1/0/1600w/canva-white-gold-elegant-modern-certificate-of-participation-bK_WEelNCjo.jpg"
            alt="Certificate"
            sx={{
              width: "150px",
              height: "auto",
              border: "2px solid #fff",
              borderRadius: "8px",
            }}
          />
          {/* Second Award Image */}
          <Box
            component="img"
            src="https://t4.ftcdn.net/jpg/02/01/82/51/360_F_201825112_dm1tHvITOxrZf7tA1lCSLLytD3ppx0nQ.jpg"
            alt="Certificate"
            sx={{
              width: "150px",
              height: "auto",
              border: "2px solid #fff",
              borderRadius: "8px",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default WinningAwards;
