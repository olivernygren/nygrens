import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100vw',
      height: 80,
    },
    wrapper: {
      maxWidth: 1200,
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '0 auto',
      padding: '0 20px',
    },
    menuIconContainer: {
      height: 50,
      width: 50,
      borderRadius: 14,
      backgroundColor: '#F1F1F1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    },
    leftSideSection: {
      width: 'fit-content',
    },
    logo: {
      marginLeft: 36,
      marginTop: 5,
    },
  })
);
