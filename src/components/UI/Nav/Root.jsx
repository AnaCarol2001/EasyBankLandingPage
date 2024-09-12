import PropTypes from "prop-types";
import Item from "./Item";
import styled from "styled-components";
import { FontSizes, NEUTRAL_COLORS, PRIMARY_COLORS } from "src/global-styles";

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

const UlStyled = styled.ul`
  display: grid;
  padding: 0;
  font-size: ${FontSizes[200]};
  list-style: none;
  grid-template-columns: repeat(
    ${(props) => (props.$cols ? props.$cols : 1)},
    1fr
  );
  align-items: center;
  text-align: center;

  li {
    position: relative;
    color: ${(props) =>
      props.theme === "light" ? themes.light.color : themes.dark.color};

    &:hover,
    &:focus,
    & a[aria-current="page"] {
      color: ${(props) =>
        props.theme === "light"
          ? themes.light.hoverColor
          : themes.dark.hoverColor};
    }
  }

  &.underline a:is(:hover, :focus, [aria-current="page"])::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -1.2rem;
    right: 0;
    left: 0;
    background-color: ${PRIMARY_COLORS.limeGreen};
  }
`;

export default function Root({
  $gridCols,
  theme = "light",
  underlineEffect = false,
  children,
  ...props
}) {
  return (
    <nav {...props}>
      <UlStyled
        $cols={$gridCols}
        theme={theme}
        className={underlineEffect && "underline"}
      >
        {children}
      </UlStyled>
    </nav>
  );
}

Root.propTypes = {
  $gridCols: PropTypes.number,
  theme: PropTypes.string,
  underlineEffect: PropTypes.bool,
  children: PropTypes.arrayOf(Item),
};
