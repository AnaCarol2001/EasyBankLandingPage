import {
  LINEAR_GRADIENTS,
  NEUTRAL_COLORS,
  PRIMARY_COLORS,
} from "src/global-styles";
import styled from "styled-components";

export const NavStyled = styled.nav`
  @media (max-width: 768px) {
    position: fixed;
    inset: 4.2rem 0 0 0;
    margin-inline: auto;
    background: linear-gradient(${PRIMARY_COLORS.darkBlue}, rgba(0, 0, 0, 0.1));
  }
`;

export const NavUlStyled = styled.ul`
  /* @link https://utopia.fyi/space/calculator?c=320,8,1.2,1240,32,1.25,5,2,&s=,,s-l&g=s,l,xl,12 */
  --li-gap: clamp(0.5rem, -1.2191rem + 3.5768vi, 2rem);

  display: flex;
  align-items: center;
  gap: var(--li-gap);
  color: ${NEUTRAL_COLORS.grayBlue};

  li {
    padding: 0.5rem;
  }

  li > a {
    display: inline-block;
    text-decoration: none;
    position: relative;
  }

  li > a:is(:hover, :focus, [data-current="true"]) {
    color: ${PRIMARY_COLORS.darkBlue};
  }

  li > a:is(:hover, :focus, [data-current="true"])::after {
    content: "";
    display: inline-block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1.7rem;
    width: 100%;
    height: 3px;
    margin-inline: auto;
    background: ${LINEAR_GRADIENTS.greenBlue};
  }

  @media (max-width: 768px) {
    max-width: 90vw;
    margin-top: 1rem;
    margin-inline: auto;
    flex-direction: column;
    gap: unset;
    background-color: ${NEUTRAL_COLORS.white};
    padding-block: 1rem;
    border-radius: 0.3rem;
    color: ${PRIMARY_COLORS.darkBlue};

    li > a:is(:hover, :focus, [data-current="true"])::after {
      display: none;
    }
  }
`;
