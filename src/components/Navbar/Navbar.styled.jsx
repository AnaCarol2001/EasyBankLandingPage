import styled from "styled-components";
import {
  NEUTRAL_COLORS,
  PRIMARY_COLORS,
  gridContainerStyle,
} from "src/global-styles";

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
