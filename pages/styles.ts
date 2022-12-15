import { createStyles, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    container: {
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '50px 0',
    },
    headingContainer: {
      maxWidth: 500,
    },
    boldHeading: {
      marginBottom: 10,
    },
    shortText: {
      margin: '40px 0',
    },
  })
);
