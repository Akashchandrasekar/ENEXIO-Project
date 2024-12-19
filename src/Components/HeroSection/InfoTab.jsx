import { Box } from "@mui/material";
import * as React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FactoryIcon from '@mui/icons-material/Factory';

const InfoTab = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box
      sx={{
        height: "4cm",
        bgcolor: "#212121",
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Stack vertically on small screens
        justifyContent: "space-between",
        alignItems: "start",
        padding: { xs: "20px", md: "0px 100px" }, // Responsive padding
        gap: { xs: 2, md: 0 },
      }}
    >
      <Box color="white" sx={{ mb: { xs: 2, md: 0 } }}>
        <List
          sx={{
            width: "100%",
            color: "background.paper",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, // Stack list items vertically on extra small screens
            gap: 2,
            mt: 2,
          }}
        >
          <ListItem
            sx={{
              width: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ListItemAvatar>
              <FactoryIcon
                sx={{ fontSize: { xs: "3rem", sm: "1.8rem", md: "1.2cm" } }}
              />
            </ListItemAvatar>
            <ListItemText
              primaryTypographyProps={{
                sx: {
                  fontSize: { xs: "18px", sm: "27px" },
                  fontWeight: "600",
                  color: "white",
                },
              }}
              secondaryTypographyProps={{
                sx: {
                  fontSize: { xs: "12px", sm: "12px" },
                  fontWeight: "600",
                  color: "#ff7043",
                },
              }}
              primary="Industrio"
              secondary="Industry and Engineering"
            />
          </ListItem>
        </List>{" "}
      </Box>
      <Box>
        <List
          sx={{
            width: "100%",
            color: "background.paper",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, // Stack list items vertically on extra small screens
            gap: 2,
            mt: 2,
          }}
        >
          <ListItem
            sx={{
              width: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ListItemAvatar>
              <WifiCalling3Icon
                sx={{ fontSize: { xs: "2rem", sm: "1.5rem", md: "1.2cm" } }}
              />
            </ListItemAvatar>
            <ListItemText
              primaryTypographyProps={{
                sx: {
                  fontSize: { xs: "12px", sm: "12px" },
                  fontWeight: "600",
                  color: "#ff7043",
                },
              }}
              secondaryTypographyProps={{
                sx: {
                  fontSize: { xs: "18px", sm: "17px" },
                  fontWeight: "600",
                  color: "white",
                },
              }}
              primary="Call us 9.00am-6.00pm"
              secondary="222-121-4562"
            />
          </ListItem>

          <ListItem
            sx={{
              width: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ListItemAvatar>
              <QueryBuilderIcon
                sx={{ fontSize: { xs: "2rem", sm: "1.5rem", md: "1.2cm" } }}
              />
            </ListItemAvatar>
            <ListItemText
              primaryTypographyProps={{
                sx: {
                  fontSize: { xs: "12px", sm: "12px" },
                  fontWeight: "600",
                  color: "#ff7043",
                },
              }}
              secondaryTypographyProps={{
                sx: {
                  fontSize: { xs: "18px", sm: "17px" },
                  fontWeight: "600",
                  color: "white",
                },
              }}
              primary="Monday to Friday"
              secondary="9.00am-6.00pm"
            />
          </ListItem>

          <ListItem
            sx={{
              width: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ListItemAvatar>
              <MailOutlineIcon
                sx={{ fontSize: { xs: "2rem", sm: "1.5rem", md: "1.2cm" } }}
              />
            </ListItemAvatar>
            <ListItemText
              primaryTypographyProps={{
                sx: {
                  fontSize: { xs: "12px", sm: "12px" },
                  fontWeight: "600",
                  color: "#ff7043",
                },
              }}
              secondaryTypographyProps={{
                sx: {
                  fontSize: { xs: "18px", sm: "17px" },
                  fontWeight: "600",
                  color: "white",
                },
              }}
              primary="E-mail us"
              secondary="support@gmail.com"
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default InfoTab;
