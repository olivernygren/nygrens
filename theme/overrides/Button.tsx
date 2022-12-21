export const MuiButtonOverride = {
  styleOverrides: {
    outlined: {
      borderRadius: 10,
      borderWidth: 1.5,
      borderColor: '#F05D5D',
      padding: '11px 22px',
      width: 'fit-content',
      transition: '200ms ease-in-out',
      '&:hover': {
        borderWidth: 1.5,
        borderColor: '#C64545',
        backgroundColor: 'transparent',
      },
      '& > span > div:nth-of-type(1)': {
        fontSize: '14px',
      },
    },
    text: {
      borderRadius: 10,
      padding: '11px 22px',
      width: 'fit-content',
      transition: '200ms ease-in-out',
      '&:hover': {
        backgroundColor: 'transparent',
        color: '#C64545',
      },
    },
    contained: {
      borderRadius: 10,
      padding: '11px 22px',
      width: 'fit-content',
      transition: '200ms ease-in-out',
      '&:hover': {
        backgroundColor: '#C64545',
        transform: 'scale(1.04)',
      },
    },
  },
  defaultProps: {
    disableElevation: true,
    disableRipple: true,
  },
};

export default MuiButtonOverride;
