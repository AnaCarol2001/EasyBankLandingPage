import PropTypes from "prop-types";
import { FontSizes, NEUTRAL_COLORS, PRIMARY_COLORS } from "src/global-styles";
import styled from "styled-components";
import { ListStyleContext } from "./context.js";
import { useContext } from "react";

const themes = {
  light: {
    color: NEUTRAL_COLORS.grayBlue,
    hoverColor: PRIMARY_COLORS.darkBlue,
  },
  dark: {
    color: NEUTRAL_COLORS.lightGrayBlue,
    hoverColor: PRIMARY_COLORS.limeGreen,
  },
};

const LinkStyled = styled.a`
  position: relative;
  display: inline-block;
  padding: 0.5rem;
  text-decoration: none;
  font-size: ${FontSizes[200]};

  color: ${(props) =>
    props.theme === "light" ? themes.light.color : themes.dark.color};
  &:hover,
  &:focus,
  &:active,
  &[aria-current="page"] {
    color: ${(props) =>
      props.theme === "light"
        ? themes.light.hoverColor
        : themes.dark.hoverColor};
  }

  &.underline:is(:hover, :focus, :active, [aria-current="page"])::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: ${PRIMARY_COLORS.limeGreen};
  }
`;

export default function Item({ children, path, ...props }) {
  const listStyle = useContext(ListStyleContext);

  return (
    <li>
      <LinkStyled
        href={path}
        {...props}
        theme={listStyle.theme}
        className={listStyle.underlineEffect ? "underline" : ""}
      >
        {children}
      </LinkStyled>
    </li>
  );
}

Item.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
};
