import { Box, Typography, Stack } from "@mui/material";
import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
export const About = () => {
  
  return (
    <Box
      sx={{ maxWidth: "1200px", margin: "0 auto", padding: "10px" }}
      display="flex"
      justifyContent="space-between"
    >
      <Box>
        {/* Heading Section */}
        <Box mt={3}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "600", fontSize: "24px", mb: 1 }}
          >
            Welcome to&nbsp;
            <span
              style={{
                background: "linear-gradient(90deg, #ff7043, #ff9800)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "Oleo Script",
                display: "inline-block",
                fontSize: "28px",
              }}
            >
              Industrio Company
            </span>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontWeight: "400",
              color: "grey",
              fontSize: "14px",
              textAlign: "justify",
              lineHeight: "1.6",
            }}
            mt={3}
          >
            Manufacturing industry became a key sector of production and labour{" "}
            <br />
            in European and North American countries during the Industrial{" "}
            <br />
            Revolution, upsetting previous mercantile and feudal economics.
          </Typography>
        </Box>
        {/* Bullet Points Section */}
        <Box display="flex" gap={10} mt={4}>
          {" "}
          <Stack spacing={2}>
            <Box display="flex" alignItems="center">
              <ArrowRightAltIcon sx={{ color: "orange", mr: 1 }} />
              <Typography
                variant="body1"
                sx={{ fontWeight: "500", color: "grey", fontSize: "15px" }}
              >
                Our Work Growth
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <ArrowRightAltIcon sx={{ color: "orange", mr: 1 }} />
              <Typography
                variant="body1"
                sx={{ fontWeight: "500", color: "grey", fontSize: "15px" }}
              >
                Our Work Innovation
              </Typography>
            </Box>
          </Stack>
          <Stack spacing={2}>
            <Box display="flex" alignItems="center">
              <ArrowRightAltIcon sx={{ color: "orange", mr: 1 }} />
              <Typography
                variant="body1"
                sx={{ fontWeight: "500", color: "grey", fontSize: "15px" }}
              >
                Our Work Growth
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <ArrowRightAltIcon sx={{ color: "orange", mr: 1 }} />
              <Typography
                variant="body1"
                sx={{ fontWeight: "500", color: "grey", fontSize: "15px" }}
              >
                Our Work Innovation
              </Typography>
            </Box>
          </Stack>
        </Box>
        <Box mt={3}>
          {" "}
          <Button
            color="inherit"
            sx={{
              flexGrow: 1,
              fontSize: "12px",
              fontWeight: 500,
              fontFamily: "Poppins",
              textTransform: "none",
              bgcolor: "#ff7043",
              color: "white",
              display: "flex",
              alignItems: "center",
              gap: "5px",
              height: "1cm",
              width: "7cm",
            }}
          >
            Learn about the services
          </Button>
        </Box>
      </Box>

      {/* Placeholder for Image Section */}

      <Box
        style={{
          borderRadius: "15px",
          //   overflow: "hidden",
        }}
      >
        <Avatar
          sx={{ width: "7cm", height: "7cm" }}
          alt="Remy Sharp"
          src="https://thumbs.dreamstime.com/b/construction-cranes-high-rise-building-dramatic-orange-s-sky-clouds-sunset-time-evening-site-commercial-127503035.jpg"
        />

        <Avatar
          sx={{
            width: "4cm",
            height: "4cm",
            position: "relatiue",
            top: "-150px",
            left: "160px",
          }}
          alt="Remy Sharp"
          src="https://thumbs.dreamstime.com/b/welder-mask-welding-metal-authentic-shooting-red-safety-glass-safe-117071181.jpg"
        >
          <video
            controls
            width="4cm"
            height="4cm"
            style={{
              position: "relative",
              top: "-150px",
              left: "160px",
              borderRadius: "15px",
            }}
          >
            <source
              src="https://thumbs.dreamstime.com/b/welder-mask-welding-metal-authentic-shooting-red-safety-glass-safe-117071181.jpg"
            />
            Your browser does not support the video tag.
          </video>
        </Avatar>
      </Box>
    </Box>
  );
};
