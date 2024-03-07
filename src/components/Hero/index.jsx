import styled from "styled-components";
import { ActionBtnStyled, gridContainerStyle } from "../../global-styles";
import mockups from "../../assets/images/image-mockups.png";
import bgDesktop from "../../assets/images/bg-intro-desktop.svg";
import bgMobile from "../../assets/images/bg-intro-mobile.svg";

export default function Hero() {
  return (
    <HeroSectionStyled id="hero">
      <div className="hero__bg-img" aria-hidden="true">
        <img src={mockups} />
      </div>
      <div className="hero__content">
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <div className="hero__call-action">
          <ActionBtnStyled>Request Invite</ActionBtnStyled>
        </div>
      </div>
    </HeroSectionStyled>
  );
}

const HeroSectionStyled = styled.section`
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
    min-height: 660px;
    margin-top: 5rem;
    padding-bottom: unset;
    text-align: left;
    align-content: center;
    place-items: center start;
    position: relative;

    .hero__bg-img {
      grid-column: content-start / full-width-end;
      grid-row: 1/1;
      width: calc(100% - var(--max-content-width) / 2);
      margin-left: auto;
      background: url(${bgDesktop}) no-repeat 0 65%;
    }

    .hero__content {
      grid-row: 1 / 1;
      max-width: 47ch;
    }
  }

  @media screen and (min-width: 1440px) {
    .hero__bg-img {
      background-position: no-repeat 0 75%;
      img {
        object-position: 10rem 2rem;
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
