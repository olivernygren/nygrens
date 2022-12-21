import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.common.white,
      display: 'flex',
      flex: 1,
      minHeight: '100vh',
      maxWidth: '1300px',
      margin: '0 auto',
      // padding: '80px 20px 0px 20px',
      oveflowX: 'hidden',
    },
  })
);
