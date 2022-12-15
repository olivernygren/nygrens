import { ReactNode } from 'react';

import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
  Theme,
} from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// import { GreyColorConfig, PrimaryColorConfig } from './colors';
// import { MuiButtonOverride } from './overrides';

declare module '@mui/material/styles' {
  interface DefaultTheme extends Theme {}
}

interface InputColorConfig {
  white: string;
}

// declare module '@mui/material/styles/createPalette' {
//   interface Palette {
//     customPrimary: typeof PrimaryColorConfig;
//     customGrey: typeof GreyColorConfig;
//     tertiary: PaletteColorOptions;
//     input: InputColorConfig;
//   }
//   interface PaletteOptions {
//     customPrimary?: typeof PrimaryColorConfig;
//     customGrey?: typeof GreyColorConfig;
//     tertiary?: PaletteColorOptions;
//     input?: InputColorConfig;
//   }
// }

const FONT_PRIMARY = ['Outfit', 'sans-serif'].join(',');
export const FONT_SECONDARY = ['Inter', 'sans-serif'].join(',');

export let theme = createTheme({
  typography: {
    fontFamily: FONT_PRIMARY,
    h1: {
      fontWeight: 700,
      fontSize: 64,
      '@media (max-width:1024px)': {
        fontSize: 32,
      },
      color: '#303030',
    },
    h2: {
      fontWeight: 700,
      fontSize: 40,
      '@media (max-width:1024px)': {
        fontSize: 32,
      },
      color: '#303030',
    },
    h3: {
      fontWeight: 700,
      fontSize: 28,
      color: '#303030',
      marginBottom: 15,
    },
    h4: {
      fontSize: 24,
      fontWeight: 600,
      '@media (max-width:1024px)': {
        fontSize: 18,
      },
      color: '#303030',
    },
    h5: {
      fontSize: 18,
      fontWeight: 500,
      '@media (max-width:1024px)': {
        fontSize: 18,
      },
      marginBottom: 10,
      color: '#6F7074',
    },
    h6: {
      lineHeight: 1.5,
      fontSize: 20,
      '@media (max-width:1024px)': {
        fontSize: 18,
      },
      color: '#303030',
      fontFamily: FONT_SECONDARY,
    },
    body1: {
      fontFamily: FONT_SECONDARY,
      lineHeight: 1.75,
      fontWeight: 400,
      fontSize: 18,
      color: '#303030',
    },
    body2: {
      fontFamily: FONT_SECONDARY,
      fontSize: 18,
      fontWeight: 400,
      '@media (max-width:1024px)': {
        fontSize: 18,
      },
      color: '#303030',
    },
    subtitle1: {
      fontFamily: FONT_SECONDARY,
      fontWeight: 500,
      lineHeight: 1.3,
      fontSize: 18,
      color: '#303030',
    },
    subtitle2: {
      fontFamily: FONT_SECONDARY,
      fontWeight: 500,
      lineHeight: 1.3,
      fontSize: 18,
      color: '#303030',
    },
  },
  palette: {
    background: {
      default: '#FFFFFF',
    },
    text: {
      primary: '#303030',
      secondary: '#949598',
    },
    primary: {
      light: '#F28888',
      main: '#F05D5D',
      dark: '#DC3434',
    },
    secondary: {
      main: '#FAC130',
    },
    // tertiary: {
    //   main: '#C1F3E1',
    // },
    // input: {
    //   white: '#fff',
    // },
    // customPrimary: PrimaryColorConfig,
    // customGrey: GreyColorConfig,
  },
  // components: {
  //   MuiButton: MuiButtonOverride,
  // },
});

theme = responsiveFontSizes(theme);

type ThemeConfigProps = {
  children: ReactNode;
};

export const ThemeConfig = ({ children }: ThemeConfigProps) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
