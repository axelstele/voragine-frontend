import React from 'react';
import { Link, Typography } from '@material-ui/core';

const Footer = () => (
  <footer>
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.instagram.com/voragine.clothing/">
        Vorágine
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  </footer>

);

export default Footer;
