import styled from "styled-components";
import {
  NEUTRAL_COLORS,
  PRIMARY_COLORS,
  gridContainerStyle,
} from "../../global-styles";

export const FooterContainerStyled = styled.div`
  ${gridContainerStyle}
  background-color: ${PRIMARY_COLORS.darkBlue};

  .wrapper {
    grid-column: content;
    display: grid;
    justify-items: center;
    gap: 1.5rem;
    padding-block: 2rem;
    color: ${NEUTRAL_COLORS.white};

    .footer__copyright p {
      font-size: 1rem;
    }

    .footer__action,
    .footer__copyright {
      justify-self: center;
    }

    @media screen and (min-width: 1024px) {
      grid-template-areas:
        "logo  links links . action"
        "social links links . copyright";
      align-items: center;
      justify-items: start;

      .footer__logo {
        grid-area: logo;
      }

      .footer__social {
        grid-area: social;
      }

      .footer__nav {
        width: 100%;
        height: 100%;
        grid-area: links;
      }

      .footer__action {
        grid-area: action;
      }

      .footer__copyright {
        grid-area: copyright;
      }

      .footer__action,
      .footer__copyright {
        justify-self: end;
      }
    }
  }
`;

export const SocialLinksUlStyled = styled.ul`
  display: flex;
  gap: 0.5rem;

  img {
    width: 1.56rem;
  }

  @media screen and (min-width: 1024px) {
    img {
      width: 1.25rem;
    }
  }
`;

export const FooterNavStyled = styled.ul`
  width: 100%;
  height: 100%;

  a {
    text-decoration: none;
    color: ${NEUTRAL_COLORS.white};
  }

  ul li {
    margin-bottom: 0.5rem;
    color: ${NEUTRAL_COLORS.grayBlue} !important;
    font-size: clamp(0.875rem, 1.0542rem + -0.2312vi, 1rem);
    text-align: center;

    :is(:hover, :focus, :active) {
      color: ${PRIMARY_COLORS.limeGreen};
    }
  }

  @media screen and (min-width: 1024px) {
    text-align: left;

    ul {
      height: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-content: space-between;

      li {
        margin-bottom: unset;
        text-align: left;
      }
    }
  }
`;

export const FooterAttributionContainer = styled.div`
  text-align: center;
  padding: 0.5rem 1rem;
  background-color: ${PRIMARY_COLORS.limeGreen};
  p {
    color: ${PRIMARY_COLORS.darkBlue};
  }
`;
