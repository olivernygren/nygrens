import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100vw',
      height: 100,
    },
    wrapper: {
      maxWidth: 1300,
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '0 auto',
      // padding: '0 20px',
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
      transition: `200ms ease-in-out`,
      '&:hover': {
        transform: 'scale(1.08)',
      },
    },
    leftSideSection: {
      width: 'fit-content',
    },
    logo: {
      marginLeft: 40,
      marginTop: 5,
    },
    mainButton: {
      backgroundColor: '#F1F1F1',
      color: theme.palette.text.primary,
      '&:hover': {
        backgroundColor: '#E9E9E9',
      },
    },
  })
);
