import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      white: string;
      scheme: {
        primary: string;
        secondary: string;
        tertiary: string;
      };
      highlight: string[];
    };
    breakpoint: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
    };
    fontSizes: number[];
  }
}
