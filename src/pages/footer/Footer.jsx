import React from 'react';
import { makeStyles } from '@mui/styles';
import { Typography, Link, Container } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  links: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Typography variant="h6" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body2" align="center">
          Email: <Link color="inherit" href="mailto:contact@example.com">contact@example.com</Link>
        </Typography>
        <Typography variant="body2" align="center" className={classes.links}>
          <Link color="inherit" href="/">Home</Link>
          <Link color="inherit" href="/about">About Us</Link>
          <Link color="inherit" href="/services">Our Services</Link>
          <Link color="inherit" href="/contact">Contact Us</Link>
        </Typography>
        <Typography variant="body2" align="center">
          <Link color="inherit" href="/privacy-policy">Privacy Policy</Link>{' '}
          |{' '}
          <Link color="inherit" href="/terms-conditions">Terms & Conditions</Link>
        </Typography>
        <Typography variant="body1" align="center" style={{ marginTop: '20px' }}>
          © {new Date().getFullYear()} Your Website Name. All Rights Reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
