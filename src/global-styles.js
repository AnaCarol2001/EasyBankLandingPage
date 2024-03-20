import styled, { createGlobalStyle, css } from "styled-components";

// Colors
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


    ul {
      list-style: none;
      padding: 0;
    }


    body {
      min-height: 100vh;
      line-height: 1.5;
      font-family: "Public Sans", sans-serif;
      font-weight: 400;
      background-color: ${NEUTRAL_COLORS.lightGray};
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

    h1, h2, h3{
      color: ${PRIMARY_COLORS.darkBlue};
    }

    // Clamp values calculated using https://utopia.fyi/space/calculator from width 375px to 1440px
    h1{
      // 35px -> 56px (from 320px to 1440px)
      font-size: clamp(2.1875rem, 1.8125rem + 1.875vi, 3.5rem);
      font-weight: 400;
    }
    // 32px -> 38px
    h2{
      font-size: clamp(2rem, 1.868rem + 0.5634vi, 2.375rem);
      font-weight: 400;
    }
    // 20px -> 22px
    h3{
      font-size: clamp(1.25rem, 1.206rem + 0.1878vi, 1.375rem);
      font-weight: 400;
    }
    // 16px -> 18px
    p{
      font-size:clamp(0.875rem, 0.787rem + 0.3756vi, 1.125rem);
      font-weight: 400;
      color: ${NEUTRAL_COLORS.grayBlue};
    }
`;

export default GlobalStyle;

export const ActionBtnStyled = styled.button`
  font-size: 0.875rem;
  font-weight: 900;
  border: none;
  padding: 0.8rem 1.8rem;
  border-radius: 2em;
  background: ${LINEAR_GRADIENTS.greenBlue};
  background-size: 200%;
  background-position: right;
  color: white;
  transition: background-position linear 500ms;

  &:is(:hover, :focus) {
    background-position: left;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const gridContainerStyle = css`
  --max-content-width: 1035px;
  display: grid;
  grid-template-columns:
    [full-width-start] minmax(1rem, auto) [content-start] minmax(
      auto,
      var(--max-content-width)
    )
    [content-end] minmax(1rem, auto)
    [full-width-end];
  > * {
    grid-column: content;
  }
`;
