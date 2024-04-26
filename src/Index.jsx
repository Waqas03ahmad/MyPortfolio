import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import { Container, ListItemIcon, useMediaQuery } from "@mui/material";
import { ModeToggle } from "./App";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import About from "./pages/about/About";
import Technology from "./pages/technology/Technology";
import Resume from "../public/resume.pdf";
import { CgWebsite } from "react-icons/cg";
import { SiCodesignal } from "react-icons/si";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { GrUserAdmin } from "react-icons/gr";
import { MdOutlineManageAccounts } from "react-icons/md";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "./pages/footer/Footer";
import SpeedDial1 from "./SpeedDail";
import SimpleSlider from "./pages/projects/Projects";
import VideoModal from "./pages/projects/Model";
import { MdFileDownload } from "react-icons/md";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? null : "#fff",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
}));

const Item1 = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? null : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const navItems = [
  { name: "Home", to: "#home" },
  { name: "Services", to: "#service" },
  { name: "Projects", to: "#project" },
  { name: "About", to: "#about" },
  { name: "Technology", to: "#technology" },
];

function Header() {
  const ismobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Container disableGutters={ismobile ? true : false}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              SoftTech
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button key={item.to} sx={{ color: "#fff" }} href={item.to}>
                  {item.name}
                </Button>
              ))}
            </Box>
            <ListItemIcon color="inherit" sx={{ marginLeft: "auto" }}>
              <ModeToggle />
            </ListItemIcon>
          </Toolbar>
        </Container>
      </AppBar>

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
                      <Typography
                        variant={"h3"}
                        sx={{ display: { xs: "none", sm: "block" } }}
                      >
                        Lets scale up your business with professional frontend
                        developer...
                      </Typography>
                      <Typography
                        variant={"h5"}
                        sx={{ display: { xs: "block", sm: "none" } }}
                      >
                        Lets scale up your business with professional frontend
                        developer...
                      </Typography>
                      <Typography marginY={1}>
                        Get professional frontEnd Developer who will scale up
                        your business with creative, innovative, and modern user
                        interface. I am Waqas Ahmad FrontEnd developer with 1
                        years of experience. I develope User interface as per
                        your requirements. Let me to make your client happy.
                      </Typography>
                      <Typography>
                        <small>For more detail down load resume</small>
                      </Typography>
                      <Button
                        variant="contained"
                        href={Resume}
                        download={Resume}
                        sx={{ marginY: 2 }}
                        endIcon={<MdFileDownload />}
                      >
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
                      marginTop: { xs: 5, sm: 0 },
                      maxWidth: "100%",
                    }}
                  >
                    <img
                      src="https://res.cloudinary.com/dt6z3lqko/image/upload/v1713669236/hero1_rdihos.png"
                      alt="waqas"
                    />
                  </Grid>
                </Grid>
              </Item>
              <Divider sx={{ mt: 5 }} />
            </Grid>
            <Grid xs={12} mt={5}>
              <Item1 elevation={4} id="service">
                <Box sx={{ flexGrow: 1 }}>
                  <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                  >
                    <Grid
                      xs={4}
                      sm={8}
                      md={12}
                      marginBottom={"10px"}
                      textAlign={"center"}
                    >
                      <Typography variant="h4">My Services</Typography>
                      <Typography variant="h6">
                        You will get the bellow services
                      </Typography>
                    </Grid>
                    {[
                      {
                        name: "UI Developement",
                        icon: <CgWebsite size={30} />,
                        description:
                          "We develope innovative, professoinal and best-performance websites, dashboards and more...",
                      },
                      {
                        name: "Design-Driven",
                        icon: <SiCodesignal size={30} />,
                        description:
                          "Creating task-driven, and design-driven according to given template using react...",
                      },
                      {
                        name: "Management",
                        icon: <MdOutlineManageAccounts size={30} />,
                        description:
                          "We create and manage your ecomerce, educational and other websites professionally...",
                      },
                      {
                        name: "Creativity",
                        icon: <IoPaperPlaneOutline size={30} />,
                        description:
                          "Develope Your UI creatively and professionally with react, MUI, and AI as per your requirments.",
                      },
                      {
                        name: "Admin Dashboard",
                        icon: <GrUserAdmin size={30} />,
                        description:
                          "Develope UI Administration dashboard, Educational, Ecommerce and other for your business...",
                      },
                      {
                        name: "Ecommerce Website",
                        icon: <CgWebsite size={30} />,
                        description:
                          "Innovative, creative and professional Ui for your Ecommerce website and products...",
                      },
                    ].map((val, index) => (
                      <Grid xs={4} sm={4} md={4} key={index} data-aos="zoom-in">
                        <motion.div whileHover={{ scale: 1.02 }}>
                          <Item
                            elevation={3}
                            sx={{
                              border: 0.5,
                              borderColor: "transparent",
                              "&:hover": {
                                borderColor: (theme) =>
                                  theme.palette.mode === "dark"
                                    ? "white"
                                    : "gray",
                              },
                            }}
                          >
                            <Card
                              sx={{
                                maxWidth: "100%",
                                height: {
                                  xs: "200px",
                                  sm: "270px",
                                  lg: "220px",
                                },
                              }}
                            >
                              <CardContent>
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    mb: "10px",
                                  }}
                                >
                                  {val.icon}
                                </Box>
                                <Typography variant="h5" component="div">
                                  {val.name}
                                </Typography>
                                <Typography
                                  sx={{ mb: 1.5 }}
                                  color="text.secondary"
                                >
                                  {val.description}
                                </Typography>
                              </CardContent>
                            </Card>
                          </Item>
                        </motion.div>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Item1>
              <Divider sx={{ mt: 8 }} />
            </Grid>
            <Grid xs={12}>
              <Item1 elevation={4} id="project">
                <Box mt={5}>
                  <SimpleSlider />
                </Box>
                <Divider sx={{ mt: 8 }} />
              </Item1>
            </Grid>
            <Grid xs={12}>
              <Item1 elevation={4} id="about">
                <About />
                <Divider sx={{ mt: 8 }} />
              </Item1>
            </Grid>
            <Grid xs={12}>
              <Item1 elevation={4} id="technology">
                <Technology />
              </Item1>
              <Divider sx={{ mt: 8 }} />
            </Grid>
            <Grid xs={12}>
              <Item1 elevation={4}>
                <Footer />
              </Item1>
            </Grid>
          </Grid>
          <SpeedDial1 />
          <VideoModal />
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
