import { gridContainerStyle } from "src/global-styles";
import bgMobile from "src/assets/images/bg-intro-mobile.svg";
import styled from "styled-components";

export const HeroSectionStyled = styled.section`
  grid-column: full-width !important;
  ${gridContainerStyle}

  grid-template-rows: 50dvh auto;
  padding-bottom: 4rem;
  place-items: end center;
  text-align: center;

  .hero__content {
    max-width: 47ch;

    h1,
    p {
      margin-bottom: 1.5rem;
    }
  }

  .hero__bg-img {
    grid-column: full-width;
    background: url(${bgMobile}) no-repeat;
    background-size: cover;
    width: 100%;

    img {
      margin-inline: auto;
    }
  }

  @media screen and (min-width: 1024px) {
    grid-template-rows: minmax(100%, 660px);
    margin-top: 3.5rem;
    padding-bottom: unset;
    text-align: left;
    align-content: center;
    place-items: center start;

    .hero__bg-img {
      grid-column: content-start / full-width-end;
      grid-row: 1/1;
      width: calc(100% - var(--max-content-width) / 2);
      margin-left: auto;
      background: unset;
      position: relative;
    }

    .hero__bg-img__desktop {
      position: absolute;
      overflow: hidden;
      width: 100%;
      height: 100%;
      inset: 0;
      z-index: -1;

      svg {
        transform: translate3d(-4rem, -15rem, 0);
      }
    }

    .hero__content {
      grid-row: 1 / 1;
      max-width: 47ch;
    }
  }

  @media screen and (min-width: 1440px) {
    .hero__bg-img {
      img {
        object-position: 10rem 2rem;
      }
    }

    .hero__bg-img__desktop {
      svg {
        transform: translate3d(-2rem, -10rem, 0);
      }
    }
  }
  @media screen and (min-width: 1535px) {
    .hero__bg-img {
      img {
        margin-inline: auto;
        object-position: 0rem 2rem;
      }
    }
  }
`;
