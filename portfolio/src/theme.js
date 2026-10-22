import { createTheme } from '@mui/material/styles';

const fontStack = '"Inter Variable", "Inter", system-ui, -apple-system, "Segoe UI", sans-serif';
const displayStack = '"Space Grotesk Variable", "Space Grotesk", "Inter Variable", sans-serif';

export const getTheme = (mode) => {
  const dark = mode === 'dark';
  return createTheme({
    palette: {
      mode,
      primary: { main: dark ? '#8aa4ff' : '#2f4bff' },
      secondary: { main: dark ? '#c4b5fd' : '#7c5cff' },
      background: {
        default: dark ? '#0e0f12' : '#f6f3ee',
        paper: dark ? '#15171c' : '#fbf9f6',
      },
      text: {
        primary: dark ? '#f2f2f0' : '#101114',
        secondary: dark ? '#a1a4ad' : '#5b5e66',
      },
      divider: dark ? 'rgba(255,255,255,0.09)' : 'rgba(16,17,20,0.1)',
    },
    shape: { borderRadius: 10 },
    typography: {
      fontFamily: fontStack,
      h1: { fontFamily: displayStack, fontWeight: 600, letterSpacing: '-0.035em', lineHeight: 1.04 },
      h2: { fontFamily: displayStack, fontWeight: 600, letterSpacing: '-0.03em', lineHeight: 1.1 },
      h3: { fontFamily: displayStack, fontWeight: 600, letterSpacing: '-0.02em' },
      h4: { fontFamily: displayStack, fontWeight: 600, letterSpacing: '-0.02em' },
      h5: { fontFamily: displayStack, fontWeight: 600 },
      h6: { fontFamily: displayStack, fontWeight: 600 },
      button: { textTransform: 'none', fontWeight: 600, letterSpacing: 0 },
      overline: { letterSpacing: '0.16em', fontWeight: 600 },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: { scrollBehavior: 'smooth' },
          body: { transition: 'background-color .3s ease, color .3s ease' },
          '::selection': { background: dark ? '#8aa4ff55' : '#2f4bff33' },
          '@media (prefers-reduced-motion: reduce)': { html: { scrollBehavior: 'auto' } },
        },
      },
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: { root: { borderRadius: 999, padding: '10px 22px' } },
      },
      MuiPaper: { styleOverrides: { root: { backgroundImage: 'none' } } },
    },
  });
};
