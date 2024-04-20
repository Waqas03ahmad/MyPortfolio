import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import { Container, ListItemIcon, useMediaQuery } from "@mui/material";
import { NavLink } from "react-router-dom";
import MoreIcon from "@mui/icons-material/MoreVert";
import { ModeToggle } from "./App";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
}));

const drawerWidth = 240;
const navItems = [
  { name: "Home", to: "#home" },
  { name: "Services", to: "#service" },
  { name: "Projects", to: "#project" },
  { name: "Technology", to: "#technology" },
  { name: "About", to: "#about" },
];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        SoftTech
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.to}
            disablePadding
            components={NavLink}
            to={item.to}
          >
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
    
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Container>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              SoftTech
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button key={item.to} sx={{ color: "#fff" }} href={item.to}>
                  {item.name}
                </Button>
              ))}
            </Box>
            <IconButton
              color="inherit"
              sx={{ display: { sm: "none" }, marginLeft: "auto" }}
            >
              <MoreIcon />
            </IconButton>
            <ListItemIcon color="inherit">
              <ModeToggle />
            </ListItemIcon>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Container>
        <Box
          component="main"
          sx={{
            p: 3,
          }}
        >
          <Toolbar />
          <Grid container spacing={2}>
            <Grid xs={12} id="home">
              <Item elevation={4}>
                <Grid
                  container
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Grid item="true" xs={12} sm={7}>
                    <Box sx={{ textAlign: { xs: "center", sm: "start" } }}>
                      <Typography variant={'h3'}>
                        Lets scale up your business with professional frontend
                        developer...
                      </Typography>
                      <Typography marginY={1}>
                        {" "}
                        Get professional frontEnd Developer who will scale up
                        your business with creative, innovative, and modern user
                        interface. I am Waqas Ahmad FrontEnd developer with 1
                        years of experience. I develope User interface as per
                        your requirements. Let me to make your client happy.
                      </Typography>
                      <Typography>
                        <small>For more detail down load resume</small>
                      </Typography>
                      <Button variant="contained" sx={{ marginY: 1 }}>
                        Resume
                      </Button>
                    </Box>
                  </Grid>
                  <Grid
                    item="true"
                    xs={12}
                    sm={5}
                    sx={{
                      display: "flex",
                      justifyContent: { xs: "center", sm: "end" },
                    }}
                  >
                    <img src="../../../public/hero1.png" alt="waqas" />
                  </Grid>
                </Grid>
              </Item>
            </Grid>
            <Grid xs={12}>
              <Item elevation={4} id="service">
                Service
              </Item>
            </Grid>
            <Grid xs={12}>
              <Item elevation={4} id="project">
                Project
              </Item>
            </Grid>
            <Grid xs={12}>
              <Item elevation={4} id="technology">
                Technology
              </Item>
            </Grid>
            <Grid xs={12}>
              <Item elevation={4} id="about">
                About
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
