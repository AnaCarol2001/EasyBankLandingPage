import PropTypes from "prop-types";
import styled from "styled-components";
import { FontSizes } from "src/global-styles";

export default function Text({ children }) {
  return <PStyled>{children}</PStyled>;
}

const PStyled = styled.p`
  font-size: ${FontSizes[400]};
`;

Text.propTypes = {
  children: PropTypes.node,
};
