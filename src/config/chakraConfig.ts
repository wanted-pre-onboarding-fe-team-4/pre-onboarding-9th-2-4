import { extendTheme } from '@chakra-ui/react';
import '@fontsource/noto-sans-kr';

export const theme = extendTheme({
  colors: {
    brand: {
      100: '#BEE3F8',
      200: '#90CDF4',
      300: '#63B3ED',
      400: '#4299E1',
      500: '#3182CE',
      600: '#2B6CB0',
      700: '#2C5282',
      800: '#2A4365',
      900: '#1A365D',
    },
  },
  fonts: {
    heading: 'noto-sans-kr',
    body: 'noto-sans-kr',
  },
});
