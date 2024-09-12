import { PRIMARY_COLORS } from "src/global-styles";
import styled from "styled-components";

const HamburgerBtn = styled.button`
  border: none;
  width: 2.5rem;
  padding: 0.3rem;
  aspect-ratio: 1;
  background-color: transparent;

  > span {
    /*https://webaim.org/techniques/css/invisiblecontent/*/
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  .bar {
    width: 100%;
    height: 2px;
    background-color: ${PRIMARY_COLORS.darkBlue};
    border-radius: 2px;
    transition-property: transform, rotate, opacity;
    transition-duration: 500ms, 500ms, 400ms;
    transition-timing-function: ease-in-out;
  }

  .bar:first-of-type {
    transform: translate3d(0, -5px, 0);
  }

  .bar:last-of-type {
    transform: translate3d(0, 5px, 0);
  }

  &[aria-expanded="true"] .bar:first-of-type {
    rotate: 45deg;
    transform: translate3d(3px, 0, 0);
  }

  &[aria-expanded="true"] .bar:last-of-type {
    rotate: -45deg;
    transform: translate3d(3px, 0, 0);
  }

  &[aria-expanded="true"] .bar:nth-child(3) {
    opacity: 0;
  }
`;

export default function Hamburger({ ...props }) {
  return (
    <HamburgerBtn type="button" {...props}>
      <span>Menu</span>
      <div className="bar" aria-hidden="true"></div>
      <div className="bar" aria-hidden="true"></div>
      <div className="bar" aria-hidden="true"></div>
    </HamburgerBtn>
  );
}
