import PropTypes from "prop-types";
import Item from "./Item";
import styled from "styled-components";
import { FontSizes } from "src/global-styles";
import { ListStyleContext } from "./context";

const UlStyled = styled.ul`
  display: grid;
  padding: 0;
  font-size: ${FontSizes[200]};
  list-style: none;
  grid-template-columns: repeat(
    ${(props) => (props.$cols ? props.$cols : 1)},
    1fr
  );
`;

export default function Root({
  $gridCols,
  theme = "light",
  underlineEffect = false,
  children,
}) {
  return (
    <nav>
      <UlStyled $cols={$gridCols} theme={theme}>
        <ListStyleContext.Provider value={{ theme, underlineEffect }}>
          {children}
        </ListStyleContext.Provider>
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
