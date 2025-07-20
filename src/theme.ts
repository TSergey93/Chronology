import { DefaultTheme } from 'styled-components';

export const enum Breakpoint {
  XXL = 1250,
  XL = 1000,
  L = 800,
  M = 600,
  S = 500,
  XS = 400,
}

const colors = {
  background: '#F0F0FA',
  white: '#FFFFFF',

  scheme: {
    primary: '#42567A',
    secondary: '#3877EE',
    tertiary: '#EF5DA8',
  },

  highlight: [
    'rgba(66, 86, 122, 0.5)',
    'rgba(66, 86, 122, 0.2)',
    'rgba(66, 86, 122, 0.1)',
  ],
};

const breakpoint = {
  xs: `@media (max-width: ${Breakpoint.XS}px)`,
  s: `@media (max-width: ${Breakpoint.S}px)`,
  m: `@media (max-width: ${Breakpoint.M}px)`,
  l: `@media (max-width: ${Breakpoint.L}px)`,
  xl: `@media (max-width: ${Breakpoint.XL}px)`,
  xxl: `@media (max-width: ${Breakpoint.XXL}px)`,
};

const theme: DefaultTheme = {
  colors,
  breakpoint,
  fontSizes: [14, 16, 20, 25, 56, 90, 120, 170, 200],
};

export default theme;
