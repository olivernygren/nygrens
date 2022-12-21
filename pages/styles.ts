import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    container: {
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '30px 0 0 0',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      columnGap: 50,
      // backgroundColor: 'lightgrey',
    },
    contentContainer: {
      // maxWidth: 500,
      rowGap: 20,
      padding: '100px 0',
    },
    boldHeading: {
      marginBottom: 10,
      whiteSpace: 'nowrap',
    },
    shortText: {
      margin: '40px 0',
    },
    buttons: {
      display: 'flex',
      columnGap: 16,
    },
    image: {
      marginLeft: 'auto',
      alignSelf: 'end',
    },
    sectionTwo: {
      backgroundColor: '#E9E9E9',
      width: '100vw',
      height: 500,
    },
  })
);
