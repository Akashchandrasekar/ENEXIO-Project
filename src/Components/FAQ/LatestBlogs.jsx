import React from "react";
import { Box, Grid, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";

const blogs = [
  {
    date: "February 24, 2018",
    category: "Business",
    title: "Loft Office With Vintage Decor For Working",
    description:
      "It's no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching...",
    image: "https://st2.depositphotos.com/1010683/10175/i/950/depositphotos_101757064-stock-photo-industrial-buildings-at-large-factory.jpg", // Replace with actual image URL
    link: "#",
  },
  {
    date: "May 24, 2018",
    category: "Fashion",
    title: "Australia's provider of industry-based research",
    description:
      "It's no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching...",
    image: "https://png.pngtree.com/thumb_back/fw800/background/20230828/pngtree-a-large-industrial-plant-at-night-with-many-buildings-image_13121615.jpg", // Replace with actual image URL
    link: "#",
  },
  {
    date: "January 24, 2018",
    category: "Technology",
    title: "U.S. fund managers trim bank stocks on profit worries",
    description:
      "It's no secret that the digital industry is booming. From exciting startups to global brands, companies are reaching...",
    image: "https://www.robomotion.co.uk/wp-content/uploads/2021/01/shutterstock_1199133760.jpg", // Replace with actual image URL
    link: "#",
  },
];

const LatestBlogs = () => {
  return (
    <Box m={10} sx={{ mt: 5, px: 3 }}>
      {/* Section Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "600",
          textAlign: "start",
          fontSize: "24px", // Font size for the main heading
          marginBottom: "10px", // Spacing below the heading
          "& span": {
            background: "linear-gradient(90deg, #ff7043, #ff9800)", // Gradient background
            WebkitBackgroundClip: "text", // Clip text to gradient
            WebkitTextFillColor: "transparent", // Transparent text
            fontFamily: "'Oleo Script', cursive", // Font family for span
            display: "inline-block",
            fontSize: "34px", // Font size for span text
          },
        }}
      >
        Latest <span>Blog ----</span>
      </Typography>

      {/* Blog Cards */}
      <Grid
        container
        spacing={3}
        sx={{
          justifyContent: "center", // Centers the cards in the row
          alignItems: "stretch", // Ensures consistent card height
        }}
      >
        {blogs.map((blog, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: "100%", // Ensures consistent height
                display: "flex",
                flexDirection: "column", // Align content vertically
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              {/* Blog Image */}
              <CardMedia component="img" height="200" image={blog.image} alt={blog.title} />

              {/* Blog Content */}
              <CardContent
                sx={{
                  flexGrow: 1, // Ensures content stretches to fill card
                }}
              >
                <Typography variant="subtitle2" sx={{ color: "#9e9e9e" }}>
                  {blog.date} • {blog.category}
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold", mt: 1, mb: 2 }}>
                  {blog.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#757575", mb: 2 }}>
                  {blog.description}
                </Typography>
              </CardContent>
              <Button
                variant="text"
                sx={{
                  color: "#ff7043",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  alignSelf: "flex-start",
                  mb: 2,
                  ml: 2,
                }}
                href={blog.link}
              >
                Read More &gt;
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LatestBlogs;
