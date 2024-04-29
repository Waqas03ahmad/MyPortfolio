import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/joy";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const ItemGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
}));

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ItemGrid container spacing={2}>
        <Grid xs={12} sm={6}>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              mt: 2,
              "& > button": { borderRadius: "2rem" },
              justifyContent: { xs: "center", sm: "start" },
            }}
          >
            <Item>
              <Typography variant="h5">SoftTech</Typography>
              <Typography>Details about me</Typography>
            </Item>
          </Box>
        </Grid>

        <Grid xs={12} sm={6}>
          <Item>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                mt: 2,
                "& > button": { borderRadius: "2rem" },
                justifyContent: { xs: "center", sm: "end" },
              }}
            >
              {[
                {
                  id: 1,
                  icon: <FaWhatsapp size={"25"} />,
                  link: "https://wa.me/03439826613",
                },
                {
                  id: 2,
                  icon: <FaFacebook size={"25"} />,
                  link: "https://www.facebook.com/TechSoftcompany",
                },
                {
                  id: 3,
                  icon: <FaLinkedin size={"25"} />,
                  link: "https://www.linkedin.com/in/waqas-ahmad-2080b6284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                },
                {
                  id: 5,
                  icon: <FaGithub size={"25"} />,
                  link: "https://github.com/Waqas03ahmad",
                },
              ].map((e) => (
                <Link to={e.link} key={e.id}>
                  <IconButton size="sm" variant="plain" color="neutral">
                    {e.icon}
                  </IconButton>
                </Link>
              ))}
            </Box>
          </Item>
        </Grid>
      </ItemGrid>
    </Box>
  );
};

export default Footer;
