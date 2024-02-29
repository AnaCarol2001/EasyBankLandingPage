import styled from "styled-components";
import {
  LINEAR_GRADIENTS,
  NEUTRAL_COLORS,
  PRIMARY_COLORS,
  gridContainerStyle,
} from "../../global-styles";

export const HeaderStyled = styled.header`
  ${gridContainerStyle}

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: ${NEUTRAL_COLORS.white};

  .wrapper {
    display: flex;
    padding-block: 1rem;
    justify-content: space-between;
    align-items: center;
  }
`;

export const NavStyled = styled.nav`
  @media (max-width: 768px) {
    position: absolute;
    top: 4.2rem;
    left: 0;
    right: 0;
    height: 100svh;
    margin-inline: auto;
    background-color: #00000054;
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

  li > a:is(:hover, :focus) {
    color: ${PRIMARY_COLORS.darkBlue};
  }

  li > a:is(:hover, :focus, :active)::after {
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

    li > a:is(:hover, :focus)::after {
      display: none;
    }
  }
`;

export const MenuBtnStyled = styled.button`
  border: none;
  background: transparent;
  display: grid;
  place-content: center;
  gap: 4px;
  aspect-ratio: 1/1;

  > div {
    width: 1.5rem;
    height: 1px;
    background-color: ${PRIMARY_COLORS.darkBlue};
    transition: transform 500ms ease-in-out, opacity 200ms ease-in-out;
  }

  &[title="Close"] > div:first-child {
    transform: translate3d(0, 5px, 0) rotate(-45deg);
  }
  &[title="Close"] > div:nth-child(2) {
    transform: translate3d(0, 5px, 0) rotate(-45deg);
    opacity: 0;
  }

  &[title="Close"] > div:last-child {
    transform: translate3d(0, -5px, 0) rotate(45deg);
  }
`;
