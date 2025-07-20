import { css, createGlobalStyle } from 'styled-components';

import theme from './theme';

const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'PT Sans', sans-serif;
    font-weight: 400;
    line-height: 1.2;
    text-rendering: optimizeSpeed;
    font-smooth: always;
    -moz-osx-font-smoothing: grayscale;
    -moz-font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    color: ${theme.colors.scheme.primary};
    background: ${theme.colors.background};
  }
`;

const GlobalStyles = createGlobalStyle`${globalStyles}`;

export { GlobalStyles };
