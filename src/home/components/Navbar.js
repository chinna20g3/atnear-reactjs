import React, { useState } from 'react';
import { Grid, Button, MenuItem, Menu, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import Logo from "../../assets/logo.png";
import { useNavigate } from 'react-router-dom';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from '@mui/material/useMediaQuery';

export const Navbar = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width:600px)'); // Detects mobile devices
  
  const linkStyle = {
    color: "black",
    textDecoration: "none",
    fontWeight: "bold",
    marginLeft: "20px",
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const [currentMenu, setCurrentMenu] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // For mobile drawer

  const handleMenuItemClick = (path) => {
    setIsDrawerOpen(false); // Close the drawer on mobile when navigating
    navigate(path);
  };

  const handleClick = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setCurrentMenu(menu);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setCurrentMenu(null);
  };

  const menus = {
    env: [
      { label: 'English - EN', path: '/tool1' },
      { label: 'हिंदी - HI', path: '/tool2' },
      { label: 'తెలుగు - TE', path: '/tool6' },
      { label: 'ಕನ್ನಡ - KN', path: '/tool5' }, 
      { label: 'मराठी - MR', path: '/tool3' },
      { label: 'বেঙ্গালি - BN', path: '/tool4' },
    ],
  };

  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        top: "0",
        zIndex: "1000",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 20px",
        fontSize: "14px",
      }}
    >
      {/* Logo */}
      <Grid item>
        <Button onClick={() => navigate("/")}>
          <img
            src={Logo}
            style={{ height: "50px", width: "60px", marginTop: "5px" }}
          />
        </Button>
      </Grid>

      {/* Login/Signup Button (Only for mobile, placed next to logo) */}
      {isMobile && (
        <Grid item>
          <Button 
            style={{ ...linkStyle, color: 'white' }} 
            onClick={() => navigate("/login")}
            size="small"
            sx={{
              backgroundColor: '#0076d7',
              '&:hover': {
                backgroundColor: '#6e7cfa',
              },
              marginLeft: '10px',
            }}
          >
            Login/Signup
          </Button>
        </Grid>
      )}

      {/* Menu for mobile devices */}
      {isMobile ? (
        <>
          <IconButton onClick={() => setIsDrawerOpen(true)} sx={{ marginLeft: 'auto' }}>
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            PaperProps={{
              sx: { width: 250, maxHeight: 'fit-content', marginTop: '64px' }, // Adjust height of the Drawer
            }}
          >
            <List>
              <ListItem button onClick={() => handleMenuItemClick("/free-listing")}>
                <ListItemText primary="Free Listing" />
              </ListItem>
              <ListItem button onClick={() => handleMenuItemClick("/advertise")}>
                <ListItemText primary="Advertise" />
              </ListItem>
              <ListItem button onClick={() => handleMenuItemClick("/about-us")}>
                <ListItemText primary="Join us" />
              </ListItem>
              <ListItem button onClick={() => handleMenuItemClick("/contact-us")}>
                <ListItemText primary="Contact us" />
              </ListItem>
              <ListItem button onClick={() => navigate("/login")}>
                <ListItemText primary="Login/Signup" />
              </ListItem>
              <ListItem button onClick={(e) => handleClick(e, 'env')}>
                <ListItemText primary="ENV" />
                <ArrowDropDownIcon sx={{ color: '#0076d7' }} />
              </ListItem>
            </List>
          </Drawer>
        </>
      ) : (
        // Menu for desktop devices
        <Grid item sx={{ flexGrow: 1 }}>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {currentMenu && menus[currentMenu].map((item, index) => (
                <MenuItem key={index} onClick={() => handleMenuItemClick(item.path)}>
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
            <Button style={linkStyle} onClick={() => navigate("/free-listing")} size="small">
              Free Listing
            </Button>
            <Button style={linkStyle} onClick={() => navigate("/advertise")} size="small">
              Advertise
            </Button>
            <Button style={linkStyle} onClick={() => navigate("/about-us")} size="small">
              Join us
            </Button>
            <Button style={linkStyle} onClick={() => navigate("/contact-us")} size="small">
              Contact us
            </Button>
          </Grid>
        </Grid>
      )}

      {/* ENV and Login/Signup for Desktop */}
      {!isMobile && (
        <Grid item>
          <Grid container spacing={1} alignItems="center">
            <Button 
              style={{ ...linkStyle, color: 'white' }} 
              onClick={() => navigate("/login")}
              size="small"
              sx={{
                backgroundColor: '#0076d7',
                '&:hover': {
                  backgroundColor: '#6e7cfa',
                }
              }}
            >
              Login/Signup
            </Button>
            <Button 
              style={{ ...linkStyle, color: '#0076d7' }} 
              onClick={(e) => handleClick(e, 'env')}  
              size="small"  
              endIcon={<ArrowDropDownIcon sx={{ marginLeft: '-8px', color: '#0076d7' }} />}
            >
              ENV
            </Button>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default Navbar;
