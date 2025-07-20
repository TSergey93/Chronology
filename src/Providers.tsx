import { FC, ReactNode } from 'react';

import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './GlobalStyles';
import theme from './theme';

const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
};

export { Providers };
