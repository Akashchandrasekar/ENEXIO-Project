import { Box, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";

const teamMembers = [
  {
    name: "Latanya Juica",
    role: "Constructor",
    imgSrc:
      "https://img.freepik.com/free-photo/plumber-holding-plunger_1368-742.jpg",
  },
  {
    name: "Alien Metchikoff",
    role: "Founder",
    imgSrc:
      "https://img.freepik.com/free-photo/cheerful-engineer-with-set-square_1149-1218.jpg?t=st=1734615336~exp=1734618936~hmac=dda5638a79b172eace2cde1b44310389db18497988cf97487fc6bed14c0c216c&w=360",
  },
  {
    name: "Jordan Sisomphou",
    role: "Engineer",
    imgSrc:
      "https://img.freepik.com/free-photo/cheerful-engineer-with-set-square_1149-1218.jpg?t=st=1734615336~exp=1734618936~hmac=dda5638a79b172eace2cde1b44310389db18497988cf97487fc6bed14c0c216c&w=360",
  },
  {
    name: "Margorie Hych",
    role: "Plumber",
    imgSrc:
      "https://img.freepik.com/free-photo/man-smiling-with-red-helmet-blueprints_1187-796.jpg?t=st=1734615516~exp=1734619116~hmac=6e4d5fde9a508f8d8b7ff60d42376fbd8c2dae656738ea1bfb0990ab4680f9c1&w=360",
  },
];

const Teams = () => {
  return (
    <Box mt={30}>
      <Box display="flex" flexDirection="column">
        <Typography
          variant="h5"
          sx={{
            background: "linear-gradient(90deg, #ff7043, #ff9800)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "Oleo Script",
            display: "inline-block",
            fontSize: "28px",
            textAlign: "center",
          }}
        >
          Team & Advisory&nbsp;
          <Typography
            variant="h5"
            component="span"
            sx={{
              fontWeight: 600,
              fontSize: "24px",
              color: "black",
            }}
          >
            board___
          </Typography>
        </Typography>

        <Typography
          variant="h5"
          mt={3}
          sx={{
            color: "grey",
            textAlign: "center",
            fontFamily: "Poppins",
            display: "inline-block",
            fontSize: { xs: "10px", sm: "12px" }, // Adjust font size for small screens
          }}
        >
          You will find yourself working in a true partnership that results in
          an incredible <br /> experience and an end product that is the best.
        </Typography>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        gap={5}
        flexWrap="wrap"
        mt={5}
        sx={{
          flexDirection: { xs: "column", sm: "row" }, // Stack items on small screens
        }}
      >
        {teamMembers.map((member, index) => (
          <Box key={index} textAlign="center" position="relative" sx={{ mb: 5 }}>
            <Box
              component="img"
              src={member.imgSrc}
              alt={member.name}
              sx={{
                width: { xs: "100%", sm: "230px" }, // Full width on small screens, fixed width on larger screens
                height: "330px",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
            <Box
              sx={{
                bgcolor: "#e64a19",
                color: "white",
                borderRadius: "2px",
                position: "relative",
                height: "1.3cm",
                bottom: "2.5cm",
                fontWeight: "600",
                width: { xs: "100%", sm: "6cm" }, // Full width on small screens
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography sx={{ textAlign: "center", fontSize: { xs: "11px", sm: "13px" } }}>
                {member.name}
              </Typography>
            </Box>

            <Box
              display="flex"
              justifyContent="center"
              gap={1}
              position="relative"
              bottom="1cm"
              mt={1}
            >
              <FacebookIcon sx={{ fontSize: "16px" }} />
              <TwitterIcon sx={{ fontSize: "16px" }} />
              <GoogleIcon sx={{ fontSize: "16px" }} />
              <InstagramIcon sx={{ fontSize: "16px" }} />
            </Box>
            <Typography
              sx={{
                color: "grey",
                position: "relative",
                bottom: "2cm",
                fontSize: { xs: "11px", sm: "13px" }, // Adjust role font size
              }}
            >
              {member.role}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Teams;
