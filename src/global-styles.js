import { createGlobalStyle } from "styled-components";

// Clamp values calculated using https://utopia.fyi/space/calculator from width 375px to 1440px
export const FontSizes = {
  700: "clamp(2.1875rem, 1.8125rem + 1.875vi, 3.5rem);",
  600: "clamp(2rem, 1.868rem + 0.5634vi, 2.375rem);",
  500: "clamp(1.25rem, 1.206rem + 0.1878vi, 1.375rem);",
  400: "clamp(0.875rem, 0.787rem + 0.3756vi, 1.125rem);",
  300: "1rem;",
  200: "0.875rem;",
  100: "0.625rem",
};

export const PRIMARY_COLORS = {
  darkBlue: "hsl(233, 26%, 24%)",
  limeGreen: "hsl(136, 65%, 51%)",
  brightCyan: "hsl(192, 70%, 51%)",
};
export const NEUTRAL_COLORS = {
  grayBlue: "hsl(233, 8%, 62%)",
  lightGrayBlue: "hsl(220, 16%, 96%)",
  lightGray: "hsl(0, 0%, 98%)",
  white: "hsl(0, 0%, 100%)",
};

export const LINEAR_GRADIENTS = {
  greenBlue: `linear-gradient(90deg, ${PRIMARY_COLORS.brightCyan}, ${PRIMARY_COLORS.limeGreen}, ${PRIMARY_COLORS.brightCyan})`,
};

// Reset from https://piccalil.li/blog/a-more-modern-css-reset/
// Also some specific styling
const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    body, h1, h2, h3, h4, p, ul {
      margin: 0;
    }

    body {
      min-height: 100vh;
      line-height: 1.5;
      font-family: "Public Sans", sans-serif;
      font-weight: 400;
      background-color: ${NEUTRAL_COLORS.lightGray};
      color: ${NEUTRAL_COLORS.grayBlue};
    }

    h1, h2, h3,
    button{
      line-height: 1.1;
    }

    h1, h2,
    h3 {
      text-wrap: balance; 
    }


    a:not([class]) {
      color: currentColor;
    }

    img {
      max-width: 100%;
      display: block;
    }

    button {
      font: inherit;
      cursor: pointer;
    }

    :target {
    scroll-margin-block: 5ex;
    }

`;

export default GlobalStyle;
