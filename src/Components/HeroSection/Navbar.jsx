import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export default function NavBar() {
  const menuItems = [
    { label: "Home", hasIcon: true },
    { label: "About Us", hasIcon: false },
    { label: "Services", hasIcon: true },
    { label: "Shop", hasIcon: true },
    { label: "Pages", hasIcon: true },
    { label: "Blog", hasIcon: true },
    { label: "Contact Us", hasIcon: false },
  ];

  const [activeMenu, setActiveMenu] = React.useState(null);
  const [isQuoteActive, setIsQuoteActive] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleToggle = (label) => {
    setActiveMenu((prev) => (prev === label ? null : label));
  };

  const handleQuoteToggle = () => {
    setIsQuoteActive((prev) => !prev);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <Box display="flex" justifyContent="center">
      <AppBar
        position="absolute"
        sx={{
          bgcolor: "white",
          color: "black",
          p: 1,
          top: 130,
          left: 121,
          right: 0,
          zIndex: 1100,
          width: "84%",
          transform: "translateY(-20px)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: "block", md: "none" } }} // Show on mobile only
            onClick={handleMobileMenuToggle}
          >
            <MenuIcon />
          </IconButton>

          {/* Desktop Menu (Hide on mobile) */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" }, // Hide on small screens
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            {menuItems.map((item, index) => (
              <Box
                key={item.label}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: item.hasIcon ? "pointer" : "default",
                  // Add gap between About Us and Services
                  marginRight: index === 1 ? "20px" : "0", // This adds the gap after "About Us"
                }}
                onClick={() => item.hasIcon && handleToggle(item.label)}
                onMouseEnter={() => item.hasIcon && setActiveMenu(item.label)}
                onMouseLeave={() => item.hasIcon && setActiveMenu(null)}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontSize: "15px", fontWeight: 600 }}
                >
                  {item.label}
                </Typography>
                {item.hasIcon && (
                  <>
                    {activeMenu === item.label ? (
                      <ArrowDropUpIcon sx={{ color: "orange" }} />
                    ) : (
                      <ArrowDropDownIcon sx={{ color: "orange" }} />
                    )}
                  </>
                )}
              </Box>
            ))}
          </Box>

          {/* Mobile Menu (Show when menu icon is clicked) */}
          {isMobileMenuOpen && (
            <Box
              sx={{
                display: { xs: "flex", md: "none" }, // Only show on mobile screens
                flexDirection: "column",
                width: "100%",
                alignItems: "flex-start",
                gap: 2,
                mt: 2,
              }}
            >
              {menuItems.map((item, index) => (
                <Box
                  key={item.label}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: item.hasIcon ? "pointer" : "default",
                    padding: "10px 0",
                    // Add gap between About Us and Services in mobile as well
                    marginBottom: index === 1 ? "20px" : "0", // This adds the gap after "About Us" in mobile
                  }}
                  onClick={() => item.hasIcon && handleToggle(item.label)}
                  onMouseEnter={() => item.hasIcon && setActiveMenu(item.label)}
                  onMouseLeave={() => item.hasIcon && setActiveMenu(null)}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontSize: "15px", fontWeight: 600 }}
                  >
                    {item.label}
                  </Typography>
                  {item.hasIcon && (
                    <>
                      {activeMenu === item.label ? (
                        <ArrowDropUpIcon sx={{ color: "orange" }} />
                      ) : (
                        <ArrowDropDownIcon sx={{ color: "orange" }} />
                      )}
                    </>
                  )}
                </Box>
              ))}
            </Box>
          )}

          <Button
            color="inherit"
            onClick={handleQuoteToggle}
            sx={{
              flexGrow: 1,
              fontSize: "14px",
              fontWeight: 600,
              fontFamily: "Poppins",
              textTransform: "none",
              bgcolor: "#ff7043",
              color: "white",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            Get a Quote
            {isQuoteActive ? (
              <ArrowDropUpIcon sx={{ color: "white" }} />
            ) : (
              <ArrowDropDownIcon sx={{ color: "white" }} />
            )}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
