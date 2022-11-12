import { createTheme } from '@mui/material/styles';

// ------------------------------
// THEME's variables
// ------------------------------
export const colors = {
  darkBlue: '#000f30',
  lightBlue: '#defffd',
  lightBlue2: 'rgba(222, 255, 253, 0.7)',
  skyBlue: '#63d9ff',
  gray: '#aaa',
  lightGray: '#cacaca',
  MediumGray: '#70787e',
  disabledGray: '#96B0B7',
  red: '#ff0c5a',
};

// Defines the Font family
export const fonts = {
  baseFontSize: '14px',
  fontFamilySanSerif: `"Readex Pro", system-ui, -apple-system, "Segoe UI",
    Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Noto Color Emoji"`,
  fontFamilySerif: `SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace`,
};

const defaultSettings = {
  typography: {
    fontFamily: fonts.fontFamilySanSerif,
    caption: {
      fontSize: '0.75rem',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      xss: 480,
      sm: 600,
      smm: 768,
      md: 998,
      lg: 1200,
      xl: 1536,
    },
  },
};

export const darkTheme = createTheme({
  ...defaultSettings,
  palette: {
    mode: 'dark',
    primary: {
      main: colors.skyBlue,
    },
    text: {
      primary: colors.lightBlue,
      disabled: colors.disabledGray,
      secondary: colors.lightBlue2,
    },
    background: {
      paper: colors.darkBlue,
      default: colors.darkBlue,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          // backgroundColor: 'rgb(255, 255, 255, .14)',
        },
        root: {
          '.MuiContainer-root': {
            paddingLeft: 20,
          },
          '.css-1cndkqf-MuiToolbar-root': {
            minHeight: 48,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: 0,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          lineHeight: 1.43,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          borderRadius: '4px 4px 0 0',
          '&:hover': {
            color: 'primary.paper',
          },
          '&.Mui-selected': {
            backgroundColor: 'rgb(255, 255, 255, .14)',
            color: 'white',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        outlined: {
          '&.MuiInputLabel-outlined': {
            color: colors.inputPlaceHolder,
          },
          '&.Mui-focused': {
            color: colors.skyBlue,
          },
        },
      },
    },
  },
});

export const lightTheme = createTheme({
  ...defaultSettings,
  palette: {
    mode: 'light',
  },
});
