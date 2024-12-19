import { Box, Typography, Avatar, Grid, Divider } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const testimonials = [
  {
    name: "Sophia Thompson",
    position: "Nutritionist",
    review:
      "The team delivered innovative, high-quality solutions. Their expertise in engineering and nutrition made a huge impact. Impressed with their professional approach. I highly recommend them!",
    image:
      "https://img.freepik.com/free-photo/young-girl-showing-thumb-up-stretching-hand-light-gray-t-shirt-dark-grey-zip-front-hoodie-looking-cute_176474-18795.jpg?t=st=1734585145~exp=1734588745~hmac=f30efea30ec3b212e633c02baebdddda35c60385b76f4482a9d71addb2d79eaf&w=900",
  },
  {
    name: "Mark Williams",
    position: "Food Scientist",
    review:
      "An excellent experience working with this team! Their engineers provided practical, reliable, and creative solutions. They met deadlines with precision and delivered top-notch results. Truly outstanding!",
    image:
      "https://img.freepik.com/free-photo/pleased-handsome-male-customer-show-thumb-up-approval_176420-17945.jpg?t=st=1734585181~exp=1734588781~hmac=c82d9793c60f15fdf2fa7be26187c6a19cd144424d6dc7dac6c5e6da1f9621da&w=900",
  },
  {
    name: "Olivia Martinez",
    position: "Project Manager",
    review:
      "This team exceeded all my expectations! They combined technical expertise with great communication. The results were delivered on time and to a very high standard. Impressive work!",
    image:
      "https://img.freepik.com/free-photo/young-joyful-student-man-holding-thumb-up-isolated_171337-14947.jpg?t=st=1734585201~exp=1734588801~hmac=732368005c140358c1b57a37360ec625da6e3d3cfa936c62ce461c6f98a352c1&w=900",
  },
];

const Testinominals = () => {
  return (
    <Box mt={9}
      bgcolor="#212121"
      sx={{ padding: "5rem", color: "white", height: "6cm" }}
    >
      <Typography
        variant="h5"
        ml={8}
        sx={{
          fontWeight: "600",
          fontSize: "24px",
          mb: 3,
          textAlign: "start",
        }}
      >
        Client say{" "}
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
          about us ___
        </span>
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((testimonial, index) => (
          <Grid
            item
            xs={12}
            md={4}
            key={index}
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                mb: 2,
                maxWidth: "300px",
                margin: "0 auto",
                textAlign: "start",
              }}
            >
              {testimonial.review}
            </Typography>
            <Divider sx={{ borderColor: "red" }} />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                gap: 2,
                marginTop: 1,
                marginRight: 5,
              }}
            >
              <Avatar
                src={testimonial.image}
                alt={testimonial.name}
                sx={{
                  width: 80,
                  height: 80,
                }}
              />
              <Box sx={{ textAlign: "start" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {testimonial.name}
                </Typography>
                <Typography variant="subtitle2" sx={{ color: "#ff9800" }}>
                  {testimonial.position}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box>
        <List
          sx={{
            width: "100%",
            maxWidth: 1260,
            // bgcolor: "background.paper",
            marginLeft: "2cm",height:'3cm',
            //marginTop: "",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ListItem sx={{ bgcolor: "#eeeeee" }}>
            <ListItemAvatar>
              <TipsAndUpdatesIcon sx={{ color: "black", fontSize: "40px" }} />
            </ListItemAvatar>
            <ListItemText
              primary="Creative Ideas"
              secondary="Innovative and inspiring solutions for your projects"
              primaryTypographyProps={{
                color: "#000000",
                fontSize: "17px",
                fontWeight: 600,
              }}
              secondaryTypographyProps={{
                color: "grey",
                fontSize: "11px",
              }}
            />
          </ListItem>
          <ListItem sx={{ bgcolor: "#e64a19" }}>
            <ListItemAvatar>
              <VerifiedUserIcon />
            </ListItemAvatar>
            <ListItemText
              primary="Super Safety"
              secondary="Jan 7, 2014"
              secondary="Reliable and secure solutions to ensure safety"
              primaryTypographyProps={{
                color: "white",
                fontSize: "17px",
                fontWeight: 600,
              }}
              secondaryTypographyProps={{
                color: "white",
                fontSize: "11px",
              }}
            />
          </ListItem>
          <ListItem sx={{ bgcolor: "#212121" }}>
            <ListItemAvatar>
              <SupportAgentIcon />
            </ListItemAvatar>
            <ListItemText
              primary="24/7 Support"
              secondary="Always available to assist you anytime, anywhere"
              secondary="July 20, 2014"
              primaryTypographyProps={{
                color: "white",
                fontSize: "11px",
              }}
              secondaryTypographyProps={{
                color: "white",
                fontSize: "11px",
              }}
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Testinominals;
