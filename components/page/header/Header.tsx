import React from 'react';
import { Box, Button, Grid } from '@mui/material';
import Image from 'next/image';

import useStyles from './styles';

export const Header = () => {
  const classes = useStyles();
  return (
    <Grid item container className={classes.root}>
      <Grid item container className={classes.wrapper}>
        <Grid item container className={classes.leftSideSection}>
          <Box className={classes.menuIconContainer}>
            <Image
              src="/images/nygrens-menu-icon.svg"
              alt="Menu"
              width="24"
              height="24"
            />
          </Box>
          <Image
            src="/images/nygrens-logo.svg"
            alt="Menu"
            width="200"
            height="46"
            className={classes.logo}
          />
        </Grid>
        <Button variant="contained">Kontakta oss</Button>
      </Grid>
    </Grid>
  );
};

export default Header;
