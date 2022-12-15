import React from 'react';
import { Grid } from '@mui/material';

import useStyles from './styles';

export interface IPage {
  children: React.ReactNode;
  direction?: 'row' | 'column';
}

export const Page = ({ children, direction }: IPage) => {
  const classes = useStyles();

  return (
    <Grid container direction={direction} className={classes.root}>
      {children}
    </Grid>
  );
};

export default Page;
