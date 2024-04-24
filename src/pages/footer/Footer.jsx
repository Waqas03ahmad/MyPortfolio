import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import { IconButton } from "@mui/joy";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

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
              <Link to={"https://mui.com/material-ui/react-grid2/"}>
                <IconButton size="sm" variant="plain" color="neutral">
                  <FaWhatsapp size={"25"} />
                </IconButton>
              </Link>
              <Link to={"https://mui.com/material-ui/react-grid2/"}>
                <IconButton size="sm" variant="plain" color="neutral">
                  <FaFacebook size={"25"} />
                </IconButton>
              </Link>
              <Link to={"https://mui.com/material-ui/react-grid2/"}>
                <IconButton size="sm" variant="plain" color="neutral">
                  <FaLinkedin size={"25"} />
                </IconButton>
              </Link>
              <Link to={"https://mui.com/material-ui/react-grid2/"}>
                <IconButton size="sm" variant="plain" color="neutral">
                  <FaTwitter size={"25"} />
                </IconButton>
              </Link>
            </Box>
          </Item>
        </Grid>
      </ItemGrid>
    </Box>
  );
};

export default Footer;
// import { makeStyles } from '@material-ui/core/styles';
// import { Typography, Link, Grid } from '@material-ui/core';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import InstagramIcon from '@material-ui/icons/Instagram';

// const useStyles = makeStyles((theme) => ({
//   footer: {
//     backgroundColor: '#f5f5f5',
//     padding: theme.spacing(3),
//     marginTop: 'auto',
//   },
//   socialIcon: {
//     marginRight: theme.spacing(1),
//     color: '#000',
//     textDecoration: 'none',
//   },
// }));

// const Footer = () => {
//   const classes = useStyles();

//   return (
//     <footer className={classes.footer}>
//       <Grid container spacing={2} justify="center" alignItems="center">
//         <Grid item xs={12} sm={6}>
//           <Typography variant="h6">
//             Quick Links
//           </Typography>
//           <nav>
//             <Link href="#home" color="textPrimary" variant="body1" underline="none">Home</Link><br />
//             <Link href="#about" color="textPrimary" variant="body1" underline="none">About</Link><br />
//             <Link href="#portfolio" color="textPrimary" variant="body1" underline="none">Portfolio</Link><br />
//             <Link href="#contact" color="textPrimary" variant="body1" underline="none">Contact</Link>
//           </nav>
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <Typography variant="h6">
//             Follow Me
//           </Typography>
//           <nav>
//             <Link href="#" className={classes.socialIcon}><FacebookIcon /></Link>
//             <Link href="#" className={classes.socialIcon}><TwitterIcon /></Link>
//             <Link href="#" className={classes.socialIcon}><LinkedInIcon /></Link>
//             <Link href="#" className={classes.socialIcon}><InstagramIcon /></Link>
//           </nav>
//         </Grid>
//       </Grid>
//       <Typography variant="body2" color="textSecondary" align="center">
//         &copy; {new Date().getFullYear()} Your Name. All rights reserved.
//       </Typography>
//     </footer>
//   );
// };

// export default Footer;
