import Box from "@mui/material/Box";
import { Avatar,  Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import AOS from "aos";
// import "aos/dist/aos.css";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
}));

const About = () => {
  //   useEffect(() => {
  //     AOS.init({ duration: 400 });
  //   }, []);
  const [expanded2, setExpanded2] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded2(isExpanded ? panel : false);
  };
  const [expanded1, setExpanded1] = useState(false);

  const handleChange1 = (panel) => (event, isExpanded) => {
    setExpanded1(isExpanded ? panel : false);
  };

  return (
    <>
      <Box marginTop={7}>
        <Box sx={{ width: "100%" }}>
          <Grid container spacing={3}>
            <Grid xs={12} data-aos="zoom-in-down">
              <Item>
                <Box
                  sx={{
                    display: "flex",
                    position: "relative",
                    justifyContent: "center",
                    width: "100%",
                    height: "30vh",
                    alignItems: "center",
                    backgroundImage: `url(https://res.cloudinary.com/dt6z3lqko/image/upload/v1713669248/aboutme_ktlebj.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust color and opacity here
                    }}
                  />
                  <Box
                    sx={{
                      position: "relative",
                      zIndex: 1,
                      textAlign: "center",
                      color: "white",
                      paddingTop: "50px",
                    }}
                  >
                    <Typography variant="h3">About Me</Typography>
                    <Typography variant="body1">
                      Wellcome, I am Waqas Ahmad FrontEnd developer with 1 years
                      of experience using React.js
                    </Typography>
                  </Box>
                </Box>
              </Item>
            </Grid>
            <Grid xs={12} sm={6} data-aos="zoom-in-right">
              <Item>
                <Card
                  sx={{
                    textAlign: "center",
                    alignItems: "center",
                    width: "auto",
                    // to make the demo resizable
                    overflow: "auto",
                    "--icon-size": "100px",
                  }}
                >
                  <CardOverflow variant="solid" color="primary">
                    <AspectRatio
                      variant="outlined"
                      color="primary"
                      ratio="1"
                      sx={{
                        m: "auto",
                        transform: "translateY(50%)",
                        borderRadius: "50%",
                        width: "var(--icon-size)",
                        boxShadow: "sm",
                        bgcolor: "background.surface",
                        position: "relative",
                      }}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src="https://res.cloudinary.com/dt6z3lqko/image/upload/v1713669246/waqas_x0ouxy.jpg"
                        sx={{ width: 56, height: 56 }}
                      />
                    </AspectRatio>
                  </CardOverflow>
                  <Typography
                    level="title-lg"
                    sx={{ mt: "calc(var(--icon-size) / 2)" }}
                  >
                    Waqas Ahmad
                  </Typography>
                  <Typography sx={{ opacity: "0.5", mt: "-10px" }} variant="h0">
                    Front-End Developer
                  </Typography>
                  <CardContent sx={{ maxWidth: "40ch" }}>
                    innovative, task-driven professional with 1 year of
                    experience in Front-End Development with react. I develop
                    user interface with React, Material UI and bootstrap...
                  </CardContent>
                  <div style={{ textAlign: "start", marginTop: "20px" }}>
                    <Accordion
                      expanded={expanded1 === "panel1"}
                      onChange={handleChange1("panel1")}
                      sx={{ backgroundColor: "transparent" }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      >
                        <Typography>React.js</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          I develope reusable UI components and manage state
                          efficiently, resulting in fast and responsive web
                          applications.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      expanded={expanded1 === "panel2"}
                      onChange={handleChange1("panel2")}
                      sx={{ backgroundColor: "transparent" }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                      >
                        <Typography>Material-UI</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Material-UI is a popular React component library that
                          implements Googles Material Design principles. It
                          provides pre-designed UI components such as buttons,
                          cards, and forms, enabling developers to create
                          visually appealing and consistent interfaces.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      expanded={expanded1 === "panel3"}
                      onChange={handleChange1("panel3")}
                      sx={{ backgroundColor: "transparent" }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                      >
                        <Typography>Bootstrap</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Bootstrap is a frontend framework for building
                          responsive and mobile-first websites. It offers a set
                          of CSS and JavaScript components that simplify the
                          process of designing and styling web pages.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      expanded={expanded1 === "panel4"}
                      onChange={handleChange1("panel4")}
                      sx={{ backgroundColor: "transparent" }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                      >
                        <Typography>Jawascript</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          JavaScript is a programming language that enables
                          interactive and dynamic behavior on web pages. It
                          allows for actions such as user input validation, DOM
                          manipulation, and asynchronous communication with
                          servers.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </Card>
              </Item>
            </Grid>
            <Grid
              xs={12}
              sm={6}
              marginTop={{ xs: "15px", sm: "0px" }}
              data-aos="zoom-in-left"
            >
              <Item>
                <Card
                  sx={{
                    textAlign: "center",
                    alignItems: "center",
                    width: "auto",
                    // to make the demo resizable
                    overflow: "auto",
                    "--icon-size": "100px",
                  }}
                >
                  <CardOverflow variant="solid" color="primary">
                    <AspectRatio
                      variant="outlined"
                      color="primary"
                      ratio="1"
                      sx={{
                        m: "auto",
                        transform: "translateY(50%)",
                        borderRadius: "50%",
                        width: "var(--icon-size)",
                        boxShadow: "sm",
                        bgcolor: "background.surface",
                        position: "relative",
                      }}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src="https://res.cloudinary.com/dt6z3lqko/image/upload/v1713669248/hero4_aldzeq.jpg"
                        sx={{ width: 56, height: 56 }}
                      />
                    </AspectRatio>
                  </CardOverflow>
                  <Typography
                    level="title-lg"
                    sx={{ mt: "calc(var(--icon-size) / 2)" }}
                  >
                    Waqas Ahmad
                  </Typography>
                  <Typography sx={{ opacity: "0.5", mt: "-10px" }} variant="h0">
                    Front-End Developer
                  </Typography>
                  <CardContent sx={{ maxWidth: "40ch" }}>
                    Lets make your business scale up, make your client happy and
                    develope your projects UI with professional frontEnd
                    developer. Iet me work for you creatively.
                  </CardContent>
                  <div style={{ textAlign: "start", marginTop: "20px" }}>
                    <Accordion
                      expanded={expanded2 === "panel1"}
                      onChange={handleChange("panel1")}
                      sx={{ backgroundColor: "transparent" }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      >
                        <Typography>ChatGPT</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          ChatGPT is an AI model developed by OpenAI for natural
                          language processing tasks. It can be integrated into
                          web applications to generate human-like text
                          responses, provide recommendations, or assist users
                          with tasks.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      expanded={expanded2 === "panel2"}
                      onChange={handleChange("panel2")}
                      sx={{ backgroundColor: "transparent" }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                      >
                        <Typography>Node Package Manager NPM</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          npm is a package manager for JavaScript that allows
                          developers to install, manage, and share reusable code
                          packages. It is commonly used in web development
                          projects to integrate third-party libraries and tools.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      expanded={expanded2 === "panel3"}
                      onChange={handleChange("panel3")}
                      sx={{ backgroundColor: "transparent" }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                      >
                        <Typography>Python (InLearningPhase)</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Python is a versatile programming language known for
                          its simplicity and readability. It is often used in
                          web development for backend logic, data processing,
                          and scripting tasks.
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion
                      expanded={expanded2 === "panel4"}
                      onChange={handleChange("panel4")}
                      sx={{ backgroundColor: "transparent" }}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                      >
                        <Typography>Prompt Engineering</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography>
                          Furthermore, prompt engineering plays a vital role in
                          tailoring user experiences and generating meaningful
                          content, ensuring engagement and satisfaction
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </Card>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
export default About;
